import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { Shapes } from 'lucide-react'
import { CategoryItem } from './components/category-item'

export const metadata = {
  title: 'Catálogo',
}

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany()

  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Badge
          variant="outline"
          className="border-2 border-primary px-3 py-2 font-bold uppercase"
        >
          <Shapes className="mr-1.5 h-4 w-4" />
          Catálogo
        </Badge>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  )
}
