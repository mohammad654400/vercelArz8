import HalfCircle from "@/assets/icons/halfCircle";
import React, { FC, useEffect, useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import CryptoModal from "../cryptoModal";
import BNB from "@/assets/icons/bnb";


export default function Buy({ toggle,currencies }: { toggle: any,currencies:any }) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any | null>(currencies[0]); 
  const [money, setMoney] = useState<string>(""); 
  const [amount, setAmount] = useState<string>("");

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleMoneyChange = (value: string) => {
    setMoney(value);
    if (currency) {
      const calculatedAmount = parseFloat(value) / currency.price;
      setAmount(calculatedAmount ? calculatedAmount.toFixed(8) : "");
    }
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    if (currency) {
      const calculatedMoney = parseFloat(value) * currency.price; 
      setMoney(calculatedMoney ? calculatedMoney.toFixed(0) : ""); 
    }
  };

  return (
    <div>
      <div className="absolute -top-[13px] right-6 text-background dark:text-secondary">
        <HalfCircle />
      </div>
      <div className="flex justify-between items-center bg-background rounded-xl  dark:bg-secondary py-8 px-10">
        <div className="relative">
          <p>مبلغ (پرداخت می‌کنید)</p>
          <input
            className="outline-none dark:text-[#302F34] h-[58px] w-[414px] border rounded-xl mt-5 pr-4"
            type="text"
            value={money}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500000"
          />
          <div className="absolute flex gap-3 left-1 top-12 bg-[#F6F6F6] px-4 py-3 rounded-xl dark:bg-background">
            <p>IRT</p>
            <Image alt="iran" src={flag} />
          </div>
          <div className="flex gap-5 mt-5 text-sm">
            <p>قیمت خرید: {currency.price.toLocaleString()} تومان</p>
          </div>
        </div>

        <div onClick={toggle} className="cursor-pointer">
        <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.1673 36.2494L53.1673 21.7494C53.1673 9.66602 48.334 4.83269 36.2507 4.83269L21.7507 4.83269C9.66732 4.83269 4.83399 9.66602 4.83399 21.7494L4.83399 36.2494C4.83399 48.3327 9.66732 53.166 21.7506 53.166L36.2506 53.166C48.334 53.166 53.1673 48.3327 53.1673 36.2494Z"
              stroke="#292D32"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.4485 33.3975L34.1018 40.7441"
              stroke="#F00500"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5566 33.3984L41.4483 33.3984"
              stroke="#F00500"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5566 24.6016L23.9033 17.2549"
              stroke="#33B028"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.4483 24.6016L16.5566 24.6016"
              stroke="#33B028"
              strokeWidth="2.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="relative">
          <p>مقدار (دریافت می‌کنید)</p>
          <input
            className="mb-8 dark:text-[#302F34] outline-none h-[58px] w-[414px] border rounded-xl mt-5 pr-4"
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={toggleOpen}
            className="absolute group cursor-pointer flex gap-3 left-1 top-12 bg-[#F6F6F6] px-4 py-3 rounded-xl dark:bg-background"
          >
            <p>{currency.symbol}</p>
            <div>{currency.icon}</div>
          </div>
        </div>

        <div>
          {open && (
            <CryptoModal
              currencies={currencies}
              setCurrency={setCurrency}
              toggle={toggleOpen}
            />
          )}
          <button className="px-12 py-3 mt-2 rounded-xl bg-[#33B028]">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}
