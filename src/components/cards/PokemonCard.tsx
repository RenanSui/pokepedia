import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';
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

	return (
		<article {...props} className="mt-4 w-[250px]">
			{isFetching && <CardSkeleton key={url} />}

			{Pokemon && (
				<>
					<Card>
						<CardCircle
							position={'top_right'}
							className="bg-[#4A7E65]"
						/>
						<CardCircle
							position={'top_left'}
							className="bg-[#7e4a4a]"
						/>
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
							<span className="font-sans">#{Pokemon.id}</span>
							{' - '}
							{CapitalizeFirstLetter(Pokemon.name)}
						</Heading>
						<Icon icon={faHeart} className=" hover:text-red-300" />
					</div>

					<div className="mx-1 mt-1 flex items-center justify-start gap-1">
						{PokemonTypes.map((type, index) => (
							<Paragraph
								key={index}
								pill
								size={'xs'}
								className="border-[#4A7E65] hover:bg-[#4a7e6538]"
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
