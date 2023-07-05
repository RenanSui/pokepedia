'use client'
import { useEffect, useRef, useState } from 'react'

const SiteBackground = () => {
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
		<>
			<div className="fixed z-[-1] h-full w-full scale-110 bg-[#00000048] backdrop-blur-3xl" />
			<div className="fixed bottom-[50%] left-[50%] z-[-2] aspect-square w-[1000px] rounded-full border-[200px] border-[#75785fde]" />
			<div className="fixed right-[45%] top-[45%] z-[-2] aspect-square w-[1200px] rounded-full border-[350px] border-[#405a77cc]" />
			<div
				className="pointer-events-none fixed -left-1/2 -top-1/2 z-[-3] aspect-[1] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b0383832] blur-sm transition-all duration-300"
				ref={refContainer}
			/>
		</>
	)
}

export { SiteBackground }
