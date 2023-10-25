import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ArrowDown } from 'lucide-react'

export const DiscountBadge = ({
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <Badge className={cn('px-2 py-0.5', className)} {...props}>
      <ArrowDown className="h-3 w-3" />
      {children}
    </Badge>
  )
}
