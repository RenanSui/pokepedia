import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500'],
});

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

const PokemonCard = ({ pokemon }: IPokemonInfos) => {
  const pokemonType = CapitalizeFirstLetter(pokemon.types[0].type.name);
  const pokemonTypeColor = `bg-poke${pokemonType}`;

  return (
    <article
      className={`flex w-[43%] max-w-xs flex-col items-center rounded-2xl text-custom-dark-blue-900 transition-all duration-700 sm:w-3/12 ${pokemonTypeColor} ${poppins.className}`}
    >
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={120}
        height={140}
        className="mt-5 h-auto w-auto transition-all duration-700"
        priority={true}
      />
      <h1 className="mt-5 font-semibold capitalize">{pokemon.name}</h1>
      <p
        className={`mt-5 font-light transition-all duration-700 md:mb-8 ${poppins.className}`}
      >
        {String(pokemon.id).padStart(3, '0')}
      </p>
      <p className="hidden text-[#F5FBFB]">Aoba</p>
      <p className="hidden text-[#B6C6DE]">Aoba</p>
      <p className="hidden text-[#D4C8D7]">Aoba</p>
      <p className="hidden text-[#DCD7EE]">Aoba</p>
    </article>
  );
};

export default PokemonCard;
