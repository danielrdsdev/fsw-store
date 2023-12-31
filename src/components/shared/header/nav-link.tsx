'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export const NavLink = ({ href, ...props }: ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="border-r-2 px-8 font-medium text-muted-foreground transition-colors last:border-0 hover:text-foreground data-[active=true]:text-foreground"
      {...props}
    />
  )
}
