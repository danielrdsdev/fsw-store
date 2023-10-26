import { ProductItem } from '@/components/shared/product-item'
import { Badge } from '@/components/ui/badge'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { Percent } from 'lucide-react'

export const metadata = {
  title: 'Ofertas',
}

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <main className="container space-y-8 py-16">
      <Badge
        variant="outline"
        className="border-2 border-primary px-3 py-2 font-bold uppercase"
      >
        <Percent className="mr-2 h-4 w-4" />
        Ofertas
      </Badge>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
