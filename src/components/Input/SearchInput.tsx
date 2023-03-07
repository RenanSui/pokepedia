import { IPokemonAction } from '@/src/interfaces/pokemon';
import React, { Dispatch, SetStateAction } from 'react';

interface inputColors {
  bgColor: string;
  textColor: string;
  textNeutralColor: string;
}

interface SearchInputProps {
  props: {
    inputErrorColor: inputColors;
    dispatch: Dispatch<IPokemonAction>;
    setPokemonSearchInput: Dispatch<SetStateAction<string>>;
    setInputErrorColor: Dispatch<SetStateAction<inputColors>>;
    setNotFound: Dispatch<SetStateAction<boolean>>;
    pokemonSearchInput: string;
  };
}

const SearchInput = ({ props }: SearchInputProps) => {
  const {
    inputErrorColor,
    setPokemonSearchInput,
    dispatch,
    setInputErrorColor,
    setNotFound,
    pokemonSearchInput,
  } = props;

  return (
    <input
      type="text"
      id="pokemon"
      name="pokemon"
      className={`peer w-full rounded-md py-4 text-custom-dark-blue-900 outline-none transition-all duration-700 ${inputErrorColor.bgColor}`}
      autoComplete="off"
      onChange={(e) => {
        const value = e.target.value;
        setPokemonSearchInput(value);
        value === '' && dispatch({ type: 'clearPokemons' });
        value === '' &&
          setInputErrorColor({
            bgColor: 'bg-pokedex-200',
            textColor: 'text-custom-dark-blue-900',
            textNeutralColor: 'text-neutral-400',
          });
        value &&
          setInputErrorColor({
            bgColor: 'bg-pokedex-200',
            textColor: 'text-custom-dark-blue-900',
            textNeutralColor: 'text-neutral-400',
          });
        setNotFound(false);
      }}
      value={pokemonSearchInput}
    />
  );
};

export default SearchInput;
