import { IPokemonAction, IPokemonStates } from '@/src/interfaces/interfaces';

export const pokeReducer = (state: IPokemonStates, action: IPokemonAction) => {
  switch (action.type) {
    case 'renderPokemons':
      return {
        currentState: [...state.currentState, ...action.payload.currentState],
        oldState: state.oldState,
      };
    case 'renderIndividualPokemon':
      return {
        currentState: action.payload.currentState,
        oldState: state.currentState,
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

// export const pokeReducer = (state: IPokemonArray, action: IPokemonAction) => {
//   switch (action.type) {
//     case 'renderPokemons':
//       console.log(state);
//       return [state, ...action.payload];

//     // return {
//     //   currentState: [...state.currentState, ...action.payload.currentState],
//     // };
//     case 'renderIndividualPokemon':
//     // return action.payload;
//     case 'clearPokemons':

//     default:
//       return state;
//   }
// };
