import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const ArrayMaker = (quantity: number) => {
	const array = []
	for (let i = 0; i < quantity; i++) array.push(i)
	return array
}

export const CapitalizeFirstLetter = (word: string) => {
	const firstLetter = word.charAt(0)
	const firstLetterCapitalized = firstLetter.toUpperCase()

	const remainingLetters = word.slice(1)
	const capitalizedWord = firstLetterCapitalized + remainingLetters

	return capitalizedWord
}
