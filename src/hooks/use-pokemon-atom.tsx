import { atom, useAtom } from 'jotai'

type PokemonSelect = { selected: number | null }
const configSelectAtom = atom<PokemonSelect>({ selected: null })

export function usePokemonAtom() {
  return useAtom(configSelectAtom)
}

type PokemonConfigName = boolean
const configNameAtom = atom<PokemonConfigName>(true)

export function useConfigNameAtom() {
  return useAtom(configNameAtom)
}

type PokemonConfigTypes = boolean
const configTypesAtom = atom<PokemonConfigTypes>(true)

export function useConfigTypesAtom() {
  return useAtom(configTypesAtom)
}
