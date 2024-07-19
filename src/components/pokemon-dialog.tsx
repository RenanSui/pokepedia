'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useMediaQuery } from '@/hooks/use-media-query'
import { usePokemonAtom } from '@/hooks/use-pokemon-atom'
import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import axios from 'axios'
import { useQuery } from 'react-query'
import PokemonDetails from './pokemon-details'

export function PokemonDialog() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [{ selected }, setPokemon] = usePokemonAtom()

  const { data: pokemon } = useQuery<Pokemon>({
    queryKey: [selected],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${selected}/`
      const { data } = await axios.get(url)
      return data
    },
  })

  if (isDesktop || !pokemon) {
    return null
  }

  const types = pokemon.types.map(({ type: { name } }) => name)

  return (
    <Dialog
      open={!!selected}
      onOpenChange={() => {
        setPokemon({ selected: null })
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
          <DialogDescription>
            <PokemonDetails pokemon={pokemon} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
