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
    <section className="lg:rounded-lg lg:bg-muted lg:p-10">
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
        <p className="text-sm text-muted-foreground line-through">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center">
        <Button
          onClick={handleDecreaseQuantityClick}
          disabled={quantity === 1}
          variant="outline"
          size="icon"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span className="flex h-10 w-10 items-center justify-center text-sm">
          {quantity}
        </span>

        <Button
          onClick={handleIncreaseQuantityClick}
          variant="outline"
          size="icon"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8 space-y-3">
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

      <div className="mt-5 flex w-full items-center justify-between rounded-lg bg-[#2A2A2A] px-6 py-3">
        <div className="flex items-center gap-3">
          <Icons.truck />

          <div className="flex flex-col gap-1">
            <p className="text-sm">
              Entrega via{' '}
              <span className="font-bold text-foreground">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </section>
  )
}
