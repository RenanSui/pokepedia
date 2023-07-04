import { Heading } from '@/components/heading/Heading'
import PokedexList from '@/features/PokedexList/PokedexList'
import { FC, HTMLAttributes, JSX } from 'react'

interface MainProps extends HTMLAttributes<HTMLDivElement> {
  children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[]
}

const Main: FC<MainProps> = ({ children, ...props }) => {
  return (
    <main {...props} className="m-auto w-full max-w-[1440px]">
      <div className="flex flex-auto flex-col items-center justify-center gap-6 md:gap-12">
        <Heading size={'large'}>Search a Pokémon</Heading>

        <label htmlFor="pokemon">Pokemon</label>

        <input
          type="text"
          id="pokemon"
          name="pokemon"
          className={`h-[35px] w-[660px] rounded-full px-6 font-medium outline-none`}
        />
      </div>

      <PokedexList />

      {children}
    </main>
  )
}

export default Main
