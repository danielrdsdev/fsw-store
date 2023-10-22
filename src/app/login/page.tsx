import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ButtonsArea } from './components/buttons-area'

export const metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center pt-56 pb-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Faça login com a sua conta Google ou GitHub
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-4">
          <ButtonsArea />
        </CardContent>
      </Card>
    </main>
  )
}
