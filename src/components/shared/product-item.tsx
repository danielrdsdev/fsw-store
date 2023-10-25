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
      <div className="relative flex h-[190px] min-w-[180px] max-w-full items-center justify-center rounded-lg bg-muted">
        {product.discountPercentage > 0 && (
          <DiscountBadge className="absolute left-3 top-3 z-10">
            {product.discountPercentage}%
          </DiscountBadge>
        )}

        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          sizes="100%"
          className="object-contain p-3"
        />
      </div>

      <div className="space-y-1">
        <h2 className="truncate text-xs">{product.name}</h2>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <span className="truncate font-bold">
                R$ {product.totalPrice.toFixed(2)}
              </span>

              <span className="truncate text-xs text-muted-foreground line-through">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="truncate font-bold">
              R$ {product.basePrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
