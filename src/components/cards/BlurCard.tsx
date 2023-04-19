import { FC } from 'react';

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const BlurCard: FC<BlurCardProps> = ({ className, ...props }) => {
	return (
		<div
			{...props}
			className={`absolute bottom-0 left-0 right-0 top-0 backdrop-blur-[64px] ${className}`}
		/>
	);
};

export default BlurCard;
