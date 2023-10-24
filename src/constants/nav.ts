import { NavProps } from '@/types/nav'
import { Home, ListOrdered, Percent } from 'lucide-react'

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
