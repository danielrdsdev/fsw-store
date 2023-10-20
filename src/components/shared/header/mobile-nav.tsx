import { Button } from '@/components/ui/button'
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { NAV } from '@/constants/nav'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export const MobileNav = () => {
  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="mt-4 space-y-4">
        <Button variant="outline" className="w-full justify-start">
          <LogIn className="w-4 h-4 mr-2" />
          Fazer login
        </Button>
        {NAV.map((item) => (
          <SheetClose key={item.path} asChild>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href={item.path}>
                {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                {item.name}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
    </SheetContent>
  )
}
