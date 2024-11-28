"use client";
import React, { useState } from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";

export default function TransAction() {
  const [isBuy, setIsBuy] = useState(true);

  const toggleTransaction = () => {
    setIsBuy((prevState) => !prevState);
  };

  return (
    <div className="w-full">
      <div className='flex gap-4 bg-[#F6F6F6] py-5 pr-6 rounded-xl'>
        <div onClick={toggleTransaction}>خرید از ارزهشت</div>
        <div onClick={toggleTransaction}>فروش به ارز هشت</div>
      </div>
      <div>{isBuy ? <Buy /> : <Sell />}</div>
    </div>
  );
}
