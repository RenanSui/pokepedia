const CapitalizeFirstLetter = (word: string) => {
	const firstLetter = word.charAt(0);
	const firstLetterCapitalized = firstLetter.toUpperCase();

	const remainingLetters = word.slice(1);
	const capitalizedWord = firstLetterCapitalized + remainingLetters;

	return capitalizedWord;
};

export default CapitalizeFirstLetter;
