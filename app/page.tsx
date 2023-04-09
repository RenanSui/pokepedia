import { BackgroundCircles, BlurBackground } from '@/src/features/Background';
import { MouseTracker } from '@/src/features/MouseTracker';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	weight: ['400', '500', '600', '700', '800', '900'],
});

const Home = () => {
	return (
		<>
			<BlurBackground />
			<BackgroundCircles />
			<MouseTracker />
			<header></header>
			<main className="m-auto w-full max-w-[1440px]">
				<div className="flex flex-auto flex-col items-center justify-center gap-6 md:gap-12">
					<h1
						className={`mt-16 text-5xl tracking-tight text-zinc-200 md:text-7xl ${playfair.className}`}
					>
						Pokédex
					</h1>

					<input
						type="text"
						className={`h-[35px] w-[280px] rounded-full px-6 font-medium outline-none`}
					/>
				</div>
			</main>
		</>
	);
};

// 260x225

export default Home;

// bg-[#1F2628] bg color
// border-[#42443A] yellow
// border-[#304358] blue
