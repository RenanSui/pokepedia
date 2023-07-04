import { cn } from '@/lib/utils'
import { forwardRef, HTMLAttributes } from 'react'

const Blur = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'absolute bottom-0 left-0 right-0 top-0 backdrop-blur-[64px]',
        className,
      )}
      {...props}
    />
  ),
)
Blur.displayName = 'Blur'

export { Blur }
