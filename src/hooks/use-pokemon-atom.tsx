import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type PokemonSelect = { selected: string | null }
const configSelectAtom = atom<PokemonSelect>({ selected: null })

export function usePokemonAtom() {
  return useAtom(configSelectAtom)
}

type PokemonConfigName = boolean
const configNameAtom = atomWithStorage<PokemonConfigName>(
  'configNameAtom',
  true,
)

export function useConfigNameAtom() {
  return useAtom(configNameAtom)
}

type PokemonConfigTypes = boolean
const configTypesAtom = atomWithStorage<PokemonConfigTypes>(
  'configTypesAtom',
  true,
)

export function useConfigTypesAtom() {
  return useAtom(configTypesAtom)
}

type PokemonPaginationSize = number
const configPaginationSizeAtom = atomWithStorage<PokemonPaginationSize>(
  'configPaginationSizeAtom',
  10,
)

export function useConfigPaginationSize() {
  return useAtom(configPaginationSizeAtom)
}
