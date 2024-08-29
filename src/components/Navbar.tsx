import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"; 
import { useTheme } from "next-themes"
import SvgLogo from "./svgLogo";

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <SvgLogo width="32" height="32" color={`${theme === 'dark' ? 'FFFFFF' : '000000'}`}/>
        <span className="font-bold text-lg">Gnovistar</span>
      </Link>
      <nav className="ml-auto flex items-center">
        <div className="hidden sm:flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <SignedOut>
            <SignInButton>
              <Button className="font-bold">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ModeToggle />
        </div>
        
        <div className="sm:hidden flex items-center gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="p-2">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-center">
              <DropdownMenuItem asChild>
                <Link href="#features">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light Mode
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark Mode
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SignedOut>
            <SignInButton>
              <Button className="font-bold">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
