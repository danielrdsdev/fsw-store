import { ProductItem } from '@/components/shared/product-item'
import { computeProductTotalPrice } from '@/helpers/product'
import { Product } from '@prisma/client'

type ProductListProps = {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="items-center overflow-x-auto flex w-full gap-8 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  )
}
