export type StorageKey = 'PokedexFavorites' | ''

export type PokedexResults = { name: string; url: string }

export type PokedexList = {
  count: number
  next: string
  previous: string
  results: PokedexResults[]
}

export type Pokemon = {
  name: string
  id: number
  height: number
  weight: number
  types: { type: { name: string } }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
