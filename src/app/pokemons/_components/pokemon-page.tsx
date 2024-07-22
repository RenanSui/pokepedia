'use client'

import { Pagination } from '@/components/pagination'
import { PokemonDialog } from '@/components/pokemon-dialog'
import { PokemonList } from '@/components/pokemon-list'
import { PokemonSkeleton } from '@/components/pokemon-skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useConfigPaginationSize } from '@/hooks/use-pokemon-atom'
import { PokedexList } from '@/types'
import axios from 'axios'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { useQuery } from 'react-query'
import { PokemonPaginationSize } from './pokemon-pagination-size'
import PokemonViewOptions from './pokemon-view-options'

export function PokemonPage() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const currentPage = Math.max(0, Number(searchParams.get('page')) - 1)
  const [totalPages, setTotalPages] = React.useState(0)
  const [configSize] = useConfigPaginationSize()
  const itemsPerPage = configSize

  const { data: pokemons, isFetching } = useQuery<PokedexList>({
    queryKey: [`pokemon-list-${currentPage}-${configSize}`],
    queryFn: async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${currentPage * configSize}&limit=${configSize}`
      const { data } = await axios.get(url)
      return data
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  const totalItems = pokemons?.count ?? 0

  React.useEffect(() => {
    setTotalPages(Math.ceil(totalItems / itemsPerPage))
  }, [itemsPerPage, totalItems])

  const handlePageChange = (page: number) => {
    if (page < 0) {
      page = 0
    } else if (page >= totalPages) {
      page = totalPages - 1
    }

    const params = new URLSearchParams(searchParams)
    params.set('page', String(page + 1))
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <section className="relative min-h-[calc(100vh-110px)]">
      <div className="flex flex-col-reverse gap-2 px-4 pt-4 md:flex-row md:items-center md:justify-end lg:justify-between">
        <PokemonViewOptions />
        <PokemonPaginationSize className="md:ml-auto lg:px-8" />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <ScrollArea className="h-[calc(100vh-230px)]">
        <div className="grid grid-cols-1 gap-4 px-4 py-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {isFetching &&
            Array.from({ length: configSize }).map((_, index) => (
              <PokemonSkeleton key={index} />
            ))}
          {!isFetching && pokemons && (
            <PokemonList pokedex={pokemons.results} />
          )}
        </div>
      </ScrollArea>

      <div className="flex flex-col-reverse gap-2 px-4 pb-4 pt-4 md:flex-row md:items-center md:justify-end lg:justify-between">
        <PokemonPaginationSize className="lg:px-8" />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <PokemonDialog />
    </section>
  )
}
