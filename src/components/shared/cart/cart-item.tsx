import { CartContext, CartProduct } from '@/components/providers/cart'
import { Button } from '@/components/ui/button'
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
        <div className="relative h-[77px] w-[77px] bg-muted rounded-lg flex items-center justify-center">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            fill
            sizes="100%"
            className="p-3 object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="space-y-1">
            <p className="text-xs">{product.name}</p>

            <div className="flex items-center gap-2">
              <p className="font-bold text-sm">
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
              className="w-8 h-8"
            >
              <Minus className="w-4 h-4" />
            </Button>

            <span className="text-xs w-8 h-8 flex items-center justify-center">
              {product.quantity}
            </span>

            <Button
              onClick={handleIncreaseQuantityClick}
              variant="outline"
              size="icon"
              className="w-8 h-8"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button onClick={handleRemoveProductsClick} variant="outline" size="icon">
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  )
}
