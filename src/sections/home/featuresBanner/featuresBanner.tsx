import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.png'
export default function FeaturesBanner() {
  return (
    <div className='w-full h-16 bg-foreground text-white  dark:text-black flex justify-center items-center gap-2'>
        <Image
        alt='ارز هشت'
        src={logo}
        width={64}
        height={64}
        />
        <p>امکانات جدید ارز هشت</p>
    </div>
  )
}
