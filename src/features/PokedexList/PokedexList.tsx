'use client';
import CardSkeleton from '@/src/components/skeletons/CardSkeleton';
import { ArrayMaker } from '@/src/utils/ArrayMaker';
import axios from 'axios';
import { FC } from 'react';
import { useInfiniteQuery } from 'react-query';
import PokemonCard from '../PokemonCard/PokemonCard';
import { HandleScroll } from './HandleScroll';

interface PokedexListProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

export interface PokedexResult {
	count: number;
	next: string;
	previous: string;
	results: [
		{
			name: string;
			url: string;
		}
	];
}

const PokedexList: FC<PokedexListProps> = ({ className, ...props }) => {
	const LoadingArray = ArrayMaker(20);

	const fetchInfinitePokemons = async ({
		pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
	}) => {
		const { data } = await axios.get<PokedexResult>(`${pageParam}`);
		return data;
	};

	const {
		data: PokedexList,
		isFetching,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: ['PokedexList'],
		queryFn: fetchInfinitePokemons,
		refetchOnWindowFocus: false,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		getNextPageParam: (lastPage) => lastPage.next,
	});

	HandleScroll(fetchNextPage);

	return (
		<section
			{...props}
			className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
		>
			<h1 className="hidden">Pokemon List</h1>

			{isFetching &&
				LoadingArray.map((index) => <CardSkeleton key={index} />)}

			{PokedexList &&
				PokedexList.pages.map((PokePage) =>
					PokePage.results.map((result) => (
						<PokemonCard
							name={result.name}
							url={result.url}
							key={result.name}
						/>
					))
				)}
		</section>
	);
};

export default PokedexList;
