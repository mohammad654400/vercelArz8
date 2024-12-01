'use client'
import React, { useState } from "react";
import Image from "next/image";
import BNB from "@/assets/icons/bnb";
import ChartUP from "@/assets/images/chartup.png";
import { tree } from "next/dist/build/templates/app-page";

const currencies = [
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "شیبا",
    symbol: "SHIB",
    priceIRR: "1.745413",
    priceUSDT: "0.00001",
    change: "-1.37",
    chart: "down",
    icon: <BNB />,
    popular: false,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    priceIRR: "221,129,648",
    priceUSDT: "1750.00",
    change: "2.52",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "آوالانچ",
    symbol: "AVAX",
    priceIRR: "2,456,474",
    priceUSDT: "15.37",
    change: "8.21",
    chart: "up",
    icon: <BNB />,
    popular: false,
  },
  {
    name: "ترون",
    symbol: "TRX",
    priceIRR: "13,778",
    priceUSDT: "0.090",
    change: "-3.37",
    chart: "down",
    icon: <BNB />,
    popular: true,
  },
];

const filterOptions = [
  { label: "محبوب‌ترین‌ها", key: "popular" },
  { label: "گران ترین", key: "mostExpensive" },
  { label: "ارزان ترین", key: "cheapest" },
  { label: "بیشترین رشد", key: "mostGrowth" },
  { label: "بیشترین ضرر", key: "mostLoss" },
  { label: "جدیدترین", key: "newest" }
];

export default function RealTimePrice() {
  const [activeFilter, setActiveFilter] = useState("popular");
  const [displayedCurrencies, setDisplayedCurrencies] = useState(
    currencies.filter(currency => currency.popular)
  );

  const handleFilterChange = (filterKey:any) => {
    setActiveFilter(filterKey);

    switch (filterKey) {
      case "popular":
        setDisplayedCurrencies(currencies.filter(currency => currency.popular));
        break;
      case "mostExpensive":
        setDisplayedCurrencies([...currencies].sort((a, b) => 
          parseFloat(b.priceUSDT.replace(/,/g, '')) - parseFloat(a.priceUSDT.replace(/,/g, ''))
        ));
        break;
      case "cheapest":
        setDisplayedCurrencies([...currencies].sort((a, b) => 
          parseFloat(a.priceUSDT.replace(/,/g, '')) - parseFloat(b.priceUSDT.replace(/,/g, ''))
        ));
        break;
      case "mostGrowth":
        setDisplayedCurrencies([...currencies].filter(c => !c.change.startsWith('-')).sort((a, b) => 
          parseFloat(b.change) - parseFloat(a.change)
        ));
        break;
      case "mostLoss":
        setDisplayedCurrencies([...currencies].filter(c => c.change.startsWith('-')).sort((a, b) => 
          parseFloat(a.change) - parseFloat(b.change)
        ));
        break;
      case "newest":
        setDisplayedCurrencies(currencies);
        break;
      default:
        setDisplayedCurrencies(currencies);
    }
  };

  return (
    <div className="bg-background shadow-lg rounded-xl overflow-hidden ">
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#3C3B41] px-4 py-3 text-[#FFFFFF80]">
        <div className="flex gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleFilterChange(option.key)}
              className={`px-3 py-1 rounded-lg text-sm ${
                activeFilter === option.key
                  ? "bg-yellow-400 text-white "
                  : " text-[#FFFFFF80]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button className="text-sm">
          مشاهده همه ارزها
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-6 rounded-2xl bg-[#F6F6F6] dark:bg-[#3C3B41] text-center py-3 font-semibold  border-gray-300 ">
          <div>تعداد</div>
          <div>قیمت به USDT</div>
          <div>قیمت به تومان</div>
          <div>تغییرات 24h</div>
          <div>نمودار 24h</div>
          <div>عملیات</div>
        </div>

        <div className="divide-y divide-gray-200">
          {displayedCurrencies.map((currency, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center text-center py-4"
            >
              <div className="flex items-center justify-center gap-2">
                <div>{currency.icon}</div>
                <span>{currency.name}</span>
              </div>
              <div>{currency.priceUSDT} USDT</div>
              <div>{currency.priceIRR} تومان</div>
              <div
                className={`${
                  currency.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {currency.change.startsWith("-") ? "▼" : "▲"} {currency.change}%
              </div>
              <div className="flex justify-center ">
                <Image
                  src={ChartUP}
                  alt="chart"
                  width={64}
                  height={31}
                />
              </div>
              <div>
                <button className="border-2 border-primary text-primary px-4 py-2 rounded-lg">
                  جزئیات بیشتر
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}