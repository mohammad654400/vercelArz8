'use client'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import FeaturesBanner from '@/sections/home/featuresBanner/featuresBanner'
import Header from '@/sections/home/header/header'
import React from 'react'

export default function ClientProvider({children}:{children:React.ReactNode}) {
  return (
    <ThemeProvider >
      <div className='h-screen dark:bg-dark-no-gradient bg-custom-gradient'>
      <FeaturesBanner/>
      <Header/>
      {children}
      </div>
    </ThemeProvider>
  )
}
