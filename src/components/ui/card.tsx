import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

const CardCircleVariants = cva(
	'transition-all duration-300 absolute h-[200px] w-[200px] rounded-full',
	{
		variants: {
			square: {
				default: '',
				0: '-top-[45%] -right-[45%]',
				1: '-top-[45%] -left-[45%]',
				2: '-bottom-[45%] -right-[45%]',
				3: '-bottom-[45%] -left-[45%]',
			},
			circle: {
				default: '',
				0: 'top-[50%] -right-[5%] -translate-y-[50%]',
				1: 'top-[50%] -left-[5%] -translate-y-[50%]',
				2: '-bottom-[5%] -right-[5%]',
				3: '-bottom-[5%] -left-[5%]',
			},
		},
		defaultVariants: {
			square: 'default',
			circle: 'default',
		},
	},
)

interface CardCircleProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof CardCircleVariants> {}

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<section ref={ref} className={cn('', className)} {...props} />
	),
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('', className)} {...props} />
	),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<h3
			ref={ref}
			className={cn(
				'text-lg font-semibold leading-none tracking-tight',
				className,
			)}
			{...props}
		/>
	),
)
CardTitle.displayName = 'CardTitle'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('', className)} {...props} />
	),
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('', className)} {...props} />
	),
)
CardFooter.displayName = 'CardFooter'

const CardCircle = forwardRef<HTMLDivElement, CardCircleProps>(
	({ className, square, circle, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(CardCircleVariants({ square, circle, className }))}
			{...props}
		/>
	),
)
CardCircle.displayName = 'CardCircle'

export { Card, CardCircle, CardContent, CardFooter, CardHeader, CardTitle }
