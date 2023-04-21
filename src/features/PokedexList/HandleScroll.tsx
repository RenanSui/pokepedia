import { useCallback, useEffect } from 'react';
import { InfiniteQueryObserverResult } from 'react-query/types/core/types';
import { PokedexResult } from './PokedexList';

type FetchNextPage = () => Promise<
	InfiniteQueryObserverResult<PokedexResult, unknown>
>;

export const HandleScroll = (fetchNextPage: FetchNextPage) => {
	const loadMorePokemon = useCallback(() => fetchNextPage(), [fetchNextPage]);

	const handlePokemonScroll = useCallback(
		(e: Event) => {
			const targetWindow = e.target as Document;
			const { documentElement } = targetWindow;
			const { scrollTop, scrollHeight } = documentElement;
			if (window.innerHeight + scrollTop + 150 >= scrollHeight)
				loadMorePokemon();
		},
		[loadMorePokemon]
	);

	useEffect(() => {
		window.addEventListener('scroll', handlePokemonScroll);
		return () => window.removeEventListener('scroll', handlePokemonScroll);
	}, [handlePokemonScroll]);
};
