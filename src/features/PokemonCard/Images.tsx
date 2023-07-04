import { Card } from '@/components/cards/Card'
import { CardBlur } from '@/components/cards/CardBlur'
import { CardCircle } from '@/components/cards/CardCircle'
import { CardImage } from '@/components/cards/CardImage'
import CapitalizeFirstLetter from '@/utils/CapitalizeFirstLetter'
import { FC, HTMLAttributes, JSX } from 'react'
import { Pokemon } from './types'

interface ImagesProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  Pokemon: Pokemon
}

export const Images: FC<ImagesProps> = ({ Pokemon }) => {
  const SpriteUrl = Pokemon
    ? Pokemon.sprites.other['official-artwork'].front_default
    : ''

  const PokemonTypes = Pokemon
    ? Pokemon?.types.map((item) => item.type.name)
    : ['']

  return (
    <Card>
      <>
        {PokemonTypes.map((type, index) => (
          <CardCircle
            square={index as 0 | 1 | 2 | 3}
            className={`bg-poke${CapitalizeFirstLetter(type)}`}
            key={type}
          />
        ))}
      </>
      <CardBlur />
      <CardImage
        src={SpriteUrl}
        alt={Pokemon.name}
        className="z-10"
        draggable={false}
      />
    </Card>
  )
}
