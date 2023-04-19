export interface Favorites {
	name: string;
	id: number;
}

export const HandleFavorite = (name: string, id: number) => {
	const PokedexFavorites: Favorites[] = getLocalStorage();
	const FavoriteIds = PokedexFavorites.map((Favorite) => Favorite.id);

	// ? Remove Favorite
	if (FavoriteIds.includes(id)) {
		const FavoriteIndex = PokedexFavorites.findIndex(
			(Favorite) => Favorite.id === id
		);
		const newFavorite = [
			...PokedexFavorites.slice(0, FavoriteIndex),
			...PokedexFavorites.slice(FavoriteIndex + 1),
		];
		localStorage.setItem('PokedexFavorites', JSON.stringify(newFavorite));
		return null;
	}

	// ? Add Favorite
	if (!FavoriteIds.includes(id)) {
		const AddFavorite = JSON.stringify([...PokedexFavorites, { id, name }]);
		localStorage.setItem('PokedexFavorites', AddFavorite);
		return null;
	}
};

export const getLocalStorage = (): Favorites[] => {
	// return the current list
	const PokedexFavorites = localStorage.getItem('PokedexFavorites') || '';

	return localStorage.getItem('PokedexFavorites')
		? JSON.parse(PokedexFavorites)
		: [];
};
