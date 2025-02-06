"use client";

import useGetData from "@/hooks/useGetData";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const filterButtons = [
  { key: "default", label: "پیش فرض" },
  { key: "volume", label: "حجم معاملات" },
  { key: "min", label: "کمترین قیمت" },
  { key: "max", label: "بیشترین قیمت" },
  { key: "profit", label: "بیشترین سود" },
  { key: "loss", label: "بیشترین ضرر" },
];

interface CryptoTableProps {
  infoMap: any;
}

const CryptoTable: React.FC<CryptoTableProps> = ({ infoMap }) => {
  const [displayedCurrencies, setDisplayedCurrencies] = useState<any[]>([]);
  const [sort, setSort] = useState<string>("default");
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: cryptocurrenciesData, isLoading, error } = useGetData(
    "cryptocurrencies",
    60000,
    { limit: 7, page, sort, search: searchQuery }
  );

  const filteredData = useMemo(() => {
    return cryptocurrenciesData?.lists.map((item: any) => {
      const info = infoMap[item.symbol];
      return {
        ...item,
        ...info,
        name: info?.name.fa,
      };
    });
  }, [cryptocurrenciesData?.lists, infoMap]);

  useEffect(() => {
    if (filteredData) {
      setDisplayedCurrencies((prev) => [...prev, ...filteredData]);
    }
  }, [filteredData]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        console.log("entries", entries);

        if (entries[0].isIntersecting && cryptocurrenciesData?.lists.length > 0) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => observer.current?.disconnect();
  });

  const handelOnChanged = (value: string) => {
    setSearchQuery(value);
    setTimeout(() => {
      console.log("searchQuery", searchQuery);
    },800)


  }

  return (
    <div className="w-full z-50">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجوی نماد،..."
          value={searchQuery}
          onChange={(e) => handelOnChanged(e.target.value)}
          className="w-full p-2 border border-[#ADADAD80] rounded-[10px] bg-secondary outline-none placeholder:text-xs"
        />
      </div>
      <div className="absolute top-[102px] -z-10 w-[90%] bg-secondary dark:bg-fifth h-[2px]"></div>
      <span className="w-9 block mb-4 pb-1 text-primary border-b-2 border-primary text-sm font-semibold">
        ارزها
      </span>

      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="flex w-full items-center rounded-[5px] mb-5 overflow-x-auto scrollbar-hidden"
      >
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`ml-2 px-2 py-1 text-xs font-semibold rounded-lg whitespace-nowrap text-center ${sort === btn.key
              ? "bg-[#FFF4D8] text-primary dark:bg-[#64542c] border border-primary"
              : "bg-transparent"
              }`}
            onClick={(e) => {
              e.stopPropagation();
              setSort(btn.key);
              setPage(1);
              setDisplayedCurrencies([]);
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="w-full bg-fifth dark:bg-secondary rounded-[5px]">
        <div className="flex text-right text-[#3C3B4180] dark:text-[#FFFFFF80] text-sm py-1 rounded-xl bg-secondary sticky top-0 z-10">
          <div className="w-1/3 pr-4">نماد</div>
          <div className="w-1/3">24H تغییرات</div>
          <div className="w-1/3">قیمت به تومان</div>
        </div>
        <div className="overflow-y-auto mt-2 max-h-[260px]">
          {displayedCurrencies?.length > 0 ? (
            displayedCurrencies.map((crypto, index) => (
              <Link href={`/coins/${crypto.symbol}`} key={index}>
                <div
                  ref={index === displayedCurrencies.length - 3 ? lastElementRef : null}
                  className="ml-2 flex justify-between items-center border-b border-[#ADADAD80] py-2 text-sm"
                >
                  <div className="w-1/3 flex items-center gap-2">
                    <div className="w-[25px] h-[25px] flex">
                      {!crypto.isFont ? (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${crypto.icon}`}
                          alt={crypto.symbol}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <i
                          className={`cf cf-${crypto.symbol.toLowerCase()} text-[25px] w-full h-full flex items-center justify-center object-cover`}
                          style={{ color: crypto.color }}
                        ></i>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold">{crypto.name}</span>
                      <span className="text-xs font-semibold text-sixth opacity-50">{crypto.symbol}</span>
                    </div>
                  </div>

                  <p
                    dir="ltr"
                    className={`${parseFloat(crypto.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                      } text-[10px] md:text-lg font-semibold text-end md:text-center`}
                  >
                    {crypto.priceChangePercent} %
                  </p>

                  <div className="w-1/3 pr-2 text-xs font-semibold">
                    {crypto.priceToman} تومان
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-4">در حال جستوجو</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
