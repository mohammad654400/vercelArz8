"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ChartUP from "@/assets/images/chartup.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Link from "next/link";
const filterOptions = [
  { label: "محبوب‌ترین‌ها", key: "default", mobile: true },
  { label: "بیشترین حجم", key: "volume", mobile: false },
  { label: "کمترین قیمت", key: "min", mobile: false },
  { label: "بیشترین قیمت", key: "max", mobile: false },
  { label: "بیشترین رشد", key: "profit", mobile: true },
  { label: "بیشترین ضرر", key: "loss", mobile: true },
  { label: "جدیدترین", key: "new", mobile: false },
];

export default function RealTimePrice({ homeData: initialHomeData, infoData, infoLoading, homeLoading }: any) {
  const [activeFilter, setActiveFilter] = useState("default");
  const [homeData, setHomeData] = useState(initialHomeData);
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);

  // 🔹 ۱. پردازش اولیه‌ی infoData (فقط یک بار انجام می‌شود)
  const infoMap = useMemo(() => {
    return infoData?.cryptocurrency.reduce((acc: any, item: any) => {
      acc[item.symbol] = item;
      return acc;
    }, {});
  }, [infoData]);

  // 🔹 ۲. هر بار که `initialHomeData` تغییر کند، مقدار `homeData` را تنظیم می‌کنیم.
  useEffect(() => {
    setHomeData(initialHomeData);
  }, [initialHomeData]);

  // 🔹 ۳. ترکیب homeData با infoData هنگام تغییر homeData یا activeFilter
  useEffect(() => {
    if (homeData?.[activeFilter]) {
      const filteredData = homeData[activeFilter];
      const mergedData = filteredData.map((currency: any) => ({
        ...currency,
        ...(infoMap[currency.symbol] || {}),
      }));
      setDisplayedCurrencies(mergedData);
    }
  }, [activeFilter, homeData, infoMap]);



  return (
    <div>
      <p className="flex justify-center md:justify-start text-[18px] md:text-2xl font-semibold mb-5 mt-8">
        قیمت لحظه ای ارزهای دیجیتال
      </p>
      <div className="bg-background overflow-hidden w-full ">
        <div className="flex justify-between items-center bg-secondary px-4 py-3 text-[#47444480] rounded-t-xl">
          <div className="flex justify-center md:justify-start gap-3 w-full ">

            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-3   py-1 rounded-lg text-[13px] md:text-sm ${activeFilter === option.key
                  ? "bg-yellow-400 text-white"
                  : "text-[#3C3B4180] dark:text-[#FFFFFF80]"
                  } ${option.mobile ? "block" : "hidden md:block"}`}
              >
                <span className="text-xs font-semibold sm:text-base ">{option.label}</span>

              </button>
            ))}
          </div>
          <button className="text-xs w-40 text-black dark:text-white hidden md:block ">
            <Link className="text-base font-semibold" href="/coins">مشاهده تمام ارزها</Link>          </button>
        </div>
        <div className="px-4 pt-[36px] w-full border-[1px] border-[#ADADAD80] border-t-0 rounded-b-xl">
          <div className="grid grid-cols-3 md:grid-cols-6 text-[#47444480] dark:text-[#FFFFFF80] text-[13px] md:text-sm w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300 ">
            <div className="flex  justify-start mr-5">نماد</div>
            <div className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
            <div className="pl-0 pr-0">قیمت به تومان</div>
            <div className="pl-0 pr-0">تغییرات 24h</div>
            <div className="hidden md:block pl-0 pr-0">نمودار 24h</div>
            <div className="hidden md:flex justify-end ml-5">عملیات</div>
          </div>

          <div className="divide-y-[3.5px] divide-gray-200 text-[13px] w-full">

            {displayedCurrencies.map((currency: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
              >
                <div className="flex flex-col justify-start pl-0 pr-0">
                  <div className="flex items-center gap-2 justify-start pr-2 md:pr-0">

                    <Image
                      src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                      alt={currency.symbol}
                      width={32}
                      height={32}
                      className="w-[32px] h[32px] md:w-[44px] md:h-[44px]"
                      onError={(e) => {
                         console.error("Error loading image:", e.nativeEvent); 
                         <i
                           className={`w-[32px] h-[32px] md:w-[44px] md:h-[44px] cf cf-${currency.symbol.toLowerCase()} ${currency.color ? `text-${currency.color}` : 'text-black'}`}
                         ></i>
                      }}

                    />
                


                    <div className="flex flex-col  justify-center gap-y-1">
                      <span className="text-sm md:text-[17px] font-semibold">{currency.name.fa}</span>
                      <p className="text-sm md:text-[17px] font-semibold text-right hidden md:block opacity-45 w-auto">
                        {currency.symbol}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full hidden md:block md:text-[21px] font-semibold">
                  ${Number(currency.lastPrice)

                  }
                </div>
                <div className=" md:text-[21px] font-semibold">{currency.priceToman} تومان</div>

                <div
                  className={`pr-2 md:pr-0 md:text-[21px] font-semibold ${currency.priceChangePercent.endsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                    }`}
                >
                  % {currency.priceChangePercent}
                </div>
                <div className="md:flex justify-center m-auto hidden object-cover">
                  <Image src={ChartUP} alt="chart" width={120} height={44} />
                </div>

                <div className="flex justify-end pl-0 pr-0">
                  <button className="text-sm border border-primary text-primary w-[119px] h-[46px] rounded-[10px] hidden md:block">
                    جزئیات بیشتر
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex justify-center items-center gap-3 py-6 px-5 cursor-pointer">
            <span >
              <Link href="/coins">مشاهده تمام ارزها</Link>
            </span>
            <div className="w-[17px] h-[17px]"> <ArrowLeft /></div>

          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import ChartUP from "@/assets/images/chartup.png";
// import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
// import Link from "next/link";

// const filterOptions = [
//   { label: "محبوب‌ترین‌ها", key: "default", mobile: true },
//   { label: "بیشترین حجم", key: "volume", mobile: false },
//   { label: "کمترین قیمت", key: "min", mobile: false },
//   { label: "بیشترین قیمت", key: "max", mobile: false },
//   { label: "بیشترین رشد", key: "profit", mobile: true },
//   { label: "بیشترین ضرر", key: "loss", mobile: true },
//   { label: "جدیدترین", key: "new", mobile: false },
// ];

// export default function RealTimePrice({ homeData, infoData }: any) {
//   const [activeFilter, setActiveFilter] = useState("default");
//   const [displayedCurrencies, setDisplayedCurrencies] = useState([]);

//   useEffect(() => {
//     if (homeData?.[activeFilter]) {
//       // دریافت لیست ارزها از homeData بر اساس فیلتر فعال
//       const filteredData = homeData[activeFilter];

//       // ترکیب داده‌های homeData با infoData
//       const mergedData = filteredData.map((currency: any) => {
//         const info = infoData?.cryptocurrency.find(
//           (item: any) => item.symbol === currency.symbol
//         );

//         return {
//           ...currency, // اطلاعات قیمت و تغییرات
//           ...info, // اطلاعات ثابت مانند آیکون و نام
//         };
//       });

//       setDisplayedCurrencies(mergedData);
//     }
//   }, [activeFilter, homeData, infoData]);

//   return (
//     <div>
//       <p className="flex justify-center md:justify-start text-[18px] md:text-2xl font-semibold mb-5 mt-8">
//         قیمت لحظه ای ارزهای دیجیتال
//       </p>
//       <div className="bg-background overflow-hidden w-full">
//         <div className="flex justify-between items-center bg-secondary px-4 py-3 text-[#47444480] rounded-t-xl">
//           <div className="flex justify-center md:justify-start gap-3 w-full">
//             {filterOptions.map((option) => (
//               <button
//                 key={option.key}
//                 onClick={() => setActiveFilter(option.key)}
//                 className={`px-3 py-1 rounded-lg text-[13px] md:text-sm ${
//                   activeFilter === option.key
//                     ? "bg-yellow-400 text-white"
//                     : "text-[#3C3B4180] dark:text-[#FFFFFF80]"
//                 } ${option.mobile ? "block" : "hidden md:block"}`}
//               >
//                 <span className="text-xs font-semibold sm:text-base">
//                   {option.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//           <button className="text-xs w-40 text-black dark:text-white hidden md:block">
//             <Link className="text-base font-semibold" href="/coins">
//               مشاهده تمام ارزها
//             </Link>
//           </button>
//         </div>

//         <div className="px-4 pt-[36px] w-full border-[1px] border-[#ADADAD80] border-t-0 rounded-b-xl">
//           <div className="grid grid-cols-3 md:grid-cols-6 text-[#47444480] dark:text-[#FFFFFF80] text-[13px] md:text-sm w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300">
//             <div className="flex justify-start mr-5">نماد</div>
//             <div className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
//             <div className="pl-0 pr-0">قیمت به تومان</div>
//             <div className="pl-0 pr-0">تغییرات 24h</div>
//             <div className="hidden md:block pl-0 pr-0">نمودار 24h</div>
//             <div className="hidden md:flex justify-end ml-5">عملیات</div>
//           </div>

//           <div className="divide-y-[3.5px] divide-gray-200 text-[13px] w-full">
//             {displayedCurrencies.map((currency: any, index: number) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
//               >
//                 <div className="flex flex-col justify-start pl-0 pr-0">
//                   <div className="flex items-center gap-2 justify-start pr-2 md:pr-0">
//                     <div className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]">
//                       {currency.icon ? (
//                         <Image
//                           src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
//                           alt={currency.symbol}
//                           width={32}
//                           height={32}
//                         />
//                       ) : (
//                         <span className="w-[32px] h-[32px] md:w-[44px] md:h-[44px] bg-gray-300 rounded-full"></span>
//                       )}
//                     </div>
//                     <div className="flex flex-col justify-center gap-y-1">
//                       <span
//                         className="text-sm md:text-[17px] font-semibold"
//                         style={{ color: currency.color }}
//                       >
//                         {currency.name.fa}
//                       </span>
//                       <p className="text-sm md:text-[17px] font-semibold text-right hidden md:block opacity-45 w-auto">
//                         {currency.symbol}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full hidden md:block md:text-[21px] font-semibold">
//                   ${currency.lastPrice}
//                 </div>
//                 <div className="md:text-[21px] font-semibold">
//                   {currency.priceToman} تومان
//                 </div>
//                 <div
//                   className={`pr-2 md:pr-0 md:text-[21px] font-semibold ${
//                     currency.priceChangePercent.startsWith("-")
//                       ? "text-red-500"
//                       : "text-green-500"
//                   }`}
//                 >
//                   % {currency.priceChangePercent}
//                 </div>
//                 <div className="md:flex justify-center m-auto hidden object-cover">
//                   <Image src={ChartUP} alt="chart" width={120} height={44} />
//                 </div>

//                 <div className="flex justify-end pl-0 pr-0">
//                   <button className="text-sm border border-primary text-primary w-[119px] h-[46px] rounded-[10px] hidden md:block">
//                     جزئیات بیشتر
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="sm:hidden flex justify-center items-center gap-3 py-6 px-5 cursor-pointer">
//             <span>
//               <Link href="/coins">مشاهده تمام ارزها</Link>
//             </span>
//             <div className="w-[17px] h-[17px]">
//               <ArrowLeft />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
