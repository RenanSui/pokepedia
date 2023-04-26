import CapitalizeFirstLetter from '@/src/utils/CapitalizeFirstLetter';
import { FC } from 'react';
import { Pokemon } from './types';
import { Pill } from '@/src/components/Pill/Pill';

interface PillsProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	Pokemon: Pokemon;
}

export const Pills: FC<PillsProps> = ({ Pokemon }) => {
	const PokemonTypes = Pokemon
		? Pokemon?.types.map((item) => item.type.name)
		: [''];

	return (
		<div className="mx-1 mt-1 flex items-center justify-start gap-1">
			{PokemonTypes.map((type, index) => (
				<Pill
					key={index}
					pill
					size={'xs'}
					className={`
                    border-poke${CapitalizeFirstLetter(
						type
					)} hover:bg-[#0f0f0f38]`}
				>
					{CapitalizeFirstLetter(type)}
				</Pill>
			))}
		</div>
	);
};
