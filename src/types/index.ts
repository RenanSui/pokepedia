import { HTMLAttributes } from 'react'

export type StorageKey = 'PokedexFavorites' | ''

export interface PokemonSchema {
  name: string
  url: string
}

export interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: PokemonSchema
}

export interface PokemonFavorites {
  name: string
  id: number
}
