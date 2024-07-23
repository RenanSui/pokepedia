'use client'

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'

type PokemonCarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  pokemons: Pokemon[]
}

export default function PokemonCarousel({ pokemons }: PokemonCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 2000 }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {pokemons.map((pokemon, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
          >
            <PokemonCarouselCard pokemon={pokemon} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function PokemonCarouselCard({ pokemon }: { pokemon: Pokemon }) {
  const spriteURL = pokemon.sprites.other['official-artwork'].front_default
  const types = pokemon.types.map(({ type: { name } }) => name)

  return (
    <Card className="relative w-full overflow-hidden rounded-full border-none bg-zinc-100 shadow-none dark:bg-zinc-900">
      {types?.map((type, index) => (
        <div
          key={type}
          className={cn(
            'absolute z-0 size-24 rounded-full',
            `bg-poke${CapitalizeFirstLetter(type)}`,
            index === 0 && 'left-1 top-1',
            index === 1 && 'right-1 top-1',
            index === 2 && 'bottom-1 left-1',
            index === 3 && 'bottom-1 right-1',
          )}
        />
      ))}
      <div className="absolute -bottom-3 -left-3 -right-3 -top-3 backdrop-blur-[64px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={spriteURL}
        alt={pokemon.name}
        className="relative z-20 w-full select-none"
        loading="lazy"
      />
    </Card>
  )
}
