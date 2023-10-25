import { Button } from '@/components/ui/button'
import { CartContext, CartProduct } from '@/providers/cart'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

type CartItemProps = {
  product: CartProduct
}

export const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleRemoveProductsClick = () => {
    removeProductFromCart(product.id)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-muted">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            fill
            sizes="100%"
            className="object-contain p-3"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="space-y-0.5">
            <p className="text-xs">{product.name}</p>

            <div className="flex items-center gap-2">
              <p className="text-sm font-bold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              {product.discountPercentage > 0 && (
                <p className="text-xs text-muted-foreground line-through">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <Button
              onClick={handleDecreaseQuantityClick}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <Minus className="h-4 w-4" />
            </Button>

            <span className="flex h-8 w-8 items-center justify-center text-xs">
              {product.quantity}
            </span>

            <Button
              onClick={handleIncreaseQuantityClick}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button onClick={handleRemoveProductsClick} variant="outline" size="icon">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  )
}
