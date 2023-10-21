'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import { ArrowDown, Minus, Plus, Truck } from 'lucide-react'
import { useState } from 'react'

type ProductInfoProps = {
  product: Pick<
    ProductWithTotalPrice,
    'basePrice' | 'description' | 'discountPercentage' | 'totalPrice' | 'name'
  >
}

export const ProductInfo = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1))
  }

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <section className="px-6">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <Badge className="px-2 py-0.5">
            <ArrowDown className="w-3 h-3" />
            {discountPercentage}%
          </Badge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-muted-foreground text-sm line-through">
          R$ {Number(basePrice).toFixed(2)}
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
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Button className="mt-8 uppercase w-full font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="bg-muted flex items-center w-full justify-between px-6 py-3 rounded-lg mt-5">
        <div className="flex items-center gap-3">
          <Truck className="w-10 h-10" />

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
