import HalfCircle from "@/assets/icons/halfCircle";
import React, { FC, useEffect, useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import CryptoModal from "../cryptoModal";
import BNB from "@/assets/icons/bnb";
import ArrowChange from "@/assets/icons/arrrow/arrowcChange";
import { usePathname } from "next/navigation";

export default function Buy({
  toggle,
  currencies,
  width,
}: {
  toggle: any;
  currencies: any;
  width: any;
}) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any | null>(currencies[0]);
  const [money, setMoney] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const route = usePathname().split("/")[1];

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
    <div className="w-full ">
      <div className="absolute -top-[11px]  right-8 lg:right-8 text-background dark:text-secondary">
        <HalfCircle />
      </div>
      <div
        className={`flex flex-col justify-between items-center bg-background rounded-xl dark:bg-secondary py-8 px-10 ${
          width < 700 ? "lg:flex" : "xl:flex-row"
        }`}
      >
        <div className="relative w-full lg:w-auto ">
          <p>مقدار (دریافت می‌کنید)</p>
          <input
            className="mb-10 dark:text-[#302F34] outline-none h-[58px] w-full lg:w-[414px] border rounded-xl mt-5 pr-4"
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={toggleOpen}
            className="absolute group cursor-pointer flex gap-3 left-1 top-[45px] bg-[#F6F6F6] px-4 py-3 rounded-xl dark:bg-background"
          >
            <p>{currency.symbol}</p>
            <div>{currency.icon}</div>
          </div>
        </div>
        <div onClick={toggle} className="cursor-pointer my-5 lg:mt-0 self-end mb-10">
          <ArrowChange />
        </div>
        <div className="relative w-full lg:w-auto ">
          <p>مبلغ (پرداخت می‌کنید)</p>
          <input
            className="outline-none dark:text-[#302F34] h-[58px] w-full lg:w-[414px]  border rounded-xl mt-5 pr-4"
            type="text"
            value={money}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500000"
          />
          <div className="absolute flex gap-3 left-1 top-11 bg-[#F6F6F6] px-4 py-3 rounded-xl dark:bg-background">
            <p>IRT</p>
            <Image alt="iran" src={flag} />
          </div>
          <div className="flex gap-5 mt-5 text-xs md:text-sm">
            <p>قیمت خرید: {currency.price.toLocaleString()} تومان</p>
            <p>قیمت فروش: {currency.price.toLocaleString()} تومان</p>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center pb-2">
          {open && (
            <CryptoModal
              currencies={currencies}
              setCurrency={setCurrency}
              toggle={toggleOpen}
            />
          )}
          <button className="px-12  py-[18px] mt-2 rounded-xl bg-[#33B028] w-full lg:w-auto">
              شروع خرید
          </button>
        </div>
      </div>
    </div>
  );
}
