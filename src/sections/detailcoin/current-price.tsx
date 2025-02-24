import React from 'react'

type CurrentPriceProps = {
    currentPrice: string;
    currentPriceChange: string;
}

export default function currentPrice({ currentPrice, currentPriceChange }: CurrentPriceProps) {
    return (
        <div>
            <h2 className="text-lg lg:text-xl font-bold mb-4 text-foreground">قیمت لحظه‌ای بایننس کوین</h2>
            <table className="flex flex-col w-full border-collapse">
                <thead className="flex w-full">
                    <tr className="border-b dark:border-background flex w-full justify-between">
                        <th className="w-full pb-6 px-2 text-[10px] lg:text-[15px] font-bold text-#3C3B41 dark:text-white dark:text-background text-right">
                            تغییرات
                        </th>
                        <th className="w-full pb-6 px-2 text-[10px] lg:text-[15px] font-bold text-#3C3B41 dark:text-white dark:text-background text-center">
                            مقدار
                        </th>
                        <th className="w-full pb-6 px-2 text-[10px] lg:text-[15px] font-bold text-#3C3B41 dark:text-white dark:text-background text-left">
                            درصد
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {
                            period: "24 ساعت گذشته",
                            value: currentPrice,
                            change: currentPriceChange,
                            color: currentPriceChange?.includes("-") ? "text-[#F00500]" : "text-[#33B028]", // to specify the color 
                        }
                    ].map((item, index) => (
                        <tr key={index} className="border-b last:border-b-0 dark:border-background flex w-full justify-between">
                            <td className="w-full py-6 px-2 text-xs lg:text-lg font-semibold text-sixth  text-right">
                                {item.period}
                            </td>
                            <td className={`w-full py-6 px-2 text-xs lg:text-lg font-semibold text-center ${item.color} `}>
                                {item.value}
                            </td>
                            <td dir='ltr' className={`w-full py-6 px-2 text-xs lg:text-lg font-semibold  text-left ${item.color}`}>
                                {item.change} %
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
