"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Link from "next/link";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";
import SkeletonLoader from "./skeleton-loader";

interface HomeCurrency {
  symbol: string;
  priceToman: string;
  quoteVolume: string
  priceChangePercent: string;
  lastPrice: string;
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
  lastPrice: string;
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
    if (!initialHomeData?.[activeFilter] || !infoMap) return [];

    return initialHomeData[activeFilter].map((currency) => ({
      ...currency,
      ...(infoMap[currency.symbol] || {}),
      name: infoMap[currency.symbol]?.name.fa || currency.symbol,
    }));
  }, [activeFilter, initialHomeData, infoMap]);




  useEffect(() => {
    setDisplayedCurrencies(filteredData);
  }, [filteredData]);



  return (
    <section aria-label="قیمت‌های لحظه‌ای ارزهای دیجیتال">
      <h2 className="flex justify-center md:justify-start text-[18px] md:text-2xl font-semibold mb-5 mt-8">
        قیمت لحظه ای ارزهای دیجیتال
      </h2>
      <div className="bg-background overflow-hidden w-full">
        <header className="flex justify-between items-center bg-secondary px-4 py-3 text-[#47444480] rounded-t-xl">
          <nav className="flex justify-center md:justify-start gap-3 w-full" aria-label="فیلترهای ارز های دیجیتال">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-2 sm:px-3 py-1 rounded-lg text-[13px] md:text-sm ${activeFilter === option.key
                    ? "bg-yellow-400 text-white"
                    : "text-[#3C3B4180] dark:text-[#FFFFFF80] hover:text-primary dark:hover:text-primary"
                  } ${option.mobile ? "block" : "hidden md:block"}`}
                aria-pressed={activeFilter === option.key}
                aria-label={`فیلتر ${option.label}`}
              >
                <h3 className="text-xs font-semibold sm:text-sm">{option.label}</h3>
              </button>
            ))}
          </nav>
          <Link
            href="/coins"
            className="text-xs w-40 text-black dark:text-white hidden md:block"
            aria-label="مشاهده تمام ارزها"
          >
            <span className="text-base font-semibold">مشاهده تمام ارزها</span>
          </Link>
        </header>

        <div className="px-4 pt-[36px] w-full border-[1px] border-[#ADADAD80] border-t-0 rounded-b-xl">
          <div
            className="px-2 grid grid-cols-3 md:grid-cols-6 text-[#47444480] dark:text-[#FFFFFF80] text-[10px] md:text-xs w-full rounded-2xl bg-secondary text-center py-3 font-semibold border-gray-300"
            role="row"
            aria-label="هدر جدول قیمت‌ها"
          >
            <div role="columnheader">نماد</div>
            <div role="columnheader" className="w-full hidden md:block pl-0 pr-0">قیمت به USDT</div>
            <div role="columnheader" className="pl-0 pr-0 col-span-1 text-end md:text-center">قیمت به تومان</div>
            <div role="columnheader" className="pl-0 pr-0 text-end ml-3 md:ml-0 md:text-center">تغییرات 24h</div>
            <div role="columnheader" className="hidden md:block pl-0 pr-0">نمودار 24h</div>
            <div role="columnheader" className="hidden md:flex justify-center ml-5">عملیات</div>
          </div>

          <div
            className="divide-y-[1px] divide-[#ADADAD80] dark:divide-[#FFFFFF80] text-[13px] w-full"
            role="list"
            aria-label="لیست قیمت‌های ارزهای دیجیتال"
          >
            {isLoading ? (
             <SkeletonLoader />
            ) : (
              displayedCurrencies.map((currency, index) => (
                <div
                  key={index}
                  className="max-w-[1165px]"
                  role="listitem"
                >

                  <div className="hidden md:grid grid-cols-6 w-full items-center text-center py-4 ">

                    <div className="flex flex-col justify-start pl-0 pr-0 col-span-1">
                      <div className="flex items-center gap-3 justify-start pr-4">
                        <div className=" h-11 w-11 min-h-11 min-w-11">
                          {currency.isFont ? (
                            <i
                              className={`cf cf-${currency.symbol.toLowerCase()} text-[44px] w-full h-full flex items-center justify-center object-fill`}
                              style={{ color: currency.color }}
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <img
                              src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                              alt={`آیکون ارز ${currency.name}`}
                              className="w-full h-full object-fill"
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

                    <div className="w-full block md:text-base font-semibold">
                      {formatNumber(currency.lastPrice)}

                    </div>

                    <div className="flex flex-row md:justify-center items-center text-center gap-x-2 col-span-1">
                      <span className="text-[10px] md:text-base font-semibold">
                        {formatNumber(currency.priceToman)}
                      </span>
                      <span className="text-[8px] md:text-sm font-semibold">تومان</span>
                    </div>

                    <p
                      dir="ltr"
                      className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-[#e54c50] " : "text-[#2bad87]"
                        } text-base font-semibold text-center`}
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
                        alt={`نمودار تغییرات قیمت ${currency.name} در 24 ساعت گذشته`}
                        width={120}
                        height={44}
                        loading="lazy"
                        className="w-auto h-auto"
                      />
                    </div>

                    <Link href={`/coins/${currency.symbol}`} className="flex justify-center pl-0 pr-0">
                      <button className="hidden md:block border border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[7px] min-[461px]:text-[10px] rounded-[5.22px] md:rounded-lg  hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 ">
                        جزئیات بیشتر
                      </button>
                    </Link>

                  </div>


                  <Link href={`/coins/${currency.symbol}`} className="grid md:hidden grid-cols-9 w-full items-center text-center py-4">


                    <div className="flex flex-col justify-start pl-0 pr-0 col-span-4">
                      <div className="flex items-center gap-2 justify-start pr-2  col-span-1">
                        <div className="min-h-8 min-w-8 w-8 h-8">
                          {currency.isFont ? (
                            <i
                              className={`cf cf-${currency.symbol.toLowerCase()} text-[32px] md:text-[44px] w-full h-full flex items-center justify-center object-fill`}
                              style={{ color: currency.color }}
                            ></i>
                          ) : (
                            <img
                              src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                              alt={`آیکون ارز ${currency.name}`}
                              className="w-full h-full object-fill"
                              loading="lazy"
                            />
                          )}
                        </div>

                        <div className="flex flex-col justify-center gap-y-1">
                          <span className="text-start whitespace-nowrap sm:text-base text-xs sm:font-semibold">
                            {" "}
                            {currency?.name?.length > 12
                              ? currency.name.slice(0, 9) + "..."
                              : currency?.name}
                          </span>
                          <span className="text-start whitespace-nowrap sm:text-base text-xs sm:font-semibold opacity-50">
                            {" "}
                            {currency?.symbol?.length > 7
                              ? "..." + currency.symbol.slice(0, 7)
                              : currency?.symbol}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col  gap-x-2 col-span-2">
                      <span className="text-xs  font-semibold">
                        {formatNumber(currency.priceToman)}
                      </span>
                      <span className="text-[8px] font-semibold">تومان</span>
                    </div>

                    <p
                      dir="ltr"
                      className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-[#e54c50] " : "text-[#2bad87]"
                        } text-xs font-semibold text-center col-span-3`}
                    >
                      {currency.priceChangePercent} %
                    </p>
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
    </section>
  );
}
