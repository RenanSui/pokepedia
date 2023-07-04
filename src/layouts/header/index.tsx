import { addFavorite } from '@/Redux/favoriteSlice'
import { RootState } from '@/Redux/store'
import { FC, HTMLAttributes, JSX } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface indexProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

// const Pokemons = [
// 	{ id: 1, name: 'bulbasaur' },
// 	{ id: 25, name: 'pikachu' },
// 	{ id: 6, name: 'charizard' },
// ];

const Header: FC<indexProps> = ({ children, ...props }) => {
  // const [Pokedex, setPokedex] = useState(
  // 	useGetLocal<DataFavorites>('PokedexFavorites')
  // );

  // const { data: PokedexFavorites } = Pokedex;

  // const { data: Favorites } = useGetLocal<DataFavorites>('PokedexFavorites');

  const Favorites = useSelector((state: RootState) => state.favorite)
  const dispatch = useDispatch()

  return (
    <header {...props} className="h-[200px] text-zinc-300">
      {/* {PokedexFavorites.map((Pokemon) => (
				<div key={Pokemon.id} className="absolute">
					<div className="relative ml-48 mt-48 h-[450px] w-[450px] cursor-pointer overflow-hidden rounded-full bg-[#313338]">
						<CardCircle
							circle={0}
							className={`bg-pokeGrass`}
							key={0}
						/>
						<CardCircle
							circle={1}
							className={`bg-pokePoison`}
							key={1}
						/>
						<CardBlur className="rounded-full" />
						<CardImage
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Pokemon.id}.png`}
							alt={Pokemon.name}
							size={'md'}
							className="z-10"
							draggable={false}
						/>
					</div>
				</div>
			))} */}

      <pre>{JSON.stringify(Favorites, null, 2)}</pre>
      <button
        onClick={() => dispatch(addFavorite({ id: 5, name: 'pikachu' }))}
        className="bg-zinc-700 px-3 py-3"
      >
        CHANGE
      </button>

      {children}
    </header>
  )
}

export default Header
