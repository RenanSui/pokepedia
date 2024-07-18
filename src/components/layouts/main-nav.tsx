import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '../icons'
import { Button, buttonVariants } from '../ui/button'

export const dashboardConfig = {
  SidebarNav: [
    {
      title: 'Lobby',
      href: '/',
      disabled: false,
      icon: 'listBulletIcon',
      description: 'Manage your finances',
      items: [],
    },
    {
      title: 'Pokémons',
      href: '/pokemons',
      disabled: true,
      icon: 'avatarIcon',
      description: 'Manage your account settings',
      items: [],
    },
  ],
}

export function MainNav() {
  return (
    <div className="hidden w-full items-center gap-6 lg:flex">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <span className="hidden items-center gap-2 text-lg font-bold lg:flex">
          <Image
            src="/Assets/images/logo-dark.png"
            alt="Pokeball"
            className="size-6 shrink-0 rounded-full outline outline-2 outline-white "
            width={24}
            height={24}
          />
          {siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex items-center justify-center gap-2 py-2.5">
        {dashboardConfig.SidebarNav.map((nav) => {
          return (
            <Link
              key={`nav-${nav.title}`}
              href={nav.href}
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              {nav.title}
            </Link>
          )
        })}
      </div>
      <Button
        variant="outline"
        className="relative ml-auto size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      >
        <Icons.search className="size-4 shrink-0" />
      </Button>
    </div>
  )
}
