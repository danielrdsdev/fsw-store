import { ProductItem } from '@/components/shared/product-item'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

type ProductListProps = {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full items-center gap-4 overflow-x-auto lg:gap-8 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  )
}
