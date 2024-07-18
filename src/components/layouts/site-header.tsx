import { MainNav } from './main-nav'

export const SiteHeader = async () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center">
        <MainNav />
        {/* <MobileNav items={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2"></nav>
        </div>
      </div>
    </header>
  )
}
