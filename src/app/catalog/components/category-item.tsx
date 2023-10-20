import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} className="flex flex-col">
      <div className="w-full h-[150px] flex items-center justify-center rounded-t-lg bg-gradient-category-item">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-auto max-h-[70%] max-w-[80%] object-contain"
        />
      </div>

      <div className="bg-muted rounded-b-lg py-3">
        <p className="text-sm font-semibold text-center">{category.name}</p>
      </div>
    </Link>
  )
}
