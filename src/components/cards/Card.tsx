import { FC } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Card: FC<CardProps> = ({ children, ...props }) => {
	return (
		<div
			{...props}
			className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl"
		>
			{children}
		</div>
	);
};

export default Card;
