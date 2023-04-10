import { mergeClass } from '@/src/utils/mergeClass';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';

const headingVariants = cva(
	'transition-all duration-300 tracking-widest cursor-default',
	{
		variants: {
			variant: {
				default: 'text-zinc-300',
			},
			size: {
				default: 'text-base',
			},
		},

		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

interface HeadingProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof headingVariants> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
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
			className={mergeClass(
				headingVariants({ variant, size, className })
			)}
		>
			{children}
		</h1>
	);
};

export default Heading;
