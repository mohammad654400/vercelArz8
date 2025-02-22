"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";


interface HomeCurrency {
  symbol: string;
  price: {
    buy: string;
    sell: string;
  }
  fee: string;
  priceChangePercent:string
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



export default function Transaction({ coin, header = true, showPrice, homeData, infoData ,infoLoading,homeLoading }: {
  showPrice?: boolean;
  header?: boolean;
  coin?:any;
  homeData?: HomeData;
  infoData?: InfoData;
  infoLoading:boolean;
  homeLoading:boolean
}) {
  const [isBuy, setIsBuy] = useState(true);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | undefined>();
  useEffect(() => {
     const handleResize = ()=>{
      if (parentRef.current){
        setWidth(parentRef.current.offsetWidth);
      }
     }    
     const resizeObserver = new ResizeObserver(handleResize)
     if(parentRef.current){
      resizeObserver.observe(parentRef.current)
     }
    

     return () => {
      resizeObserver.disconnect()
     }
  }, []);
  const toggleTransaction = useCallback(() => setIsBuy(prev => !prev), []);
   useEffect(() => {
    if (parentRef.current) {
      setWidth(parentRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const cryptoMap = useMemo(() => {
    return new Map(infoData?.cryptocurrency.map(crypto => [crypto.symbol, crypto]));
  }, [infoData]);

  const filterData = useMemo(() => {
    return Object.values(homeData ?? {}).flat().map(item => {
      const matchedInfo: Partial<CryptocurrencyInfo> = cryptoMap.get(item.symbol) || {};
      return {
        id: matchedInfo.id || 0,
        symbol: item.symbol,
        name: matchedInfo.name?.fa || "نامشخص",
        icon: matchedInfo.icon || "",
        color: matchedInfo.color || "#000",
        isFont: matchedInfo.isFont || false,
        percent: matchedInfo.percent || 0,
        price: item.price,
        fee: item.fee || "0",
        priceChangePercent: item.priceChangePercent,
      };
    });
  }, [homeData, cryptoMap]);


  

  return (
    <div
    ref={parentRef}
    className={`${!header?"border-none":""} border-2 border-[#cccbcb80] rounded-xl  text-[13px] md:text`}
  >
    <div className={`${!header?"hidden":"flex"}  w-full gap-4 bg-secondary py-3 px-4 sm:py-5 sm:pr-6 rounded-t-xl`}>
      <div
        onClick={() => setIsBuy(true)}
        className={`text-center w-full sm:w-auto text-sm md:text-lg cursor-pointer ${
          isBuy ? "text-green-500 font-bold" : "text-gray-500"
        }`}
      >
        خرید از ارز هشت
      </div>
      <div
        onClick={() => setIsBuy(false)}
        className={`text-center w-full sm:w-auto  text-sm md:text-lg  cursor-pointer ${
          !isBuy ? "text-red-500 font-bold" : "text-gray-500"
        }`}
      >
        فروش به ارز هشت
      </div>
    </div>

    <div className="relative w-full  duration-500">

        {isBuy ? (
          <Buy
            width={width}
            currencies={filterData}
            toggle={toggleTransaction}
            coin={coin}
            showPrice={showPrice}
            isBuy={isBuy}
            infoLoading={infoLoading}
            homeLoading={homeLoading}
          />
        ) : (
          <Sell
            width={width}
            currencies={filterData}
            toggle={toggleTransaction}
            coin={coin}
            showPrice={showPrice}
            isBuy={isBuy}
            infoLoading={infoLoading}
            homeLoading={homeLoading}
          />
        )}
      </div>
    </div>
  );
}
