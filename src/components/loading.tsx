import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
export default function Loading() {
  return (
    <div className='bg-background fixed w-full h-full flex justify-center items-center'>
      <Image src={logo} alt='arz8' width={189} height={120}/>
    </div>
  )
}
