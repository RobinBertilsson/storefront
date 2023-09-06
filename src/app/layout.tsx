import { Header } from '@/components/Header/Header'
import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'Awesome products to the best price',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="max-w-7xl mx-auto px-6 sm:px-8">{children}</main>
      </body>
    </html>
  )
}
