import { NextThemesProvider } from './theme-provider'

export const Providers = async ({
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <NextThemesProvider>{children}</NextThemesProvider>
}
