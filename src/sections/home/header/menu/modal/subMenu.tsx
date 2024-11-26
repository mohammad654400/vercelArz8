import BitCoin from '@/assets/icons/bitcoin'
import HalfCircle from '@/assets/icons/halfCircle'
import Search from '@/assets/icons/search'
import React from 'react'
import CryptoTable from './cryptoTable'

export default function SubMenu() {
  return (
    <div className=' relative flex w-[700px] h-[491] bg-background rounded-2xl '>
      <div className="text-background absolute right-16 rounded-xl -top-3 ">
        <HalfCircle/> 
      </div>
      <div className='w-[250px] flex flex-col border-l-2 p-5'>
        <div className='px-10 py-2 text-white bg-[#242428] rounded-lg'>جدید ترین ارزها</div>
        <div className='flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex text-foreground justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600'>
         <BitCoin/>
        خرید بیتکوین
        </div>
        <div className='flex justify-center mt-3 px-4 py-2 rounded-lg bg-black text-white dark:bg-gray-500'>
        همه ارز ها
        </div>
        <div className='flex justify-center mt-3 px-4 py-2 rounded-lg text text-foreground bg-primary'>
        خرید و فروش سریع
        </div>
      </div>
      <div className='relative p-5'>
        <div className='flex justify-center items-center bg-primary absolute left-6 top-6 rounded-lg w-8 h-8 '>
          <div>
            <Search/>
          </div>
        </div>
         <CryptoTable/>
      </div>
    </div>
  )
}
