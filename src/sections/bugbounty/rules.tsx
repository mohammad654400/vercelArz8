import React from 'react'
import { bugBountyData } from './data'

export default function rules() {
    return (
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h2 className="text-xl border-b-4 border-primary pb-2">
                قوانین و مقرارا رویداد باگ بانتی ارزهشت
            </h2>

            <div className="bg-third w-full p-6 rounded-lg flex flex-col py-8 gap-5">
                {bugBountyData.map((item, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="w-5">
                            <div className="w-4 h-4 rounded-sm rotate-45 bg-primary mt-2"></div>
                        </div>
                        <p className="leading-8">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
