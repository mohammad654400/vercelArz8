"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Star from "@/assets/icons/star";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import useGetData from "@/hooks/useGetData";
import Pagination from "./pagination";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";
import { useFormattedNumber } from "@/hooks/useFormatted-number";

interface CryptocurrencyInfo {
  symbol: string;
  name: | { fa: string; en?: string; } | string;
  icon?: string;
  color?: string;
  isFont: boolean;
  lastPrice?: string;
  priceToman?: string;
  priceChangePercent?: string;
}
interface ProcessedCryptocurrencyInfo extends Omit<CryptocurrencyInfo, "name"> {
  name: string;
}
interface FilterOption {
  label: string;
  key: string;
}
interface LivePriceTableProps {
  infoMap: Record<string, CryptocurrencyInfo>;
}
interface DisplayedCurrencies {
  lists: CryptocurrencyInfo[];
  total: number;
}

const filterOptions: FilterOption[] = [
  { label: "مورد علاقه ", key: "favorites" },
  { label: "پیش فرض", key: "default" },
  { label: "محبوب‌ترین‌ها", key: "popular" },
  { label: "گران ترین", key: "max" },
  { label: "ارزان ترین", key: "min" },
  { label: "بیشترین رشد", key: "profit" },
  { label: "بیشترین ضرر", key: "loss" },
  { label: "جدیدترین", key: "new" },
];

export default function LivePriceTable({ infoMap }: LivePriceTableProps) {
  const { baseColor, highlightColor } = useTheme();
  const { formatNumber } = useFormattedNumber();
  // UI State
  const [open, setOpen] = useState(false);
  const [numberItem, setNumberItem] = useState(false);
  const [textFilter, setTextFilter] = useState<string>("پیش فرض");
  // Data State
  const [displayedCurrencies, setDisplayedCurrencies] = useState<{ lists: ProcessedCryptocurrencyInfo[]; total: number; }>({ lists: [], total: 0 });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [delayedSearchQuery, setDelayedSearchQuery] = useState("");
  const [sort, setSort] = useState<string>("default");
  const [filterKey, setFilterKey] = useState<string>("default");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Pagination State
  const [limit, setLimit] = useState<string>("10");
  const [numberPage, setNumberPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // Favorites State
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });
  const paginationDropdownRef = useRef<HTMLDivElement>(null)
  const sortDropdownRef = useRef<HTMLDivElement>(null)
  // Persist favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  // Toggle favorite callback
  const toggleFavorite = useCallback((symbol: string) => {
    setFavorites((prev) => prev.includes(symbol) ? prev.filter((fav) => fav !== symbol) : [...prev, symbol]);
  }, []);
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setDelayedSearchQuery(searchQuery);
    }, 800);
    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);
  const getRequestParams = useMemo(() => {
    const params: Record<string, any> = { limit, page: numberPage, sort, search: delayedSearchQuery };
    if (sort === "favorites" && favorites.length > 0) {
      params.symbols = favorites;
    }
    return params;
  }, [sort, favorites, limit, numberPage, delayedSearchQuery]);
  // Fetch data
  const { data: cryptocurrenciesData } = useGetData("cryptocurrencies", 60000, getRequestParams);
  // Set loading state when request params change
  useEffect(() => {
    setIsLoading(true);
  }, [getRequestParams]);
  // Process fetched data
  const filteredData = useMemo(() => {
    if (!cryptocurrenciesData) return { lists: [], total: 0 };
    return {
      lists: cryptocurrenciesData.lists.map((item: CryptocurrencyInfo) => {
        const info = infoMap[item.symbol] || {};
        const processedName = typeof info.name === "object" ? info.name.fa : info.name || item.symbol;
        return { ...item, ...info, name: processedName, };
      }),
      total: cryptocurrenciesData.total || 0,
    };
  }, [cryptocurrenciesData, infoMap]);
  // Update displayed currencies when data changes
  useEffect(() => {
    if (cryptocurrenciesData) {
      setDisplayedCurrencies(filteredData);
      setIsLoading(false);
    }
  }, [cryptocurrenciesData, filteredData, favorites
  ]);
  // Handle search input change
  const handleSearchChange = useCallback((value: string) => {
    setIsLoading(true);
    setSearchQuery(value);
    setNumberPage(1);
    setDisplayedCurrencies({ lists: [], total: 0 });
  }, []);
  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit.toString());
    setItemsPerPage(newLimit);
    setNumberPage(1);
    setDisplayedCurrencies({ lists: [], total: 0 });
    setNumberItem(false);
    setIsLoading(true);
  };
  // Calculate total pages
  const totalPages = useMemo(
    () =>
      sort !== "favorites"
        ? Math.ceil(displayedCurrencies.total / itemsPerPage)
        : Math.ceil(favorites.length / itemsPerPage),
    [sort, displayedCurrencies.total, itemsPerPage, favorites.length]
  );
  useEffect(() => {
    const closePaginationDropdown = (e: MouseEvent) => {
      if (paginationDropdownRef.current && !paginationDropdownRef.current.contains(e.target as Node)) setNumberItem(false)
    }
    const closeSortDropdownRef = (e: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', closePaginationDropdown)
    document.addEventListener('pointerdown', closeSortDropdownRef)
    return () => {
      document.removeEventListener('pointerdown', closePaginationDropdown)
      document.removeEventListener('pointerdown', closeSortDropdownRef)
    }
  }, [])

  return (
    <div className=" bg-background dark:bg-[#3C3B41] rounded-xl overflow-hidden">
      {/* search */}
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#242428] px-2 py-3 text-[#FFFFFF80]">
        <div className="relative block lg:hidden">
          <button onClick={() => setOpen(!open)} className="flex justify-center items-center px-2 py-2 bg-primary text-white rounded-xl">
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{textFilter}</span>
            <span className="w-[9.4px] h-[9.4px] sm:w-4 sm:h-4 text-white mr-1"><ArrowDown /></span>
          </button>
          {open &&
            <div ref={sortDropdownRef} className="absolute top-11 left-[-70px] -translate-x-1/2 mt-2 w-[300px] h-[390px] bg-background shadow-md border rounded-2xl pt-2 z-20">
              <div className="absolute -top-[11px] right-7 sm:right-22 md:right-8 lg:right-8 text-background dark:text-background w-5 h-5 bg-background rounded-t-full border-t"></div>
              {filterOptions.map((option) =>
                <button
                  key={option.key}
                  onClick={() => {
                    if (option.key !== filterKey) { // prevent fetching again same data
                      setFilterKey(option.key);
                      setTextFilter(option.label);
                    }
                  }}
                  className={`flex w-[250px] justify-end flex-col mr-5 gap-4 px-3 py-1 rounded-lg text-xs font-semibold mt-3 text-foreground focus:bg-[#FFF6DD] focus:text-black`}
                >
                  {option.label}
                </button>
              )}
              <button
                onClick={() => {
                  setSort(filterKey);
                  setOpen(false);
                }}
                className="flex py-2 mt-7 px-24 rounded-lg bg-primary mx-auto text-white"
              >
                اعمال فیلتر
              </button>
            </div>
          }
        </div>
        <div className="hidden lg:flex gap-1.5 xl:gap-3">
          {filterOptions.map((item) =>
            <button
              key={item.key}
              className={`ml-2 px-2 h-[25px] text-xs lg:text-[11px] xl:text-xs font-semibold rounded-lg whitespace-nowrap text-center flex items-center justify-center ${sort === item.key
                ? "bg-[#FFF4D8] text-primary dark:bg-[#64542c] border border-primary"
                : "text-[#3C3B41] dark:text-[#FFFFFF80] hover:text-primary dark:hover:text-primary "
                }`}
              onClick={(e) => {
                if (item.key !== sort) {
                  e.stopPropagation();
                  setSort(item.key);
                  setNumberPage(1);
                  setIsLoading(true);
                  setDisplayedCurrencies({ lists: [], total: 0 });
                }
              }}
            >
              {item.label}
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="جستجو ..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="outline-none rounded-lg w-[135px] md:w-[200px] lg:w-[165px] xl:w-[250px] px-3 py-1 text-black dark:bg-[#3C3B41] dark:text-[#FFFFFF80] placeholder:text-[10px] sm:placeholder:text-sm"
          />
          <div className="relative cursor-pointer  text-black bg-background rounded-lg   py-1 dark:bg-[#3C3B41] dark:text-[#FFFFFF80] w-9 md:w-[54px]">
            <div onClick={() => setNumberItem(!numberItem)} className="flex gap-1 items-center justify-center h-full">
              <span className="flex w-[9.4px] h-[9.4px] sm:w-[14px] sm:h-[14px] text-black self-center"><ArrowDown /></span>
              <span className="flex text-[10px] sm:text-sm">{limit}</span>
            </div>
            {numberItem &&
              <div ref={paginationDropdownRef} className="flex flex-col gap-1 md:gap-2 top-[35px] cursor-pointer px-0 py-2 border w-10 md:w-[57px] bg-background rounded-xl absolute z-10">
                {[5, 10, 20, 50].map((item: number) =>
                  <div key={item} onClick={() => handleLimitChange(item)} className="flex py-1 font-normal hover:text-primary hover:font-extrabold">
                    <p className="mx-auto rounded-lg cursor-pointer !text-xs md:text-sm">{item}</p>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
      {/* table*/}
      {displayedCurrencies?.lists ? (
        <div className="p-4">
          <div className="grid grid-cols-6 md:grid-cols-5 lg:grid-cols-6 text-[10px] rounded-2xl bg-[#F6F6F6] dark:bg-[#242428] text-center justify-center py-3 font-semibold border-gray-300 items-center">
            <span className="text-[7.3px] font-semibold md:text-xs col-span-2 md:col-span-1">نماد</span>
            <span className="hidden md:block">قیمت به USDT</span>
            <div className="flex text-center items-center justify-end md:justify-center text-[7.3px] font-semibold md:text-xs whitespace-nowrap col-span-2 md:col-span-1">
              قیمت به تومان
              <span className="block md:hidden text-[7.3px] font-semibold md:text-xs">/USDT</span>
            </div>
            <span className="text-[7.3px] font-semibold md:text-xs">تغییرات 24h</span>
            <span className="hidden lg:block text-[7.3px] font-semibold md:text-xs">نمودار 24h</span>
            <span className="text-[7.3px] font-semibold md:text-xs">عملیات</span>
          </div>

          <div className="min-h-80 divide-y divide-gray-200 text-[10px] md:text-sm">
            {sort === "favorites" && favorites.length < 1 ? (
              <div className="p-4 text-center  text-sm md:text-lg text-gray-500">موردی وجود ندارد</div>
            ) : isLoading ? (
              [...Array(parseInt(limit))].map((_, index) => (
                <div key={index} className="grid grid-cols-6 md:grid-cols-6 items-center text-center py-4">
                  <div className="flex items-center justify-start gap-2 col-span-2 md:col-span-1">
                    <Skeleton
                      width={24}
                      height={24}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                      className="bg-gray-300"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    />
                    <Skeleton
                      circle
                      width={40}
                      height={40}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />{" "}
                    {/* اسکلت برای آیکون ارز */}
                    <div className="flex flex-col items-start gap-y-[2px]">
                      <Skeleton
                        width={40}
                        height={16}
                        baseColor={baseColor}
                        highlightColor={highlightColor}
                      />
                      <Skeleton
                        width={20}
                        height={12}
                        baseColor={baseColor}
                        highlightColor={highlightColor}
                      />
                    </div>
                  </div>
                  <div className="md:hidden w-full col-span-2 md:col-span-1 flex flex-col items-end pl-3">
                    <Skeleton
                      width={30}
                      height={16}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                    <Skeleton
                      width={40}
                      height={16}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="hidden md:block md:col-span-1 text-center">
                    <Skeleton
                      width={40}
                      height={16}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="hidden md:block md:col-span-1 text-center">
                    <Skeleton
                      width={40}
                      height={16}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="text-center">
                    <Skeleton
                      width={20}
                      height={16}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="hidden md:flex justify-center">
                    <Skeleton
                      width={50}
                      height={31}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div>
                    <Skeleton
                      width={50}
                      height={30}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                </div>
              ))
            ) : displayedCurrencies.lists.length === 0 ?
              <div className="p-4 text-center  text-sm md:text-lg text-gray-500">موردی وجود ندارد</div>
              : (
                displayedCurrencies.lists.map((currency, index) => (
                  <div key={index} className={`grid grid-cols-6 md:grid-cols-5 lg:grid-cols-6 items-center text-center py-4`}>
                    <div className="flex items-center justify-start gap-4 col-span-2 md:col-span-1">
                      <button onClick={() => toggleFavorite(currency.symbol)} className="text-2xl">
                        <div className="sm:w-6 sm:h-6 w-[10px] h-[10px]">
                          <Star borderColor={favorites.includes(currency.symbol) ? "none" : "currentColor"} backgroundColor={favorites.includes(currency.symbol) ? "#FFC107" : "none"} />
                        </div>
                      </button>
                      <div className="min-h-6 min-w-6 w-6 h-6 md:h-11 md:w-11 md:min-h-11 md:min-w-11">
                        {currency.isFont ?
                          <i className={`cf cf-${currency.symbol.toLowerCase()} text-[24px] md:text-[44px] w-full h-full flex items-center justify-center object-fill`} style={{ color: currency.color }}></i>
                          :
                          <img src={`https://app.arz8.com/api/images/currency/${currency.icon}`} alt={currency.symbol} className="w-full h-full object-fill" />
                        }
                      </div>
                      <div className="flex flex-col gap-y-[2px]">
                        <span className="text-start whitespace-nowrap sm:text-base text-[10px] md:text-[12px] lg:text-base sm:font-semibold">
                          {currency?.name?.length > 10
                            ? currency.name.slice(0, 10) + "..."
                            : currency?.name || currency?.symbol || ""}
                        </span>
                        <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold opacity-50">
                          {" "}
                          {currency?.symbol?.length > 7
                            ? "..." + currency.symbol.slice(0, 7)
                            : currency?.symbol}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 md:hidden flex flex-col items-end pl-3">
                      <div className="text-end sm:text-center">{currency.lastPrice} $</div>
                      <div className="text-end sm:text-center">{" "}{sort === "min" ? currency.priceToman || "" : formatNumber(currency.priceToman || "0")}تومان</div>
                    </div>
                    {currency.lastPrice && <div className="hidden md:block col-span-1 text-center">{formatNumber(currency.lastPrice)} USDT</div>}
                    {currency.priceToman && <div className="hidden md:block col-span-1 text-center">{" "}{sort === "min" ? currency.priceToman || "" : formatNumber(currency.priceToman || "0")}تومان</div>}
                    <div dir="ltr" className={`text-center ${currency.priceChangePercent?.startsWith("-") ? "text-red-500" : "text-green-500"}`}>{currency.priceChangePercent || "0"}%</div>
                    <div
                      className="hidden lg:flex justify-center col-span-1"
                      style={{
                        filter:
                          parseFloat(currency.priceChangePercent || "0") < 0
                            ? "brightness(0) saturate(100%) invert(36%) sepia(77%) saturate(1131%) hue-rotate(324deg) brightness(94%) contrast(90%)"
                            : "brightness(0) saturate(100%) invert(50%) sepia(55%) saturate(506%) hue-rotate(112deg) brightness(101%) contrast(90%)",
                      }}
                    >
                      <Image
                        src={`https://cdn.arz8.com/charts/1d/${currency.symbol}.svg`}
                        alt={`نمودار تغییرات قیمت ${currency.name} در 24 ساعت گذشته`}
                        width={120}
                        height={44}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-span-1">
                      <Link href={`/price-cryptocurrencies/${currency.symbol}`}>
                        <button className="border border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[7px] font-normal min-[461px]:text-[10px] rounded-[5.22px] md:rounded-lg  hover:bg-primary hover:text-white hover:shadow-md transition-all duration-300 ">
                          جزئیات بیشتر
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      ) :
        "هیچ اطلاعاتی یافت نشد"
      }
      {/* pagination*/}
      <Pagination
        totalPages={totalPages}
        currentPage={numberPage}
        setCurrentPage={setNumberPage}
      />
    </div>
  );
}
