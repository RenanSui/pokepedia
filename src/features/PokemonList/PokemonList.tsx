import { PokemonCard } from '@/src/components/cards';
import { FC } from 'react';

interface PokemonListProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const PokemonList: FC<PokemonListProps> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={`flex items-center justify-center gap-6 ${className}`}
		>
			<PokemonCard />
		</section>
	);
};

export default PokemonList;
