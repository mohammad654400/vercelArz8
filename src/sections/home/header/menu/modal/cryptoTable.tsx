"use client";

import BNB from "@/assets/icons/bnb";
import React, { useState } from "react";

const cryptoData = [
  {
    name: "شیبا",
    symbol: "SHIB",
    price: "۱٬۷۴۵٬۴۱۳",
    change: -1.37,
    changeColor: "text-red-500",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 2.52,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 8.21,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 8.21,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 8.21,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 8.21,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    price: "۱٬۷۴۵٬۴۱۳",
    change: 8.21,
    changeColor: "text-green-500",
    icon: <BNB />,
  },
];

const CryptoTable: React.FC = () => {
  
  const [filter, setFilter] = useState<string>("most-popular");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortedData = [...cryptoData].sort((a, b) => {
    switch (filter) {
      case "most-expensive":
        return (
          parseInt(b.price.replace(/[,٬]/g, "")) -
          parseInt(a.price.replace(/[,٬]/g, ""))
        );
      case "cheapest":
        return (
          parseInt(a.price.replace(/[,٬]/g, "")) -
          parseInt(b.price.replace(/[,٬]/g, ""))
        );
      case "highest-growth":
        return b.change - a.change;
      default:
        return 0;
    }
  });

  const filteredData = sortedData.filter(
    (crypto) =>
      crypto.name.includes(searchQuery) || crypto.symbol.includes(searchQuery)
  );

  const filterButtons = [
    { key: "most-popular", label: "محبوب‌ترین" },
    { key: "highest-growth", label: "بیشترین رشد" },
    { key: "cheapest", label: "ارزان‌ترین" },
    { key: "most-expensive", label: "گران‌ترین" },
    { key: "most-expensive", label: "گران‌ترین" },
  ];

  return (
    <div className="w-full z-50">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نماد،..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-[#ADADAD80] rounded-lg bg-secondary outline-none placeholder:text-sm"
        />
      </div>
      <div className="absolute top-[107px] -z-10 w-[90%] bg-secondary dark:bg-fifth h-[2px]"></div>
      <span className="w-9 block mb-4 pb-1 text-primary border-b-2 border-primary">
        ارزها
      </span>

      <div className="flex justify-between items-center p-2 rounded-md font mb-2 overflow-x-auto">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`px-1 py-1 text-[13px] rounded-lg  ${
              filter === btn.key
                ? "bg-[#FFF4D8] text-primary dark:bg-[#64542c] border-[3px] border-primary"
                : "bg-transparent"
            }`}
            onClick={() => setFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="w-full  bg-fifth dark:bg-secondary rounded-md  ">
        <div className="flex max-h-[360px] text-right text-[#3C3B4180] dark:text-[#FFFFFF80] border-b border-[#ADADAD80] text-sm  py-1 rounded-xl  bg-secondary sticky top-0 z-10">
          <div className="w-1/3  pr-4">نماد</div>
          <div className="w-1/3  ">24H تغییرات</div>
          <div className="w-1/3 pr-4">قیمت به تومان</div>
        </div>
        <div className="overflow-y-auto max-h-[350px] ">
        {filteredData.length > 0 ? (
          filteredData.map((crypto, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-[#ADADAD80] py-2  text-sm"
            >
              <div className="w-1/3 flex items-center gap-2">
                <div className="w-[25px] h-[25px]">{crypto.icon}</div>
                <div className="flex flex-col">
                  <span>{crypto.name}</span>
                  <span className="text-xs opacity-50 ">{crypto.symbol}</span>
                </div>
              </div>
              <div dir="ltr " className={`flex  w-1/3 ${crypto.changeColor} pr-4`}>
                {crypto.change.toFixed(2)} %
              </div>
              <div className="w-1/3 pr-2">
                {crypto.price} تومان
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">هیچ داده‌ای پیدا نشد.</div>
        )}
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
