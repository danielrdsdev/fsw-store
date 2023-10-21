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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  })
  return (
    <main className="space-y-16 py-16 lg:pt-0">
      <section>
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 50% de descontos só esse mês"
          className="lg:hidden"
        />
        <PromoBanner
          src="/banner-home-01-desktop.png"
          alt="Até 50% de descontos só esse mês"
          className="hidden lg:block"
        />
      </section>

      <section className="px-6 lg:px-32">
        <Categories />
      </section>

      <section className="space-y-4 px-6 lg:px-32">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </section>

      <section className="px-6 lg:px-32">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses"
          className="lg:hidden"
        />

        <div className="hidden lg:flex items-center gap-8">
          <PromoBanner
            src="/banner-home-02-desktop.png"
            alt="Até 55% de desconto em mouses"
          />
          <PromoBanner
            src="/banner-home-03-desktop.png"
            alt="Até 20% de desconto em fones"
          />
        </div>
      </section>

      <section className="space-y-4 px-6 lg:px-32">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </section>

      <section className="px-6 lg:px-32">
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 20% de desconto em fones"
          className="lg:hidden"
        />
        <PromoBanner
          src="/banner-frete-gratis.png"
          alt="Frete grátis para todo o Brasil"
          className="hidden lg:block"
        />
      </section>

      <section className="space-y-4 px-6 lg:px-32">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </section>
    </main>
  )
}
