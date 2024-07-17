import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import React from 'react'

type TestProviderOptions = { theme?: string }

interface CustomOptions extends RenderOptions, TestProviderOptions {}

const createTestProviders = ({ theme }: TestProviderOptions) => {
  const TestProviderComponent = ({
    children,
  }: {
    children: React.ReactNode
  }) => (
    <ThemeProvider defaultTheme={theme} enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  )

  return TestProviderComponent
}

const customRender = (
  ui: React.ReactElement,
  { theme, ...options }: CustomOptions = {},
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options })

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react'

// override render method
// eslint-disable-next-line import/export
export { customRender as render }
