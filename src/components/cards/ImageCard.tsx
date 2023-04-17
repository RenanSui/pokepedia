import { mergeClass } from '@/src/utils/mergeClass';
import { cva, VariantProps } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

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
	extends ImageProps,
		VariantProps<typeof ImageCardVariants> {
	className: string;
	src: string;
	alt: string;
	setImageLoaded?: Dispatch<SetStateAction<boolean>>;
}

const ImageCard: FC<ImageCardProps> = ({
	className,
	size,
	src,
	alt,
	draggable,
	...props
}) => {
	return (
		<Image
			alt={alt}
			src={src}
			width={220}
			height={220}
			draggable={draggable}
			className={mergeClass(ImageCardVariants({ size, className }))}
			{...props}
		/>
	);
};

export { ImageCard, ImageCardVariants };
