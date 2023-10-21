'use client'

import { CartContext } from '@/components/providers/cart'
import { Badge } from '@/components/ui/badge'
import { SheetHeader } from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'

export const Cart = () => {
  const { products } = useContext(CartContext)

  return (
    <>
      <SheetHeader>
        <Badge
          variant="outline"
          className="px-3 w-fit py-2 border-2 font-bold uppercase border-primary"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Carrinho
        </Badge>
      </SheetHeader>

      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </>
  )
}
