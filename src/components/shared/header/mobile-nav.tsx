'use client'
import { Icons } from '@/components/shared/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { NAV } from '@/constants/nav'
import { LogOut } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MobileNav = () => {
  const { data, status } = useSession()
  const pathname = usePathname()

  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="mt-6 space-y-4">
        {status === 'unauthenticated' ? (
          <Button
            onClick={() => signIn('google')}
            variant="outline"
            className="w-full justify-start"
          >
            <Icons.google className="w-4 h-4 mr-2" />
            Fazer login com Google
          </Button>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  {data?.user?.name?.[0].toUpperCase()}
                </AvatarFallback>
                {data?.user?.image && <AvatarImage src={data.user.image} />}
              </Avatar>

              <div className="flex flex-col">
                <p className="font-semibold">{data?.user?.name}</p>
                <p className="text-muted-foreground text-sm">
                  {data?.user?.email}
                </p>
              </div>

              <Button
                onClick={() => signOut()}
                variant="outline"
                size="icon"
                className="ml-auto"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        <Separator />

        <nav className="space-y-4">
          {NAV.map((item) => (
            <SheetClose key={item.path} asChild>
              <Button
                asChild
                variant="outline"
                data-active={pathname === item.path}
                className="w-full justify-start data-[active=true]:bg-accent"
              >
                <Link href={item.path}>
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </nav>
      </div>
    </SheetContent>
  )
}
