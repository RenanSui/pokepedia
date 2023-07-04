import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface IconComponentProps extends FontAwesomeIconProps {
  icon: IconProp
  className?: string
}

const Icon: FC<IconComponentProps> = ({ icon, className, ...props }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      {...props}
      className={`h-5 w-5 cursor-pointer  transition-all duration-500 ${className}`}
    />
  )
}

export { Icon }
