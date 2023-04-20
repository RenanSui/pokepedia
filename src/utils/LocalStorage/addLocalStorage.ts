import { getLocalStorage } from './getLocalStorage';

export const addLocalStorage = (
	StorageKey: 'PokedexFavorites',
	itemToAdd: unknown
) => {
	const LocalStorageData = getLocalStorage(StorageKey) as [];
	const AddLocalStorage = JSON.stringify([...LocalStorageData, itemToAdd]);
	localStorage.setItem(StorageKey, AddLocalStorage);
};
