import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GnoVistar",
  description: "Your AI-Powered Knowledge Hub. Organize, analyze, and synthesize information with ease. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html className="scroll-smooth" lang="en">
        <body className={poppins.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
              >
              {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
