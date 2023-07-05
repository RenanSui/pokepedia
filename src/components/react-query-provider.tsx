'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface ProviderProps {
	children?: ReactNode
}

const ReactQueryProvider = ({ children }: ProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export { ReactQueryProvider }
