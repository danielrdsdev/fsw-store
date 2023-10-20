import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { Shapes } from 'lucide-react'
import { CategoryItem } from './components/category-item'

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany()

  return (
    <main className="px-6">
      <section className="space-y-8">
        <Badge
          variant="outline"
          className="px-3 py-2 border-2 font-bold uppercase"
        >
          <Shapes className="w-4 h-4 mr-1.5" />
          Catálogo
        </Badge>
        <div className="grid grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  )
}
