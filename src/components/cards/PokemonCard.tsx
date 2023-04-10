import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Playfair_Display } from 'next/font/google';
import { FC } from 'react';
import { Icon } from '../Icons';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import BlurCard from './BlurCard';
import Card from './Card';
import { CardCircle } from './CardCircle';
import { ImageCard } from './ImageCard';

const playfair = Playfair_Display({
	variable: '--playfair-font',
	subsets: ['latin'],
});

interface PokemonCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const BG_URL = `bg-[url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png)]`;

const PokemonCard: FC<PokemonCardProps> = ({ ...props }) => {
	return (
		<article {...props} className="mt-8 w-[250px]">
			<Card>
				<CardCircle position={'top_right'} className="bg-[#4A7E65]" />
				<CardCircle position={'top_left'} className="bg-[#7e4a4a]" />
				<BlurCard />
				<ImageCard className={`${BG_URL}`} />
			</Card>
			<div className="mx-1 mt-1 flex justify-between">
				<Heading className={`${playfair.className}`}>Bulbasaur</Heading>
				<Icon icon={faHeart} className=" hover:text-red-300" />
			</div>
			<div className="mx-1 mt-1 flex items-center justify-start gap-1">
				<Paragraph
					pill
					size={'xs'}
					className="border-[#4A7E65] hover:bg-[#4a7e6538]"
				>
					Grass
				</Paragraph>
			</div>
		</article>
	);
};

export default PokemonCard;
