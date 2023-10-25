'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { NAV } from '@/constants/nav'
import { LogIn, LogOut, Menu, PackageSearch } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModalLogin } from './modal-login'

export const MobileNav = () => {
  const { data: session } = useSession()
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-96">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            {session ? (
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {session.user?.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {session.user?.image && (
                      <AvatarImage src={session.user.image} />
                    )}
                  </Avatar>

                  <div className="flex flex-col overflow-hidden">
                    <p className="font-semibold truncate">
                      {session.user?.name}
                    </p>
                    <p className="text-muted-foreground text-sm truncate">
                      {session.user?.email}
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
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start"
                  >
                    <Link href="/orders">
                      <PackageSearch className="w-4 h-4 mr-2" />
                      Meus pedidos
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            ) : (
              <SheetClose asChild>
                <ModalLogin>
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Fazer login
                  </Button>
                </ModalLogin>
              </SheetClose>
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
      </Sheet>
    </div>
  )
}
