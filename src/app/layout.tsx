import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'Awesome products to the best price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
