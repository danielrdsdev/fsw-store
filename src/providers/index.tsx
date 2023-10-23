'use client'

import { BackToTop } from '@/components/shared/back-to-top'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
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
          <Analytics />
          <Toaster />
          <BackToTop />
        </SessionProvider>
      </CartProvider>
    </NextThemesProvider>
  )
}
