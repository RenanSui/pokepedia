import { PokemonList } from '@/src/features/PokemonList';
import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	subsets: ['latin'],
});

interface indexProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const Main: FC<indexProps> = ({ children, ...props }) => {
	return (
		<main {...props} className="m-auto w-full max-w-[1440px]">
			<div className="flex flex-auto flex-col items-center justify-center gap-6 md:gap-12">
				<h1
					className={`mt-16 text-5xl tracking-tight text-zinc-200 md:text-7xl ${playfair.className}`}
				>
					Search a Pokémon
				</h1>

				<label htmlFor="pokemon">Pokemon</label>
				<input
					type="text"
					id="pokemon"
					name="pokemon"
					className={`h-[35px] w-[660px] rounded-full px-6 font-medium outline-none`}
				/>
			</div>

			<PokemonList />

			{children}
		</main>
	);
};

export default Main;
