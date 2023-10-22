import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const MainButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn('text-sm uppercase font-bold w-full', className)}
      {...props}
    />
  )
}
