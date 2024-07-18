'use client'

import { Pagination } from '@/components/pagination'
import { PokemonList } from '@/components/pokemon-list'
import { PokemonSkeleton } from '@/components/pokemon-skeleton'
import { PokedexList } from '@/types'
import axios from 'axios'
import * as React from 'react'
import { useQuery } from 'react-query'

export function PokemonPage() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [totalPages, setTotalPages] = React.useState(0)
  const itemsPerPage = 20

  const { data: pokemons, isFetching } = useQuery<PokedexList>({
    queryKey: [`pokemon-list-${currentPage}`],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${currentPage * 20}&limit=20`
      const { data } = await axios.get(url)
      return data
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  const totalItems = pokemons?.count ?? 0

  React.useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage))
  }, [totalItems])

  const handlePageChange = (page: number) => {
    if (page < 0) {
      page = 0
    } else if (page >= totalPages) {
      page = totalPages - 1
    }
    setCurrentPage(page)
  }

  return (
    <section className="relative min-h-[calc(100vh-154px)]">
      <div className="flex justify-end px-4 pt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 py-4 xs:grid-cols-3 md:grid-cols-4">
        {isFetching &&
          Array.from({ length: 20 }).map((_, index) => (
            <PokemonSkeleton key={index} />
          ))}
        {!isFetching && pokemons && <PokemonList pokedex={pokemons.results} />}
      </div>
      <div className="flex justify-end px-4 pb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  )
}
