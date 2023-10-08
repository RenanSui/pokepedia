import { ReactQueryProvider } from '@/components/react-query-provider'
import { SiteBackground } from '@/components/site-background'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ReactNode } from 'react'
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#1F2628]">
        <ReactQueryProvider>
          <SiteBackground />
          {children}
          <TailwindIndicator />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
