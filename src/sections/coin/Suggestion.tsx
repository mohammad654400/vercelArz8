import { useTheme } from "@/contexts/theme-provider";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import Link from "next/link";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Skeleton from "react-loading-skeleton";

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

interface CategoryItem {
  priceToman: string;
  lastPrice: number;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  isFont: boolean;
  percent: number;
  priceChangePercent: number;
}

interface Isuggestion {
  setSuggestions: (value: boolean) => void;
  value: string;
  setSearchQuery: (query: string) => void;
  setSymbolsQuery: (query: string[]) => void;
  searchData: CategoryItem[];
  infoMap: { [key: string]: CryptocurrencyInfo };
  symbolsQuery: string[];
}

export default function Suggestion({
  setSuggestions,
  value,
  setSearchQuery,
  setSymbolsQuery,
  symbolsQuery,
  searchData,
  infoMap,
}: Isuggestion) {
  const { formatNumber } = useFormattedNumber();
  const { baseColor, highlightColor } = useTheme();
  const [historySearch, setHistorySearch] = useState<string[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const storedHistory = localStorage.getItem("searchHistory");
  useEffect(() => {
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory);
        setHistorySearch(parsedHistory);
      } catch (error) {
        console.error("Error parsing search history:", error);
        setHistorySearch([]);
      }
    } else {
      setHistorySearch([]);
    }
  }, []);
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (!value.trim() && symbolsQuery.length === 0) return;

      setIsLoading(true);

      if (value.trim()) {
        setSymbolsQuery([]);  
        setSearchQuery(value);
      } else if (historySearch.length > 0) {
        setSymbolsQuery(historySearch);
        setSearchQuery("");
      }
    }, 800);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, historySearch]);

  const filteredData = useMemo(() => {
    if (!searchData) return [];

    setIsLoading(false);

    if (value.trim()) {
      return searchData.map((item) => ({
        ...item,
        name: infoMap[item.symbol]?.name?.fa || item.name,
        isFont: infoMap[item.symbol]?.isFont,
        priceToman: item.priceToman,
        icon: infoMap[item.symbol]?.icon,
        colorIcon: infoMap[item.symbol]?.color,
        priceChangePercent: item.priceChangePercent,
      }));
    } else {
      return historySearch.map((symbol) => {
        const matchedItem = searchData.find((item) => item.symbol === symbol);
        return {
          symbol,
          name: infoMap[symbol]?.name?.fa || symbol,
          isFont: infoMap[symbol]?.isFont,
          icon: infoMap[symbol]?.icon,
          colorIcon: infoMap[symbol]?.color,
          priceToman: matchedItem?.priceToman || null,
          priceChangePercent: matchedItem?.priceChangePercent || null,
        };
      });
    }
  }, [value, historySearch, searchData]);


  const handleSelect = (symbol: string) => {
    if (!historySearch.includes(symbol)) {
      const updatedHistory = [symbol, ...historySearch];
      const limitedHistory = updatedHistory.slice(0, 10);
      localStorage.setItem("searchHistory", JSON.stringify(limitedHistory));
      setHistorySearch(limitedHistory);
    }

    setSearchQuery(symbol);
    setSuggestions(false);
  };

  return (
    <div className="relative z-20 w-full">
      <div
        onClick={() => setSuggestions(false)}
        className="fixed w-full h-full bg-black top-0 right-0 opacity-0"
      ></div>
      <div className="absolute top-2 rounded-xl text-black dark:text-white w-[300px] h-[189px] md:w-[546px] md:h-[270px] overflow-y-auto scrollbar-hidden bg-[#FFFFFF] dark:bg-[#302F34] p-1 md:p-4 shadow-[0px_0px_10px_0px_#A8A8A833] dark:shadow-[0px_0px_10px_0px_#242428]">
        <p className="text-xs px-3 pt-3 md:p-0 md:text-sm">نتایج پیدا شده :</p>
        <div>
          {historySearch.length === 0 && value.trim() === "" ? (
            <div className="flex w-full justify-center mt-5">
              <span>تاریخچه ای وجود ندارد</span>
            </div>
          ) : isLoading ? (
            <div className="flex flex-col mt-2 sm:mt-3 gap-y-1 sm:gap-y-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex gap-x-2 w-full">
                  <div className="flex items-center justify-center">
                    <Skeleton
                      circle
                      width={26}
                      height={26}
                      baseColor={baseColor}
                      highlightColor={highlightColor}
                    />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <Skeleton width={100} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                      <Skeleton width={50} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                    </div>
                    <div className="flex flex-col items-end">
                      <Skeleton width={100} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                      <Skeleton width={50} height={10} baseColor={baseColor} highlightColor={highlightColor} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="cursor-pointer" onClick={() => handleSelect(item.symbol)}>
                <Link href={`price-cryptocurrencies/${item.symbol}`} className="flex justify-between mt-3 md:mt-4 px-2 md:px-2 md:pr-0">
                  <div className="flex items-center  pb-2 gap-x-2 w-full">
                    <div className="flex items-center ">
                      <span className="w-[26px] h-[26px] md:w-[46px] md:h-[46px] rounded-full  flex justify-center items-center">
                        {item.isFont ? (
                          <i
                            className={`cf cf-${item.symbol.toLowerCase()} text-[22px] md:text-[33px] w-full h-full flex items-center justify-center object-fill`}
                            style={{ color: item.colorIcon }}
                          ></i>
                        ) : (
                          <img
                            src={`https://app.arz8.com/api/images/currency/${item.icon}`}
                            alt={item.symbol}
                            className="w-full h-full object-fill"
                          />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col text-xs md:text-base">
                        <p>{item.name}</p>
                        <p className="opacity-50">{item.symbol}</p>
                      </div>
                      <div className="flex flex-col text-xs md:text-base items-end">
                        <p>{formatNumber(item.priceToman ?? '')} تومان</p>
                        <p dir="ltr" className={`opacity-50 ${item?.priceChangePercent && item.priceChangePercent > 0 ? " text-green-600" : "text-rose-500"}`}>%{item.priceChangePercent ?? 0}</p>
                      </div>
                    </div>
                  </div>

                </Link>
              </div>
            ))
          ) : (
            <div className="flex w-full justify-center mt-5">
              <span>موردی یافت نشد</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
