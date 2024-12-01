"use client";
import React, { useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";
import HalfCircle from "@/assets/icons/halfCircle";
import BNB from "@/assets/icons/bnb";

const currencies = [
  {
    name: "بایننس کوین",
    symbol: "BNB",
    price:"43537353", 
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
export default function TransAction() {
  const [isBuy, setIsBuy] = useState(true);

  const toggleTransaction = () => {
    setIsBuy((prevState) => !prevState);
  };

  return (
    <div className="w-full border border-2 rounded-xl">
      <div className="flex gap-4 bg-[#F6F6F6] py-5 pr-6 rounded-xl cursor-pointer dark:bg-[#3C3B41]">
        <div onClick={toggleTransaction}>خرید از ارزهشت</div>
        <div onClick={toggleTransaction}>فروش به ارز هشت</div>
      </div>
      <div className="relative w-full bg-background h-[180px] px-5 ">
         {isBuy?<Buy currencies={currencies} toggle={toggleTransaction} />:<Sell currencies={currencies} toggle={toggleTransaction}/>}
      </div>
    </div>
  );
}
