import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface inputColors {
  bgColor: string;
  textColor: string;
  textNeutralColor: string;
}

interface SearchButtonProps {
  props: { icon: IconDefinition; inputErrorColor: inputColors };
}

const SearchButton = ({ props }: SearchButtonProps) => {
  const { icon, inputErrorColor } = props;
  return (
    <button type="submit" title="Search">
      <FontAwesomeIcon
        icon={icon}
        className={`h-6 w-6 cursor-pointer px-5 ${inputErrorColor.bgColor} ${inputErrorColor.textColor} transition-all duration-700`}
      />
    </button>
  );
};

export default SearchButton;
