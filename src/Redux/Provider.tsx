'use client'
import { JSX, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface ProviderProps {
  children?:
    | string
    | JSX.Element
    | JSX.Element[]
    | (string | JSX.Element)[]
    | ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default Providers
