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
      <body className='bg-black min-h-screen'>
        <p className='text-center font-light bg-white p-1'>Welcome to my Pokédex</p>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
