export interface Favorites {
	name: string;
	id: number;
}

export const HandleFavorite = (name: string, id: number) => {
	const PokedexFavorites: Favorites[] = getLocalStorage();
	const FavoriteIds = PokedexFavorites.map((Favorite) => Favorite.id);

	// ? Remove Favorite
	if (FavoriteIds.includes(id)) removeFavorite(PokedexFavorites, id);

	// ? Add Favorite
	if (!FavoriteIds.includes(id)) addFavorite(PokedexFavorites, id, name);
};

export const getLocalStorage = (): Favorites[] => {
	// return the current list
	const PokedexFavorites = localStorage.getItem('PokedexFavorites') || '';

	return localStorage.getItem('PokedexFavorites')
		? JSON.parse(PokedexFavorites)
		: [];
};

export const removeFavorite = (PokedexFavorites: Favorites[], id: number) => {
	const FavoriteIndex = PokedexFavorites.findIndex(
		(Favorite) => Favorite.id === id
	);
	const newFavorite = [
		...PokedexFavorites.slice(0, FavoriteIndex),
		...PokedexFavorites.slice(FavoriteIndex + 1),
	];
	localStorage.setItem('PokedexFavorites', JSON.stringify(newFavorite));
};

export const addFavorite = (
	PokedexFavorites: Favorites[],
	id: number,
	name: string
) => {
	const AddFavorite = JSON.stringify([...PokedexFavorites, { id, name }]);
	localStorage.setItem('PokedexFavorites', AddFavorite);
};
