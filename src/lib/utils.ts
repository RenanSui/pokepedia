import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CapitalizeFirstLetter = (word: string) => {
  const firstLetter = word.charAt(0)
  const firstLetterCapitalized = firstLetter.toUpperCase()

  const remainingLetters = word.slice(1)
  const capitalizedWord = firstLetterCapitalized + remainingLetters

  return capitalizedWord
}
