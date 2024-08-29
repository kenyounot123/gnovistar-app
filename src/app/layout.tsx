import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import {
  ClerkProvider,
} from '@clerk/nextjs'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GnoVistar",
  description: "A Note-Taking App with Advanced PDF Handling & AI-Powered Features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} scroll-smooth`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
              >
              {children}
              <Analytics/>
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
