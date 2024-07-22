'use client'

import { useConfigNameAtom, useConfigTypesAtom } from '@/hooks/use-pokemon-atom'
import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'

type PokemonCardProps = React.HTMLAttributes<HTMLDivElement> & {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon, ...props }: PokemonCardProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [configName] = useConfigNameAtom()
  const [configTypes] = useConfigTypesAtom()

  const spriteURL = pokemon.sprites.other['official-artwork'].front_default
  const types = pokemon.types.map(({ type: { name } }) => name)

  return (
    <Card
      className="relative -my-1.5 w-full space-y-2 border-none shadow-none"
      {...props}
    >
      <span
        className="absolute bottom-0 left-0 right-0 top-0 z-30 cursor-pointer"
        onClick={() => {
          const params = new URLSearchParams(searchParams)
          params.set('pokemon', pokemon.name)
          replace(`${pathname}?${params.toString()}`)
        }}
      />
      <CardHeader className="relative aspect-square min-h-[100px] w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-zinc-100 p-2 dark:bg-zinc-900">
        {types?.map((type, index) => (
          <div
            key={type}
            className={cn(
              'absolute z-0 size-24 rounded-full',
              `bg-poke${CapitalizeFirstLetter(type)}`,
              index === 0 && '-left-10 -top-10',
              index === 1 && '-right-10 -top-10',
              index === 2 && '-bottom-10 -left-10',
              index === 3 && '-bottom-10 -right-10',
            )}
          />
        ))}
        <div className="absolute -bottom-2 -left-2 -right-2 -top-2 backdrop-blur-[64px]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={spriteURL}
          alt={pokemon.name}
          className="z-20 w-full select-none"
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="relative z-50 p-0">
        {configName && (
          <p className="cursor-default capitalize text-foreground">
            <span className="font-bold">
              #{pokemon.id.toString().padStart(4, '0')}
            </span>
            <span> - </span>
            {pokemon.name}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex select-none flex-wrap items-center justify-start gap-2 p-0">
        {configTypes &&
          types?.map((type, index) => (
            <div
              key={index}
              className={cn(
                'relative overflow-hidden rounded-full border px-3 text-xs capitalize',
                `border-poke${CapitalizeFirstLetter(type)}`,
              )}
            >
              <span
                className={`absolute bottom-0 left-0 right-0 top-0 z-0 opacity-10 bg-poke${CapitalizeFirstLetter(type)}`}
              />
              <span className="relative z-10 font-semibold">{type}</span>
            </div>
          ))}
      </CardFooter>
    </Card>
  )
}
