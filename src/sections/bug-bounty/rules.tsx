import React from 'react'
import { bugBountyData } from './data'

export default function rules() {
    return (
        <div className='flex flex-col  justify-center items-center gap-[31px] lg:gap-[50px]'>
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center">
            قوانین و مقرارا رویداد باگ بانتی ارزهشت
            </h3>

            <div className="bg-third w-full rounded-[10px] lg:rounded-[30px] flex flex-col px-[10.64px]  py-5  xl:px-[27px]  xl:py-16 gap-[10px]">
                {bugBountyData.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <div className="w-2 lg:w-5 h-4">
                            <div className="w-[7px] h-[7px] lg:w-4 lg:h-4 rounded-sm lg:rounded-[5.64px] rotate-45 bg-primary mt-[5px] lg:mt-4 "></div>
                        </div>
                        <p className="text-xs lg:text-xl font-normal  leading-5 lg:leading-[50px] text-justify">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
