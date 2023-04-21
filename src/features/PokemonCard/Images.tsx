import { Card } from '@/src/components/cards/Card';
import { CardBlur } from '@/src/components/cards/CardBlur';
import { CardCircle } from '@/src/components/cards/CardCircle';
import { CardImage } from '@/src/components/cards/CardImage';
import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { FC } from 'react';
import { Pokemon } from './types';

interface ImagesProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	Pokemon: Pokemon;
}

export const Images: FC<ImagesProps> = ({ Pokemon }) => {
	const SpriteUrl = Pokemon
		? Pokemon.sprites.other['official-artwork'].front_default
		: '';

	const PokemonTypes = Pokemon
		? Pokemon?.types.map((item) => item.type.name)
		: [''];

	return (
		<Card>
			<>
				{PokemonTypes.map((type, index) => (
					<CardCircle
						position={index as 0 | 1 | 2 | 3}
						className={`bg-poke${CapitalizeFirstLetter(type)}`}
						key={type}
					/>
				))}
			</>
			<CardBlur />
			<CardImage
				src={SpriteUrl}
				alt={Pokemon.name}
				className="z-10"
				draggable={false}
			/>
		</Card>
	);
};
