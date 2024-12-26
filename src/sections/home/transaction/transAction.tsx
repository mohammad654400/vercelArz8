"use client";
import React, { useEffect, useRef, useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";
import BNB from "@/assets/icons/bnb";

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
  // بقیه موارد
];

export default function Transaction() {
  const [isBuy, setIsBuy] = useState(true);
  const toggleTransaction = () => {
    setIsBuy((prevState) => !prevState);
  };
  const [width, setWidth] = useState<number | undefined>();

  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (parentRef.current) {
      setWidth(parentRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      ref={parentRef}
      className="border-2 rounded-xl border-secondary text-[13px] md:text"
    >
      <div className="flex w-full gap-4 bg-secondary py-3 px-4 sm:py-5 sm:pr-6 rounded-t-lg">
        <div
          onClick={() => setIsBuy(true)}
          className={`text-center w-full sm:w-auto text-lg cursor-pointer ${
            isBuy ? "text-green-500 font-bold" : "text-gray-500"
          }`}
        >
          خرید از ارز هش
        </div>
        <div
          onClick={() => setIsBuy(false)}
          className={`text-center w-full sm:w-auto text-lg cursor-pointer ${
            !isBuy ? "text-red-500 font-bold" : "text-gray-500"
          }`}
        >
          فروش به ارز هش
        </div>
      </div>

      <div className="relative w-full  duration-500">
        {isBuy ? (
          <Buy width={width} currencies={currencies} toggle={toggleTransaction} />
        ) : (
          <Sell width={width} currencies={currencies} toggle={toggleTransaction} />
        )}
      </div>
    </div>
  );
}
