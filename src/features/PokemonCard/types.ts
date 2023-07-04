export interface Pokemon {
  name: string
  id: number
  types: [
    {
      type: {
        name: string
      }
    },
  ]
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}
