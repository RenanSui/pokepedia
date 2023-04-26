export type StorageKey = 'PokedexFavorites' | '';

export const useGetLocal = <T,>(StorageKey: StorageKey) => {
	// ? return the current list
	const LocalStorage = localStorage.getItem(StorageKey) || '';
	const data = localStorage.getItem(StorageKey)
		? JSON.parse(LocalStorage)
		: [];
	return { data } as T;
};
