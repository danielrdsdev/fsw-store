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
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const { status } = useSession()

  if (status === 'authenticated') {
    redirect('/')
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Faça login com a sua conta Google ou GitHub
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button onClick={() => signIn('google')} variant="outline">
          <Icons.google className="w-6 h-6 mr-2" />
          Google
        </Button>
        <Button onClick={() => signIn('github')} variant="outline">
          <Icons.github className="w-6 h-6 mr-2" />
          GitHub
        </Button>
      </CardContent>
    </Card>
  )
}