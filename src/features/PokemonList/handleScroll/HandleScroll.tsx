import { useCallback, useContext, useEffect } from 'react';
import { IPokemonDatas } from '@/src/interfaces/pokemon';
import axios from 'axios';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';

const HandleScroll = () => {
  let offset = 1;
  const { dispatch } = useContext(PokemonContext);

  const loadMorePokemon = useCallback(async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
    const response = await fetch(URL);
    const pokemonsData = await response.json();

    const pokemons_URL_Array = pokemonsData.results.map(
      (poke: { name: string }) =>
        `https://pokeapi.co/api/v2/pokemon/${poke.name}/`
    );

    const promisesArray = pokemons_URL_Array.map((link: string) =>
      axios.get(link)
    );

    Promise.all(promisesArray).then((values) => {
      dispatch({
        type: 'renderPokemons',
        payload: {
          currentState: values as IPokemonDatas[],
          oldState: [] as IPokemonDatas[],
        },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    offset += 30;
  }, []);

  const handlePokemonScroll = useCallback(
    (e: Event) => {
      const targetWindow: Document = e.target as Document;
      const { documentElement } = targetWindow;
      const { scrollTop, scrollHeight } = documentElement;
      if (window.innerHeight + scrollTop + 1 >= scrollHeight) loadMorePokemon();
    },
    [loadMorePokemon]
  );

  useEffect(() => {
    loadMorePokemon();
    window.addEventListener('scroll', handlePokemonScroll);
    return () => window.removeEventListener('scroll', handlePokemonScroll);
  }, [handlePokemonScroll, loadMorePokemon]);
};

export default HandleScroll;
