import { Icon } from '@/src/components/Icons';
import Heading from '@/src/components/heading/Heading';
import {
	Favorites,
	HandleFavorite,
} from '@/src/features/PokemonList/HandleFavorite';
import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { getLocalStorage } from '@/src/utils/LocalStorage/getLocalStorage';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Playfair_Display } from 'next/font/google';
import { FC, useState } from 'react';
import { Pokemon } from './PokemonCard';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	subsets: ['latin'],
});

interface CardInfoProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	Pokemon: Pokemon;
}

const PokemonInfo: FC<CardInfoProps> = ({ Pokemon }) => {
	const [active, setActive] = useState(false);

	const isIdFavorited = getLocalStorage<Favorites[]>('PokedexFavorites')
		.map((Favorite) => Favorite.id)
		.includes(Pokemon ? Pokemon.id : 0);

	return (
		<div className="mx-1 mt-1 flex justify-between">
			<Heading className={`${playfair.className}`}>
				<span
					className={`font-sans transition-all duration-300 ${
						isIdFavorited ? 'text-red-300' : ''
					}`}
				>
					#{Pokemon.id}
				</span>
				{' - '}
				{CapitalizeFirstLetter(Pokemon.name)}
			</Heading>

			<Icon
				icon={faHeart}
				className={`${
					isIdFavorited
						? 'text-red-500 hover:text-red-900'
						: 'text-zinc-500 hover:text-red-300'
				}`}
				onClick={() => {
					HandleFavorite(Pokemon.name, Pokemon.id);
					setActive(!active);
				}}
			/>
		</div>
	);
};

export default PokemonInfo;
