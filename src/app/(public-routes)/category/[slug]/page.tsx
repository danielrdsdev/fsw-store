import { ProductItem } from '@/components/shared/product-item'
import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'

type CategoryProductsProps = {
  params: {
    slug: string
  }
}

export default async function CategoryProducts({
  params: { slug },
}: CategoryProductsProps) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug,
    },
    include: {
      products: true,
    },
  })

  if (!category) {
    return null
  }

  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Badge
          variant="outline"
          className="px-3 py-2 border-2 font-bold uppercase border-primary"
        >
          {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
          {category.name}
        </Badge>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
