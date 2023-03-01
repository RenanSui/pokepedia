import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CapitalizeFirstLetter } from '@/src/utils';

interface IPokemonInfos {
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
}

const initialPokemonState = {
  id: 1,
  name: 'bulbasaur',
  types: [
    {
      type: {
        name: 'grass',
      },
    },
  ],
  sprites: {
    other: {
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      },
    },
  },
};

const PokemonCard = ({ pokemonName }: { pokemonName: string }) => {
  const [pokemonInfos, setPokemonInfos] =
    useState<IPokemonInfos>(initialPokemonState);
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(URL);
      const pokemonData = await response.json();
      setPokemonInfos(pokemonData);
    };

    fetchPokemon();
  }, [URL]);

  const pokemonType = CapitalizeFirstLetter(pokemonInfos.types[0].type.name);
  const pokemonTypeColor = `bg-poke${pokemonType}`;

  //padStart(2, '0')
  return (
    <article
      className={`flex w-[44%] max-w-[280px] flex-col items-center rounded-2xl p-4 font-poppins text-custom-dark-blue-900 sm:w-4/12 ${pokemonTypeColor}`}
    >
      <Image
        src={pokemonInfos.sprites.other['official-artwork'].front_default}
        alt={pokemonInfos.name}
        width={200}
        height={140}
        className=""
      />
      <h1 className="mt-5 font-semibold capitalize sm:mt-11">
        {pokemonInfos.name}
      </h1>
      <p> {String(pokemonInfos.id).padStart(4, '0')}</p>
    </article>
  );
};

export default PokemonCard;
