import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

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

export const useFetchPokedex = () => {
	const fetchInfinitePokemons = async ({
		pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
	}) => {
		const { data } = await axios.get<PokedexResult>(`${pageParam}`);
		return data;
	};

	return useInfiniteQuery({
		queryKey: ['PokedexList'],
		queryFn: fetchInfinitePokemons,
		refetchOnWindowFocus: false,
		staleTime: 30 * 24 * 60 * 60 * 1000, // 30 days
		getNextPageParam: (lastPage) => lastPage.next,
	});
};
