import { PokemonCard } from '@/src/components/card';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';
import { useContext } from 'react';
import { HandleScroll } from './handleScroll';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const PokemonList = () => {
  const { pokemonState } = useContext(PokemonContext);
  const { currentState: Pokemon } = pokemonState;
  const [SectionRef] = useAutoAnimate<HTMLElement>();
  HandleScroll();

  return (
    // /* @ts-expect-error Server Component */
    <section className="flex flex-wrap justify-center gap-3" ref={SectionRef}>
      {Pokemon?.map((poke, i) => (
        <PokemonCard key={i} pokemon={poke.data} />
      ))}
    </section>
  );
};

export default PokemonList;
