import { mergeClass } from '@/src/utils/mergeClass';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const CardCircleVariants = cva(
	'transition-all duration-300 absolute h-[200px] w-[200px] rounded-full',
	{
		variants: {
			position: {
				top_right: '-top-[25%] -right-[25%]',
				top_left: '-top-[25%] -left-[25%]',
				bottom_right: '-bottom-[25%] -right-[25%]',
				bottom_left: '-bottom-[25%] -left-[25%]',
			},
		},
		defaultVariants: {
			position: 'top_right',
		},
	}
);

interface CardCircleProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof CardCircleVariants> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const CardCircle: FC<CardCircleProps> = ({
	children,
	className,
	position,
	...props
}) => {
	return (
		<div
			className={mergeClass(CardCircleVariants({ position, className }))}
			{...props}
		>
			{children}
		</div>
	);
};

export { CardCircle, CardCircleVariants };
