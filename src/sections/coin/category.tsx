import ArrowWithBorder from "@/assets/icons/arrrow/arrow-whisborder";
import React, { useEffect, useMemo, useState } from "react";

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
  infoMap: any
}

export default function Category({ open, setOpen, title, data, infoMap }: CategoryProps) {

  const [displayedCurrencies, setDisplayedCurrencies] = useState<any>([]);


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


    return data.map((item: any) => {
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
          ? "w-[250px] md:w-[364px] pt-4 md:pt-6 rounded-2xl mx-2 px-3 md:px-6 "
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

        {Array.isArray(displayedCurrencies) && displayedCurrencies.length > 0 ? (
          displayedCurrencies.map((item, index) => {
            return (
              <div
              key={index}
              className={` ${open ? "border-b border-[#ADADAD80]" : "border-none"
                } ${(index + 1) % 3 == 0
                  ? "border-none"
                  : "border-b border-[#ADADAD80]"
                }`}
            >
              <div >
                
                  <div className="flex justify-between items-center gap-x-3 md:gap-x-5 my-[18px]">
  
                    <div className={`min-w-[41px] w-[41px] h-[41px] rounded-full  flex  items-center `}>
                    {!item.isFont ? (
                      <img
                        src={`https://app.arz8.com/api/images/currency/${item.icon}`}
                        alt={item.symbol}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <i
                        className={`cf cf-${item.symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-cover`}
                        style={{ color: item.color }}
                      ></i>
                    )}
                    </div>
  
                    <div className={` ${open ? "flex justify-between  w-full  " : "hidden"}`}>
  
                      <div className="h-full flex flex-col gap-y-3 items-start ">
                        <p className="!leading-3 text-sm font-semibold" >{item.name}</p>
                        <p className="leading-3 text-sm font-semibold opacity-50">{item.symbol}</p>
                      </div>
                      <div className={`flex flex-col gap-y-3 items-center `}>
                        <div className="flex">
                          <p className="leading-3 text-sm font-semibold ">{item.priceToman} </p>
                          <span className="leading-3 text-sm font-semibold mr-1">تومان</span>
                        </div>
                        <div dir="ltr" className="w-full flex ">
                          <p className={`leading-3 text-sm font-semibold ${item.priceChangePercent > 0 ? " text-green-600" : "text-rose-500"}`}>%{item.priceChangePercent}</p>
                        </div>
                      </div>
                    </div>
  
                  </div>
  
               
              </div>
            </div>
            );
          })
        ) : (
          <p>No data available</p> 
        )}
      </div>
    </div>
  );
}
