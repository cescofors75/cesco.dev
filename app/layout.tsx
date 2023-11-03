import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francesc Fors Ferrer',
  description: 'Personal Portfolio',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>{children}</body>
    </html>
  )
}
