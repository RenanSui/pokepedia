import axios from 'axios'
import { useQuery } from 'react-query'
import { Pokemon } from '../features/PokemonCard/types'

export interface PokedexResult {
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

export const useFetchPokemon = (url: string, name: string) => {
  return useQuery<Pokemon>({
    queryKey: [name],
    queryFn: async () => {
      const { data } = await axios.get(url)
      return data
    },
    refetchOnWindowFocus: false,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  })
}
