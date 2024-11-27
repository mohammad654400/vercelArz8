import Search from '@/assets/icons/search'
import WaveDivider from '@/assets/icons/waveDivider'
import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col w-full h-full'>


    <div className="bg-[#242428] w-full h-[362px] text-white text-center py-16">

      <div className="w-full justify-center items-center flex flex-col">
        <h1 className="text-2xl font-bold mb-4">مرکز راهنمایی و سوالات متداول</h1>
        <p className="text-white mb-8 text-base">
          سوالات خود را جستجو کنید یا از دسته بندی ها استفاده کنید.
        </p>

        <div className="flex items-center mt-11 justify-center border-2 h-16 w-2/5 border-[#FFC107] rounded-3xl p-2 ">
          <input
            type="text"
            placeholder="سوال خود را بنویسید..."
            className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none"
          />
          <div className='p-3 rounded-xl bg-[#FFC107]'>
            <Search />
          </div>
        </div>
      </div>



    </div>
    <div className='w-full flex justify-center -mt-[1px] text-[#242428]'>
      <WaveDivider strokeColor="#FFFFFF" />
    </div>


  </div>
  )
}
