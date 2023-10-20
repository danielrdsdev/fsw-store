import { Button } from '@/components/ui/button'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { Category } from '@prisma/client'
import Link from 'next/link'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Button asChild variant="outline" className="font-bold text-xs">
      <Link href={`/category/${category.slug}`}>
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Link>
    </Button>
  )
}
