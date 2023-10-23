'use client'

import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'
import CartProvider from './cart'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </CartProvider>
    </NextThemesProvider>
  )
}
