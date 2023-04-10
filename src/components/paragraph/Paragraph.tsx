import { mergeClass } from '@/src/utils/mergeClass';
import { cva, VariantProps } from 'class-variance-authority';
import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	subsets: ['latin'],
});

const paragraphVariants = cva('tracking-widest', {
	variants: {
		variant: {
			default: 'text-zinc-300',
		},
		pill: {
			true: 'px-3 py-[2px] cursor-pointer rounded-full border',
		},
		size: {
			default: 'text-sm',
			xs: 'text-xs',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

interface ParagraphProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof paragraphVariants> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Paragraph: FC<ParagraphProps> = ({
	children,
	className,
	size,
	variant,
	pill,
	...props
}) => {
	return (
		<p
			{...props}
			className={`${mergeClass(
				paragraphVariants({ variant, size, pill, className })
			)} ${playfair.className}`}
		>
			{children}
		</p>
	);
};

export default Paragraph;
