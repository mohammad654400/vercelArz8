"use client";
import React, { useEffect, useRef, useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";
import BNB from "@/assets/icons/bnb";

const currencies = [
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "43537353",
    change: "1.37",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: 200,
    change: "0.42",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    PersioinName: "اتریوم",
    name: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
];

export default function Transaction({ coin,header=true,showPrice}: any) {
  const [isBuy, setIsBuy] = useState(true);
  const toggleTransaction = () => {
    setIsBuy((prevState) => !prevState);
  };
  const [width, setWidth] = useState<number | undefined>();
  const parentRef = useRef<HTMLDivElement | null>(null);
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
            currencies={currencies}
            toggle={toggleTransaction}
            coin={coin}
            showPrice={showPrice}
          />
        ) : (
          <Sell
            width={width}
            currencies={currencies}
            toggle={toggleTransaction}
            coin={coin}
            showPrice={showPrice}
          />
        )}
      </div>
    </div>
  );
}
