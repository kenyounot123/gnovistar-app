'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BgGradientSection from "@/components/BgGradientSection"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import Image from "next/image"
import { SignInButton, SignedOut } from "@clerk/nextjs"
import { FileStack, Bot, PenTool } from "lucide-react"
import Navbar from "@/components/Navbar"
import { useUser } from '@clerk/clerk-react'
export default function LandingPage() {
  const { isSignedIn, user, isLoaded } = useUser()
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full md:pt-20">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <div className="overflow-hidden w-full">
                <MacbookScroll
                  title={
                    <>
                      <div className="-mt-24 text-3xl sm:text-4xl md:mt-0 md:text-5xl lg:text-6xl/none text-black dark:text-white">
                        A powerful platform for <span className="text-primary">PDF annotation, collaboration, and AI-driven insights</span>
                      </div>
                    </>
                  }
                  src={`/pdf.png`}
                  showGradient={false}
                  cta={
                    <>
                      <Link href={"/dashboard"}>
                        <Button className="font-bold mb-10">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex justify-center items-center py-5 gap-5">
            <div className="self-start flex-col flex gap-10 px-5">
              <div className="p-5 rounded-full w-min bg-primary">
                <FileStack size={64} className="text-accent"/>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-5"> Organize with 'Books'</h1>
                <p className="max-w-[500px]">Start by creating a ‘Book’. Enter a title and description, and let the AI recommend articles from Google Scholar and blogs to jumpstart your collection.</p>
              </div>
            </div>
            <div className="bg-[#5C5C5C] p-5 self-start">
              <Image src="/multiplePdfs.png" width={500} height={300} alt={"GnoVistar PDF"}/>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 gap-5 flex-row-reverse">
            <div className="self-start flex-col flex gap-10 px-5">
              <div className="p-5 rounded-full w-min bg-primary">
                <PenTool size={64} className="text-accent"/>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-5">Engage with PDFs</h1>
                <p className="max-w-[500px]">Upload PDFs based on AI suggestions, and make them your own by highlighting, adding notes, and commenting directly on the documents.</p>
              </div>
            </div>
            <div className="bg-[#5C5C5C] p-5 self-start">
              <Image src="/multiplePdfs.png" width={500} height={300} alt={"GnoVistar PDF"}/>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 gap-5">
            <div className="self-start flex-col flex gap-10 px-5">
              <div className="p-5 rounded-full w-min bg-primary">
              <Bot size={64} className="text-accent" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-5">AI-Genearted Summaries</h1>
                <p className="max-w-[500px]">Automatically receive summaries and key insights from your PDFs, helping you understand and manage your documents more effectively.</p>
              </div>
            </div>
            <div className="bg-[#5C5C5C] p-5 self-start">
              <Image src="/multiplePdfs.png" width={500} height={300} alt={"GnoVistar PDF"}/>
            </div>
          </div>
        </section>
        <section id="features" className="w-full min-h-[800px] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {/* how it works and then next section is key features maybe no about section as well and add footer */}
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BgGradientSection title={'Interactive Pdf Viewer'} content={'Highlight, annotate, and comment on your PDFs with ease.'} img={'FileText'}/>
              <BgGradientSection title={'AI-Powered Summarization'} content={'Get quick insights with AI-generated summaries of your documents.'} img={'Brain'}/>
              <BgGradientSection title={'Batch PDF Collection'} content={'Quickly upload and organize PDFs into your Books for easy access and AI insights.'} img={'Folder'}/>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">Simple pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-background dark:shadow-white shadow-lg rounded-lg border-t-8 border-primary">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-4xl font-bold mb-6">$0<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic PDF viewing and annotation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic AI Summarization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1 Book Limit
                  </li>
                </ul>
                <Button className="mt-auto font-bold">Sign Up</Button>
              </div>
              <div className="flex flex-col p-6 bg-background dark:shadow-white shadow-lg rounded-lg border-t-8 border-primary">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-6">$4.99<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic PDF viewing and annotation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced AI Summarization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    3 Book Limit
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AI Suggestions and links to articles
                  </li>
                </ul>
                <Button className="mt-auto font-bold">Choose Basic</Button>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg dark:shadow-white rounded-lg border-t-8 border-primary">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-6">$9.99<span className="text-base font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic PDF viewing and annotation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced AI Summarization
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    10 Book Limit
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AI Suggestions and links to articles
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Youtube videos
                  </li>
                </ul>
                <Button className="mt-auto font-bold">Choose Pro</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">Gnovistar Waitlist</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-center mb-12">
              Gnovistar is a powerful document management app that allows users to annotate, take notes, and collaborate on PDFs, while leveraging AI to generate summaries and key insights, making it the ultimate tool for enhancing productivity and document workflow.
            </p>
            <div className="flex justify-center">
              <div className="flex gap-5">
                {isSignedIn ? (
                  <>
                    <p className="text-2xl border-2 p-5 bg-secondary rounded">You are already on the waitlist!</p>
                  </>
                ) : (
                  <>
                    <SignedOut>
                      <SignInButton>
                        <Button className="font-bold">
                          Sign up now
                        </Button>
                      </SignInButton>
                    </SignedOut>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Gnovistar. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}