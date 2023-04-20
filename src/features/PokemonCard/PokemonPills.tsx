import Paragraph from '@/src/components/paragraph/Paragraph';
import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { FC } from 'react';
import { Pokemon } from './PokemonCard';

interface PokemonPillsProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	Pokemon: Pokemon;
}

const PokemonPills: FC<PokemonPillsProps> = ({ children, Pokemon }) => {
	const PokemonTypes = Pokemon
		? Pokemon?.types.map((item) => item.type.name)
		: [''];

	return (
		<div className="mx-1 mt-1 flex items-center justify-start gap-1">
			{PokemonTypes.map((type, index) => (
				<Paragraph
					key={index}
					pill
					size={'xs'}
					className={`
                    border-poke${CapitalizeFirstLetter(
						type
					)} hover:bg-[#0f0f0f38]`}
				>
					{type}
				</Paragraph>
			))}
		</div>
	);
};

export default PokemonPills;
