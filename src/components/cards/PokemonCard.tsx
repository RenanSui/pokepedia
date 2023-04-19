import {
	HandleFavorite,
	getLocalStorage,
} from '@/src/features/PokemonList/HandleFavorite';
import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Playfair_Display } from 'next/font/google';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Icon } from '../Icons';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import CardSkeleton from '../skeletons/CardSkeleton';
import BlurCard from './BlurCard';
import Card from './Card';
import { CardCircle } from './CardCircle';
import { ImageCard } from './ImageCard';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	subsets: ['latin'],
});

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	url: string;
}

interface Pokemon {
	name: string;
	id: number;
	types: [
		{
			type: {
				name: string;
			};
		}
	];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

const PokemonCard: FC<PokemonCardProps> = ({ url, ...props }) => {
	const [active, setActive] = useState(false);
	const { data: Pokemon, isFetching } = useQuery<Pokemon>({
		queryKey: [url],
		queryFn: async () => {
			const { data } = await axios.get(url);
			return data;
		},
		refetchOnWindowFocus: false,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

	const sprite_url = Pokemon
		? Pokemon.sprites.other['official-artwork'].front_default
		: '';

	const PokemonTypes = Pokemon
		? Pokemon?.types.map((item) => item.type.name)
		: [''];

	const isIdFavorited = getLocalStorage()
		.map((Favorite) => Favorite.id)
		.includes(Pokemon ? Pokemon.id : 0);

	return (
		<article {...props} className="mt-4 w-[250px]">
			{isFetching && <CardSkeleton key={url} />}

			{Pokemon && (
				<>
					<Card>
						<>
							{PokemonTypes.map((type, index) => (
								<CardCircle
									position={index as 0 | 1 | 2 | 3}
									className={`
									bg-poke${CapitalizeFirstLetter(type)}Darken
									`}
									key={type}
								/>
							))}
						</>
						<BlurCard />
						<ImageCard
							src={sprite_url}
							alt={Pokemon.name}
							className="z-10"
							draggable={false}
						/>
					</Card>

					<div className="mx-1 mt-1 flex justify-between">
						<Heading className={`${playfair.className}`}>
							<span
								className={`font-sans transition-all duration-300 ${
									isIdFavorited ? 'text-red-500' : ''
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

					<div className="mx-1 mt-1 flex items-center justify-start gap-1">
						{PokemonTypes.map((type, index) => (
							<Paragraph
								key={index}
								pill
								size={'xs'}
								className={`
								border-poke${CapitalizeFirstLetter(type)}Darken hover:bg-[#0f0f0f38]`}
							>
								{type}
							</Paragraph>
						))}
					</div>
				</>
			)}
		</article>
	);
};

export default PokemonCard;
