'use client';
import { FormEvent, useContext, useState } from 'react';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';
import {
  faMagnifyingGlass,
  faRotateBack,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Poppins } from 'next/font/google';
import axios from 'axios';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Header = () => {
  const { dispatch } = useContext(PokemonContext);
  // 'bg-pokedex-200'
  const [inputErrorColor, setInputErrorColor] = useState({
    bgColor: 'bg-pokedex-200',
    textColor: 'text-custom-dark-blue-900',
    textNeutralColor: 'text-neutral-400',
  });
  const [notFound, setNotFound] = useState(false);
  const [pokemonSearchInput, setPokemonSearchInput] = useState<string>('');
  const pokemonName = pokemonSearchInput?.toLowerCase();

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
        // const pokemons_URL_Array = [
        //   `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
        // ];
        // const promisesArray = pokemons_URL_Array.map((link: string) =>
        //   axios.get(link)
        // );
        // console.log(promisesArray);
        // Promise.all(promisesArray).then((values) => {
        //   dispatch({
        //     type: 'renderIndividualPokemon',
        //     payload: {
        //       currentState: values as IPokemonDatas[],
        //       oldState: [] as IPokemonDatas[],
        //     },
        //   });
        // });
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
        <button type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`h-6 w-6 cursor-pointer px-5 ${inputErrorColor.bgColor} ${inputErrorColor.textColor} transition-all duration-700`}
          />
        </button>
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
        <label
          htmlFor="pokemon"
          className={`pointer-events-none absolute transition-all duration-700 peer-focus:${
            inputErrorColor.textColor
          } ${
            pokemonSearchInput
              ? '-top-3 left-9 scale-75'
              : 'top-4 left-16 z-10 cursor-text peer-focus:-top-3 peer-focus:left-9 peer-focus:scale-75'
          } ${inputErrorColor.textNeutralColor}`}
        >
          {notFound ? 'Name or number Not Found' : 'Name or number'}
        </label>
        <button
          type="reset"
          className=""
          onClick={() => {
            setPokemonSearchInput('');
            dispatch({ type: 'clearPokemons' });
          }}
        >
          <FontAwesomeIcon
            icon={faRotateBack}
            className={`h-6 w-6 cursor-pointer px-5 ${inputErrorColor.bgColor} ${inputErrorColor.textColor} transition-all duration-700`}
          />
        </button>
      </form>
    </header>
  );
};

export default Header;
