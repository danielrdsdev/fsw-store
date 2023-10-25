'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Loader2, LogOut, User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { ModalLogin } from './modal-login'

export const UserNav = () => {
  const { data: session, status } = useSession()

  return (
    <div className="hidden lg:block">
      {status === 'loading' ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <>
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="flex items-center gap-2 font-normal">
                  <Avatar className="h-8 w-8">
                    {session.user?.image && (
                      <AvatarImage
                        src={session.user.image}
                        alt="Imagem do usuário"
                      />
                    )}
                    <AvatarFallback>
                      {session.user?.name?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1 overflow-hidden">
                    <p className="truncate text-sm font-medium leading-none">
                      {session.user?.name}
                    </p>
                    <p className="truncate text-xs leading-none text-muted-foreground">
                      {session.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Meus pedidos</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log out
                    <DropdownMenuShortcut>
                      <LogOut className="h-4 w-4" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <ModalLogin>
              <Button>Fazer login</Button>
            </ModalLogin>
          )}
        </>
      )}
    </div>
  )
}
