import { Badge } from '@/components/ui/badge'
import { ProductWithTotalPrice } from '@/helpers/product'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

type ProductItemProps = {
  product: ProductWithTotalPrice
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg bg-muted flex items-center justify-center relative h-[170px] w-full">
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-0.5">
            <ArrowDown className="w-3 h-3" />
            {product.discountPercentage}%
          </Badge>
        )}

        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          className="h-auto w-full object-contain max-h-[70%] max-w-[80%]"
          sizes="100vw"
          alt={product.name}
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
    </div>
  )
}
