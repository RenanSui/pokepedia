import { mergeClass } from '@/src/utils/mergeClass';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
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

interface ImageCardProps extends VariantProps<typeof ImageCardVariants> {
	className: string;
	src: string;
	alt: string;
}

const ImageCard: FC<ImageCardProps> = ({ className, size, src, alt }) => {
	return (
		<Image
			alt={alt}
			src={src}
			width={1024}
			height={1024}
			className={mergeClass(ImageCardVariants({ size, className }))}
		/>
	);
};

export { ImageCard, ImageCardVariants };
