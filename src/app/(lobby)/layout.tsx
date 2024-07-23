import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import * as React from 'react'

export default function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100vh)] flex-col">
      {/* <div className="grainy-noise absolute left-1/2 top-1/2 min-h-screen w-full -translate-x-1/2 -translate-y-1/2" /> */}
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
