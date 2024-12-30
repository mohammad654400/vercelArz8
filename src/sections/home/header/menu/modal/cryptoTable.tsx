'use client';
import BNB from '@/assets/icons/bnb';
import React, { useState } from 'react';

const cryptoData = [
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500' ,icon:<BNB/>},
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱۷۴۵۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
];

const  CryptoTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('most-popular'); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  const sortedData = [...cryptoData].sort((a:any, b:any) => {
    switch (filter) {
      case 'most-expensive':
        return b.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        ) - a.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        );
      case 'cheapest':
        return a.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        ) - b.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        );
      case 'highest-growth':
        return b.change - a.change;
      default:
        return 0;
    }
  });

  const filteredData = sortedData.filter((crypto) =>
    crypto.name.includes(searchQuery) || crypto.symbol.includes(searchQuery)
  );

  const filterButtons = [
    { key: 'most-popular', label: 'محبوب‌ترین' },
    { key: 'highest-growth', label: 'بیشترین رشد' },
    { key: 'cheapest', label: 'ارزان‌ترین' },
    { key: 'most-expensive', label: 'گران‌ترین' }
  ];

  return (
    <div className="w-full z-50">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نماد،..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg bg-secondary outline-none placeholder:text-sm"
        />
      </div>
      <span className='w-9 block mb-4 pb-1 text-primary border-b-2 border-primary'>
        ارزها
      </span>
      <div className="flex  justify-between items-center p-2 rounded-md font mb-2 overflow-x-auto">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`px-4 py-2 text-[13px] rounded-lg  ${
              filter === btn.key 
                ? 'bg-[#FFF4D8] text-primary dark:bg-[#64542c] border-[3px] border-primary' 
                : 'bg-transparent'
            }`}
            onClick={() => setFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="w-full max-h-[335px] overflow-y-auto bg-secondary rounded-md">
        <table className="table-auto w-full border-collapse text-right">
          <thead className=''>
            <tr className="text-[#3C3B4180] dark:text-[#FFFFFF80] border-b ">
              <th className="sticky top-0  bg-secondary  dark:bg-[#3C3B41] px-4 py-2 text-sm">نماد</th>
              <th className="sticky top-0 bg-secondary dark:bg-[#3C3B41]  px-4 py-1 text-sm">24H تغییرات</th>
              <th className="sticky top-0 bg-secondary dark:bg-[#3C3B41]  pr-10 py-2 text-sm">قیمت به تومان</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((crypto, index) => (
                <tr key={index} className="border-b ">
                  <td className="flex gap-2 pl-6 py-2 text-sm">
                   <div className='w-[25px] h-[25px]'> {crypto.icon}</div>
                    <div className='flex flex-col'>
                    {crypto.name}
                    <p className='text-xs opacity-50'>
                    {crypto.symbol}
                    </p>
                    </div>

                  </td>
                  <td className={`px-6 py-2 text-sm ${crypto.changeColor}`}>
                    % {crypto.change.toFixed(2)}
                  </td>
                  <td className="pr-6  py-2 text-sm">{crypto.price} تومان</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  هیچ داده‌ای پیدا نشد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;