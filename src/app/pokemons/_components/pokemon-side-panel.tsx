'use client'

import PokemonDetails from '@/components/pokemon-details'
import { Skeleton } from '@/components/ui/skeleton'
import { usePokemonAtom } from '@/hooks/use-pokemon-atom'
import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import axios from 'axios'
import { useQuery } from 'react-query'

export function PokemonSidePanel() {
  const [{ selected }] = usePokemonAtom()
  const { data: pokemon, isFetching } = useQuery<Pokemon>({
    queryKey: [selected],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${selected}/`
      const { data } = await axios.get(url)
      return data
    },
    keepPreviousData: true,
  })

  const types = pokemon?.types.map(({ type: { name } }) => name)

  if (!pokemon || isFetching) {
    return (
      <div className="relative min-h-[calc(100vh-110px)] overflow-hidden ">
        {types?.map((type, index) => (
          <div
            key={type}
            className={cn(
              'absolute z-0 size-48 rounded-full',
              `bg-poke${CapitalizeFirstLetter(type)}`,
              index === 0 && '-top-10 right-0',
              index === 1 && '-bottom-10 right-0',
              index === 2 && '-top-10 left-0',
              index === 3 && '-bottom-10 left-0',
            )}
          />
        ))}
        <div className="absolute -bottom-2 -left-2 -right-2 -top-2 z-10 backdrop-blur-[300px]" />
        <Skeleton className="absolute top-0 h-full w-full" />
      </div>
    )
  }

  return (
    <div className="relative min-h-[calc(100vh-110px)] overflow-hidden">
      {types?.map((type, index) => (
        <div
          key={type}
          className={cn(
            'absolute z-0 size-48 rounded-full',
            `bg-poke${CapitalizeFirstLetter(type)}`,
            index === 0 && '-top-10 right-0',
            index === 1 && '-bottom-10 right-0',
            index === 2 && '-top-10 left-0',
            index === 3 && '-bottom-10 left-0',
          )}
        />
      ))}
      <div className="absolute -bottom-2 -left-2 -right-2 -top-2 z-10 backdrop-blur-[300px]" />

      <div className="relative z-50">
        <PokemonDetails isSidePanel pokemon={pokemon} />
      </div>
    </div>
  )
}
