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

interface IPokemon {
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
	const { data: pokemon, isFetching } = useQuery({
		queryKey: [url],
		queryFn: async () => {
			const { data } = await axios.get<IPokemon>(url);
			return data;
		},
	});

	const sprite_url = pokemon
		? pokemon.sprites.other['official-artwork'].front_default
		: '';
	const types = pokemon ? pokemon?.types.map((item) => item.type.name) : [''];

	pokemon && console.log(types);
	pokemon && console.log(sprite_url);

	return (
		<article {...props} className="mt-8 w-[250px]">
			{isFetching && <CardSkeleton key={url} />}
			{pokemon && (
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
							alt={pokemon ? pokemon.name : 'bulbasaur'}
							className="z-10"
						/>
					</Card>
					<div className="mx-1 mt-1 flex justify-between">
						<Heading className={`${playfair.className}`}>
							<span className="font-sans">#{pokemon?.id}</span>
							{' - '}
							{CapitalizeFirstLetter(pokemon.name)}
						</Heading>
						<Icon icon={faHeart} className=" hover:text-red-300" />
					</div>
					<div className="mx-1 mt-1 flex items-center justify-start gap-1">
						{types.map((type, index) => (
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

{
	/* <article {...props} className="mt-8 w-[250px]">
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
						alt={pokemon ? pokemon.name : 'bulbasaur'}
						className="z-10"
					/>
				</Card>
				<div className="mx-1 mt-1 flex justify-between">
					<Heading className={`${playfair.className}`}>
						<span className="font-sans">#{pokemon?.id}</span>
						{' - '}
						{CapitalizeFirstLetter(pokemon.name)}
					</Heading>
					<Icon icon={faHeart} className=" hover:text-red-300" />
				</div>
				<div className="mx-1 mt-1 flex items-center justify-start gap-1">
					{types.map((type, index) => (
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
			</article> */
}

// const PokemonCard: FC<PokemonCardProps> = ({ url, ...props }) => {
// 	const [pokemon, setPokemon] = useState<IPokemon>();
// 	const default_URL =
// 		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
// 	const sprite_url = pokemon
// 		? pokemon.sprites?.other['official-artwork'].front_default
// 		: default_URL;

// 	console.log(pokemon?.types.map((item) => item.type.name));

// 	useEffect(() => {
// 		const getPokemon = async () => {
// 			const data = await axios.get(url);
// 			data.data && setPokemon(data.data);
// 		};
// 		getPokemon();
// 	}, [url]);

// 	return pokemon ? (
// 		<article {...props} className="mt-8 w-[250px]">
// 			<Card>
// 				<CardCircle position={'top_right'} className="bg-[#4A7E65]" />
// 				<CardCircle position={'top_left'} className="bg-[#7e4a4a]" />
// 				<BlurCard />
// 				<ImageCard
// 					src={sprite_url}
// 					alt={pokemon ? pokemon.name : 'bulbasaur'}
// 					className="z-10"
// 				/>
// 			</Card>
// 			<div className="mx-1 mt-1 flex justify-between">
// 				<Heading className={`${playfair.className}`}>
// 					<span className="font-sans">#{pokemon?.id}</span>
// 					{' - '}
// 					{CapitalizeFirstLetter(pokemon?.name)}
// 				</Heading>
// 				<Icon icon={faHeart} className=" hover:text-red-300" />
// 			</div>
// 			<div className="mx-1 mt-1 flex items-center justify-start gap-1">
// 				<Paragraph
// 					pill
// 					size={'xs'}
// 					className="border-[#4A7E65] hover:bg-[#4a7e6538]"
// 				>
// 					Grass
// 				</Paragraph>
// 			</div>
// 		</article>
// 	) : (
// 		<></>
// 	);
// };

// export default PokemonCard;
