'use client'

import { CartContext } from '@/components/providers/cart'
import { Badge } from '@/components/ui/badge'
import { SheetHeader } from '@/components/ui/sheet'
import { computeProductTotalPrice } from '@/helpers/product'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { CartItem } from './cart-item'

export const Cart = () => {
  const { products } = useContext(CartContext)

  return (
    <div className="space-y-5">
      <SheetHeader>
        <Badge
          variant="outline"
          className="px-3 w-fit py-2 border-2 font-bold uppercase border-primary"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Carrinho
        </Badge>
      </SheetHeader>

      {products.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          Seu carrinho está vazio.
        </p>
      ) : (
        <div className="space-y-5">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))}
        </div>
      )}
    </div>
  )
}
