export type StorageKey = 'PokedexFavorites' | ''

export interface PokemonFavorites {
  name: string
  id: number
}

export interface PokedexSchema {
  count: number
  next: string
  previous: string
  results: [
    {
      name: string
      url: string
    },
  ]
}

export interface PokemonSchema {
  name: string
  id: number
  types: [
    {
      type: {
        name: string
      }
    },
  ]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
