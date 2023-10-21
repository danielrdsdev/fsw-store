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
import { signIn, signOut, useSession } from 'next-auth/react'

export const UserNav = () => {
  const { status, data } = useSession()

  return (
    <>
      {status === 'loading' ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <div className="hidden lg:block">
          {status === 'unauthenticated' ? (
            <Button onClick={() => signIn('google')}>Fazer login</Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64" align="end" forceMount>
                <DropdownMenuLabel className="font-normal flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    {data?.user?.image && (
                      <AvatarImage
                        src={data.user.image}
                        alt="Imagem do usuário"
                      />
                    )}
                    <AvatarFallback>
                      {data?.user?.name?.[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-1 overflow-hidden">
                    <p className="text-sm font-medium leading-none truncate">
                      {data?.user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground truncate">
                      {data?.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Meus pedidos</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => signOut()}>
                    Log out
                    <DropdownMenuShortcut>
                      <LogOut className="w-4 h-4" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}
    </>
  )
}
