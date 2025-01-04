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
    change: "1.37-",
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
    change: "3.37-",
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
                onClick={() => handleFilterChange(option.key)}
                className={`px-3   py-1 rounded-lg text-[13px] md:text-sm ${
                  activeFilter === option.key
                    ? "bg-yellow-400 text-white"
                    : "text-[#54545880] dark:text-[#FFFFFF80]"
                } ${option.mobile ? "block" : "hidden md:block"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <button className="text-xs w-40 text-black dark:text-white hidden md:block ">
            مشاهده همه ارزها
          </button>
        </div>
        <div className="px-4 pt-[36px] w-full border-[1px] border-[#ADADAD80] border-t-0 rounded-b-xl">
          <div className="grid grid-cols-3 md:grid-cols-6 text-[#47444480] dark:text-[#FFFFFF80] text-[13px] md:text-sm w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300 ">
            <div className="flex justify-start  mr-9">نماد</div>
            <div className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
            <div className="pl-0 pr-0">قیمت به تومان</div>
            <div className="pl-0 pr-0">تغییرات 24h</div>
            <div className="hidden md:block pl-0 pr-0">نمودار 24h</div>
            <div className="hidden md:block pl-0 mr-14">عملیات</div>
          </div>

          <div className="divide-y-[3.5px] divide-gray-200 text-[13px] w-full">
            {displayedCurrencies.map((currency, index) => (
              <div
                key={index}
                className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
              >
                <div className="flex flex-col justify-start pl-0 pr-0">
                  <div className="flex items-center gap-2 justify-start pr-0 sm:">
                    <div>
                      <div className="w-[44px] h-[44px]">{currency.icon}</div>
                    </div>
                    <div className="flex flex-col justify-start">
                      <span className="text-[18px] ">{currency.name}</span>
                      <p className="text-[15px] text-right hidden md:block opacity-45 w-auto">
                        {currency.symbol}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full hidden md:block text-[19px]">
                  ${currency.priceUSDT}
                </div>
                <div className="text-[18px]">{currency.priceIRR} تومان</div>
                <div
                  className={`text-[20px] ${
                    currency.change.endsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  % {currency.change}
                </div>
                <div className="md:flex justify-center m-auto hidden object-cover">
                  <Image src={ChartUP} alt="chart" width={150} height={44} />
                </div>

                <div className="flex justify-end pl-0 pr-0">
                  <button className="text-sm border-2 border-primary text-primary w-[119px] h-[46px] rounded-lg hidden md:block">
                    جزئیات بیشتر
                  </button>
                </div>
              </div>
            ))}
          </div>
        <div className="sm:hidden flex justify-center items-center gap-3 py-6 px-5 cursor-pointer">
          <span>
            <Link href="/coins">مشاهده تمام ارزها</Link>
          </span>
          <ArrowLeft />
        </div>
        </div>
      </div>
    </div>
  );
}
