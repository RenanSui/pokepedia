'use client'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../utils/LocalStorage/getLocalStorage'

export interface Favorites {
  name: string
  id: number
}

const PokedexFavorites = getLocalStorage<Favorites[]>('PokedexFavorites')
const initialState = PokedexFavorites

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorites>) => {
      const newFavorite = [...state, action.payload]
      return newFavorite
    },
    removeFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const ItemIndex = state.findIndex((item) => item.id === action.payload.id)
      return [...state.slice(0, ItemIndex), ...state.slice(ItemIndex + 1)]
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
