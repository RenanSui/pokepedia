import { mergeClass } from '@/utils/mergeClass'
import { cva, VariantProps } from 'class-variance-authority'
import { FC, HTMLAttributes, JSX } from 'react'

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
    VariantProps<typeof CardCircleVariants> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const CardCircle: FC<CardCircleProps> = ({
  children,
  className,
  square,
  circle,
  ...props
}) => {
  return (
    <div
      className={mergeClass(CardCircleVariants({ square, circle, className }))}
      {...props}
    >
      {children}
    </div>
  )
}

export { CardCircle, CardCircleVariants }
