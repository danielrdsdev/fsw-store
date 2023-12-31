import { Cart } from '@/components/shared/header/cart'
import { NAV } from '@/constants/nav'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { NavLink } from './nav-link'
import { UserNav } from './user-nav'

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b px-6 lg:px-32">
      <MobileNav />

      <Link href="/" className="text-lg font-bold text-primary">
        FSW <span className="font-semibold text-foreground">Store</span>
      </Link>

      <div className="hidden items-center lg:flex">
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
