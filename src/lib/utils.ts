import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function CapitalizeFirstLetter(string: string) {
  if (typeof string !== 'string' || string.length === 0) {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
