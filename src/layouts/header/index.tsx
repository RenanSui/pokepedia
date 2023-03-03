'use client';
import { FormEvent, useContext, useState } from 'react';
import { PokemonContext } from '@/src/contexts/Pokemon/PokemonContext';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPokemonDatas } from '@/src/interfaces/interfaces';
import { Poppins } from 'next/font/google';
import axios from 'axios';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Header = () => {
  const { dispatch } = useContext(PokemonContext);
  const [pokemonSearchInput, setPokemonSearchInput] = useState<string>('');
  const pokemonName = pokemonSearchInput?.toLowerCase();

  const loadIndividualPokemon = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pokemonSearchInput === '') {
      console.log('vazio');
    } else {
      const pokemons_URL_Array = [
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
      ];
      const promisesArray = pokemons_URL_Array.map((link: string) =>
        axios.get(link)
      );
      Promise.all(promisesArray).then((values) => {
        dispatch({
          type: 'renderIndividualPokemon',
          payload: {
            currentState: values as IPokemonDatas[],
            oldState: [] as IPokemonDatas[],
          },
        });
      });
    }
  };

  return (
    <header className={`m-auto max-w-[1350px] ${poppins.className}`}>
      <h1 className="mx-4 mt-6 text-3xl font-extrabold text-custom-dark-blue-900">
        Pokédex
      </h1>
      <p className="mx-4 mt-2 text-sm font-normal">
        Search for a Pokémon by name or using its National Pokédex number.
      </p>
      <form
        action=""
        onSubmit={loadIndividualPokemon}
        className="relative mx-4 mt-5 mb-6 flex items-center rounded-md bg-pokedex-200  transition-all duration-700"
      >
        {/* p-2 py-3 */}
        <button type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-6 w-6 cursor-pointer bg-pokedex-200 px-5 text-custom-dark-blue-900"
          />
        </button>
        <input
          type="text"
          id="pokemon"
          name="pokemon"
          className="peer w-full rounded-md bg-pokedex-200 py-4 text-custom-dark-blue-900 outline-none"
          autoComplete="off"
          onChange={(e) => {
            setPokemonSearchInput(e.target.value);
            e.target.value === '' && dispatch({ type: 'clearPokemons' });
          }}
          value={pokemonSearchInput}
        />
        <label
          htmlFor="pokemon"
          className={`absolute text-custom-dark-blue-900 transition-all duration-700  peer-focus:scale-75 ${
            pokemonSearchInput
              ? '-top-3 left-9 scale-75'
              : 'top-4 left-16 z-10 cursor-text peer-focus:-top-3 peer-focus:left-9'
          }`}
        >
          Name or number
        </label>
      </form>
    </header>
  );
};

export default Header;
