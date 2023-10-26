import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} className="flex flex-col">
      <div className="flex h-[150px] items-center justify-center rounded-t-lg bg-gradient-category-item">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={155}
          height={82}
          className="object-contain"
        />
      </div>

      <div className="rounded-b-lg bg-muted py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </Link>
  )
}
