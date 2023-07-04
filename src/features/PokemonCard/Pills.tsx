import { Pill } from '@/components/Pill/Pill'
import CapitalizeFirstLetter from '@/utils/CapitalizeFirstLetter'
import { FC, HTMLAttributes, JSX } from 'react'
import { Pokemon } from './types'

interface PillsProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
  Pokemon: Pokemon
}

export const Pills: FC<PillsProps> = ({ Pokemon }) => {
  const PokemonTypes = Pokemon
    ? Pokemon?.types.map((item) => item.type.name)
    : ['']

  return (
    <div className="mx-1 mt-1 flex items-center justify-start gap-1">
      {PokemonTypes.map((type, index) => (
        <Pill
          key={index}
          pill
          size={'xs'}
          className={`
                    border-poke${CapitalizeFirstLetter(
                      type,
                    )} hover:bg-[#0f0f0f38]`}
        >
          {CapitalizeFirstLetter(type)}
        </Pill>
      ))}
    </div>
  )
}
