import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/firebase";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "@clerk/nextjs/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: '2024-06-20'})
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
export async function POST(req: NextRequest) {
  const { userId } = getAuth(req)
  const body = await req.text();
  const signature = headers().get('stripe-signature')
  let data;
  let event: Stripe.Event;
  if (!signature) {
    return NextResponse.json("Missing stripe-signature", { status: 400 });
  }
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch(error) {
    console.log('Webhook signature verification failed: ', error)
    return NextResponse.json({err: error}, { status: 400})
  }
  let eventType = event.type
  data = event.data as Stripe.Event.Data

  switch (eventType) {
    case 'checkout.session.completed': {
      // handle successful checkout 
      // get the user from checkout session and then update their plan to 
      // the plan they paid for , 
      const session = event.data.object as Stripe.Checkout.Session
      const sessionId = session.id
      const fullSession = await stripe.checkout.sessions.retrieve(
        sessionId,
        {
          expand: ['line_items']
        }
      )
      const lineItems = fullSession.line_items?.data
      const planPurchased = lineItems?.[0]?.description as string
      const customerId = session.customer as string;

      if (userId) {
        // get the user from firebase and update its fields
        const docRef = doc(db, `users/${userId}`)
        const userDoc = await getDoc(docRef)
        if (!userDoc.exists()) {
          throw new Error('Book does not exist!');
        }
        await updateDoc(docRef, {
          subscription: planPurchased.split(" ")[0],
          customerId: customerId,
        })
      } else {
        return NextResponse.json({error: "User not found"}, { status: 404})
      }
      break

    }
    case 'customer.subscription.deleted': {
      break
    }
  }
  return NextResponse.json({received: true}, {status: 200})


}