'use client'
import { Icons } from '@/components/shared/icons'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export const ButtonsArea = () => {
  return (
    <>
      <Button onClick={() => signIn('google')} variant="outline">
        <Icons.google className="w-6 h-6 mr-2" />
        Google
      </Button>
      <Button onClick={() => signIn('github')} variant="outline">
        <Icons.github className="w-6 h-6 mr-2" />
        GitHub
      </Button>
    </>
  )
}
