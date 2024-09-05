import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PricingCardProps {
  title: string,
  price: string,
  description: string,
  features: string[],
  buttonText: string,
  highlighted?: boolean,
  link?: string,
  checkout?: boolean,
}

export default function PricingCard({ title, price, description, features, buttonText, highlighted = false, link, checkout }: PricingCardProps) {
  const handleCheckout = async () => {
    if (!checkout) {
      return
    }
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ plan: title})
    });
    if (!response.ok) {
      console.error('Failed to create checkout session');
      return;
    }
    const { id: sessionId } = await response.json();
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId });
    }
  };

  return (
    <Card className={`flex flex-col ${highlighted ? 'border-primary shadow-lg scale-105' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="text-4xl font-bold">
          {price}<span className="text-sm font-normal text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        {link ? (
          <Link href={link} className="w-full">
            <Button className={`w-full ${highlighted ? 'bg-primary ':'bg-accent'}`} variant={highlighted ? "default" : "outline"}>
              {buttonText}
            </Button>
          </Link>
        ): (
          <Button className={`w-full ${highlighted ? 'bg-primary ':'bg-accent'}`} variant={highlighted ? "default" : "outline"}
          onClick={handleCheckout}>
            {buttonText}
          </Button>
        )}
        
      </CardFooter>
    </Card>
  )
}