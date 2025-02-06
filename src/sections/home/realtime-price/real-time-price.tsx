"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Link from "next/link";
import { useFormattedNumber } from "@/hooks/useFormatted-number";

interface HomeCurrency {
  symbol: string;
  priceToman: string;
  quoteVolume: string
  priceChangePercent: string;
  lastPrice?: string;
}

interface HomeData {
  [key: string]: HomeCurrency[];
}

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

interface InfoData {
  cryptocurrency: CryptocurrencyInfo[];
}
interface MergedData {
  id: number;
  symbol: string;
  name: string;
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
  priceToman: string;
  quoteVolume: string;
  priceChangePercent: string;
  lastPrice?: string;
}

const filterOptions = [
  { label: "محبوب‌ترین‌ها", key: "default", mobile: true },
  { label: "بیشترین حجم", key: "volume", mobile: false },
  { label: "کمترین قیمت", key: "min", mobile: false },
  { label: "بیشترین قیمت", key: "max", mobile: false },
  { label: "بیشترین رشد", key: "profit", mobile: true },
  { label: "بیشترین ضرر", key: "loss", mobile: true },
  { label: "جدیدترین", key: "new", mobile: false },
];

export default function RealTimePrice({ homeData: initialHomeData, infoData }: {
  homeData: HomeData;
  infoData: InfoData;
}) {
  const { formatNumber } = useFormattedNumber();
  const [activeFilter, setActiveFilter] = useState("default");
  const [displayedCurrencies, setDisplayedCurrencies] = useState<MergedData[]>([]);
  console.log("initialHomeData", initialHomeData);


  const infoMap = useMemo(
    () =>
      infoData?.cryptocurrency.reduce((acc, item) => {
        acc[item.symbol] = item;
        return acc;
      }, {} as Record<string, InfoData["cryptocurrency"][0]>),
    [infoData]
  );


  const filteredData = useMemo(() => {
    if (!initialHomeData || !infoMap) return [];

    return (initialHomeData[activeFilter] || []).map((currency) => ({
      ...currency,
      ...(infoMap[currency.symbol] || {}),
      name: infoMap[currency.symbol]?.name.fa || currency.symbol,
      priceToman: currency.priceToman,
    }));
  }, [activeFilter, initialHomeData, infoMap]);

  useEffect(() => {
    setDisplayedCurrencies(filteredData);
  }, [filteredData]);

  if (!initialHomeData || !infoMap) {
    return <div>در حال بارگذاری...</div>;
  }


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
          <div className="px-2 grid grid-cols-5 md:grid-cols-8 text-[#47444480] dark:text-[#FFFFFF80] text-[11px] md:text-sm w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300 ">
            <div className="flex justify-start mr-5 col-span-2 ">نماد</div>
            <div className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
            <div className="pl-0 pr-0 col-span-2">قیمت به تومان</div>
            <div className="pl-0 pr-0">تغییرات 24h</div>
            <div className="hidden md:block pl-0 pr-0">نمودار 24h</div>
            <div className="hidden md:flex justify-end ml-5">عملیات</div>
          </div>

          <div className="divide-y-[3.5px] divide-gray-200 text-[13px] w-full">

            {displayedCurrencies.map((currency, index) => (
              <div
                key={index}
                className="grid grid-cols-5 md:grid-cols-8 max-w-[1165px] items-center text-center py-4"
              >
                <div className="flex flex-col justify-start pl-0 pr-0 col-span-2">
                  <div className="flex items-center gap-2 justify-start pr-2 md:pr-0 ">


                    <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] flex">
                      {!currency.isFont ? (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                          alt={currency.symbol}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <i
                          className={`cf cf-${currency.symbol.toLowerCase()} text-[28px] md:text-[44px] w-full h-full flex items-center justify-center object-cover`}
                          style={{ color: currency.color }}
                        ></i>
                      )}

                    </div>


                    <div className="flex flex-col  justify-center gap-y-1 md:gap-y-2">
                      <span className="text-[10px] md:text-base font-semibold text-start">{currency.name}</span>
                      <p className="text-[10px] md:text-base font-semibold text-right  block opacity-45 w-auto">
                        {currency.symbol}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full hidden md:block md:text-lg font-semibold ">
                  ${currency.lastPrice}
                </div>
                <div className=" flex flex-col md:flex-row  md:justify-center md:items-center md:text-center gap-x-2 col-span-2  ">
                  <span className="text-[10px] md:text-lg font-semibold">
                    {activeFilter === "min" ? currency.priceToman : formatNumber(currency.priceToman)}
                  </span>
                  <span className="text-[8px] md:text-sm font-semibold">تومان</span>
                </div>

                <p
                  style={{ direction: "ltr" }}
                  className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                    } text-[10px] md:text-lg font-semibold text-end md:text-center  `}
                >
                  {currency.priceChangePercent} %
                </p>


                <div className="md:flex justify-center m-auto hidden object-cover">
                  <Image src={`https://cdn.arz8.com/charts/1d/${currency.symbol}.svg`} alt="chart" width={120} height={44} />
                </div>

                <Link href={`/coins/${currency.symbol}`} className="flex justify-end pl-0 pr-0">
                  <button className="text-sm border border-primary text-primary w-[119px] h-[46px] rounded-[10px] hidden md:block">
                    جزئیات بیشتر
                  </button>
                </Link>
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
