import { IPokemonStates } from '@/src/interfaces/pokemon';
import { FC, useReducer } from 'react';
import { PokemonContext } from './PokemonContext';
import { pokeReducer } from './PokemonReducer';

interface PokemonProviderProps {
  children: JSX.Element | JSX.Element[];
}

const initialPokemonState: IPokemonStates = {
  currentState: [
    {
      data: {
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
      },
    },
  ],
  oldState: [
    {
      data: {
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
      },
    },
  ],
};

const PokemonProvider: FC<PokemonProviderProps> = ({ children }) => {
  const [pokemonState, dispatch] = useReducer(pokeReducer, initialPokemonState);

  return (
    <>
      <PokemonContext.Provider value={{ pokemonState, dispatch }}>
        {children}
      </PokemonContext.Provider>
    </>
  );
};

export default PokemonProvider;
