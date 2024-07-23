import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shell'
import { Button } from '@/components/ui/button'
import { Pokemon } from '@/types'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import PokemonCarousel from './_components/pokemon-carousel'

export default async function LobbyPage() {
  const pokemonPromises = Array.from({ length: 10 }, () =>
    fetchPokemon(getRandomPokemonId()),
  )

  const pokemons = await Promise.all(pokemonPromises)

  return (
    <Shell className="flex justify-center overflow-hidden">
      <PageHeader
        as="section"
        className="mx-auto items-center gap-2 text-center"
        withPadding
      >
        <PageHeaderHeading
          className="animate-fade-up"
          style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
        >
          A guide to stats in the Pokémon games.
        </PageHeaderHeading>
        <PageHeaderDescription
          className="max-w-[40rem] animate-fade-up"
          style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
        >
          Poképedia is an unofficial, beautifully designed Pokédex website for
          everyone to use. It contains detailed data on every single Pokémon.
        </PageHeaderDescription>
        <Button variant="outline" className="mb-10 hidden sm:flex" asChild>
          <Link href="/pokemons">
            View Pokémons
            <ArrowRightIcon className="ml-2 size-4" aria-hidden="true" />
            <span className="sr-only">View Pokémons</span>
          </Link>
        </Button>
        <PokemonCarousel pokemons={pokemons} />
      </PageHeader>
    </Shell>
  )
}

const getRandomPokemonId = () => Math.floor(Math.random() * 1010) + 1

const fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon with ID ${id}`)
  }
  return response.json() as Promise<Pokemon>
}
