import { getLocalStorage, StorageKey } from './getLocalStorage'

export const addLocalStorage = (StorageKey: StorageKey, itemToAdd: unknown) => {
  const LocalStorageData = getLocalStorage(StorageKey) as []
  const AddLocalStorage = JSON.stringify([...LocalStorageData, itemToAdd])
  localStorage.setItem(StorageKey, AddLocalStorage)
}
