import { Button } from '@/components/ui/button'
import { Category } from '@prisma/client'
import {
  Headphones,
  Keyboard,
  Monitor,
  Mouse,
  Speaker,
  Square,
} from 'lucide-react'
import Link from 'next/link'

type CategoryItemProps = {
  category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <Keyboard className="w-4 h-4 mr-2" />,
    monitors: <Monitor className="w-4 h-4 mr-2" />,
    headphones: <Headphones className="w-4 h-4 mr-2" />,
    mousepads: <Square className="w-4 h-4 mr-2" />,
    mouses: <Mouse className="w-4 h-4 mr-2" />,
    speakers: <Speaker className="w-4 h-4 mr-2" />,
  }
  return (
    <Button asChild variant="outline" className="font-bold text-xs">
      <Link href="/">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        {category.name}
      </Link>
    </Button>
  )
}
