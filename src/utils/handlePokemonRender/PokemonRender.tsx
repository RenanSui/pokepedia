import { PokemonCard, PokemonCardScroll } from '@/src/components/card';
import { HandleScroll } from '@/src/utils/handleScroll';
import { useState } from 'react';

const PokemonRender = ({ pokemonData }: { pokemonData: string[] }) => {
  const [scrollPokemonList, setScrollPokemonList] = useState<object[]>();
  HandleScroll(setScrollPokemonList);

  return (
    <section className="flex flex-wrap justify-center gap-4">
      {scrollPokemonList
        ? scrollPokemonList.map((poke, i) => (
            /* @ts-expect-error Server Component */
            <PokemonCardScroll key={i} pokemon={poke.data} />
          ))
        : pokemonData.map((poke, i) => (
            <PokemonCard key={i} pokemonName={poke} />
          ))}
    </section>
  );
};

export default PokemonRender;
