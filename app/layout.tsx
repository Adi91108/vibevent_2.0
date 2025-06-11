import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import { Poppins } from 'next/font/google'
import { Providers } from "./providers"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"


//my Chnage
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
})



//end
// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EventEasee - Event Management Made Simple",
  description: "Professional event planning and management tool",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo5.png"></link>
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
