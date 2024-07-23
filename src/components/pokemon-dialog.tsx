'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useMediaQuery } from '@/hooks/use-media-query'
import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import axios from 'axios'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import PokemonDetails from './pokemon-details'

export function PokemonDialog() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const pokemonName = searchParams.get('pokemon')

  const { data: pokemon } = useQuery<Pokemon>({
    queryKey: [pokemonName],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
      const { data } = await axios.get(url)
      return data
    },
    refetchOnWindowFocus: false,
  })

  if (isDesktop || !pokemon) {
    return null
  }

  const types = pokemon.types.map(({ type: { name } }) => name)
  console.log(pokemonName)

  return (
    <Dialog
      open={!!pokemonName}
      onOpenChange={() => {
        const params = new URLSearchParams(searchParams)
        params.delete('pokemon')
        replace(`${pathname}?${params.toString()}`)
      }}
    >
      <DialogTrigger className="sr-only">Open</DialogTrigger>
      <DialogContent className="overflow-hidden border-8 p-0">
        {types?.map((type, index) => (
          <div
            key={type}
            className={cn(
              'absolute z-0 size-48 rounded-full',
              `bg-poke${CapitalizeFirstLetter(type)}`,
              index === 0 && '-left-10 -top-10',
              index === 1 && '-right-10 -top-10',
              index === 2 && '-bottom-10 -left-10',
              index === 3 && '-bottom-10 -right-10',
            )}
          />
        ))}
        <div className="absolute -bottom-2 -left-2 -right-2 -top-2 z-10 backdrop-blur-[300px]" />
        <DialogHeader className="z-20 p-4">
          <DialogTitle>Pokémon</DialogTitle>
          <DialogDescription></DialogDescription>
          <PokemonDetails pokemon={pokemon} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
