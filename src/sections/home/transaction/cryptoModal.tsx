import Search from "@/assets/icons/search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";
import { useTheme } from "@/contexts/theme-provider";
import Link from "next/link";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import IconClose from "@/assets/icons/icon-close";


export default function CryptoModal({ toggle, setCurrency, currencies, hasLink = false, isBuy, isLoading, setCurrentCoin }: any) {

  const [search, setSearch] = useState("");
  const { baseColor, highlightColor } = useTheme();
  const { formatNumber } = useFormattedNumber();


  // const filteredCurrencies = currencies.filter(
  //   (currency: any) =>
  //     currency.name.includes(search) || (currency.symbol ?? "").toLowerCase().includes(search.toLowerCase())
  // );
  const filteredCurrencies = currencies.filter((currency: any) =>
    (currency.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
    (currency.symbol ?? "").toLowerCase().includes(search.toLowerCase())
  );


  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      toggle();
    }
  };

  const handleCurrencySelect = (currency: any) => {
    setCurrency(currency);
    setCurrentCoin(currency);
    toggle();
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 "
    >
      <div onClick={e => e.stopPropagation()} className="w-[388px] max-w-[85%] bg-background rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">انتخاب ارز</h2>
          <button onClick={toggle} className="w-6 h-6 text-gray-600 hover:text-black">
            <IconClose />
          </button>
        </div>

        {/* Search */}
        <div className="relative flex items-center px-4 my-2 mx-2   rounded-2xl">
          <input
            type="text"
            placeholder="نام، نماد، ارز..."
            className="w-full h-10 rounded-xl bg-[#F6F6F6] pr-3 dark:bg-[#302F34]   outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-6">
            <p className="w-5 h-5">
              <Search />
            </p>
          </span>
        </div>

        <div className="h-[300px] md:h-[400px] overflow-y-auto px-2 ">
          {isLoading ? (
            Array(5).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex items-center rounded-2xl justify-between px-4 py-3 "
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9">
                    <Skeleton circle={true} width={36} height={36} baseColor={baseColor} highlightColor={highlightColor} />
                  </div>

                  <div>
                    <Skeleton width={80} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                    <Skeleton width={40} height={10} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "4px" }} />
                  </div>
                </div>

                <div className="text-left">
                  <Skeleton width={70} height={14} baseColor={baseColor} highlightColor={highlightColor} />
                  <Skeleton width={40} height={10} baseColor={baseColor} highlightColor={highlightColor} style={{ marginTop: "4px" }} />
                </div>
              </div>
            ))
          ) : filteredCurrencies.length > 0 ? (
            filteredCurrencies.map((currency: any, index: any) => (
              hasLink ? (
                <Link href={`/coins/${currency.symbol}`} key={index}>
                  <div
                    key={index}
                    onClick={() => handleCurrencySelect(currency)}
                    className="flex items-center rounded-2xl justify-between px-4 py-3 hover:bg-[#FFF6DD] dark:hover:bg-[#3C3B41] cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9">
                        {currency.isFont ? (
                          <i
                            className={`cf cf-${currency.symbol.toLowerCase()} text-[36px] object-fill flex items-center justify-center`}
                            style={{ color: currency.color }}
                          ></i>
                        ) : (
                          <img
                            src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                            alt={currency.symbol}
                            className="w-full h-full object-fill"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{currency.name}</p>
                        <p className="text-xs text-gray-500">{currency.symbol}</p>
                      </div>
                    </div>

                    <div className="text-left">
                      {isBuy ? (
                        <p className="text-sm">{formatNumber(currency.price?.buy)} تومان</p>
                      ) : (
                        <p className="text-sm">{formatNumber(currency.price?.sell)} تومان</p>
                      )}
                      <p
                        style={{ direction: "ltr" }}
                        className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                          } text-xs  font-semibold  `}
                      >
                        {currency.priceChangePercent} %
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={index}
                  onClick={() => handleCurrencySelect(currency)}
                  className="flex items-center rounded-2xl justify-between px-4 py-3 hover:bg-[#FFF6DD] dark:hover:bg-[#3C3B41] cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9">
                      {currency.isFont ? (
                        <i
                          className={`cf cf-${currency.symbol.toLowerCase()} text-[36px] object-fill flex items-center justify-center`}
                          style={{ color: currency.color }}
                        ></i>
                      ) : (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${currency.icon}`}
                          alt={currency.symbol}
                          className="w-full h-full object-fill"
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{currency.name}</p>
                      <p className="text-xs text-gray-500">{currency.symbol}</p>
                    </div>
                  </div>

                  <div className="text-left">
                    {isBuy ? (
                      <p className="text-sm">{formatNumber(currency.price?.buy)} تومان</p>
                    ) : (
                      <p className="text-sm">{formatNumber(currency.price?.sell)} تومان</p>
                    )}
                    <p
                      style={{ direction: "ltr" }}
                      className={`${parseFloat(currency.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                        } text-xs  font-semibold  `}
                    >
                      {currency.priceChangePercent} %
                    </p>
                  </div>
                </div>
              )
            ))
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-foreground">موردی یافت نشد!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
