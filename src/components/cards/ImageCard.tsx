import { mergeClass } from '@/src/utils/mergeClass';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const ImageCardVariants = cva(
	'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover',
	{
		variants: {
			size: {
				default: 'h-[220px] w-[220px]',
				sm: 'h-[110px] w-[110px]',
				lg: 'h-[440px] w-[440px]',
				xl: 'h-[550px] w-[550px]',
			},
		},
		defaultVariants: {
			size: 'default',
		},
	}
);

interface ImageCardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof ImageCardVariants> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const ImageCard: FC<ImageCardProps> = ({
	children,
	className,
	size,
	...props
}) => {
	return (
		<div
			className={mergeClass(ImageCardVariants({ size, className }))}
			{...props}
		>
			{children}
		</div>
	);
};

export { ImageCard, ImageCardVariants };
