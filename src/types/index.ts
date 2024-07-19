import { Icons } from '@/components/icons'

export interface NavItem {
  id?: string
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type PokedexResults = { name: string; url: string }

export type PokedexList = {
  count: number
  next: string
  previous: string
  results: PokedexResults[]
}

export type Pokemon = {
  name: string
  id: number
  height: number
  weight: number
  types: { type: { name: string } }[]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
