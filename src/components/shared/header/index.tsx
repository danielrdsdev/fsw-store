import { Cart } from '@/components/shared/cart'
import { NAV } from '@/constants/nav'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { NavLink } from './nav-link'
import { UserNav } from './user-nav'

export const Header = () => {
  return (
    <header className="h-20 border-b px-6 lg:px-32 flex items-center justify-between sticky top-0 bg-background z-50">
      <MobileNav />

      <Link href="/" className="font-bold text-lg text-primary">
        FSW <span className="font-semibold text-foreground">Store</span>
      </Link>

      <div className="hidden lg:flex items-center">
        {NAV.map((item) => (
          <NavLink key={item.path} href={item.path}>
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <UserNav />
        <Cart />
      </div>
    </header>
  )
}
