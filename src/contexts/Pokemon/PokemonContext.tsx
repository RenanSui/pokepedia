import { PokemonContextProps } from '@/src/interfaces/pokemon';
import { createContext } from 'react';

export const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
);
