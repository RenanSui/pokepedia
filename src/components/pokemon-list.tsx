'use client'
import { PokemonCard } from '@/components/pokemon-card'
import { useFetchAllPokemon } from '@/hooks/use-fetch-all-pokemon'
import { FC, HTMLAttributes, JSX, useCallback, useEffect } from 'react'
import { PokemonSkeleton } from './pokemon-skeleton'

interface PokedexListProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const PokemonList: FC<PokedexListProps> = ({ className }) => {
  const { data: PokedexList, fetchNextPage } = useFetchAllPokemon()
  const loadMorePokemon = useCallback(() => fetchNextPage(), [fetchNextPage])

  const handlePokemonScroll = useCallback(
    (e: Event) => {
      const targetWindow = e.target as Document
      const { documentElement } = targetWindow
      const { scrollTop, scrollHeight } = documentElement
      if (window.innerHeight + scrollTop + 150 >= scrollHeight)
        loadMorePokemon()
    },
    [loadMorePokemon],
  )

  useEffect(() => {
    window.addEventListener('scroll', handlePokemonScroll)
    return () => window.removeEventListener('scroll', handlePokemonScroll)
  }, [handlePokemonScroll])

  return (
    <section
      className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
    >
      <h1 className="hidden">Pokemon List</h1>

      {Array.from({ length: 20 }).map((_, index) => (
        <PokemonSkeleton key={index} />
      ))}

      {PokedexList &&
        PokedexList.pages.map((PokePage) =>
          PokePage.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )),
        )}
    </section>
  )
}

export { PokemonList }
