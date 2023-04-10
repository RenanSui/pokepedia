import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface IconComponentProps {
	icon: IconProp;
	className?: string;
}

const Icon: FC<IconComponentProps> = ({ icon, className, ...props }) => {
	return (
		<FontAwesomeIcon
			icon={icon}
			className={`h-5 w-5 cursor-pointer text-zinc-700 transition-all duration-500 ${className}`}
			{...props}
		/>
	);
};

export default Icon;
