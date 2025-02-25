"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Link from "next/link";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";

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

interface InfoMap {
  [symbol: string]: CryptocurrencyInfo;
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

export default function RealTimePrice({ homeData: initialHomeData, infoMap, isLoading }: {
  homeData: HomeData;
  infoMap: InfoMap;
  isLoading: boolean;

}) {
  const { formatNumber } = useFormattedNumber();
  const [activeFilter, setActiveFilter] = useState("default");
  const [displayedCurrencies, setDisplayedCurrencies] = useState<MergedData[]>([]);
  const { baseColor, highlightColor } = useTheme();


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
                <span className="text-xs font-semibold sm:text-sm ">{option.label}</span>

              </button>
            ))}
          </div>
          <button className="text-xs w-40 text-black dark:text-white hidden md:block ">
            <Link className="text-base font-semibold" href="/coins">مشاهده تمام ارزها</Link>          </button>
        </div>
        <div className="px-4 pt-[36px] w-full border-[1px] border-[#ADADAD80] border-t-0 rounded-b-xl">
          <div className="px-2 grid grid-cols-3 md:grid-cols-6 text-[#47444480] dark:text-[#FFFFFF80] text-[10px] md:text-xs w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300 ">
            <div className="block ">نماد</div>
            <div className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
            <div className="pl-0 pr-0 col-span-1">قیمت به تومان</div>
            <div className="pl-0 pr-0">تغییرات 24h</div>
            <div className="hidden md:block pl-0 pr-0">نمودار 24h</div>
            <div className="hidden md:flex justify-center ml-5">عملیات</div>
          </div>

          <div className="divide-y-[1px] divide-[#ADADAD80] dark:divide-[#FFFFFF80]  text-[13px] w-full">
            {isLoading ? (
              Array(6).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
                >
                  <div className="flex flex-col justify-start pl-0 pr-0 col-span-1">
                    <div className="flex items-center gap-2 justify-start pr-2 md:pr-0">
                      <div className="w-[28px] h-[28px] md:w-[44px] md:h-[44px] flex">
                        <Skeleton width={28} height={28} circle={true} baseColor={baseColor} highlightColor={highlightColor} />
                      </div>


                      <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
                        <Skeleton width={50} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                        <Skeleton width={30} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full hidden md:block md:text-lg font-semibold">
                    <Skeleton width={60} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-center md:items-center md:text-center gap-x-2 col-span-1">
                    <Skeleton width={50} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                    <span className="text-[8px] md:text-sm font-semibold opacity-50">تومان</span>
                  </div>

                  <div className="text-[10px] md:text-lg font-semibold text-end md:text-center ml-10 md:ml-0">
                    <Skeleton width={40} height={12} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="md:flex justify-center m-auto hidden object-cover">
                    <Skeleton width={120} height={44} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div className="hidden md:flex justify-end pl-0 pr-0">
                    <Skeleton width={119} height={46} borderRadius={10} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>
                </div>
              ))
            ) : (
              displayedCurrencies.map((currency, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 md:grid-cols-6 max-w-[1165px] items-center text-center py-4"
                >
                  <div className="flex flex-col justify-start pl-0 pr-0 col-span-1">
                    <div className="flex items-center gap-2 justify-start pr-2 md:pr-4">
                    <div className="min-h-6 min-w-6 w-6 h-6 md:h-11 md:w-11 md:min-h-11 md:min-w-11">
                        {currency.isFont ? (
                          <i
                            className={`cf cf-${currency.symbol.toLowerCase()} text-2xl md:text-[44px] w-full h-full flex items-center justify-center object-cover`}
                            style={{ color: currency.color }}
                          ></i>
                        ) : (
                          <img
                            src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                            alt={currency.symbol}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>

                      <div className="flex flex-col justify-center gap-y-1 md:gap-y-2">
                      <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold">
                        {" "}
                        {currency?.name?.length > 14
                          ? currency.name.slice(0, 11) + "..."
                          : currency?.name}
                      </span>
                      <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold opacity-50">
                        {" "}
                        {currency?.symbol?.length > 7
                          ? "..." + currency.symbol.slice(0, 7)
                          : currency?.symbol}
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full hidden md:block md:text-base font-semibold">
                    ${currency.lastPrice}
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-center md:items-center md:text-center gap-x-2 col-span-1">
                    <span className="text-[10px] md:text-base font-semibold">
                      {activeFilter === "min" ? currency.priceToman : formatNumber(currency.priceToman)}
                    </span>
                    <span className="text-[8px] md:text-sm font-semibold">تومان</span>
                  </div>

                  <p
                    dir="ltr"
                    className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-[#e54c50] " : "text-[#2bad87]"
                      } text-[10px] md:text-base font-semibold text-center`}
                  >
                    {currency.priceChangePercent} %
                  </p>
                  <div
                    className="md:flex justify-center m-auto hidden object-cover"
                    style={{
                      filter: parseFloat(currency.priceChangePercent) < 0
                        ? 'brightness(0) saturate(100%) invert(36%) sepia(77%) saturate(1131%) hue-rotate(324deg) brightness(94%) contrast(90%)'
                        : 'brightness(0) saturate(100%) invert(50%) sepia(55%) saturate(506%) hue-rotate(112deg) brightness(101%) contrast(90%)'
                    }}

                  >
                    <Image
                      src={`https://cdn.arz8.com/charts/1d/${currency.symbol}.svg`}
                      alt="chart"
                        width={120}
                      height={44}
                    />
                  </div>

                  <Link href={`/coins/${currency.symbol}`} className="flex justify-center pl-0 pr-0">
                  <button className="hidden md:block border border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[7px] min-[461px]:text-[10px] rounded-[5.22px] md:rounded-lg  ">
                        جزئیات بیشتر
                      </button>
                  </Link>
                </div>
              ))
            )}

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
