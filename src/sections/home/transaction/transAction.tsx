"use client";
import React, { useEffect, useRef, useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";
import HalfCircle from "@/assets/icons/halfCircle";
import BNB from "@/assets/icons/bnb";
import { usePathname } from "next/navigation";

const currencies = [
  {
    name: "بایننس کوین",
    symbol: "BNB",
    price: "43537353",
    change: "1.37",
    icon: <BNB />,
  },
  {
    name: "شیبا",
    symbol: "SHIB",
    price: 200,
    change: "0.42",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
  {
    name: "اتریوم",
    symbol: "ETH",
    price: "54327353",
    change: "-0.75",
    icon: <BNB />,
  },
];
export default function Transaction() {
  const [isBuy, setIsBuy] = useState(true);
  const toggleTransaction = () => {
    setIsBuy((prevState) => !prevState);
  };
  const [width,setWidth] = useState<any>()

  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (parentRef.current) {
      console.log("Offset Width:", parentRef.current.offsetWidth);
      setWidth(parentRef.current.offsetWidth)
    }
  }, []); 

  return (
    <div ref={parentRef} className="border-2 rounded-xl text-[13px] md:text ">
      <div className="flex w-full gap-4 bg-[#F6F6F6] py-3 px-4 sm:py-5 sm:pr-6 rounded-xl cursor-pointer dark:bg-[#3C3B41]">
        <div
          onClick={toggleTransaction}
          className="text-center w-full  sm:w-auto"
        >
          خرید از ارز هش
        </div>
        <div
          onClick={toggleTransaction}
          className="text-center w-full sm:w-auto "
        >
          فروش به ارز هشت
        </div>
      </div>

      {/* محتوای متغیر */}
      <div className="relative w-full bg-background duration-500 ">
        {isBuy ? (
          <Buy width={width} currencies={currencies} toggle={toggleTransaction} />
        ) : (
          <Sell currencies={currencies} toggle={toggleTransaction} />
        )}
      </div>
    </div>
  );
}