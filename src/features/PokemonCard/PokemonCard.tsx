import CardSkeleton from '@/src/components/skeletons/CardSkeleton';
import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { Images } from './Images';
import { Infos } from './Infos';
import { Pills } from './Pills';
import { Pokemon } from './types';

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	url: string;
	name: string;
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
					<Images Pokemon={Pokemon} />
					<Infos Pokemon={Pokemon} />
					<Pills Pokemon={Pokemon} />
				</>
			)}
		</article>
	);
};

export default PokemonCard;
