import CardSkeleton from '@/components/skeletons/CardSkeleton'
import { useFetchPokemon } from '@/hooks/useFetchPokemon'
import { FC, HTMLAttributes, JSX, memo } from 'react'
import { Images } from './Images'
import { Infos } from './Infos'
import { Pills } from './Pills'

interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  url: string
  name: string
}

const PokemonCard: FC<PokemonCardProps> = ({ url, name, ...props }) => {
  const { data: Pokemon, isFetching } = useFetchPokemon(url, name)

  return (
    <article {...props} className="mt-4 w-[250px]">
      {isFetching && <CardSkeleton key={url} />}

      {Pokemon && (
        <>
          <Images Pokemon={Pokemon} />
          <Infos Pokemon={Pokemon} />
          <Pills Pokemon={Pokemon} />
        </>
      )}
    </article>
  )
}

export default memo(PokemonCard)
