'use client';
import { PokemonCard } from '@/src/components/cards';
import CardSkeleton from '@/src/components/skeletons/CardSkeleton';
import axios from 'axios';
import { FC } from 'react';
import { useInfiniteQuery } from 'react-query';
import { HandleScroll } from './HandleScroll';

interface PokemonListProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

export interface PokemonResult {
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

const PokemonList: FC<PokemonListProps> = ({ className, ...props }) => {
	const LoadingArray = ArrayMaker(20);

	const fetchInfinitePokemons = async ({
		pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
	}) => {
		const { data } = await axios.get<PokemonResult>(`${pageParam}`);
		return data;
	};

	const {
		data: PokemonList,
		isFetching,
		fetchNextPage,
	} = useInfiniteQuery({
		queryKey: ['PokemonList'],
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
			{PokemonList &&
				PokemonList.pages.map((PokePage) =>
					PokePage.results.map((result) => (
						<PokemonCard url={result.url} key={result.name} />
					))
				)}

			{isFetching &&
				LoadingArray.map((index) => <CardSkeleton key={index} />)}
		</section>
	);
};

export default PokemonList;

export const ArrayMaker = (quantity: number) => {
	const array = [];
	for (let i = 0; i < quantity; i++) array.push(i);
	return array;
};
