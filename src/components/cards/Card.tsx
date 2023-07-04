import { cva } from 'class-variance-authority'
import { FC, HTMLAttributes, JSX } from 'react'

const CardVariants = cva(
  `relative cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl`,
  {
    variants: {
      variant: {
        default: 'text-zinc-300',
      },
      size: {
        default: 'h-[250px] w-[250px]',
        large: 'text-5xl md:text-7xl tracking-tight',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl"
    >
      {children}
    </div>
  )
}

export { Card, CardVariants }
