import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from '../icons'
import { Shell } from '../shell'
import { buttonVariants } from '../ui/button'
import { ThemeToggle } from './theme-toggle'

export const SiteFooter = () => {
  return (
    <footer className="relative z-50 w-full border-t bg-background">
      <Shell className="max-w-none py-2 md:py-2">
        <section className="flex items-center space-x-4">
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            Built by{' '}
            <Link
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              className="font-semibold transition-colors hover:text-foreground"
            >
              Sui
              <span className="sr-only">Twitter</span>
            </Link>
            .
          </div>
          <div className="flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                }),
              )}
            >
              <Icons.github className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ThemeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  )
}
