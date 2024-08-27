import Link from "next/link"
import { BookOpen } from "lucide-react"
import { ModeToggle } from "@/components/modeToggle"
export default function Navbar() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">Gnovistar</span>
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
    </>
  )
}