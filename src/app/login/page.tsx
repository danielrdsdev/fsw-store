'use client'

import { Icons } from '@/components/shared/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const { status } = useSession()

  if (status === 'authenticated') {
    redirect('/')
  }

  const handleLoginClick = (provider: string) => {
    signIn(provider)
    toast({
      title: 'Login feito com sucesso!',
      description: 'Você será redirecionado em instantes',
    })
  }

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
          <Button onClick={() => handleLoginClick('google')} variant="outline">
            <Icons.google className="w-6 h-6 mr-2" />
            Google
          </Button>
          <Button onClick={() => handleLoginClick('github')} variant="outline">
            <Icons.github className="w-6 h-6 mr-2" />
            GitHub
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
