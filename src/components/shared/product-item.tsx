import { ProductWithTotalPrice } from '@/helpers/product'
import Image from 'next/image'
import Link from 'next/link'
import { DiscountBadge } from './discount-badge'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`} className="flex flex-col gap-4">
      <div className="relative h-[190px] min-w-[180px] max-w-full rounded-lg bg-muted flex items-center justify-center">
        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-3 top-3 z-10">
            {product.discountPercentage}%
          </DiscountBadge>
        )}

        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          className="object-contain p-3"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-xs truncate">{product.name}</h2>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <span className="font-bold truncate">
                R$ {product.totalPrice.toFixed(2)}
              </span>

              <span className="text-xs text-muted-foreground line-through truncate">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold truncate">
              R$ {product.basePrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
