import { PokemonContextProps } from '@/src/interfaces/interfaces';
import { createContext } from 'react';

export const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
);
