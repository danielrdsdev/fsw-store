import { ProductList } from '@/components/shared/product-list'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './components/product-images'
import { ProductInfo } from './components/product-info'

type ProductDetailsPageProps = {
  params: {
    slug: string
  }
}

export default async function ProductDetailsPage({
  params: { slug },
}: ProductDetailsPageProps) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  })

  if (!product) {
    return null
  }

  return (
    <div className="space-y-8 pb-16">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div className="px-6">
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}
