'use client'

import { DiscountBadge } from '@/components/shared/discount-badge'
import { Icons } from '@/components/shared/icons'
import { MainButton } from '@/components/shared/main-button'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { ProductWithTotalPrice } from '@/helpers/product'
import { CartContext } from '@/providers/cart'
import { Minus, Plus } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useContext, useState } from 'react'

type ProductInfoProps = {
  product: ProductWithTotalPrice
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { data: session, status } = useSession()

  const [quantity, setQuantity] = useState(1)

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity })
    toast({
      title: 'Produto adicionado ao carrinho',
      description: `${product.name} foi adicionado ao carrinho.`,
      duration: 3000,
    })
  }

  return (
    <section className="lg:p-10 lg:bg-muted lg:rounded-lg">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}%</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-muted-foreground text-sm line-through">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="flex items-center mt-4">
        <Button
          onClick={handleDecreaseQuantityClick}
          disabled={quantity === 1}
          variant="outline"
          size="icon"
        >
          <Minus className="w-4 h-4" />
        </Button>

        <span className="text-sm w-10 h-10 flex items-center justify-center">
          {quantity}
        </span>

        <Button
          onClick={handleIncreaseQuantityClick}
          variant="outline"
          size="icon"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      <MainButton
        onClick={handleAddToCartClick}
        disabled={status === 'unauthenticated'}
        className="mt-8"
      >
        {session ? 'Adicionar ao carrinho' : 'Faça login para continuar'}
      </MainButton>

      <div className="bg-[#2A2A2A] flex items-center w-full justify-between px-6 py-3 rounded-lg mt-5">
        <div className="flex items-center gap-3">
          <Icons.truck />

          <div className="flex flex-col gap-1">
            <p className="text-sm">
              Entrega via{' '}
              <span className="font-bold text-foreground">FSPacket®</span>
            </p>
            <p className="text-[#8162FF] text-xs">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="font-bold text-xs">Frete Grátis</p>
      </div>
    </section>
  )
}
