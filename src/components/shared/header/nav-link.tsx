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
      className="font-semibold text-muted-foreground data-[active=true]:text-primary transition-colors hover:text-primary px-8 border-r-2 last:border-0"
      {...props}
    />
  )
}
