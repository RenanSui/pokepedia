import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	weight: ['400', '500', '600', '700', '800', '900'],
});

interface PokemonListProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const PokemonList: FC<PokemonListProps> = ({ className, ...props }) => {
	return (
		<section {...props} className={`${className}`}>
			<article className="w-[250px]">
				<div className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl">
					<div className="absolute -top-[25%] -right-[25%] h-[200px] w-[200px] rounded-full bg-[#4A7E65]" />
					<div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-[100px]" />
					<div className="absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 bg-[url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png)] bg-cover" />
				</div>
				<div className="mx-1 mt-1 flex justify-between">
					<h1
						className={`cursor-default font-bold tracking-widest text-zinc-300 ${playfair.className}`}
					>
						Bulbasaur
					</h1>
					<div className="h-[24px] w-[24px] cursor-pointer rounded-full bg-zinc-300" />
				</div>
				<div className="mx-1 mt-1 flex justify-start gap-1">
					<p
						className={`cursor-pointer rounded-full border border-[#4A7E65] py-[2px] px-3 text-xs font-normal tracking-widest text-zinc-300 hover:bg-[#4a7e6538] ${playfair.className}`}
					>
						Grass
					</p>
				</div>
			</article>
		</section>
	);
};

export default PokemonList;
