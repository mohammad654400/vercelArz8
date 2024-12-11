"use client";
import React, { useState } from "react";
import Image from "next/image";
import BNB from "@/assets/icons/bnb";
import ChartUP from "@/assets/images/chartup.png";
import { tree } from "next/dist/build/templates/app-page";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Link from "next/link";

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
  { label: "محبوب‌ترین‌ها", key: "popular", mobile: true },
  { label: "گران ترین", key: "mostExpensive", mobile: false },
  { label: "ارزان ترین", key: "cheapest", mobile: false },
  { label: "بیشترین رشد", key: "mostGrowth", mobile: true },
  { label: "بیشترین ضرر", key: "mostLoss", mobile: true },
  { label: "جدیدترین", key: "newest", mobile: false },
];

export default function RealTimePrice() {
  const [activeFilter, setActiveFilter] = useState("popular");
  const [displayedCurrencies, setDisplayedCurrencies] = useState(
    currencies.filter((currency) => currency.popular)
  );

  const handleFilterChange = (filterKey: any) => {
    setActiveFilter(filterKey);

    switch (filterKey) {
      case "popular":
        setDisplayedCurrencies(
          currencies.filter((currency) => currency.popular)
        );
        break;
      case "mostExpensive":
        setDisplayedCurrencies(
          [...currencies].sort(
            (a, b) =>
              parseFloat(b.priceUSDT.replace(/,/g, "")) -
              parseFloat(a.priceUSDT.replace(/,/g, ""))
          )
        );
        break;
      case "cheapest":
        setDisplayedCurrencies(
          [...currencies].sort(
            (a, b) =>
              parseFloat(a.priceUSDT.replace(/,/g, "")) -
              parseFloat(b.priceUSDT.replace(/,/g, ""))
          )
        );
        break;
      case "mostGrowth":
        setDisplayedCurrencies(
          [...currencies]
            .filter((c) => !c.change.startsWith("-"))
            .sort((a, b) => parseFloat(b.change) - parseFloat(a.change))
        );
        break;
      case "mostLoss":
        setDisplayedCurrencies(
          [...currencies]
            .filter((c) => c.change.startsWith("-"))
            .sort((a, b) => parseFloat(a.change) - parseFloat(b.change))
        );
        break;
      case "newest":
        setDisplayedCurrencies(currencies);
        break;
      default:
        setDisplayedCurrencies(currencies);
    }
  };

  return (
    <div className="bg-background shadow-lg rounded-xl overflow-hidden w-full ">
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#3C3B41] px-4 py-3 text-[#FFFFFF80]">
        <div className="flex justify-center gap-3 w-full">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleFilterChange(option.key)}
              className={`px-3 py-1 rounded-lg text-[13px] md:text-sm ${
                activeFilter === option.key
                  ? "bg-yellow-400 text-white"
                  : "text-[#FFFFFF80] text-black dark:text-white"
              } ${option.mobile ? "block" : "hidden md:block"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button className="text-sm text-black dark:text-white hidden md:block">
          مشاهده همه ارزها
        </button>
      </div>
      <div className="p-4 w-full">
        <div className="grid grid-cols-3  text-[13px] md:text-sm md:grid-cols-6 w-full rounded-2xl bg-[#F6F6F6] dark:bg-[#3C3B41] text-center py-3 font-semibold  border-gray-300 ">
          <div className=""> نماد</div>
          <div className="w-full hidden md:block">قیمت به USDT</div>
          <div>قیمت به تومان</div>
          <div className="">تغییرات 24h</div>
          <div className="hidden md:block">نمودار 24h</div>
          <div className="hidden md:block">عملیات</div>
        </div>

        <div className="divide-y divide-gray-200 text-[13px] w-full">
          {displayedCurrencies.map((currency, index) => (
            <div
              key={index}
              className="grid grid-cols-3 md:grid-cols-6  items-center text-center py-4"
            >
              <div className="w-full flex flex-col justify-start">
                <div className="flex">
                  <div>{currency.icon}</div>
                  <span>{currency.name}</span>
                </div>
                <p className="text-[15px] md:hidden">{currency.symbol}</p>
                <p className="text-[15px] md:hidden">{currency.priceUSDT}</p>
              </div>
              <div className="w-full hidden md:block">
                {currency.priceUSDT} USDT
              </div>
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
              <div className="flex justify-center hidden md:block">
                <Image src={ChartUP} alt="chart" width={64} height={31} />
              </div>
              <div>
                <button className="border-2 border-primary text-primary px-4 py-2 rounded-lg hidden md:block">
                  جزئیات بیشتر
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 py-6 px-5 cursor-pointer">
        <span>
          <Link href="/coins">مشاهده تمام ارزها</Link>
        </span>{" "}
        <ArrowLeft />
      </div>
    </div>
  );
}
