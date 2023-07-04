'use client'
import { PokemonCard } from '@/components/pokemon-card'
import { useFetchAllPokedex } from '@/hooks/use-fetch-all-pokedex'
import { ArrayMaker } from '@/lib/utils'
import { FC, HTMLAttributes, JSX, useCallback, useEffect } from 'react'
import { PokemonSkeleton } from './pokemon-skeleton'

// type FetchNextPage = () => Promise<
//   InfiniteQueryObserverResult<PokedexResult, unknown>
// >

interface PokedexListProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const PokedexList: FC<PokedexListProps> = ({ className }) => {
  const { data: PokedexList, isFetching, fetchNextPage } = useFetchAllPokedex()
  const loadMorePokemon = useCallback(() => fetchNextPage(), [fetchNextPage])
  const Array20 = ArrayMaker(20)

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

      {isFetching && Array20.map((index) => <PokemonSkeleton key={index} />)}

      {PokedexList &&
        PokedexList.pages.map((PokePage) =>
          PokePage.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )),
        )}
    </section>
  )
}

export { PokedexList }
