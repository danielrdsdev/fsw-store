import { ButtonsLogin } from '@/components/shared/buttons-login'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogProps } from '@radix-ui/react-dialog'

export const ModalLogin = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle>Faça login na plataforma</DialogTitle>

          <DialogDescription>
            Conecte-se usando sua conta do Google ou GitHub.
          </DialogDescription>
        </DialogHeader>

        <ButtonsLogin />
      </DialogContent>
    </Dialog>
  )
}
