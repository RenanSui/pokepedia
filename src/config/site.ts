import { MainNavItem } from '@/types'

const links = {
  x: 'https://twitter.com/adsjksui',
  github: 'https://github.com/RenanSui/pokepedia',
  githubAccount: 'https://github.com/RenanSui',
  discord: 'https://discord.com/users/seyonsui',
}

export const siteConfig = {
  name: 'Poképedia',
  links,
  mainNav: [
    {
      title: 'Navigation',
      items: [
        {
          title: 'Lobby',
          href: '/',
          disabled: false,
          description: 'Manage your finances',
          items: [],
        },
        {
          title: 'Pokémons',
          href: '/pokemons',
          disabled: false,
          description: 'Manage your account settings',
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
}
