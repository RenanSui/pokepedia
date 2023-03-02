import { Dispatch } from 'react';

export interface IPokemonDatas {
  data: IPokemonInfos;
}

export interface IPokemonInfos {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

// export type IPokemonArray = IPokemonInfos[];

export type IPokemonAction =
  | { type: 'renderPokemons'; payload: IPokemonStates }
  | { type: 'renderIndividualPokemon'; payload: IPokemonStates }
  | { type: 'clearPokemons' };

export type PokemonContextProps = {
  pokemonState: IPokemonStates;
  dispatch: Dispatch<IPokemonAction>;
};

export interface IPokemonStates {
  currentState: IPokemonDatas[];
  oldState: IPokemonDatas[];
}
