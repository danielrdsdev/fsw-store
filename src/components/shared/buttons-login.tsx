'use client'
import { Icons } from '@/components/shared/icons'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export const ButtonsLogin = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoginClick = (provider: string) => {
    setIsLoading(true)

    signIn(provider)
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() => handleLoginClick('google')}
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-6 w-6" />
        )}
        Google
      </Button>

      <Button
        onClick={() => handleLoginClick('github')}
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-6 w-6 animate-spin" />
        ) : (
          <Icons.github className="mr-2 h-6 w-6" />
        )}
        GitHub
      </Button>
    </div>
  )
}
