import { Shapes } from 'lucide-react'
import { Badge } from '../ui/badge'

export const BadgePage = () => {
  return (
    <Badge variant="outline" className="px-3 py-2 border-2 font-bold uppercase">
      <Shapes className="w-4 h-4 mr-1.5" />
      {params.slug}
    </Badge>
  )
}
