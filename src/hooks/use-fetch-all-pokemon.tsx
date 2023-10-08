import { PokedexSchema } from '@/types'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

export const useFetchAllPokemon = () => {
  const fetchInfinitePokemons = async ({
    pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
  }) => {
    const { data } = await axios.get<PokedexSchema>(`${pageParam}`)
    return data
  }

  return useInfiniteQuery({
    queryKey: ['PokedexList'],
    queryFn: fetchInfinitePokemons,
    refetchOnWindowFocus: false,
    staleTime: 30 * 24 * 60 * 60 * 1000, // 30 days
    getNextPageParam: (lastPage) => lastPage.next,
  })
}
