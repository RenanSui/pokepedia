interface inputColors {
  bgColor: string;
  textColor: string;
  textNeutralColor: string;
}

interface SearchLabelProps {
  props: {
    inputErrorColor: inputColors;
    notFound: boolean;
    pokemonSearchInput: string;
  };
}

const SearchLabel = ({ props }: SearchLabelProps) => {
  const { inputErrorColor, pokemonSearchInput, notFound } = props;
  return (
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
  );
};

export default SearchLabel;
