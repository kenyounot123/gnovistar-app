import Link from "next/link"
import { BookOpen, FileText, Brain, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modeToggle"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">GinoVistar</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <ModeToggle/>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none text-black dark:text-white">
                  A powerful platform for <span className="text-primary">PDF annotation, collaboration, and AI-driven insights</span>
                </h1>
                <p className="mx-auto text-gray-700 md:text-xl dark:text-muted-foreground">
                  Streamline your document workflow with intuitive tools and smart features.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  {/* link to sign up with clerk */}
                  <Link href="/dashboard">Get Started</Link>
                </Button>
                <Button variant="outline" className="dark:hover:bg-slate-700">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
              <div className="w-[1400px] h-[700px] bg-primary rounded shadow-lg"></div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center border-2 h-[400px] rounded">
                <FileText className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Interactive PDF Viewer</h3>
                <p className="text-muted-foreground">Highlight, annotate, and comment on your PDFs with ease.</p>
              </div>
              <div className="flex flex-col items-center text-center border-2 h-[400px] rounded">
                <Brain className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Summarization</h3>
                <p className="text-muted-foreground">Get quick insights with AI-generated summaries of your documents.</p>
              </div>
              <div className="flex flex-col items-center text-center border-2 h-[400px] rounded">
                <Lock className="h-12 w-12 mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Batch PDF Upload</h3>
                <p className="text-muted-foreground">Easily upload and organize multiple PDFs at once, streamlining your document management.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-background shadow-black dark:shadow-white shadow-lg rounded-lg transition-transform ease-in-out delay-75 duration-300 hover:-translate-y-5">
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
                    Basic PDF viewing
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
                    Limited storage
                  </li>
                </ul>
                <Button className="mt-auto">Sign Up</Button>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg shadow-black dark:shadow-white rounded-lg border-2 border-primary transition-transform ease-in-out delay-75 duration-300 hover:-translate-y-5">
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
                    Full PDF annotation
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
                    AI summarization
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
                    Unlimited storage
                  </li>
                </ul>
                <Button className="mt-auto">Choose Pro</Button>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg shadow-black dark:shadow-white rounded-lg transition-transform ease-in-out delay-75 duration-300 hover:-translate-y-5">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-4xl font-bold mb-6">Custom</p>
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
                    All Pro features
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
                    Priority support
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
                    Custom integrations
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12">About GinoVistar</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-center mb-12">
              GinoVistar is a powerful document management app that allows users to annotate, take notes, and collaborate on PDFs, while leveraging AI to generate summaries and key insights, making it the ultimate tool for enhancing productivity and document workflow.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/signup">Join Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 GinoVistar. All rights reserved.</p>
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