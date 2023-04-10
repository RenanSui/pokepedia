import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	weight: ['400', '500', '600', '700', '800', '900'],
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

				<input
					type="text"
					className={`h-[35px] w-[660px] rounded-full px-6 font-medium outline-none`}
				/>
			</div>
			{children}

			{/* <section className="m-8">
				<div className="flex flex-col">
					<article className="relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-lg bg-[#313338] shadow-xl">
						<h1 className="hidden">Bulbasaur</h1>
						<div className="absolute -top-[25%] -right-[25%] h-[200px] w-[200px] rounded-full bg-[#4A7E65]" />
						<div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-[100px]" />
						<div className="absolute top-1/2 left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 bg-[url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png)] bg-cover" />
					</article>
					<div className="flex justify-between">
						<h1
							className={`font-medium tracking-wider text-zinc-300 ${playfair.className}`}
						>
							Bulbasaur
						</h1>

						<div className="h-[24px] w-[24px] rounded-full bg-zinc-300"></div>
					</div>
				</div>
			</section> */}
		</main>
	);
};

export default Main;
