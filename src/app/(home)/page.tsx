import { SectionTitle } from '@/components/shared/section-title'
import { prismaClient } from '@/lib/prisma'
import Image from 'next/image'
import { Categories } from './components/categories'
import { ProductList } from './components/product-list'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })
  return (
    <main className="space-y-8 px-6">
      <section>
        <Image
          src="/banner-home-01.png"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          alt="Até 50% de desconto só esse mês"
        />
      </section>
      <section>
        <Categories />
      </section>
      <section className="space-y-2">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </section>
    </main>
  )
}
