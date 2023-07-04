'use client'

import CardSkeleton from '@/components/skeletons/CardSkeleton'
import { useFetchPokedex } from '@/hooks/useFetchPokedex'
import { ArrayMaker } from '@/utils/ArrayMaker'
import { FC, HTMLAttributes, JSX } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import { HandleScroll } from './HandleScroll'

interface PokedexListProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const PokedexList: FC<PokedexListProps> = ({ className }) => {
  const LoadingArray = ArrayMaker(20)

  const { data: PokedexList, isFetching, fetchNextPage } = useFetchPokedex()
  HandleScroll(fetchNextPage)

  return (
    <section
      className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
    >
      <h1 className="hidden">Pokemon List</h1>

      {isFetching && LoadingArray.map((index) => <CardSkeleton key={index} />)}

      {PokedexList &&
        PokedexList.pages.map((PokePage) =>
          PokePage.results.map((result) => (
            <PokemonCard
              name={result.name}
              url={result.url}
              key={result.name}
            />
          )),
        )}
    </section>
  )
}

export default PokedexList
