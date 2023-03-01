import { PokemonRender } from '@/src/utils/handlePokemonRender';

const Main = async () => {
  const offset = 0;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  const pokemonsData = await response.json();

  const newPokemon = pokemonsData.results.map(
    (poke: { name: string }) => poke.name
  );

  return (
    <main>
      <PokemonRender pokemonData={newPokemon} />
    </main>
  );
};

export default Main;
