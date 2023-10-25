import { Home, ListOrdered, LucideIcon, Percent } from 'lucide-react'

type NavProps = {
  name: string
  path: string
  icon?: LucideIcon
}

export const NAV: NavProps[] = [
  {
    name: 'Início',
    path: '/',
    icon: Home,
  },
  {
    name: 'Ofertas',
    path: '/deals',
    icon: Percent,
  },
  {
    name: 'Catálogo',
    path: '/catalog',
    icon: ListOrdered,
  },
]
