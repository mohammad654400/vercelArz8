import React from 'react'

export default function currentPrice() {
    return (
        <div>
            <h2 className="text-lg lg:text-xl font-bold mb-4 dark:text-background">
                قیمت لحظه‌ای بایننس کوین
            </h2>
            <table className="flex flex-col w-full border-collapse  ">
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
                            period: "یک ساعت",
                            value: "$174.4",
                            change: "%2",
                            color: "text-green-600",
                        },
                        {
                            period: "24 ساعت گذشته",
                            value: "$1724.4",
                            change: "%8",
                            color: "text-green-600",
                        },
                        {
                            period: "30 روز گذشته",
                            value: "$1824.4",
                            change: "%15",
                            color: "text-green-600",
                        },
                        {
                            period: "60 روز گذشته",
                            value: "$1724.4",
                            change: "%20",
                            color: "text-green-600",
                        },
                        {
                            period: "90 روز گذشته",
                            value: "$1824.4",
                            change: "%28",
                            color: "text-green-600",
                        },
                    ].map((item, index) => (
                        <tr key={index} className="border-b last:border-b-0 dark:border-background flex w-full justify-between">
                            <td className="w-full py-6 px-2 text-xs lg:text-lg font-semibold text-sixth  text-right">
                                {item.period}
                            </td>
                            <td className="w-full py-6 px-2 text-xs lg:text-lg font-semibold text-[#33B028] text-center ">
                                {item.value}
                            </td>
                            <td className={`w-full py-6 px-2 text-xs lg:text-lg font-semibold  text-left ${item.color}`}>
                                {item.change}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
