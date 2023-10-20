import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export const SectionTitle = ({ className, ...props }: ComponentProps<'h2'>) => {
  return <h2 className={cn('font-bold uppercase', className)} {...props} />
}
