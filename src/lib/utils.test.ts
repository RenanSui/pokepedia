import { describe, expect, it } from 'vitest'
import { CapitalizeFirstLetter, cn } from './utils'

describe('Utils', () => {
  it('Should return the correct class', () => {
    expect(cn('bg-red-500', 'bg-green-500')).toBe('bg-green-500')
  })

  it('Should capitalize first letter', () => {
    expect(CapitalizeFirstLetter('hello world')).toBe('Hello world')
  })
})
