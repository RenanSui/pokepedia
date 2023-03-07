'use client';
import { FormEvent, useContext, useState } from 'react';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';
import {
  faMagnifyingGlass,
  faRotateBack,
} from '@fortawesome/free-solid-svg-icons';
import { Poppins } from 'next/font/google';
import axios from 'axios';
import { ResetButton, SearchButton } from '@/src/components/button';
import { SearchInput } from '@/src/components/Input';
import { SearchLabel } from '@/src/components/Label';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Header = () => {
  const { dispatch } = useContext(PokemonContext);
  const [notFound, setNotFound] = useState(false);
  const [pokemonSearchInput, setPokemonSearchInput] = useState<string>('');
  const pokemonName = pokemonSearchInput?.toLowerCase();
  const [inputErrorColor, setInputErrorColor] = useState({
    bgColor: 'bg-pokedex-200',
    textColor: 'text-custom-dark-blue-900',
    textNeutralColor: 'text-neutral-400',
  });
  const ResetButtonProps = {
    icon: faRotateBack,
    inputErrorColor,
    dispatch,
    setPokemonSearchInput,
  };
  const SearchButtonProps = {
    icon: faMagnifyingGlass,
    inputErrorColor,
  };
  const SearchInputProps = {
    inputErrorColor,
    setPokemonSearchInput,
    dispatch,
    setInputErrorColor,
    setNotFound,
    pokemonSearchInput,
  };
  const SearchLabelProps = { inputErrorColor, pokemonSearchInput, notFound };

  const loadIndividualPokemon = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (pokemonSearchInput === '') {
        console.log('vazio');
        setInputErrorColor({
          bgColor: 'bg-red-200',
          textColor: 'text-red-800',
          textNeutralColor: 'text-red-400',
        });
      } else {
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
        const response = await axios.get(pokemonURL);
        dispatch({
          type: 'renderIndividualPokemon',
          payload: {
            currentState: [response],
            oldState: [],
          },
        });
        setNotFound(false);
      }
    } catch (error) {
      setNotFound(true);
      console.log({ error });
      setInputErrorColor({
        bgColor: 'bg-red-200',
        textColor: 'text-red-800',
        textNeutralColor: 'text-red-400',
      });
    }
  };

  return (
    <>
      <header className={`m-auto max-w-[1350px] ${poppins.className}`}>
        <h1 className="mx-4 mt-6 text-3xl font-extrabold text-custom-dark-blue-900">
          <a href="/">Pokédex</a>
        </h1>
        <p className="mx-4 mt-2 text-sm font-normal text-custom-dark-blue-900">
          Search for a Pokémon by name or using its National Pokédex number.
        </p>
        <form
          action=""
          onSubmit={loadIndividualPokemon}
          className={`relative mx-4 mt-5 mb-6 flex items-center rounded-md transition-all duration-700 ${inputErrorColor.bgColor}`}
        >
          <SearchButton props={SearchButtonProps} />
          <SearchInput props={SearchInputProps} />
          <SearchLabel props={SearchLabelProps} />
        </form>
        <ResetButton props={ResetButtonProps} />
      </header>
    </>
  );
};

export default Header;
