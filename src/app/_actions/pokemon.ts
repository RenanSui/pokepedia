import { StorageKey } from '@/types'

export const getLocalStorage = (StorageKey: StorageKey) => {
	if (typeof window !== 'undefined') {
		if (localStorage.getItem(StorageKey)) {
			// Get Local Sotrage
			const LocalStorageData = localStorage.getItem(StorageKey) || ''
			return localStorage.getItem(StorageKey)
				? JSON.parse(LocalStorageData)
				: []
		} else {
			return []
		}
	}
}

export const addLocalStorage = (StorageKey: StorageKey, itemToAdd: unknown) => {
	// Add to Local Storage
	const LocalStorageData = getLocalStorage(StorageKey) as []
	const AddLocalStorage = JSON.stringify([...LocalStorageData, itemToAdd])
	localStorage.setItem(StorageKey, AddLocalStorage)
}

export const removeLocalStorage = (StorageKey: StorageKey, id: number) => {
	// Remove from Local Storage
	const LocalStorageData = getLocalStorage(StorageKey) as [{ id: number }]
	const ItemIndex = LocalStorageData.findIndex((item) => item.id === id)
	const newFavorite = [
		...LocalStorageData.slice(0, ItemIndex),
		...LocalStorageData.slice(ItemIndex + 1),
	]

	localStorage.setItem(StorageKey, JSON.stringify(newFavorite))
}
