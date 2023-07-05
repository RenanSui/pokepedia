import { PokemonSchema } from '@/types'
import axios from 'axios'
import { useQuery } from 'react-query'

export interface Pokemon {
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

export const useFetchPokemon = (url: string, name: string) => {
	return useQuery<PokemonSchema>({
		queryKey: [name],
		queryFn: async () => {
			const { data } = await axios.get(url)
			return data
		},
		refetchOnWindowFocus: false,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
	})
}
