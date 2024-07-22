import { Skeleton } from './ui/skeleton'

export function PokemonSkeleton() {
  return (
    <div className="relative min-h-[100px] rounded-xl">
      <Skeleton className="h-full w-full" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="skeleton placeholder"
        className="z-20 w-full select-none opacity-0"
      />
    </div>
  )
}
