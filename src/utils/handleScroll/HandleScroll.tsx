import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import axios from 'axios';

type scrollProps = Dispatch<SetStateAction<object[] | undefined>>;

const HandleScroll = (setScrollPokemonList: scrollProps) => {
  let offset = 0;

  const loadMorePokemon = useCallback(async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    const response = await fetch(URL);
    const pokemonsData = await response.json();

    const promisesArray = pokemonsData.results.map((poke: { url: string }) =>
      axios.get(poke.url)
    );
    Promise.all(promisesArray).then((values) => {
      console.log(values);
      setScrollPokemonList((oldPokemon) => [...(oldPokemon ?? []), ...values]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    offset += 10;
  }, []);

  const scrollPokemon = useCallback(
    (e: Event) => {
      const targetWindow: Document = e.target as Document;
      const { documentElement } = targetWindow;
      const { scrollTop, scrollHeight } = documentElement;
      if (window.innerHeight + scrollTop + 1 >= scrollHeight) loadMorePokemon();
    },
    [loadMorePokemon]
  );

  useEffect(() => {
    window.addEventListener('scroll', scrollPokemon);
    return () => window.removeEventListener('scroll', scrollPokemon);
  }, [scrollPokemon, loadMorePokemon]);
};

export default HandleScroll;
