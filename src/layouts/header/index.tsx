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
  const [pokemonSearchInput, setPokemonSearchInput] = useState<string>('');
  const { dispatch } = useContext(PokemonContext);

  const loadIndividualPokemon = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pokemonName = pokemonSearchInput?.toLowerCase() || 'bulbasaur';
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // just for type
    const LIMIT_URL = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=0`;
    const response = await fetch(LIMIT_URL);
    const pokemonsData = await response.json();
    // just for type

    const promisesArray = pokemonsData.results.map(() => axios.get(URL));
    Promise.all(promisesArray).then((value) => {
      dispatch({
        type: 'renderIndividualPokemon',
        payload: {
          currentState: value as IPokemonDatas[],
          oldState: [] as IPokemonDatas[],
        },
      });
    });
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
        className="mx-4 mt-5 mb-6 flex items-center rounded-md bg-pokedex-200 p-2 py-3"
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="mx-3 bg-pokedex-200 text-xl text-custom-dark-blue-900"
        />
        <input
          type="text"
          placeholder="Name or number"
          className=" rounded-md bg-pokedex-200 text-custom-dark-blue-900 outline-none"
          onChange={(e) => {
            setPokemonSearchInput(e.target.value);
            e.target.value === '' && dispatch({ type: 'clearPokemons' });
          }}
          value={pokemonSearchInput}
        />
      </form>
    </header>
  );
};

export default Header;
