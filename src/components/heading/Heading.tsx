import { mergeClass } from '@/utils/mergeClass'
import { VariantProps, cva } from 'class-variance-authority'
// eslint-disable-next-line camelcase
import { Playfair_Display } from 'next/font/google'
import { FC, HTMLAttributes, JSX } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

const playfair = Playfair_Display({
  variable: '--playfair-font',
  subsets: ['latin'],
})

const HeadingVariants = cva(
  `transition-all duration-300 tracking-widest cursor-default ${playfair.className}`,
  {
    variants: {
      variant: {
        default: 'text-zinc-300',
      },
      size: {
        default: 'text-base',
        large: 'text-5xl md:text-7xl tracking-tight',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface HeadingProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HeadingVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const Heading: FC<HeadingProps> = ({
  children,
  className,
  size,
  variant,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={mergeClass(HeadingVariants({ variant, size, className }))}
    >
      {children}
    </h1>
  )
}

export { Heading }
