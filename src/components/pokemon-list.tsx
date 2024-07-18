'use client'

import { PokedexResults, Pokemon } from '@/types'
import * as React from 'react'
import { useQuery } from 'react-query'
import { PokemonCard } from './pokemon-card'
import { PokemonSkeleton } from './pokemon-skeleton'
import { useConfigPaginationSize } from '@/hooks/use-pokemon-atom'

type PokemonListProps = React.HTMLAttributes<HTMLDivElement> & {
  pokedex: PokedexResults[]
}

export function PokemonList({ pokedex }: PokemonListProps) {
  const [configSize] = useConfigPaginationSize()
  const { data, isFetching } = useQuery<Pokemon[]>({
    initialData: [],
    queryKey: [`pokemons`],
    queryFn: async () => {
      const responses = await Promise.all(pokedex.map(({ url }) => fetch(url)))
      const data = await Promise.all(responses.map((res) => res.json()))
      return data as Pokemon[]
    },
    refetchOnWindowFocus: false,
  })

  if (isFetching) {
    return Array.from({ length: configSize }).map((_, index) => (
      <PokemonSkeleton key={index} />
    ))
  }

  return data?.map((pokemon, index) => (
    <PokemonCard pokemon={pokemon} key={index} />
  ))
}
