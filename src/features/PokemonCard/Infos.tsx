import { Icon } from '@/components/Icons/Icon'
import { Heading } from '@/components/heading/Heading'
import { useGetLocal } from '@/hooks/useGetLocal'
import CapitalizeFirstLetter from '@/utils/CapitalizeFirstLetter'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line camelcase
import { Playfair_Display } from 'next/font/google'
import { FC, HTMLAttributes, JSX, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DataFavorites, HandleFavorite } from './HandleFavorite'
import { Pokemon } from './types'

const playfair = Playfair_Display({
  variable: '--playfair-font',
  subsets: ['latin'],
})

interface CardInfoProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  Pokemon: Pokemon
}

export const Infos: FC<CardInfoProps> = ({ Pokemon }) => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const { data: Favorites } = useGetLocal<DataFavorites>('PokedexFavorites')
  const isIdFavorited = Favorites.map((Favorite) => Favorite.id).includes(
    Pokemon ? Pokemon.id : 0,
  )

  // const [Pokedex, setPokedex] = useState(
  // 	useGetLocal<DataFavorites>('PokedexFavorites')
  // );
  // const { data: Favorites } = Pokedex;
  // const isIdFavorited = Favorites.map((Favorite) => Favorite.id).includes(
  // 	Pokemon ? Pokemon.id : 0
  // );

  return (
    <div className="mx-1 mt-1 flex justify-between">
      <Heading className={`${playfair.className}`}>
        <span className={`font-sans transition-all duration-300`}>
          #{Pokemon.id}
          {' - '}
        </span>
        {CapitalizeFirstLetter(Pokemon.name)}
      </Heading>

      <Icon
        icon={faHeart}
        className={`${
          isIdFavorited
            ? 'text-red-500 hover:text-red-900'
            : 'text-zinc-500 hover:text-red-300'
        }`}
        onClick={() => {
          HandleFavorite(Pokemon.name, Pokemon.id, dispatch)
          setActive(!active)
        }}
      />
    </div>
  )
}
