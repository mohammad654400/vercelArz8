import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";

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
  searchData: CategoryItem[];
  infoMap: { [key: string]: CryptocurrencyInfo };
}

export default function Suggestion({
  setSuggestions,
  value,
  setSearchQuery,
  searchData,
  infoMap,
}: Isuggestion) {
  const [historySearch, setHistorySearch] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      try {
        const parsedHistory: string[] = JSON.parse(storedHistory);
        setHistorySearch(Array.isArray(parsedHistory) ? parsedHistory : []);
      } catch (error) {
        console.error("Error parsing search history:", error);
        setHistorySearch([]);
      }
    }
  }, []);

  useEffect(() => {
    if (value.trim()) {
      setSearchQuery(value);
    } else if (historySearch.length > 0) {
      setSearchQuery(historySearch.join(","));
    }
  }, [value, historySearch, setSearchQuery]);

  const filteredData = useMemo(() => {
    if (!searchData) return [];
    if (value.trim()) {
      return searchData.map((item) => ({
        ...item,
        name: infoMap[item.symbol]?.name?.fa || item.name,
        icon: infoMap[item.symbol]?.icon || item.icon,
      }));
    } else {
      return historySearch.map((symbol) => ({
        symbol,
        name: infoMap[symbol]?.name?.fa || symbol,
        icon: infoMap[symbol]?.icon || "",
      }));
    }
  }, [value, searchData, infoMap, historySearch]);

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
      <div className="absolute top-2 rounded-xl text-black dark:text-white w-[300px] h-[189px] md:w-[546px] md:h-[270px] overflow-y-auto scrollbar-hidden bg-secondary p-1 md:p-4">
        <p className="text-xs px-3 pt-3 md:p-0 md:text-sm">نتایج پیدا شده :</p>
        <div>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="cursor-pointer" onClick={() => handleSelect(item.symbol)}>
                <Link href={`coins/${item.symbol}`} className="flex justify-between mt-3 md:mt-4 px-2 md:px-2 md:pr-0">
                  <div className="flex items-center gap-2 pb-2">
                    <span className="w-[26px] h-[26px] md:w-[46px] md:h-[46px] rounded-full bg-[#F6F6F6] dark:bg-[#242428] flex justify-center items-center">
                      {item.icon ? (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${item.icon}`}
                          alt={item.symbol}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400">{item.symbol}</span>
                      )}
                    </span>
                    <div className="text-xs md:text-base">
                      <p>{item.name}</p>
                      <p className="opacity-50">{item.symbol}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>نتیجه‌ای یافت نشد.</p>
          )}
        </div>
      </div>
    </div>
  );
}
