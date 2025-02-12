import HalfCircle from "@/assets/icons/halfCircle";
import React, { useEffect, useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import CryptoModal from "../cryptoModal";
import ArrowChange from "@/assets/icons/arrrow/arrowcChange";
import { usePathname } from "next/navigation";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
type TransAction = {
  toggle: any;
  currencies: any;
  width: any;
  coin: any;
  showPrice?: boolean;
  isBuy:boolean
};
export default function Buy({
  toggle,
  currencies,
  width,
  coin,
  isBuy,
}: TransAction) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any | null>(coin || currencies[0]);
  const [money, setMoney] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const route = usePathname().split("/")[1];
  const { formatNumber, unformatNumber } = useFormattedNumber();

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  
  const handleMoneyChange = (value: string) => {
    const rawValue = unformatNumber(value);
    setMoney(formatNumber(rawValue));

    if (currency) {
      const calculatedAmount = parseFloat(rawValue) / currency.price.sell;
      setAmount(calculatedAmount ? calculatedAmount.toFixed(8) : "");
    }
  };

  const handleAmountChange = (value: string) => {
    const rawValue = unformatNumber(value);
    setAmount(formatNumber(rawValue));

    if (currency) {
      const calculatedMoney = parseFloat(rawValue) * currency.price.sell;
      setMoney(calculatedMoney ? calculatedMoney.toLocaleString("en-US") : "");
    }
  };
  return (
    <div className="w-full ">
      <div className={`absolute -top-[12px] left-12 md:left-8 lg:right-44 text-background dark:text-background ${route==='calculate'?"hidden":""}`}>
        <HalfCircle />
      </div>
      <div
        className={`flex justify-between items-center rounded-xl   py-6 md:py-8 px-4 
          ${
          width < 800 && route !== "calculate"
            ? "flex-col "
            :route === "calculate"
            ? "flex-col" 
            : ""
        }
        `}
      >
        <div className="relative w-full ">
          <p>مقدار (دریافت می‌کنید)</p>
          <input
            className={`
              ${width < 800 ? "lg:w-full" : "lg:w-[414px]"} 
              ${route=='calculate'? "lg:w-full lg:mt-5" : "mb-10"}
              ${route===''?"mb-8":""}
                text-[21px]  font-normal placeholder:text-lg bg-background outline-none h-[58px] w-full border rounded-xl mt-3 md:mt-2 pr-4`}
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={toggleOpen}
            className="absolute group cursor-pointer flex gap-2 items-center left-1 top-[36px] md:top-[32px] px-4 py-[11px] rounded-xl bg-secondary dark:bg-third"
          >
                <div className="w-5 h-5 ">
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
            <p className=" text-lg">{currency.name}</p>
            <span className="w-5 h-5">
              <ArrowDown />
            </span>
          </div>
        </div>
        <div
          onClick={toggle}
          className={`
            ${route===''?"mt-0 pt-0 ":"mt-0 pt-0"}
            ${
              width < 700 ? " " : "pt-5 px-5 "
            }
          ${
            route == "calculate"
              ? "self-center rotate-90 lg:mt-14"
              : ""
          }
           cursor-pointer  md:my-5  lg:mt-0 self-end mb:10 md:mb-10`}
        >
          <ArrowChange />
        </div>
        <div className="relative w-full ">
          <p>مبلغ (پرداخت می‌کنید)</p>
          <input
            className={`${width < 800 ? "lg:w-full" : "lg:w-[414px]"}
             ${ route=='calculate'? "lg:w-full" : ""} outline-none bg-background placeholder:text-lg text-[21px] font-normal  h-[58px] w-full  border rounded-xl mt-3 md:mt-5 ${route===''?"mb-2":"mb-10"} md:mb-0 pr-4`}
            type="text"
            value={money}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500000"
          />
          <div className="absolute flex items-center gap-3 left-1 top-9 md:top-11 px-5 py-[11px]  rounded-xl bg-third">
            <Image alt="iran" src={flag} className="w-[25px] h-[25px]" />
            <p className=" text-lg">IRT</p>
          </div>
          <div className={`gap-5 mt-5 text-xs md:text-sm ${
              width < 800 ? "hidden" : "md:flex "
            }`}>
           <p>
              قیمت خرید: {formatNumber(currency?.price.buy?.toLocaleString())} تومان
            </p>
            <p>
              قیمت فروش: {formatNumber(currency?.price.sell?.toLocaleString())} تومان
            </p>
          </div>
        </div>

        <div className={`w-full flex justify-center pb-2
           ${route==''? "pt-8 md:pb-8" : "mt-0 md:mt-10"}
          ${route=='calculate'? "mt-8" : ""}`}>
          {open && (
            <CryptoModal
              currencies={currencies}
              setCurrency={setCurrency}
              toggle={toggleOpen}
              hasLink={true}
              isBuy={isBuy}
            />
          )}
          <button className={`
          ${route=='calculate'? "w-full xl:w-full" : ""}
          ${width<700? "w-full mt-0":"w-full xl:w-auto"}
          px-8  text-xl py-[13px] rounded-xl bg-[#F00500] text-white`}>
            شروع فروش
          </button>
        </div>
      </div>
    </div>
  );
}
