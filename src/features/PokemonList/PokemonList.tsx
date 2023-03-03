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
    <section
      className="group flex flex-wrap justify-center gap-3 transition-all duration-500"
      ref={SectionRef}
      aria-labelledby="pokemon-list-section"
    >
      <h1 className="hidden" id="pokemon-list-section">
        Pokemon List
      </h1>
      {Pokemon?.map((poke, i) => (
        <PokemonCard key={i} pokemon={poke.data} />
      ))}
    </section>
  );
};

export default PokemonList;
