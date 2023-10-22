import { ProductItem } from '@/components/shared/product-item'
import { Badge } from '@/components/ui/badge'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { Percent } from 'lucide-react'

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <main className="container py-16 space-y-8">
      <Badge
        variant="outline"
        className="px-3 py-2 border-2 font-bold uppercase border-primary"
      >
        <Percent className="w-4 h-4 mr-2" />
        Ofertas
      </Badge>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </section>
    </main>
  )
}
