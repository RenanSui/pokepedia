import CardSkeleton from '@/src/components/skeletons/CardSkeleton';
import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
import PokemonImage from './PokemonImage';
import PokemonInfo from './PokemonInfo';
import PokemonPills from './PokemonPills';

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	url: string;
	name: string;
}

export interface Pokemon {
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

const PokemonCard: FC<PokemonCardProps> = ({ url, name, ...props }) => {
	const { data: Pokemon, isFetching } = useQuery<Pokemon>({
		queryKey: [name],
		queryFn: async () => {
			const { data } = await axios.get(url);
			return data;
		},
		refetchOnWindowFocus: false,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	});

	return (
		<article {...props} className="mt-4 w-[250px]">
			{isFetching && <CardSkeleton key={url} />}

			{Pokemon && (
				<>
					<div className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl">
						<PokemonImage Pokemon={Pokemon} />
					</div>
					<PokemonInfo Pokemon={Pokemon} />
					<PokemonPills Pokemon={Pokemon} />
				</>
			)}
		</article>
	);
};

export default PokemonCard;
