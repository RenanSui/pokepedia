import { Providers } from '@/components/providers/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import * as React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Pokédex',
  description: 'Simple and Elegant Pokédex App',
  icons: {
    icon: 'Assets/Images/favicon.ico',
    shortcut: 'Assets/Images/favicon.ico',
    apple: 'Assets/Images/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'Assets/Images/apple-touch-icon.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-background">
        <Providers>{children}</Providers>
        <TailwindIndicator />
      </body>
    </html>
  )
}
