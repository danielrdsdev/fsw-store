'use client'

import { createCheckout } from '@/actions/checkout'
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
import { CartContext } from '@/providers/cart'
import { loadStripe } from '@stripe/stripe-js'
import { Loader2, ShoppingCart } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useContext, useState } from 'react'
import { CartItem } from './cart-item'

export const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()

  const handleFinishPurchaseClick = async () => {
    setIsLoading(true)

    const checkout = await createCheckout(products)

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    })
  }

  return (
    <>
      {session && (
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="relative">
              <Badge className="absolute -right-2 -top-2 p-0 flex items-center justify-center w-5 h-5 font-normal">
                {products.length}
              </Badge>
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-96">
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
                    <p>Sub Total</p>
                    <p>R$ {subtotal.toFixed(2)}</p>
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

                <MainButton
                  onClick={handleFinishPurchaseClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Processando...</span>
                    </>
                  ) : (
                    <span>Finalizar compra</span>
                  )}
                </MainButton>
              </div>
            )}
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}
