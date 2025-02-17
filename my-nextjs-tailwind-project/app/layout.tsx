import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>TechRent - Premium Laptop Rentals for IT Students</title>
        <meta name="description" content="Affordable laptop rentals with comprehensive IT support for students" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

