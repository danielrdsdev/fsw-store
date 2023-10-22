'use client'

import { CartContext } from '@/components/providers/cart'
import { MainButton } from '@/components/shared/main-button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { computeProductTotalPrice } from '@/helpers/product'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { CartItem } from './cart-item'

export const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          <Badge className="absolute -right-2 -top-2 p-0 flex items-center justify-center w-5 h-5 font-normal">
            {products.length}
          </Badge>
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="mb-5">
          <Badge
            variant="outline"
            className="px-3 w-fit py-2 border-2 font-bold uppercase border-primary"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Carrinho
          </Badge>
        </SheetHeader>

        <ScrollArea>
          <div className="space-y-5 h-full pr-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center text-sm text-muted-foreground font-medium">
                Seu carrinho está vazio.
              </p>
            )}
          </div>
        </ScrollArea>

        {products.length > 0 && (
          <div className="space-y-8 mt-auto">
            <div className="space-y-3">
              <Separator />
              <div className="flex items-center justify-between text-xs">
                <p>Subtotal</p>
                <p>R$ {subTotal.toFixed(2)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-xs">
                <p>Descontos</p>
                <p>- R$ {totalDiscount.toFixed(2)}</p>
              </div>

              <Separator />

              <div className="flex items-center justify-between font-bold text-sm">
                <p>Total</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>
            </div>

            <MainButton>Finalizar compra</MainButton>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
