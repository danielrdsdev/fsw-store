import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const MainButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn('w-full text-sm font-bold uppercase', className)}
      {...props}
    />
  )
}
