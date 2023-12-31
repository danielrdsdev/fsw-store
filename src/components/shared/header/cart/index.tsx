'use client'

import { createCheckout } from '@/actions/checkout'
import { createOrder } from '@/actions/order'
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
  const { data, data: session } = useSession()
  const { products, subtotal, total, totalDiscount } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      return
    }

    setIsLoading(true)

    const order = await createOrder(products, (data?.user as any).id)

    const checkout = await createCheckout(products, order.id)

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
              <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center p-0 font-normal">
                {products.length}
              </Badge>
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex w-96 flex-col">
            <SheetHeader className="mb-5">
              <Badge
                variant="outline"
                className="w-fit border-2 border-primary px-3 py-2 font-bold uppercase"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrinho
              </Badge>
            </SheetHeader>

            <ScrollArea>
              <div className="h-full space-y-5 pr-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <CartItem
                      key={product.id}
                      product={computeProductTotalPrice(product as any) as any}
                    />
                  ))
                ) : (
                  <p className="text-center text-sm font-medium text-muted-foreground">
                    Seu carrinho está vazio.
                  </p>
                )}
              </div>
            </ScrollArea>

            {products.length > 0 && (
              <div className="mt-auto space-y-8">
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

                  <div className="flex items-center justify-between text-sm font-bold">
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
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
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
