import { CapitalizeFirstLetter, cn } from '@/lib/utils'
import { Pokemon } from '@/types'
import { Separator } from './ui/separator'

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  const spriteURL = pokemon.sprites.other['official-artwork'].front_default
  const types = pokemon.types.map(({ type: { name } }) => name)

  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={spriteURL}
        alt={pokemon.name}
        className="z-20 mx-auto max-w-80"
        loading="lazy"
      />
      <div className="rounded-xl bg-background/80 p-2">
        <div className="flex gap-4 py-2">
          <span className="w-20 text-end">National N°</span>
          <span className="font-bold text-foreground">
            {pokemon.id.toString().padStart(4, '0')}
          </span>
        </div>
        <Separator />
        <div className="flex gap-4 py-2">
          <span className="w-20 text-end">Name</span>
          <span className="font-bold capitalize text-foreground">
            {pokemon.name}
          </span>
        </div>
        <Separator />
        <div className="flex gap-4 py-2">
          <span className="w-20 text-end">Type</span>
          <div className="flex gap-2 ">
            {types?.map((type, index) => (
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
          </div>
        </div>
        <Separator />
        <div className="flex gap-4 py-2">
          <span className="w-20 text-end">Height</span>
          <span className="font-bold text-foreground">
            {pokemon.height / 10} m
          </span>
        </div>
        <Separator />
        <div className="flex gap-4 py-2">
          <span className="w-20 text-end">Weight</span>
          <span className="font-bold text-foreground">
            {pokemon.weight / 10} kg
          </span>
        </div>
      </div>
    </div>
  )
}
