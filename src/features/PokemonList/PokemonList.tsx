'use client';
import { PokemonCard } from '@/src/components/cards';
import CardSkeleton from '@/src/components/skeletons/CardSkeleton';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface PokemonListProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
}

const PokemonList: FC<PokemonListProps> = ({ className, ...props }) => {
	const array20 = [];
	const [pokeList, setPokeList] = useState();

	for (let i = 0; i < 20; i++) {
		array20.push(i);
	}

	useEffect(() => {
		const getPokemons = async () => {
			const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
			console.log(data.data.results);
			setPokeList(data.data.results);
		};
		getPokemons();
	}, []);

	return (
		<section
			{...props}
			className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
		>
			{pokeList && (
				<>
					<PokemonCard />
					<PokemonCard />
					<PokemonCard />
					<PokemonCard />
				</>
			)}
			{!pokeList &&
				array20.map((item, index) => {
					return <CardSkeleton key={index} />;
				})}
		</section>
	);
};

export default PokemonList;
