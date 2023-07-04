import {
  addLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '@/app/_actions/pokemon'
import { Icons } from '@/components/icons'
import { Blur } from '@/components/ui/blur'
import {
  Card,
  CardCircle,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useFetchPokemon } from '@/hooks/use-fetch-pokemon'
import { CapitalizeFirstLetter } from '@/lib/utils'
import { PokemonCardProps, PokemonFavorites } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import { PokemonSkeleton } from './pokemon-skeleton'

const PokemonCard = ({ pokemon, ...props }: PokemonCardProps) => {
  const { url, name } = pokemon
  const { data: Pokemon, isFetching } = useFetchPokemon(url, name)
  const [active, setActive] = useState(false)

  // Add Favorite to Local Storage
  const HandleAddFavorite = (name: string, id: number) => {
    const Pokemon = { name, id }
    addLocalStorage('PokedexFavorites', Pokemon)
    setActive(!active)
  }

  // Remove Favorite from Local Storage
  const HandleDeleteFavorite = (id: number) => {
    removeLocalStorage('PokedexFavorites', id)
    setActive(!active)
  }

  // Sprite Image URL
  const SpriteURL = Pokemon
    ? Pokemon.sprites.other['official-artwork'].front_default
    : ''

  // Pokemon Types Array
  const PokemonTypes = Pokemon
    ? Pokemon?.types.map((item) => item.type.name)
    : ['']

  // Is Pokemon Favorited
  const Favorites = getLocalStorage('PokedexFavorites') as PokemonFavorites[]
  const isIdFavorited = Favorites.map((Favorite) => Favorite.id).includes(
    Pokemon ? Pokemon.id : 0,
  )

  return (
    <>
      {isFetching && <PokemonSkeleton key={pokemon.url} />}

      {Pokemon && (
        <Card className="w-[250px] overflow-hidden" {...props}>
          <CardHeader>
            <div className="relative flex h-[250px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#313338] shadow-xl">
              {PokemonTypes.map((type, index) => (
                <CardCircle
                  square={index as 0 | 1 | 2 | 3}
                  className={`bg-poke${CapitalizeFirstLetter(type)}`}
                  key={type}
                />
              ))}
              <Blur />
              <Image
                alt="pokemon image"
                src={SpriteURL}
                width={220}
                height={220}
                className="pointer-events-none z-10 select-none"
                draggable={false}
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="hidden">{Pokemon.name}</CardTitle>
            <div className="mx-1 flex items-center justify-between">
              <p className="cursor-default capitalize text-zinc-300">
                <span>
                  #{Pokemon.id}
                  {' - '}
                </span>
                {Pokemon.name}
              </p>
              {isIdFavorited ? (
                <Icons.heart
                  onClick={() => HandleDeleteFavorite(Pokemon.id)}
                  className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-900"
                />
              ) : (
                <Icons.heart
                  onClick={() => HandleAddFavorite(Pokemon.name, Pokemon.id)}
                  className="h-5 w-5 cursor-pointer text-zinc-500 hover:text-red-300"
                />
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="mx-1 mt-1 flex select-none items-center justify-start gap-1 ">
              {' '}
              {PokemonTypes.map((type, index) => (
                <div
                  key={index}
                  className={`text-normal cursor-pointer rounded-full border px-4 py-[0.5px] capitalize text-zinc-300 hover:bg-[#0f0f0f38]
                border-poke${CapitalizeFirstLetter(type)}`}
                >
                  {type}
                </div>
              ))}
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

export { PokemonCard }
