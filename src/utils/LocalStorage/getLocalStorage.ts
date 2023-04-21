export type StorageKey = 'PokedexFavorites';

export const getLocalStorage = <T>(StorageKey: StorageKey): T => {
	// ? return the current list
	const LocalStorageData = localStorage.getItem(StorageKey) || '';
	return localStorage.getItem(StorageKey) ? JSON.parse(LocalStorageData) : [];
};
