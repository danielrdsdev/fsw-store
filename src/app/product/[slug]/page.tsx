import { prismaClient } from '@/lib/prisma'
import { ProductImages } from './components/product-images'

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
  })

  if (!product) {
    return null
  }
  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  )
}
