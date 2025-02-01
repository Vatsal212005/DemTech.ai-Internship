import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { NavBar } from "./components/nav-bar"
import type React from "react"
import { ToastProvider } from "./components/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mailing Scheduler",
  description: "Schedule and manage your mailing campaigns",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background bg-[url('/grid.png')] bg-repeat`}>
        <Providers>
          <NavBar />
          <main className="container mx-auto p-4 mt-8">{children}</main>
        </Providers>
        <ToastProvider />
      </body>
    </html>
  )
}

