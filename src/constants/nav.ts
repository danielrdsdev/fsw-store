import { NavProps } from '@/types/nav'
import { Home, ListOrdered, PackageSearch, Percent } from 'lucide-react'

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
  {
    name: 'Meus pedidos',
    path: '/orders',
    icon: PackageSearch,
  },
]
