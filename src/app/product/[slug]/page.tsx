import { ProductList } from '@/components/shared/product-list'
import { SectionTitle } from '@/components/shared/section-title'
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
    <main className="space-y-8 pb-16 lg:container lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
      <div className="px-6 space-y-4 lg:p-0">
        <SectionTitle>Produtos recomendados</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </main>
  )
}
