import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import * as React from 'react'

export default function PokemonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[calc(100vh)] flex-col">
      <SiteHeader fullWidth />
      <main className="flex-1">{children}</main>
      <SiteFooter fullWidth />
    </div>
  )
}
