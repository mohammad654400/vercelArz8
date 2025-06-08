import Search from "@/assets/icons/search";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useMemo, useRef, useState } from "react";
import { useTheme } from "@/contexts/theme-provider";
import { useFormattedNumber } from "@/hooks/useFormatted-number";
import IconClose from "@/assets/icons/icon-close";
import { useCryptoModal } from "@/contexts/modalContext";
import useGetData from "@/hooks/useGetData";
import { FixedSizeList as List } from 'react-window'
interface CryptoModalProps {
  setSelectedCurrencyForTransactionComponent?: (currency: any) => void;
  hasLink?: boolean;
  isBuy?: boolean;
  isLoading?: boolean;
  setCurrentCoin?: (symbol: string) => void;
}
interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

export default function CryptoModal({ }: CryptoModalProps) {
  const { isCryptoModalOpen, closeCryptoModal, config } = useCryptoModal()
  const hasLink = config?.hasLink ?? false
  const isBuy = config?.isBuy ?? false
  const onSelectCurrency = config?.onSelectCurrency
  const [search, setSearch] = useState("");
  const modalRef = useRef<HTMLDivElement>(null)
  const { baseColor, highlightColor } = useTheme();
  const { formatNumber } = useFormattedNumber();
  const { data: infoData, isLoading: infoDataIsLoading } = useGetData("info", undefined, undefined, {
    gcTime: 1000 * 60 * 60,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const { data: homeData, isLoading: homeDataIsLoading } = useGetData("home", 60000);
  // Memoize the data mapping
  const cryptoMap = useMemo(() => {
    return new Map(
      infoData?.cryptocurrency.map((crypto: any) => [crypto.symbol, crypto])
    );
  }, [infoData]);
  // Memoize filtered data
  const filteredData = useMemo(() => {
    if (!homeData || !cryptoMap.size) return []; // Ensure data exists
    return Object.values(homeData)
      .flat()
      .map((item: any) => {
        const matchedInfo = cryptoMap.get(item.symbol) as Partial<CryptocurrencyInfo> | undefined;
        // Skip if matchedInfo is undefined or an empty object
        if (!matchedInfo || Object.keys(matchedInfo).length === 0) {
          return null; // Return null for items we want to exclude
        }
        return {
          id: matchedInfo.id || 0,
          symbol: item.symbol || "Unknown",
          name: matchedInfo.name?.fa || "نامشخص",
          icon: matchedInfo.icon || "default.svg",
          color: matchedInfo.color || "#000",
          isFont: matchedInfo.isFont || false,
          percent: matchedInfo.percent || 0,
          price: item.price || 0,
          fee: item.fee || "0",
          priceChangePercent: item.priceChangePercent || 0,
        };
      })
      .filter(Boolean); // Remove null values from the array
  }, [homeData, cryptoMap]);
  const filteredCurrencies = filteredData.filter((currency: any) =>
    (currency.name ?? "").toLowerCase().includes(search.toLowerCase()) ||
    (currency.symbol ?? "").toLowerCase().includes(search.toLowerCase())
  );
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeCryptoModal();
    }
  };
  return (
    <div onClick={handleOverlayClick} className={`fixed inset-0 bg-black bg-opacity-30 justify-center items-center z-50 cursor-default ${isCryptoModalOpen ? 'flex' : 'hidden'}`}>
      <div onClick={e => e.stopPropagation()} ref={modalRef} className="w-[388px] max-w-[85%] bg-background rounded-[36px] shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">انتخاب ارز</h2>
          <button onClick={closeCryptoModal} className="w-6 h-6 text-gray-600 hover:text-black">
            <IconClose />
          </button>
        </div>
        {/* Search */}
        <div className="relative flex items-center px-1 my-2 mx-2 rounded-2xl">
          <input
            type="text"
            placeholder="نام، نماد، ارز..."
            className="w-full h-10 rounded-[36px] bg-[#F6F6F6] pr-3 dark:bg-[#302F34] outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-4"><p className="w-5 h-5"><Search /></p></span>
        </div>
        <div className="h-[400px] overflow-y-auto px-2">
          {filteredCurrencies.length !== 0 ?
            <List height={390} itemCount={filteredCurrencies.length} width='100%' itemSize={72}>
              {({ index, style }) => {
                const currency = filteredCurrencies[index]
                return (
                  <div key={currency?.symbol} style={style}>
                    <div
                      onClick={
                        hasLink
                          ? () => (window.location.href = `/price-cryptocurrencies/${currency?.symbol}`)
                          : () => {
                            onSelectCurrency?.(currency as any);
                            closeCryptoModal();
                          }
                      }
                      className="flex items-center rounded-[36px] justify-between px-4 py-3 hover:bg-[#FFF6DD] dark:hover:bg-[#323136] cursor-pointer"
                      dir="rtl"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9">
                          {currency?.isFont ?
                            <i className={`cf cf-${currency.symbol.toLowerCase()} text-[36px] object-fill flex items-center justify-center`} style={{ color: currency.color }} />
                            :
                            <img src={`https://app.arz8.com/api/images/currency/${currency?.icon}`} alt={currency?.symbol} className="w-full h-full object-fill" />
                          }
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{currency?.name}</p>
                          <p className="text-xs text-gray-500">{currency?.symbol}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        {isBuy ?
                          <p className="text-sm">{formatNumber(currency?.price?.buy)} تومان</p>
                          :
                          <p className="text-sm">{formatNumber(currency?.price?.sell)} تومان</p>
                        }
                        <p dir="ltr" className={`${parseFloat(currency?.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"} text-xs font-semibold`}>
                          {currency?.priceChangePercent} %
                        </p>
                      </div>
                    </div>
                  </div>
                )
              }}
            </List>
            : <div className="flex justify-center items-center h-full"><p className="text-foreground">موردی یافت نشد!</p></div>
          }
        </div>
      </div>
    </div >
  );
}
