'use client'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import * as React from 'react'

interface PokemonLayoutProps {
  defaultLayout: number[] | undefined
  children?: React.ReactNode
  sidePanel?: React.ReactNode
}

export function PokemonLayout({
  defaultLayout = [265, 440],
  children,
  sidePanel,
}: PokemonLayoutProps) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel defaultSize={defaultLayout[0]} minSize={60}>
        {children}
      </ResizablePanel>
      <ResizableHandle className="hidden lg:flex" withHandle />
      <ResizablePanel
        className="hidden lg:block"
        defaultSize={defaultLayout[1]}
        minSize={30}
      >
        {sidePanel}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
