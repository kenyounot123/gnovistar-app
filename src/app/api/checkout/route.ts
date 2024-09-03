import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true
})

type Plan = 'Basic' | 'Pro';

export async function POST(req: NextRequest) {
  const url = req.nextUrl;
  const origin = `${url.protocol}//${url.host}`; 
  
  try {
    const { plan }: {plan: Plan} = await req.json()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            recurring: { interval: 'month' },
            product_data: {
              name: `${plan} Plan`,
            },
            unit_amount: plan === 'Basic' ? 499 : 999, // Price in cents
          },
          quantity: 1,
        }
      ],
      mode: 'subscription',
      success_url:`${origin}/`,
      cancel_url: `${origin}/`
    });
    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error("Stripe Error:", error.message || error);
    return NextResponse.json(error, {
      status: 400,
    });
  }
}