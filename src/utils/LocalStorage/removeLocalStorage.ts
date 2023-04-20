import { getLocalStorage } from './getLocalStorage';

export const removeLocalStorage = (
	StorageKey: 'PokedexFavorites',
	id: number
) => {
	const LocalStorageData = getLocalStorage(StorageKey) as [{ id: number }];
	const ItemIndex = LocalStorageData.findIndex((item) => item.id === id);
	const newFavorite = [
		...LocalStorageData.slice(0, ItemIndex),
		...LocalStorageData.slice(ItemIndex + 1),
	];

	localStorage.setItem(StorageKey, JSON.stringify(newFavorite));
};
