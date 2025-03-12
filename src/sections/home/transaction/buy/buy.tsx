import HalfCircle from "@/assets/icons/halfCircle";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
export default function Buy({
  toggle,
  currencies,
  width,
  coin,
  showPrice,
  isBuy,
  infoLoading,
  homeLoading,
  setCurrentCoin,
}: TransAction) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any>(coin);
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

  // useEffect(()=>{
  //   setCurrency(currencies[1])
  // },[currencies])

  return (
    <div className="w-full">
      <div
        className={`-top-[8px] md:-top-[12px] right-12 md:right-8 lg:right-8 text-background dark:text-background
         ${route === "calculate" ? "hidden" : "absolute"}`}
      >
        <HalfCircle />
      </div>
      <div
        className={`flex justify-between items-center rounded-xl  py-6 md:py-8 px-4 w-full   ${
          width < 1196 && route !== "calculate"
            ? "flex-col "
            : route === "calculate"
            ? "flex-col"
            : "flex-row"
        }`}
      >
        <div className="relative w-full">
          <span className="mb-1 inline-block">مبلغ (پرداخت می‌کنید)</span>
          <input
            autoComplete="off"
            pattern="[0-9]*"
            inputMode="decimal"
            className={`outline-none bg-background placeholder:text-lg text-[21px]  font-normal   h-[58px] 
              ${width < 1196 ? "w-full lg:w-full" : "lg:w-[414px]"}
              ${route === "calculate" && "w-full "}
                 border rounded-xl mt-3  pr-4`}
            type="text"
            value={formatNumber(money)}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500,000"
          />
          <div className="absolute flex items-center gap-3 left-1 top-10 md:top-10 px-5 py-[12px]  rounded-xl bg-third">
            <Image
              alt="iran"
              src={flag}
              width={25}
              height={25}
              className="w-[25px] h-[25px]"
              quality={100}
            />
            <p>IRT</p>
          </div>
          <div
            className={`
              gap-5 mt-5 text-xs md:text-sm 
              ${width < 800 ? "hidden" : "md:flex "}
            `}
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
            ${
              route == "calculate" ? "self-center rotate-90 lg:mt-12 ml-8 " : ""
            }
            ${route === "" ? "mt-0 pt-8" : "mt-2 pt-8 md:pt-10"}
            ${width < 700 ? "" : "pt-5 px-5 "} 
            cursor-pointer  md:mt-6  md:my-5 lg:mt-0 self-end mb:10 md:mb-10`}
        >
          <ArrowChange />
        </div>

        <div className={`relative  w-full`}>
          <p>مقدار (دریافت می‌کنید)</p>
          <input
            pattern="[0-9]*"
            inputMode="decimal"
            className={`
              ${width < 1196 ? "lg:w-full" : "lg:w-[414px]"} ${
              route === "calculate" && "w-full "
            } mb-10 text-[21px] w-full font-normal placeholder:text-lg bg-background outline-none h-[58px]  border rounded-xl lg:w-[414px] mt-3 md:mt-5  pr-4`}
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={toggleOpen}
            className="absolute group cursor-pointer flex gap-2 items-center left-1 top-[36px] md:top-[44px] px-4 py-[11px] rounded-xl bg-secondary dark:bg-third"
          >
            {/* <div className="w-5 h-5">{currency.icon}</div> */}
            <div className="min-w-6 h-7 flex justify-center items-center ">
              {!currency?.isFont ? (
                <img
                  src={`https://app.arz8.com/api/images/currency/${currency?.icon}`}
                  alt={currency?.symbol}
                  className="w-full h-full object-cover"
                />
              ) : (
                <i
                  className={`cf cf-${currency.symbol.toLowerCase()} text-[20px] object-cover flex items-center justify-center`}
                  style={{ color: currency.color }}
                ></i>
              )}
            </div>
            <p className="">{currency?.name}</p>
            <span className="w-5 h-5">
              <ArrowDown />
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center pb-2">
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
            className="w-full px-0 md:px-8"
            href={`https://app.arz8.com/order/buy?c=${currency.symbol}`}
          >
            <button
              className={`
              ${route == "calculate" ? "w-full  xl:w-full" : ""}
              ${
                width < 700 ? "w-full " : "lg:w-auto px-10"
              }  text-xl text-white  py-[12px]  rounded-xl bg-[#33B028] w-full  md:mt-2`}
            >
              شروع خرید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
