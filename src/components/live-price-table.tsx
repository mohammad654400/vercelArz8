"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ChartUP from "@/assets/images/chartup.png";
import Star from "@/assets/icons/star";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import useGetData from "@/hooks/useGetData";
import Pagination from "./pagination";
import HalfCircle from "@/assets/icons/halfCircle";
import Skeleton from "react-loading-skeleton";


const filterOptions = [
  { label: "مورد علاقه ", key: "favorites" },
  { label: "پیش فرض", key: "default" },
  { label: "محبوب‌ترین‌ها", key: "popular" },
  { label: "گران ترین", key: "max" },
  { label: "ارزان ترین", key: "min" },
  { label: "بیشترین رشد", key: "profit" },
  { label: "بیشترین ضرر", key: "loss" },
  { label: "جدیدترین", key: "new" },
];

export default function LivePriceTable({ infoMap, infoLoading }: any) {


  const [open, setOpen] = useState(false);
  const [numberItem, setNumberItem] = useState(false)
  const [displayedCurrencies, setDisplayedCurrencies] = useState<{ lists: any[]; total: number }>({ lists: [], total: 0 });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("default");
  const [limit, setLimit] = useState<string>("5");
  const [numberPage, setNumberPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [filterKey, setFilterKey] = useState<string>("default");
  const [favorites, setFavorites] = useState<string[]>(
    () => JSON.parse(localStorage.getItem("favorites") || "[]")
  );


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((symbol: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(symbol)
        ? prevFavorites.filter((fav) => fav !== symbol)
        : [...prevFavorites, symbol]
    );
  }, []);

  const getRequestParams = useMemo(() => {
    const params: any = {
      limit,
      page: numberPage,
      sort,
      search: searchQuery,
    };

    if (sort === "favorites" && favorites.length > 0) {
      params.symbols = favorites;
    }

    return params;
  }, [sort, favorites, limit, numberPage, searchQuery]);

  const { data: cryptocurrenciesData, isLoading: cryptocurrenciesLoading } = useGetData("cryptocurrencies", 60000, getRequestParams);



  const filteredData = useMemo(() => {
    if (!cryptocurrenciesData) return { lists: [], total: 0 };

    return {
      lists: cryptocurrenciesData.lists.map((item: any) => {
        const info = infoMap[item.symbol] || [{}];
        return {
          ...item,
          ...info,
          name: info?.name?.fa,
        };
      }),
      total: cryptocurrenciesData.total || 0,
    };
  }, [cryptocurrenciesData, infoMap]);


  useEffect(() => {
    setDisplayedCurrencies(filteredData);
  }, [filteredData]);


  const handelOnChanged = (value: string) => {
    setSearchQuery(value);
    setNumberPage(1);
    setDisplayedCurrencies({ lists: [], total: 0 });

    const timeoutId = setTimeout(() => {
      setNumberPage(1);
    }, 8000);

    return () => clearTimeout(timeoutId);
  };
  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit.toString());
    setItemsPerPage(newLimit);
    setNumberPage(1);
    setDisplayedCurrencies({ lists: [], total: 0 });
    setNumberItem(false);
  };


  const totalPages = sort !== "favorites"
    ? Math.ceil(displayedCurrencies.total / itemsPerPage)
    : Math.ceil(favorites.length / itemsPerPage);


  return (
    <div className=" bg-background dark:bg-[#3C3B41] shadow-lg rounded-xl overflow-hidden">
      {/* search */}
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#242428] px-2 py-3 text-[#FFFFFF80]">
        <div className="relative block md:hidden">

          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center px-2 py-2 bg-primary text-white rounded-xl"
          >
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">مورد علاقه</span>
            <span className="w-[9.4px] h-[9.4px] sm:w-4 sm:h-4 text-white mr-1"><ArrowDown /></span>
          </button>
          {open && (

            <div className="fixed top-48 w-[300px] h-[439px] bg-background shadow-md border rounded-2xl pt-2 z-20 ">
              <div className="absolute -top-[11px] right-12 md:right-8 lg:right-8 text-background dark:text-background">
                <HalfCircle />
              </div>
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilterKey(option.key)}
                  className={`flex w-[250px] justify-end flex-col mr-5 gap-4  px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold  mt-3 text-foreground focus:bg-[#FFF6DD] focus:text-black`}
                >
                  {option.label}
                </button>
              ))}
              <button onClick={() => (setSort(filterKey), setOpen(false))} className=" flex py-2 mt-7 px-24 rounded-lg bg-primary mx-auto text-white">
                اعمال فیلتر
              </button>
            </div>
          )}
          <div className="absolute bg-black "></div>
        </div>
        <div className="hidden md:flex gap-3">
          {filterOptions.map((btn) => (
            <button
              key={btn.key}
              className={`ml-2 px-2 h-[25px]  text-xs font-semibold rounded-lg whitespace-nowrap text-center flex items-center justify-center ${sort === btn.key
                ? "bg-[#FFF4D8] text-primary dark:bg-[#64542c] border border-primary"
                : "text-[#3C3B41] dark:text-[#FFFFFF80]"
                }`}
              onClick={(e) => {
                e.stopPropagation();
                setSort(btn.key);
                setNumberPage(1);
                setDisplayedCurrencies({ lists: [], total: 0 });
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">


          <input
            type="text"
            placeholder="جستجوی نماد،..."
            value={searchQuery}
            onChange={(e) => handelOnChanged(e.target.value)}
            className=" outline-none rounded-lg w-[165px] md:w-[250px] px-3 py-1 text-black dark:bg-[#3C3B41] dark:text-[#FFFFFF80] placeholder:text-sm"
          />


          <div className="relative cursor-pointer  text-black bg-background rounded-lg   py-1 dark:bg-[#3C3B41] dark:text-[#FFFFFF80] w-9 md:w-[54px]">
            <div onClick={() => (setNumberItem(!numberItem))} className="flex gap-1 items-center justify-center h-full">
              <span className="flex w-[9.4px] h-[9.4px] sm:w-[14px] sm:h-[14px] text-black self-center"><ArrowDown /></span> <span className="flex text-[10px] sm:text-lg">{limit}</span>
            </div>
            {numberItem ?
              <div className="flex flex-col gap-1 md:gap-2 top-[35px] cursor-pointer -right-[9px] md::-right-[1px] py-2 border w-10 md:w-[57px] bg-background rounded-xl absolute ">
                {[5, 10, 20, 50].map((item) => (
                  <p
                    key={item}
                    onClick={() => handleLimitChange(item)}
                    className="mx-auto rounded-lg font-normal cursor-pointer"
                  >
                    {item}
                  </p>
                ))}

              </div>
              : ""
            }
          </div>
        </div>
      </div>

      {/* table*/}
      {displayedCurrencies.lists ? (
        <div className="p-4">
          <div className="grid grid-cols-6 text-[10px] rounded-2xl bg-[#F6F6F6] dark:bg-[#242428] text-center justify-center py-3 font-semibold border-gray-300 items-center">
            <span className="text-[7.3px] font-semibold md:text-xs col-span-2 md:col-span-1">نماد</span>
            <span className="hidden md:block">قیمت به USDT</span>
            <div className="flex text-center items-center justify-center text-[7.3px] font-semibold md:text-xs  whitespace-nowrap col-span-2 md:col-span-1">
              قیمت به تومان <span className="block md:hidden text-[7.3px] font-semibold md:text-xs  ">/USDT</span>
            </div>
            <span className="text-[7.3px] font-semibold md:text-xs">تغییرات 24h</span>
            <span className="hidden md:block text-[7.3px] font-semibold md:text-xs ">نمودار 24h</span>
            <span className="text-[7.3px] font-semibold md:text-xs">عملیات</span>
          </div>

          <div className="divide-y divide-gray-200 text-[10px] md:text-sm">
            {infoLoading || cryptocurrenciesLoading || displayedCurrencies.lists.length === 0 ? (
              [...Array(5)].map((_, index) => (
                <div key={index} className="grid grid-cols-6 md:grid-cols-6 items-center text-center py-4">

                  {/* ستاره و اطلاعات ارز */}
                  <div className="flex items-center justify-start gap-2 col-span-2 md:col-span-1">
                    <Skeleton
                      width={24}
                      height={24}
                      className="bg-gray-300"
                      style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",

                      }}
                    />

                    {/* اسکلت برای آیکون ستاره */}
                    <Skeleton circle width={40} height={40} /> {/* اسکلت برای آیکون ارز */}
                    <div className="flex flex-col items-start gap-y-[2px]">
                      <Skeleton width={80} height={16} />
                      <Skeleton width={50} height={12} />
                    </div>
                  </div>

                  {/* قیمت دلار و تومان (حالت موبایل) */}
                  <div className="md:hidden w-full col-span-2 md:col-span-1 flex flex-col items-end pl-3">
                    <Skeleton width={60} height={16} />
                    <Skeleton width={80} height={16} />
                  </div>

                  {/* قیمت دلار و تومان (دسکتاپ) */}
                  <div className="hidden md:block md:col-span-1 text-center">
                    <Skeleton width={60} height={16} />
                  </div>
                  <div className="hidden md:block md:col-span-1 text-center">
                    <Skeleton width={80} height={16} />
                  </div>

                  {/* درصد تغییر قیمت */}
                  <div className="text-center">
                    <Skeleton width={50} height={16} />
                  </div>

                  {/* چارت */}
                  <div className="hidden md:flex justify-center">
                    <Skeleton width={64} height={31} />
                  </div>

                  {/* دکمه جزئیات بیشتر */}
                  <div>
                    <Skeleton width={80} height={30} />
                  </div>
                </div>
              ))
            ) : (
              displayedCurrencies.lists.map((currency, index) => (
                <div
                  key={index}
                  className={`grid ${currency.lastPrice && currency.priceToman ? "grid-cols-6 md:grid-cols-6" : "grid-cols-6 md:grid-cols-4"
                    } items-center text-center py-4`}
                >
                  <div className="flex items-center justify-start gap-2 col-span-2 md:col-span-1">
                    <button
                      onClick={() => toggleFavorite(currency.symbol)}
                      className="text-2xl"
                    >
                      <div className="sm:w-6 sm:h-6 w-[10px] h-[10px]">
                        <Star
                          borderColor={favorites.includes(currency.symbol) ? "none" : "currentColor"}
                          backgroundColor={favorites.includes(currency.symbol) ? "#FFC107" : "none"}
                        />
                      </div>
                    </button>
                    <div className="min-h-6 min-w-6 w-6 h-6 md:h-11 md:w-11">
                      {!currency.isFont ? (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                          alt={currency.symbol}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <i
                          className={`cf cf-${currency.symbol.toLowerCase()} text-[24px] w-full h-full flex items-center justify-center object-cover`}
                          style={{ color: currency.color }}
                        ></i>
                      )}
                    </div>
                    <div className="flex flex-col gap-y-[2px]">
                      <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold">{currency.name}</span>
                      <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold opacity-50">{currency.symbol}</span>
                    </div>

                  </div>


                  <div className="md:col-span-0 md:hidden w-full col-span-2 md:col-span-1 flex flex-col items-end pl-3 ">
                    <div className="text-end sm:text-center">{currency.lastPrice} $</div>
                    <div className="text-end sm:text-center">{currency.priceToman} تومان</div>
                  </div>


                  {currency.lastPrice && (
                    <div className="col-span-0 hidden md:block md:col-span-1 text-center">{currency.lastPrice} USDT</div>
                  )}
                  {currency.priceToman && (
                    <div className="col-span-0 hidden md:block md:col-span-1 text-center">{currency.priceToman} تومان</div>
                  )}


                  <div
                    className={`text-center  ${currency.priceChangePercent?.startsWith("-") ? "text-red-500" : "text-green-500"
                      }`}
                  >
                    {currency.priceChangePercent}%
                  </div>


                  <div className="hidden md:flex justify-center">
                    <Image src={ChartUP} alt="chart" width={64} height={31} />
                  </div>


                  <div>
                    <Link href={`/coins/${currency.symbol}`}>
                      <button className="border border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[7px] min-[461px]:text-[10px] rounded-[5.22px] md:rounded-lg  ">
                        جزئیات بیشتر
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )

            }
          </div>

        </div>
      ) : (
        "هیچ اطلاعاتی یافت نشد"
      )}

      {/* pagination*/}
      <Pagination totalPages={totalPages} currentPage={numberPage} setCurrentPage={setNumberPage} />

    </div>
  );
}
