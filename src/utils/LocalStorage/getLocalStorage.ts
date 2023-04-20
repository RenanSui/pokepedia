export const getLocalStorage = <T>(StorageKey: 'PokedexFavorites'): T => {
	// ? return the current list
	const LocalStorageData = localStorage.getItem(StorageKey) || '';
	return localStorage.getItem(StorageKey) ? JSON.parse(LocalStorageData) : [];
};
