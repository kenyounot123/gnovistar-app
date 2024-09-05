import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
export async function POST(req: Request) {
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
      const session = event.data.object as Stripe.Checkout.Session
      const sessionId = session.id
      const fullSession = await stripe.checkout.sessions.retrieve(
        sessionId,
        {
          expand: ['line_items']
        }
      )

      const customerId = session.customer as string;
      const customer = await stripe.customers.retrieve(customerId) 
      console.log(fullSession)
      console.log(customerId)
      console.log(customer)

      break

    }
    case 'customer.subscription.deleted': {
      break
    }
  }
  return NextResponse.json({received: true}, {status: 200})


}