import { cookies } from 'next/headers'
import { PokemonLayout } from './_components/pokemon-layout'
import { PokemonPage } from './_components/pokemon-page'
import { PokemonSidePanel } from './_components/pokemon-side-panel'

export default function page() {
  const layout = cookies().get('react-resizable-panels:layout')

  const defaultLayout = (layout ? JSON.parse(layout.value) : undefined) as
    | number[]
    | undefined

  return (
    <PokemonLayout
      defaultLayout={defaultLayout}
      sidePanel={<PokemonSidePanel />}
    >
      <PokemonPage />
    </PokemonLayout>
  )
}
