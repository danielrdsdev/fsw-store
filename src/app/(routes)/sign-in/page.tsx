import { ButtonsLogin } from '@/components/shared/buttons-login'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const user = getServerSession(authOptions)

  if (await user) {
    redirect('/')
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>

          <CardDescription>
            Faça login com sua conta do Google ou GitHub
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ButtonsLogin />
        </CardContent>
      </Card>
    </div>
  )
}
