import HalfCircle from "@/assets/icons/halfCircle";
import React, { useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import ArrowChange from "@/assets/icons/arrrow/arrowcChange";
import { usePathname } from "next/navigation";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import Link from "next/link";
import { useCryptoModal } from "@/contexts/modalContext";
type TransAction = {
  toggle: any;
  currencies: any;
  width: any;
  currentCoinForTransactionComponent: any;
  showPrice?: boolean;
  isBuy: boolean;
  infoLoading: boolean;
  homeLoading: boolean;
  setCurrentCoinForTransactionComponent: any;
};
export default function Buy({ toggle, width, currentCoinForTransactionComponent, setCurrentCoinForTransactionComponent }: TransAction) {
  const [money, setMoney] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { openCryptoModal } = useCryptoModal()
  const route = usePathname().split("/")[1];
  const { formatNumber, unformatNumber } = useFormattedNumber();
  const openConfiguredCryptoModal = () => {
    setAmount("");
    setMoney("");
    openCryptoModal({
      hasLink: route.startsWith('price-cryptocurrencies') ? true : false,
      isBuy: true,
      onSelectCurrency: setCurrentCoinForTransactionComponent,
    })
  };
  const handleMoneyChange = (value: string) => {
    let rawValue = value.replace(/[^0-9]/g, "");
    setMoney(rawValue);
    if (currentCoinForTransactionComponent) {
      const calculatedAmount = parseFloat(rawValue) / currentCoinForTransactionComponent.price?.buy;
      setAmount(calculatedAmount ? calculatedAmount.toFixed(8) : "");
    }
  };
  const handleAmountChange = (value: string) => {
    let rawValue = value.replace(/[^0-9.]/g, "");
    if ((rawValue.match(/\./g) || []).length > 1) {
      return;
    }
    setAmount(rawValue);
    if (currentCoinForTransactionComponent) {
      const calculatedMoney = parseFloat(rawValue) * currentCoinForTransactionComponent.price?.buy;
      setMoney(calculatedMoney ? calculatedMoney.toLocaleString("en-US") : "");
    }
  };
  return (
    <div className="w-full bg-background">
      <div
        className={`-top-[8px] md:-top-[12px] right-12 md:right-8 lg:right-8 text-background dark:text-background
         ${route === "calculate" ? "hidden" : "absolute"}`}
      >
        <HalfCircle />
      </div>
      <div
        className={`flex justify-between items-center rounded-xl  py-6 md:py-8 px-4 w-full ${width < 1196 && route !== "calculate"
          ? "flex-col "
          : route === "calculate"
            ? "flex-col"
            : "flex-row"
          }`}
      >
        <div className="relative w-full">
          <span className="mt-1 inline-block">مبلغ (پرداخت می‌کنید)</span>
          <input
            autoComplete="off"
            pattern="[0-9]*"
            inputMode="decimal"
            className={`outline-none bg-background placeholder:text-lg text-[21px] font-normal h-[62px]
              ${width < 1196 ? "w-full lg:w-full" : "lg:w-[414px]"}
              ${route === "calculate" && "w-full"}
                 border rounded-xl mt-3 pr-4`}
            type="text"
            value={formatNumber(money)}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500,000"
          />
          <div className="absolute flex items-center gap-3 left-1.5 top-[43px] md:top-[45.5] px-5 py-[12px]  rounded-xl bg-third">
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
              قیمت خرید: {formatNumber(currentCoinForTransactionComponent?.price?.buy?.toLocaleString())}{" "}
              تومان
            </p>
            <p className="text-xs">
              قیمت فروش: {formatNumber(currentCoinForTransactionComponent?.price?.sell?.toLocaleString())}{" "}
              تومان
            </p>
          </div>
        </div>

        <div
          onClick={toggle}
          className={`
            ${route == "calculate" ? "self-center rotate-90 h-22 lg:mt-12  ml-7  " : ""
            }
            ${route === "" ? "mt-0 pt-8" : "mt-2 pt-8 md:pt-10"}
            ${width < 700 ? "" : "pt-5 px-5 md:mb-10"} 
            cursor-pointer  md:mt-6  md:my-5 lg:mt-0 self-end mb:10 `}
        >
          <ArrowChange />
        </div>
        <div className={`relative  w-full`}>
          <p>مقدار (دریافت می‌کنید)</p>
          <input
            pattern="[0-9]*"
            inputMode="decimal"
            className={`
              ${width < 1196 ? "lg:w-full" : "lg:w-[414px]"} 
              ${route === "calculate" && "w-full "}
              ${route == "calculate" ? "lg:w-full mb-8 pt-0 mt-0 " : ""} 
              mb-10 text-[21px] w-full font-normal placeholder:text-lg bg-background outline-none h-[62px] border rounded-xl lg:w-[414px] mt-3 md:mt-5 pr-4`}
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={openConfiguredCryptoModal}
            className="absolute group cursor-pointer flex gap-2 items-center left-1.5 top-[37px] md:top-[45.5px] px-4 py-[11px] rounded-xl bg-secondary dark:bg-third"
          >
            {/* <div className="w-5 h-5">{currency.icon}</div> */}
            <div className="min-w-6 h-7 flex justify-center items-center ">
              {!currentCoinForTransactionComponent?.isFont ?
                <img src={`https://app.arz8.com/api/images/currency/${currentCoinForTransactionComponent?.icon}`} alt={currentCoinForTransactionComponent?.symbol} className="w-full h-full object-cover" />
                :
                <i className={`cf cf-${currentCoinForTransactionComponent.symbol.toLowerCase()} text-[20px] object-cover flex items-center justify-center`} style={{ color: currentCoinForTransactionComponent.color }}></i>
              }
            </div>
            <p className="">{currentCoinForTransactionComponent?.symbol}</p>
            <span className="w-5 h-5"><ArrowDown /></span>
          </div>
        </div>
        <div className="w-full flex justify-center pb-2">
          <Link className={`w-full px-0 ${route === "" ? "md:px-8" : "px-0"}`} href={`https://app.arz8.com/order/buy?c=${currentCoinForTransactionComponent.symbol}&amount=${amount}`}>
            <button
              className={`
              ${route == "calculate" ? "w-full  xl:w-full" : ""}
              ${width < 700 ? "w-full " : "lg:w-full px-10"} 
                 text-xl text-white py-[12px] rounded-xl bg-[#33B028] w-full  md:mt-2
                 duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#55c54b] active:translate-y-0 active:bg-[#33B028]
                 `}
            >
              شروع خرید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
