import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { ModalContext } from '@/src/contexts/Modal/ModalContext';
import { RightBlob, LeftBlob } from '@/src/components/svg';
import { ReturnButton } from '@/src/components/button';
import { Quicksand } from 'next/font/google';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';
import axios from 'axios';
import { StatsCard } from '@/src/components/card';
import {
  faHandBackFist,
  faPaw,
  faScaleBalanced,
  faWeightHanging,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  weight: ['300', '400', '500', '600', '700'],
});

const PokemonModal = () => {
  const { isModalOpen, modalInfo: pokemonName } = useContext(ModalContext);
  const [ABOUT_OR_STATUS, setABOUT_OR_STATUS] = useState(true);
  const URL = `https://pokeapi.co/api/v2/pokemon/${
    pokemonName || 'bulbasaur'
  }/`;

  const { data: Pokemon } = useQuery(
    ['pokemon', URL],
    async () => {
      const pokemon = await axios.get(URL);
      return pokemon.data;
    },
    { refetchOnWindowFocus: false, staleTime: 1000 * 60 * 60 * 24 }
  );

  const pokeSpeciesUrl =
    (Pokemon && Pokemon.species.url) ||
    'https://pokeapi.co/api/v2/pokemon-species/1/';

  const { data: PokemonSpecies } = useQuery(
    ['pokemonSpecies', Pokemon],
    async () => {
      const pokemon = await axios.get(pokeSpeciesUrl);
      return pokemon.data;
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      enabled: !!pokeSpeciesUrl,
    }
  );

  const PokemonGeneraFiltered =
    PokemonSpecies &&
    PokemonSpecies.genera.filter((poke: any) => poke.language.name === 'en');
  const PokemonGenera =
    PokemonSpecies && PokemonGeneraFiltered[0].genus.replace(' Pokémon', '');
  console.log(PokemonGenera);

  const pokemonType =
    Pokemon && CapitalizeFirstLetter(Pokemon.types[0].type.name);
  const pokemonTypeColor = Pokemon && `bg-poke${pokemonType}Darken`;

  const PokemonAbilities =
    Pokemon &&
    Pokemon.abilities.map((poke: any) => {
      return poke.ability.name;
    });

  const PokemonAbilitiesString =
    Pokemon &&
    PokemonAbilities.map((ability: any) => CapitalizeFirstLetter(ability)).join(
      ', '
    );

  const PokemonTypes =
    Pokemon &&
    Pokemon.types.map((poke: any) => {
      return poke.type.name;
    });

  const PokemonTypesString =
    Pokemon &&
    PokemonTypes.map((type: any) => CapitalizeFirstLetter(type)).join(', ');

  console.log(PokemonTypesString);

  return (
    <>
      {Pokemon && (
        <section
          className={`fixed left-0 top-0 bottom-0 right-0 z-40 flex flex-col justify-center transition-all duration-1000
    ${pokemonTypeColor} 
    ${quicksand.className} 
    ${
      isModalOpen && pokemonName
        ? 'animate-fadeIn opacity-100'
        : 'pointer-events-none animate-fadeOut opacity-0'
    }`}
        >
          <header className="z-40 mt-4 mb-auto mr-auto sm:mb-[none] lg:mt-40 lg:ml-40 lg:rounded-xl lg:p-8 lg:backdrop-blur-xl">
            <h1 className="ml-4 text-4xl font-black tracking-wide text-white drop-shadow-xl">
              {CapitalizeFirstLetter(Pokemon.name)}
            </h1>
            <p className="ml-4 text-2xl font-black tracking-wide text-white drop-shadow-xl">
              <span>#{Pokemon.id}</span>
              {' - '}
              <span>{PokemonTypesString}</span>
            </p>
          </header>
          <Image
            src={Pokemon.sprites.other['official-artwork'].front_default}
            alt={Pokemon.name}
            width={1000}
            height={1000}
            className="pointer-events-none absolute top-[30%] left-1/2 -translate-y-1/4 -translate-x-1/2 transition-all duration-700 sm:top-[20%] lg:left-1 lg:top-[none] lg:bottom-1 lg:-translate-x-0"
            priority={true}
          />
          <main className="z-10 mx-auto mt-auto flex w-[100%] flex-col justify-center overflow-hidden rounded-t-3xl bg-white pb-4 pt-4 shadow-2xl sm:absolute sm:left-1/2 sm:bottom-8 sm:w-[80%] sm:-translate-x-1/2 sm:rounded-3xl sm:pb-8 sm:pt-8 lg:right-4 lg:bottom-[50%] lg:w-[30%] lg:translate-y-1/2 lg:-translate-x-0">
            <div className="flex items-center justify-evenly border-b border-b-gray-100 pb-3 text-gray-400">
              <h1
                className={`cursor-pointer transition-all duration-100 ${
                  ABOUT_OR_STATUS
                    ? `border-b-[2px] border-b-blue-700 font-black text-black`
                    : ''
                }`}
                onClick={() => setABOUT_OR_STATUS(true)}
              >
                About
              </h1>
              <h1
                className={`cursor-pointer transition-all duration-100 ${
                  ABOUT_OR_STATUS
                    ? ''
                    : 'border-b-[2px] border-b-blue-700 font-black text-black'
                }`}
                onClick={() => setABOUT_OR_STATUS(false)}
              >
                Base Stats
              </h1>
            </div>
            {ABOUT_OR_STATUS ? (
              <section>
                <p className="flex items-center justify-between px-7 py-3">
                  <FontAwesomeIcon
                    icon={faPaw}
                    className={`h-4 w-4 cursor-pointer rounded-full text-gray-400 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:scale-125 focus:scale-95`}
                  />
                  <span className="mr-auto ml-3 font-black">Species</span>{' '}
                  <span className="mr-6 text-gray-400">{PokemonGenera}</span>
                </p>
                <p className="flex items-center justify-between px-7 py-3">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    className={`h-4 w-4 cursor-pointer rounded-full text-gray-400 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:scale-125 focus:scale-95`}
                  />
                  <span className="mr-auto ml-3 font-black">Height</span>{' '}
                  <span className="mr-6 text-gray-400">
                    {Pokemon.height / 10}m
                  </span>
                </p>
                <p className="flex items-center justify-between px-7 py-3">
                  <FontAwesomeIcon
                    icon={faWeightHanging}
                    className={`h-4 w-4 cursor-pointer rounded-full text-gray-400 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:scale-125 focus:scale-95`}
                  />
                  <span className="mr-auto ml-3 font-black">Weight</span>{' '}
                  <span className="mr-6 text-gray-400">
                    {Pokemon.weight / 10}kg
                  </span>
                </p>
                <p className="flex items-center justify-between px-7 py-3">
                  <FontAwesomeIcon
                    icon={faHandBackFist}
                    className={`h-4 w-4 cursor-pointer rounded-full text-gray-400 shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:scale-125 focus:scale-95`}
                  />
                  <span className="mr-auto ml-3 font-black">Abilities</span>{' '}
                  <span className="mr-6 text-right text-gray-400">
                    {PokemonAbilitiesString}
                  </span>
                </p>
              </section>
            ) : (
              <section className="">
                {Pokemon.stats.map((stat: any) => (
                  <p
                    className="mx-8 flex justify-evenly py-1"
                    key={stat.stat.name}
                  >
                    <span className="mr-auto place-self-start font-black">
                      {CapitalizeFirstLetter(stat.stat.name)}
                    </span>
                    <span className="ml-auto self-end text-gray-400">
                      {stat.base_stat}
                    </span>
                  </p>
                ))}
              </section>
            )}
          </main>
          {isModalOpen && pokemonName && <ReturnButton />}
        </section>
      )}

      <RightBlob
        className={`${
          isModalOpen ? `scale-[500] animate-expanding ` : 'animate-shrinking'
        }`}
      />
      <LeftBlob
        className={`${
          isModalOpen ? `scale-[500] animate-expanding ` : 'animate-shrinking'
        }`}
      />
    </>
  );
};

export default PokemonModal;
