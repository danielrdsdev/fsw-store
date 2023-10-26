import { prismaClient } from '@/lib/prisma'
import { CategoryItem } from './category-item'

export const Categories = async () => {
  const categories = await prismaClient.category.findMany()
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 xl:grid-cols-6">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
