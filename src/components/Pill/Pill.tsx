import { mergeClass } from '@/utils/mergeClass'
import { cva, VariantProps } from 'class-variance-authority'
// eslint-disable-next-line camelcase
import { Playfair_Display } from 'next/font/google'
import { FC, HTMLAttributes, JSX } from 'react'

const playfair = Playfair_Display({
  variable: '--playfair-font',
  subsets: ['latin'],
})

const PillsVariants = cva('tracking-widest font-semibold', {
  variants: {
    variant: {
      default: 'text-zinc-300',
    },
    pill: {
      true: 'px-4 py-[3px] cursor-pointer rounded-full border',
    },
    size: {
      default: 'text-normal',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface PillsProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof PillsVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const Pill: FC<PillsProps> = ({
  children,
  className,
  size,
  variant,
  pill,
  ...props
}) => {
  return (
    <p
      {...props}
      className={`${mergeClass(
        PillsVariants({ variant, size, pill, className }),
      )} ${playfair.className}`}
    >
      {children}
    </p>
  )
}

export { Pill, PillsVariants }
