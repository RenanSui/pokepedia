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
	const [pokeList, setPokeList] = useState<string[]>();

	for (let i = 0; i < 20; i++) {
		array20.push(i);
	}

	useEffect(() => {
		const getPokemons = async () => {
			const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
			const urls: string[] = data.data.results.map(
				(item: { url: string }) => item.url
			);
			setTimeout(() => {
				console.log('aoba');
				setPokeList(urls);
			}, 5000);
		};
		getPokemons();
	}, []);

	return (
		<section
			{...props}
			className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
		>
			{pokeList
				? pokeList.map((item, index) => {
						return <PokemonCard url={item} key={index} />;
				  })
				: array20.map((item, index) => {
						return <CardSkeleton key={index} />;
				  })}
		</section>
	);
};

export default PokemonList;

// return (
// 	<section
// 		{...props}
// 		className={`flex flex-wrap items-center justify-center gap-6 ${className}`}
// 	>
// 		{pokeList
// 			? pokeList.map((item, index) => {
// 					return <PokemonCard url={item} key={index} />;
// 			  })
// 			: array20.map((item, index) => {
// 					return <CardSkeleton key={index} />;
// 			  })}
// 	</section>
// );
