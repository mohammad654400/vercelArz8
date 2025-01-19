"use client";

import AvalancheIcon from "@/assets/icons/avalancheIcon";
import BNB from "@/assets/icons/bnb";
import React, { useState, useEffect } from "react";

const data = [
  {
    price: "43,537,353",
    percentage: 1.37,
    name: "SOL",
    Persian: "فانتوم",
    icon: <AvalancheIcon />,
  },
  {
    price: "43,537,353",
    percentage: 1.37,
    name: "BTC",
    Persian: "بیت‌کوین",
    icon: <AvalancheIcon />,
  },
  {
    price: "43,537,353",
    percentage: -1.37,
    name: "SUI",
    Persian: "سولانا",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: 1.37,
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <AvalancheIcon />,
  },
];

interface Isuggestoin {
  setSugesstions: (value: boolean) => void;
  value: string;
}

export default function Suggestion({ setSugesstions, value }: Isuggestoin) {
  const [historySearch, setHistorySearch] = useState<string[]>([]);
  const [filterData, setFilterData] = useState<typeof data>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    let parsedHistory: string[] = [];

    if (storedHistory) {
      parsedHistory = JSON.parse(storedHistory);
      setHistorySearch(parsedHistory);
    }

    if (value) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterData(filtered);
    } else {
      const filtered = data.filter((item) => parsedHistory.includes(item.name));
      setFilterData(filtered);
    }
  }, [value]);


  const handleClick = (symbol: string) => {
    setHistorySearch((prevFavorites) => {
      if (prevFavorites.includes(symbol)) {
        return prevFavorites;
      }

      const updatedHistory =
        prevFavorites.length >= 10
          ? [...prevFavorites.slice(1), symbol]
          : [...prevFavorites, symbol];

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  return (
    <div className="relative z-20 w-full">
      <div
        onClick={() => setSugesstions(false)}
        className="fixed w-full h-full bg-black top-0 right-0 opacity-0"
      ></div>
      <div className="absolute top-2 rounded-xl text-black dark:text-white w-[265px] h-[189px] md:w-[546px] md:h-[270px] overflow-y-auto scrollbar-hidden bg-secondary p-1 md:p-4">
        <p className="text-xs px-3 pt-3  md:p-0 md:text-sm">نتایج پیدا شده :</p>
        <div>
          {filterData.length > 0 ? (
            filterData.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => handleClick(item.name)}
                  className="cursor-pointer"
                >
                  <div className="flex justify-between mt-3 md:mt-4 px-2 md:px-2 md:pr-0">
                    <div className="flex items-center gap-2 pb-2">
                      <div>
                        <span className=" w-[26px] h-[26px] md:w-[46px] md:h-[46px] rounded-full bg-[#F6F6F6] dark:bg-[#242428] flex justify-center items-center">
                          {item.icon}
                        </span>
                      </div>
                      <div className="text-xs md:text-base">
                        <p>{item.Persian}</p>
                        <p className="opacity-50">{item.name}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2 pb-2  text-xs md:text-base">
                        <span>تومان</span>
                        <p>{item.price}</p>
                      </div>
                      <div dir="ltr" className="w-full flex justify-start text-sm md:text-base ">
                         <p className={`${item.percentage > 0 ? " text-green-600" : "text-rose-500"}`}>{item.percentage}%</p>
                      </div>
                    </div>
                  </div>
                </div>
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
