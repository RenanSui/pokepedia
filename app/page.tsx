'use client';
import PokemonProvider from '@/src/contexts/Pokemon/PokemonProvider';
import Header from '@/src/layouts/header';
import Main from '@/src/layouts/main/';

const Home = () => {
	return (
		<PokemonProvider>
			<Header />
			<Main />
		</PokemonProvider>
	);
};

export default Home;
