import { IPokemonAction, IPokemonStates } from '@/src/interfaces/interfaces';

export const pokeReducer = (state: IPokemonStates, action: IPokemonAction) => {
  switch (action.type) {
    case 'renderPokemons':
      return {
        currentState: [...state.currentState, ...action.payload.currentState],
        oldState: [...state.currentState, ...action.payload.currentState],
      };
    case 'renderIndividualPokemon':
      return {
        ...state,
        currentState: action.payload.currentState,
      };
    case 'clearPokemons':
      return {
        currentState: state.oldState,
        oldState: state.oldState,
      };
    default:
      return state;
  }
};
