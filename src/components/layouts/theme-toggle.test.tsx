/**
 * @jest-environment jsdom
 */
import { fireEvent, render } from '@/lib/test-utils'
import { useTheme } from 'next-themes'
import React from 'react'
import { beforeAll, expect, it, vi } from 'vitest'
import { ThemeToggle } from './theme-toggle'

beforeAll(() => {
  window.PointerEvent = MouseEvent as typeof PointerEvent
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

const ThemeSpy: React.FC = () => {
  const { theme } = useTheme()
  return <span data-testid="theme-spy">{theme}</span>
}

it('Toggles the theme', async () => {
  const { getByTestId } = render(
    <>
      <ThemeToggle />
      <ThemeSpy />
    </>,
    { theme: 'dark' }, // Is also the default value, explicitly adding it here makes the test a bit more easy to read
  )

  // Toggle dropdown
  const dropdowToggler = getByTestId('theme-dropdown-trigger')
  fireEvent.pointerDown(dropdowToggler)

  // Toggle theme
  const toggler = getByTestId('theme-button')
  fireEvent.click(toggler)

  const spy = getByTestId('theme-spy').textContent
  expect(spy).toBe('light')
})
