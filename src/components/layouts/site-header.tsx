import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

type SiteHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean
}

export const SiteHeader = async ({ fullWidth }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className={cn('container flex items-center', fullWidth && 'max-w-none')}
      >
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2"></nav>
        </div>
      </div>
    </header>
  )
}
