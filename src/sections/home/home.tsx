import React from 'react'
import MainTop from './maintop/mainTop'
import TransAction from './transaction/transAction'
export default function Home() {
  return (
    <div className='flex flex-col gap-8 px-[120px] py-[30px]'>
        <MainTop/>
        <TransAction/> 
    </div>
  )
}
