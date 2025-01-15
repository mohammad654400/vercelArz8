import BNB from "@/assets/icons/bnb";
import React, { useState, useEffect } from "react";

const data = [
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "BTC",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "SOL",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "SUI",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
];

export default function Suggestion() {
  const [historySearch, setHistorySearch] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setHistorySearch(JSON.parse(storedHistory));
    }
  }, []);

  function handleClick(symbol: string) {
    setHistorySearch((prevFavorites) => {
      const updatedHistory = [...prevFavorites, symbol];
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory)); // Save updated history to localStorage
      return updatedHistory;
    });
  }

  return (
    <div className="relative">
      <div className="absolute top-2 rounded-xl text-black dark:text-white w-[546px] h-[270px] bg-secondary p-4">
        <p className="py-1 text-sm">نتایج پیدا شده :</p>
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => handleClick(item.name)} // Pass function reference with parameter
                className="cursor-pointer"
              >
                <div className="flex justify-around md:justify-between mt-4">
                  <div className="flex items-center gap-2 pb-2">
                    <div>
                      <div className="w-[46px] h-[46px] rounded-full bg-[#F6F6F6] dark:bg-[#242428] flex justify-center items-center">
                        <BNB />
                      </div>
                    </div>
                    <div>
                      <p>{item.Persian}</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 pb-2">
                      <span>تومان</span>
                      <p>{item.price} </p>
                    </div>
                    <div className="w-full flex justify-end">
                      <p>{item.percentage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
