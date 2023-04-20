import BlurCard from '@/src/components/cards/BlurCard';
import { CardCircle } from '@/src/components/cards/CardCircle';
import { ImageCard } from '@/src/components/cards/ImageCard';
import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { FC } from 'react';
import { Pokemon } from './PokemonCard';

interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	Pokemon: Pokemon;
}

const PokemonImage: FC<CardImageProps> = ({ children, Pokemon }) => {
	const SpriteUrl = Pokemon
		? Pokemon.sprites.other['official-artwork'].front_default
		: '';

	const PokemonTypes = Pokemon
		? Pokemon?.types.map((item) => item.type.name)
		: [''];

	return (
		<>
			<>
				{PokemonTypes.map((type, index) => (
					<CardCircle
						position={index as 0 | 1 | 2 | 3}
						className={`bg-poke${CapitalizeFirstLetter(type)}`}
						key={type}
					/>
				))}
			</>
			<BlurCard />
			<ImageCard
				src={SpriteUrl}
				alt={Pokemon.name}
				className="z-10"
				draggable={false}
			/>
			{children}
		</>
	);
};

export default PokemonImage;
