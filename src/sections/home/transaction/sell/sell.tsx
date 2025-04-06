import HalfCircle from "@/assets/icons/halfCircle";
import React, { useEffect, useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import CryptoModal from "../cryptoModal";
import ArrowChange from "@/assets/icons/arrrow/arrowcChange";
import { usePathname } from "next/navigation";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import Link from "next/link";
type TransAction = {
  toggle: any;
  currencies: any;
  width: any;
  coin: any;
  showPrice?: boolean;
  isBuy: boolean;
  infoLoading: boolean;
  homeLoading: boolean;
  setCurrentCoin: any;
};
export default function Sell({
  toggle,
  currencies,
  width,
  coin,
  isBuy,
  infoLoading,
  homeLoading,
  setCurrentCoin,
}: TransAction) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any | null>(coin);
  const [money, setMoney] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const route = usePathname().split("/")[1];
  const { formatNumber, unformatNumber } = useFormattedNumber();

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
    setAmount("");
    setMoney("");
  };

  const handleMoneyChange = (value: string) => {
    let rawValue = value.replace(/[^0-9]/g, "");

    setMoney(rawValue);

    if (currency) {
      const calculatedAmount = parseFloat(rawValue) / currency.price?.buy;
      setAmount(calculatedAmount ? calculatedAmount.toFixed(8) : "");
    }
  };

  const handleAmountChange = (value: string) => {
    let rawValue = value.replace(/[^0-9.]/g, "");

    if ((rawValue.match(/\./g) || []).length > 1) {
      return;
    }

    setAmount(rawValue);

    if (currency) {
      const calculatedMoney = parseFloat(rawValue) * currency.price?.buy;
      setMoney(calculatedMoney ? calculatedMoney.toLocaleString("en-US") : "");
    }
  };

  return (
    <div className="w-full ">
      <div
        className={`absolute -top-[8px] md:-top-[12px] left-12 md:left-8 lg:right-44 text-background dark:text-background ${
          route === "calculate" ? "hidden" : ""
        }`}
      >
        <HalfCircle />
      </div>
      <div
        className={`flex justify-between items-center rounded-xl   py-6 md:py-8 px-4 
          ${
            width < 1196 && route !== "calculate"
              ? "flex-col "
              : route === "calculate"
              ? "flex-col"
              : ""
          }
        `}
      >
        <div className="relative w-full ">
          <p className="inline-block">مقدار (پرداخت می کنید)</p>
          <input
            pattern="[0-9]*"
            inputMode="decimal"
            className={`
              ${width < 1196 ? "lg:w-full" : "lg:w-[414px]"} 
              ${route == "calculate" ? "lg:w-full lg:mt-5" : "mb-10"}
              ${route === "" ? "md:mb-5 mb-8" : ""}
                text-[21px]  font-normal placeholder:text-lg bg-background outline-none h-[58px] w-full border rounded-xl mt-3 md:mt-4 pr-4`}
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          {/* cryptoModal---------------------------------------------- */}
          <div
            onClick={toggleOpen}
            className={`absolute group cursor-pointer flex gap-2 items-center left-1
             top-[36px] md:top-[40px] px-4 py-[11px] rounded-xl bg-secondary dark:bg-third
             ${route == "calculate" ? "md:top-[48px]" : "md:top-[32px]"}
             `}
          >
            <div className="min-w-6 h-7 flex justify-center items-center">
              {!currency.isFont ? (
                <img
                  src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                  alt={currency.symbol}
                  className="w-full h-full object-cover"
                />
              ) : (
                <i
                  className={`cf cf-${currency.symbol.toLowerCase()} text-[20px] object-cover flex items-center justify-center`}
                  style={{ color: currency.color }}
                ></i>
              )}
            </div>
            <p>{currency?.symbol}</p>
            <span className="w-5 h-5">
              <ArrowDown />
            </span>
          </div>
          {/* sell price and buy price -------------------------------- */}
          <div
            className={`gap-5  text-xs md:text-sm ${
              width < 800 ? "hidden" : "md:flex "
            }`}
          >
            <p className="text-xs">
              قیمت خرید: {formatNumber(currency?.price?.buy?.toLocaleString())}{" "}
              تومان
            </p>
            <p className="text-xs">
              قیمت فروش: {formatNumber(currency?.price?.sell?.toLocaleString())}{" "}
              تومان
            </p>
          </div>
        </div>

        <div
          onClick={toggle}
          className={`
            ${route === "" ? "mt-0 pt-0 rotate-180" : "mt-0 pt-0"}
            ${width < 700 ? "" : "pt-5 px-5 "}
          ${route == "calculate" ? "self-center -rotate-90 lg:mt-14 mt-6 " : ""}
           cursor-pointer  md:my-5  lg:mt-0 self-end mb:10 `}
        >
          <ArrowChange />
        </div>

        <div
          className={`relative w-full  ${
            route === "calculate" ? "md:mt-8 mt-4 " : ""
          }`}
        >
          <p>مبلغ (دریافت می کنید)</p>
          <input
            className={`
             ${width < 800 ? "lg:w-full" : "lg:w-[414px]"}
             ${route == "calculate" ? "lg:w-full mb-0  " : ""} 
             ${route === "" ? "mb-2 " : "mb-10 md:mb-1"} 
             outline-none bg-background placeholder:text-lg text-[21px] font-normal
             h-[58px] w-full  border rounded-xl mt-3 md:mt-5 md:mb-10 pr-4
              `}
            type="text"
            value={formatNumber(money)}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500,000"
          />
          <div className="absolute flex justify-center items-center gap-3 left-1 top-9 md:top-11 px-5 py-[11px]  rounded-xl bg-third">
            <Image
              alt="iran"
              src={flag}
              width={25}
              height={28}
              quality={100}
              className="w-[25px] h-[28px]"
            />
            <p>IRT</p>
          </div>
        </div>

        <div
          className={`w-full flex justify-center pb-2
           ${route == "" ? "pt-8 md:pb-8" : "mt-0 md:mt-10"}
          ${route == "calculate" ? "mt-8" : ""}`}
        >
          {open && (
            <CryptoModal
              currencies={currencies}
              setCurrency={setCurrency}
              toggle={toggleOpen}
              hasLink={route === "coins" ? true : false}
              isBuy={isBuy}
              infoLoading={infoLoading}
              homeLoading={homeLoading}
              setCurrentCoin={setCurrentCoin}
            />
          )}
             <Link
            className={`w-full px-0 ${route === "" ? "md:px-8" : "px-0"}`}
            href={`https://app.arz8.com/order/sell?c=${currency.symbol}&amount=${amount}`}
          >
            <button
              className={`
              ${route == "calculate" ? "w-full xl:w-full" : ""}
              ${width < 700 ? "w-full mt-0" : "w-full xl:w-auto"}
              px-8  text-xl py-[13px] rounded-xl bg-[#F00500] text-white
              duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[#e90500] active:translate-y-0 active:bg-[#F00500]`}
            >
              شروع فروش
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
