import React from 'react'
import { bugBountyData } from './data'

export default function rules() {
    return (
        <div className='flex flex-col  justify-center items-center'>
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center mb-[31px] lg:mb-[50px]">
            قوانین و مقرارا رویداد باگ بانتی ارزهشت
            </h3>

            <div className="bg-third w-full p-6 rounded-[10px] lg:rounded-[30px] flex flex-col py-8 gap-5">
                {bugBountyData.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="w-5">
                            <div className="w-4 h-4 rounded-sm rotate-45 bg-primary mt-2"></div>
                        </div>
                        <p className="text-xs lg:text-xl font-normal  leading-5 lg:leading-[50px]">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
