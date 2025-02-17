import ArrowWithBorder from "@/assets/icons/arrrow/arrow-whisborder";
import { useTheme } from "@/contexts/theme-provider";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Skeleton from "react-loading-skeleton";

interface CategoryItem {
  priceToman: string;
  lastPrice: number;
  name: string;
  symbol: string;
  icon: string;
  color: string;
  isFont: boolean;
  percent: number;
  priceChangePercent: any
}

interface CategoryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  data: CategoryItem[];
  infoMap: any;
  infoLoading: boolean;
  isLoading: boolean;
}

export default function Category({ open, setOpen, title, data, infoMap, infoLoading, isLoading }: CategoryProps) {
  const { baseColor, highlightColor } = useTheme();
  const [displayedCurrencies, setDisplayedCurrencies] = useState<any>([]);
  const {formatNumber} = useFormattedNumber()


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 842) {
        setOpen(true);
      } else if (window.innerWidth > 842) {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const filteredData = useMemo(() => {
    return data?.map((item: any) => {
      const info = infoMap[item.symbol] || [{}];
      return {
        ...item,
        ...info,
        name: info?.name?.fa,
      };
    });
  }, [data, infoMap]);

  useEffect(() => {
    if (Array.isArray(filteredData)) {
      setDisplayedCurrencies(filteredData);
    } else {
      setDisplayedCurrencies([]);
    }
  }, [filteredData]);


  return (
    <div className="py-[30px]">
      <div
        className={`${open
          ? "w-[250px] md:w-[364px] pt-4 md:pt-5 rounded-2xl mx-2 px-3 md:px-6 "
          : "w-[72px] h-[283px] rounded-3xl overflow-hidden px-4 flex flex-col justify-between"
          } h-[283px] bg-[#F6F6F6] dark:bg-[#242428] pb-4`}
      >
        <div
          className={`relative ${open
            ? "flex justify-between cursor-pointer"
            : "flex justify-center pt-4"
            }`}
        >
          <h1 className={`mb-2 ${open ? "block" : "hidden"}`}>
            {title}
          </h1>
          <div className="hidden sm:block absolute left-0 w-6  bg-black opacity-0  z-10">d</div>
          <span className="" onClick={() => setOpen(!open)}>
            <ArrowWithBorder />
          </span>
        </div>

        {isLoading || infoLoading || displayedCurrencies.length === 0 ? (
          [...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col">
              <div className=" py-1 flex items-center gap-x-3 md:gap-x-5">
                <div className="flex justify-center items-center my-auto">
                  <Skeleton circle width={41} height={41} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="flex flex-col mr-1">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={40} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
                <div className="mr-auto flex flex-col ">
                  <Skeleton width={70} height={16} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={50} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                </div>
              </div>
              {index !== 2 && (
                <Skeleton
                  height={1}
                  width="100%"
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                />
              )}
            </div>
          ))
        ) : Array.isArray(displayedCurrencies) && displayedCurrencies?.length > 0 ? (
          displayedCurrencies.map((item, index) => (
            <div
              key={index}
              className={` ${open ? "border-b border-[#ADADAD80]" : "border-none"
                } ${(index + 1) % 3 == 0
                  ? "border-none"
                  : "border-b border-[#ADADAD80]"
                }`}
            >

              <Link href={`coins/${item.symbol}`} className="flex justify-between items-center gap-x-3 md:gap-x-5 my-[18px]">

                <div className={`min-w-[41px] w-[41px] h-[41px] rounded-full  flex  items-center `}>
                  {item.isFont ? (
                    <i
                      className={`cf cf-${item.symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-cover`}
                      style={{ color: item.color }}
                    ></i>
                  ) : (
                    <img
                      src={`https://app.arz8.com/api/images/currency/${item.icon}`}
                      alt={item.symbol}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className={` ${open ? "flex justify-between  w-full  " : "hidden"}`}>

                  <div className="h-full flex flex-col gap-y-3 items-start ">
                    <p className="!leading-3 text-sm font-semibold" >{item.name}</p>
                    <p className="leading-3 text-sm font-semibold opacity-50">{item.symbol}</p>
                  </div>
                  <div className={`flex flex-col gap-y-3 items-center `}>
                    <div className="flex">
                      <p className="leading-3 text-sm font-semibold ">{formatNumber(item.priceToman)} </p>
                      <span className="leading-3 text-sm font-semibold mr-1">تومان</span>
                    </div>
                    <div dir="ltr" className="w-full flex ">
                      <p className={`leading-3 text-sm font-semibold ${item.priceChangePercent > 0 ? " text-green-600" : "text-rose-500"}`}>%{item.priceChangePercent}</p>
                    </div>
                  </div>
                </div>

              </Link>

            </div>
          ))
        ) : (<div className="text-center text-sm text-gray-500">داده‌ای برای نمایش وجود ندارد</div>)}
      </div>
    </div>
  );
}
