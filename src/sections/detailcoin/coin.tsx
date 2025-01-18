import React from 'react'
import BNB from "@/assets/icons/bnb";



export default function Coin({ data }) {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="border-b-2 last:border-b-0 border-gray-200 py-[10px] ">

                    <div className="flex justify-between items-center ">
                        <div className="flex items-center gap-2 ">
                            <div className="w-[52px] h-[52px]">
                                <BNB />
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold">{item.Persian}</p>
                                <p className="text-lg font-semibold opacity-50">{item.name}</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-end gap-1 ">
                            <p className="text-[21px] font-semibold">{item.price}</p>
                            <p className="text-lg font-semibold text-[#33B028]">{item.percentage}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
