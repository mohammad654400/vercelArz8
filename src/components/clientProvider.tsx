'use client'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import React from 'react'

export default function ClientProvider({children}:{children:React.ReactNode}) {
  return (
    <ThemeProvider >
      {children}
    </ThemeProvider>
  )
}
