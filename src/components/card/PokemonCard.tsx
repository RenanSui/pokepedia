import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { ModalContext } from '@/src/contexts/Modal/ModalContext';
import { IPokemonInfos } from '@/src/interfaces/pokemon';
import { Poppins, Nunito } from 'next/font/google';
import { useContext } from 'react';
import Image from 'next/image';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['300', '400', '500'],
});

type IPokemonIndividualInfos = { pokemon: IPokemonInfos };

const PokemonCard = ({ pokemon }: IPokemonIndividualInfos) => {
  const pokemonType = CapitalizeFirstLetter(pokemon.types[0].type.name);
  const { setIsModalOpen, setModalInfo } = useContext(ModalContext);
  const pokemonTypeColor = `bg-poke${pokemonType}`;

  const handleOpenModal = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const pokemonName = target.firstChild?.nextSibling?.textContent;
    setIsModalOpen(true);
    setModalInfo(pokemonName || '');
    document.body.classList.add('overflow-hidden');
  };

  return (
    <article
      className={`flex w-[43%] max-w-xs cursor-pointer flex-col items-center rounded-2xl text-custom-dark-blue-900 transition-all duration-700 hover:z-20 hover:-rotate-6 hover:!scale-110 hover:shadow-lg group-hover:scale-95 sm:w-3/12 ${pokemonTypeColor} ${poppins.className}`}
      onClick={handleOpenModal}
    >
      <Image
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={120}
        height={140}
        className="pointer-events-none mt-5 h-auto w-auto transition-all duration-700"
        priority={true}
      />
      <h1 className="pointer-events-none mt-5 font-semibold capitalize">
        {pokemon.name}
      </h1>
      <p
        className={`pointer-events-none mb-5 font-light transition-all duration-700 md:mb-8 ${poppins.className}`}
      >
        {String(pokemon.id).padStart(3, '0')}
      </p>
    </article>
  );
};

export default PokemonCard;
