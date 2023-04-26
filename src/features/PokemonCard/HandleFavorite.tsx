import { useGetLocal } from '@/src/hooks/useGetLocal';
import { addLocalStorage } from '@/src/utils/LocalStorage/addLocalStorage';
import { removeLocalStorage } from '@/src/utils/LocalStorage/removeLocalStorage';

export interface Favorites {
	name: string;
	id: number;
}

export const HandleFavorite = (name: string, id: number) => {
	const PokedexFavorites = useGetLocal<Favorites[]>('PokedexFavorites');
	const FavoriteIds = PokedexFavorites.map((Favorite) => Favorite.id);

	const Pokemon = { name, id };

	// ? Remove Favorite
	if (FavoriteIds.includes(id)) removeLocalStorage('PokedexFavorites', id);

	// ? Add Favorite
	if (!FavoriteIds.includes(id)) addLocalStorage('PokedexFavorites', Pokemon);
};
