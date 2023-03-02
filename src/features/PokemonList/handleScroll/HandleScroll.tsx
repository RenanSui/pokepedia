import { useCallback, useContext, useEffect } from 'react';
import { IPokemonDatas } from '@/src/interfaces/interfaces';
import axios from 'axios';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';

const HandleScroll = () => {
  const { dispatch } = useContext(PokemonContext);
  let offset = 1;

  const loadMorePokemon = useCallback(async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offset}`;
    const response = await fetch(URL);
    const pokemonsData = await response.json();
    const promisesArray = pokemonsData.results.map((poke: { url: string }) =>
      axios.get(poke.url)
    );
    Promise.all(promisesArray).then((values) => {
      console.log(values);
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
