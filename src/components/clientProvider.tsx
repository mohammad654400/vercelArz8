'use client'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import Footer from '@/sections/footer/footer'
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
      <Footer/>
      </div>
    </ThemeProvider>
  )
}
