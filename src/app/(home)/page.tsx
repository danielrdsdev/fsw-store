import { SectionTitle } from '@/components/shared/section-title'
import { prismaClient } from '@/lib/prisma'
import { Categories } from './components/categories'
import { ProductList } from './components/product-list'
import { PromoBanner } from './components/promo-banner'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })
  return (
    <main className="space-y-8 px-6">
      <section>
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 50% de descontos só esse mês"
        />
      </section>
      <section>
        <Categories />
      </section>
      <section className="space-y-2">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </section>
      <section>
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
        />
      </section>
      <section className="space-y-2">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </section>
    </main>
  )
}
