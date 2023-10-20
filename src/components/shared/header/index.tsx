import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu, ShoppingCart } from 'lucide-react'
import { MobileNav } from './mobile-nav'

export const Header = () => {
  return (
    <header className="h-20 border-b px-6 flex items-center justify-between">
      <Sheet>
        <SheetHeader>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
        </SheetHeader>
        <SheetContent side="left">
          <MobileNav />
        </SheetContent>
      </Sheet>
      <h1 className="font-bold text-lg text-violet-600">
        FSW <span className="font-semibold text-primary">Store</span>
      </h1>
      <Sheet>
        <SheetHeader>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </SheetTrigger>
        </SheetHeader>
        <SheetContent>
          <MobileNav />
        </SheetContent>
      </Sheet>
    </header>
  )
}
