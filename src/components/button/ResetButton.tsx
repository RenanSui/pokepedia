import { IPokemonAction } from '@/src/interfaces/pokemon';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction } from 'react';

interface inputColors {
  bgColor: string;
  textColor: string;
  textNeutralColor: string;
}

interface ResetButtonProps {
  props: {
    icon: IconDefinition;
    inputErrorColor: inputColors;
    dispatch: Dispatch<IPokemonAction>;
    setPokemonSearchInput: Dispatch<SetStateAction<string>>;
  };
}

const ResetButton = ({ props }: ResetButtonProps) => {
  const { dispatch, icon, inputErrorColor, setPokemonSearchInput } = props;

  return (
    <button
      type="reset"
      className="fixed bottom-5 right-5 z-10"
      onClick={() => {
        setPokemonSearchInput('');
        dispatch({ type: 'clearPokemons' });
      }}
      title="Reset Pokédex"
    >
      <FontAwesomeIcon
        icon={icon}
        className={`h-6 w-6 cursor-pointer rounded-full bg-[#3A3D6233] p-3 shadow-2xl ${inputErrorColor.textColor} backdrop-blur-3xl transition-all duration-700 hover:scale-125 focus:scale-95`}
      />
    </button>
  );
};

export default ResetButton;
