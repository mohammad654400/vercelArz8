'use client';
import React, { useState } from 'react';

const cryptoData = [
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500' },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500' },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500' },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500' },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500' },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500' },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱۷۴۵۴۱۳", change: 8.21, changeColor: 'text-green-500' },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500' },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500' },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500' },
];

const CryptoTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('default'); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  const sortedData = [...cryptoData].sort((a:any, b:any) => {
    switch (filter) {
      case 'most-expensive':
        return b.price - a.price;
      case 'cheapest':
        return a.price - b.price;
      case 'highest-growth':
        return b.change - a.change;
      default:
        return 0;
    }
  });

  const filteredData = sortedData.filter((crypto) =>
    crypto.name.includes(searchQuery) || crypto.symbol.includes(searchQuery)
  );

  return (
    <div className="w-full">
         <div className="mb-4">
        <input
          type="text"
          placeholder="جستجو کنید..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg bg-background"
        />
      </div>
      <span className='w-9 block mb-4 pb-1 text-primary border-b-2 border-primary'>
          ارزها
         </span>
      {/* فیلتر‌ها */}
      <div className=" flex justify-between items-center p-2 rounded-md mb-4 overflow-x-auto">
        <button
          className='px-4 py-1 text-[13px] font-bold  rounded-lg  focus:bg-[#FFC107] focus:text-white focus:border-primary '
          onClick={() => setFilter('most-popular')}
        >
          محبوب‌ترین
        </button>
        <button
          className='px-4 py-2 text-[13px] rounded-lg focus:bg-[#FFC107]  focus:text-white focus:border-primary font-bold'
          onClick={() => setFilter('highest-growth')}
        >
          بیشترین رشد
        </button>
        <button
          className='px-4 py-2 text-[13px] rounded-lg focus:bg-[#FFC107]  focus:text-white focus:border-primary font-bold '
          onClick={() => setFilter('cheapest')}
        >
          ارزان‌ترین
        </button>
        <button
          className='px-4 py-2 text-[13px] font-bold rounded-lg focus:bg-[#FFC107]  focus:text-white focus:border-primary'
          onClick={() => setFilter('most-expensive')}
        >
          گران‌ترین
        </button>
      </div>


      {/* جدول */}
      <div className="w-full max-h-80 overflow-y-auto bg-background rounded-md shadow-md custom-scrollbar">
        <table className="table-auto  w-full border-collapse text-right">
          <thead>
            <tr className="bg-gray-100 bg-background border-b">
              <th className="sticky top-0 bg-background px-4 py-2 text-sm ">نام</th>
              <th className="sticky top-0 bg-background px-4 py-2 text-sm ">24H تغییرات</th>
              <th className="sticky top-0 bg-background px-4 py-2 text-sm ">نماد</th>
              <th className="sticky top-0 bg-background px-4 py-2 text-sm ">قیمت به تومان</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((crypto, index) => (
                <tr key={index} className="border-b hover:bg-slate-100  dark:hover:bg-gray-600">
                  <td className="px-4 py-2 text-sm">{crypto.name}</td>
                  <td className={`px-4 py-2 text-sm ${crypto.changeColor}`}>
                    % {crypto.change.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-sm">{crypto.symbol}</td>
                  <td className="px-4 py-2 text-sm">{crypto.price.toLocaleString()} تومان</td>
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
