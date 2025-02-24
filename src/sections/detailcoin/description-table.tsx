import React from 'react'

type DescriptionTableProps = {
  persianName: string;
  symbol: string;
  lastDollarPrice: string;
  lastTomanPrice: string;
  dailyChangePercent: string;
  dailyTransactionVolume: string;
}

export default function DescriptionTable({ persianName, symbol, lastDollarPrice, lastTomanPrice, dailyChangePercent, dailyTransactionVolume }: DescriptionTableProps) {
  return (
    <div className=" grid grid-cols-1 text-right border rounded-xl p-6">

      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">نام ارز</p>
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">{persianName}</p>
        </div>
      </div>
      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">نماد</p>
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">{symbol}</p>
        </div>
      </div>
      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">قیمت جهانی (دلار)</p>
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">{lastDollarPrice} $</p>
        </div>
      </div>
      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">آخرین قیمت (تومان)</p>
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">{lastTomanPrice}</p>
        </div>
      </div>
      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">تغییرات روزانه (درصد)</p>
          <p dir='ltr' className={`text-sm lg:text-base font-semibold ${dailyChangePercent?.includes('-') ? 'text-[#F00500]' : 'text-[#30E0A1]'}`}>{dailyChangePercent} %</p>
        </div>
      </div>
      <div className="w-full border-b-2 last:border-b-0">
        <div className="flex justify-between py-6">
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">حجم معاملات روزانه (دلار)</p>
          <p className="text-sm lg:text-base font-semibold text-[#666668] dark:text-white">{dailyTransactionVolume}</p>
        </div>
      </div>
    </div>
  )
}
