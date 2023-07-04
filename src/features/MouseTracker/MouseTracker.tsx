'use client'
import { useEffect, useRef, useState } from 'react'

const MouseTracker = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const HandleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY })

      if (refContainer.current) {
        const { x, y } = mousePos
        refContainer.current.animate(
          { left: `${x}px`, top: `${y}px` },
          { duration: 4000, fill: 'forwards' },
        )
      }
    }

    window.addEventListener('mousemove', HandleMouseMove)

    return () => {
      window.removeEventListener('mousemove', HandleMouseMove)
    }
  })

  return (
    <div
      className="pointer-events-none fixed -left-1/2 -top-1/2 z-[-3] aspect-[1] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b0383832] blur-sm transition-all duration-300"
      ref={refContainer}
    />
  )
}

// 51px
// bg-[#b0383818]
export { MouseTracker }
