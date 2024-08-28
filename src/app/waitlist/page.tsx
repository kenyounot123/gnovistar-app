import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import Link from 'next/link'

function Waitlist() {
  return (
    <Card className="h-screen p-2 flex gap-2 flex-col items-center justify-center bg-background">
      
      <h1 className='text-xl font-bold'>You're on the waitlist!</h1>
      <div>You'll be notified when our app, Gnovistar, will be fully released.</div>
      <Link href="/"><Button className='font-bold'>Go Back</Button></Link>
    </Card>
  )
}

export default Waitlist