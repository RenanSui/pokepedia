import { CapitalizeFirstLetter } from '@/src/utils';
import Image from 'next/image';

interface IPokemonInfos {
  pokemon: {
    id: number;
    name: string;
    types: {
      type: {
        name: string;
      };
    }[];
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  };
}

const PokemonCardScroll = ({ pokemon }: IPokemonInfos) => {
  const pokemonType = CapitalizeFirstLetter(pokemon.types[0].type.name);
  const pokemonTypeColor = `bg-poke${pokemonType}`;

  return (
    <article className={`h-[175px] w-[120px] ${pokemonTypeColor}`}>
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={200}
        height={140}
      />
      <h1>{pokemonType}</h1>
      <h1>{pokemonTypeColor}</h1>
      <h1 className="capitalize">{pokemon.name}</h1>
      <p> {String(pokemon.id).padStart(4, '0')}</p>
    </article>
  );
};

export default PokemonCardScroll;
