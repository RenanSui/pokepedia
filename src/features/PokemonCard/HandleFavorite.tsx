'use client'
import { addFavorite, removeFavorite } from '@/Redux/favoriteSlice'
import { useGetLocal } from '@/hooks/useGetLocal'
import { addLocalStorage } from '@/utils/LocalStorage/addLocalStorage'
import { removeLocalStorage } from '@/utils/LocalStorage/removeLocalStorage'
import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'

export interface Favorites {
  name: string
  id: number
}

export interface DataFavorites {
  data: Favorites[]
}

export const HandleFavorite = (
  name: string,
  id: number,
  dispatch: Dispatch<AnyAction>,
) => {
  const { data: Favorites } = useGetLocal<DataFavorites>('PokedexFavorites')
  const FavoriteIds = Favorites.map((Favorite) => Favorite.id)

  const Pokemon = { name, id }

  // ? Remove Favorite
  if (FavoriteIds.includes(id)) {
    removeLocalStorage('PokedexFavorites', id)
    dispatch(removeFavorite({ id }))
  }

  // ? Add Favorite
  if (!FavoriteIds.includes(id)) {
    addLocalStorage('PokedexFavorites', Pokemon)
    dispatch(addFavorite(Pokemon))
  }
}
