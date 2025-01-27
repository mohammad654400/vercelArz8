"use client";

import BNB from "@/assets/icons/bnb";
import Link from "next/link";
import React, { useRef, useState } from "react";


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


      const containerRef = useRef<HTMLDivElement>(null);
      const isDragging = useRef(false);
      const startX = useRef(0);
      const scrollLeft = useRef(0)
  
  
  
      const handleMouseDown = (e: React.MouseEvent) => {
          isDragging.current = true;
          startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
          scrollLeft.current = containerRef.current?.scrollLeft || 0;
      };
  
      const handleMouseMove = (e: React.MouseEvent) => {
          if (!isDragging.current) return;
          e.preventDefault();
          const x = e.pageX - (containerRef.current?.offsetLeft || 0);
          const walk = x - startX.current;
          if (containerRef.current) {
              containerRef.current.scrollLeft = scrollLeft.current - walk;
          }
      };
  
      const handleMouseUpOrLeave = () => {
          isDragging.current = false;
      };
  const [filter, setFilter] = useState<string>("default");
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
    { key: "default", label: "پیش فرض" },
    { key: "most-popular", label: "محبوب‌ترین" },
    { key: "most-expensive", label: "گران‌ترین" },
    { key: "cheapest", label: "ارزان‌ترین" },
    { key: "highest-growth", label: "بیشترین رشد" },
    { key: "highest-loss", label: "بیشترین ضرر" },

  ];

  return (
    <div className="w-full z-50">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نماد،..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-[#ADADAD80] rounded-[10px] bg-secondary outline-none placeholder:text-xs"
        />
      </div>
      <div className="absolute top-[102px] -z-10 w-[90%] bg-secondary dark:bg-fifth h-[2px]"></div>
      <span className="w-9 block mb-4 pb-1 text-primary border-b-2 border-primary text-sm font-semibold">
        ارزها
      </span>

      <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
       className="flex w-full items-center rounded-[5px] font mb-5 overflow-x-auto scrollbar-hidden">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`ml-2 px-2 py-1 text-xs font-semibold rounded-lg whitespace-nowrap text-center ${filter === btn.key
                ? "bg-[#FFF4D8] text-primary dark:bg-[#64542c] border border-primary"
                : "bg-transparent"
              }`}
            onClick={() => setFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="w-full  bg-fifth dark:bg-secondary rounded-[5px]  ">
        <div className="flex  text-right text-[#3C3B4180] dark:text-[#FFFFFF80]  text-sm   py-1  rounded-xl  bg-secondary sticky top-0 z-10">
          <div className="w-1/3  pr-4">نماد</div>
          <div className="w-1/3  ">24H تغییرات</div>
          <div className="w-1/3 ">قیمت به تومان</div>
        </div>
        <div className="overflow-y-auto mt-2 max-h-[260px] ">
          {filteredData.length > 0 ? (
            filteredData.map((crypto, index) => (
              <Link href={`/coins/${crypto.symbol}`} key={index} >
              <div
               
                className="ml-2 flex justify-between items-center border-b border-[#ADADAD80] py-2  text-sm"
              >
                <div className="w-1/3 flex items-center gap-2">
                  <div className="w-[25px] h-[25px]">{crypto.icon}</div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold">{crypto.name}</span>
                    <span className="text-xs font-semibold text-sixth opacity-50 ">{crypto.symbol}</span>
                  </div>
                </div>
                <div dir="ltr " className={`flex  w-1/3 text-xs font-semibold ${crypto.changeColor} pr-4`}>
                  {crypto.change.toFixed(2)} %
                </div>
                <div className="w-1/3 pr-2 text-xs font-semibold">
                  {crypto.price} تومان
                </div>
              </div>
              </Link>
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
