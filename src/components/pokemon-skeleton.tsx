import { memo } from 'react'
import { Icons } from './icons'
import { LoadingSkeleton } from './ui/loading-skeleton'

const PokemonCardSkeleton = () => {
  return (
    <div className="w-[250px]">
      <div className="relative h-[250px] w-full cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl">
        <LoadingSkeleton />
        <div className="absolute bottom-0 left-0 right-0 top-0 backdrop-blur-[32px]" />
      </div>
      <div className="mt-1 flex justify-between">
        <div className="relative cursor-pointer overflow-hidden rounded-md bg-[#313338] px-20 py-3">
          <LoadingSkeleton />
        </div>
        <Icons.heart className="h-5 w-5 text-[#313338]" />
      </div>
      <div className="mt-1 flex items-center justify-start gap-1">
        <p className="relative cursor-pointer overflow-hidden rounded-full border border-[#313338] bg-[#313338] px-6 py-2">
          <LoadingSkeleton />
        </p>
        <p className="relative cursor-pointer overflow-hidden rounded-full border border-[#313338] bg-[#313338] px-6 py-2">
          <LoadingSkeleton />
        </p>
      </div>
    </div>
  )
}

export const PokemonSkeleton = memo(PokemonCardSkeleton)
