"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Buy from "./buy/buy";
import Sell from "./sell/sell";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";

interface HomeCurrency {
  symbol: string;
  price: {
    buy: string;
    sell: string;
  };
  fee: string;
  priceChangePercent: string;
}

interface HomeData {
  [key: string]: HomeCurrency[];
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

interface InfoData {
  cryptocurrency: CryptocurrencyInfo[];
}

export default function Transaction({
  coin,
  header = true,
  showPrice,
  homeData,
  infoData,
  infoLoading,
  homeLoading,
}: {
  showPrice?: boolean;
  header?: boolean;
  coin?: any;
  homeData?: HomeData;
  infoData?: InfoData;
  infoLoading: boolean;
  homeLoading: boolean;
}) {
  const [isBuy, setIsBuy] = useState(true);
  const [width, setWidth] = useState<number | undefined>();
  const [currentCoin, setCurrentCoin] = useState<any>(null);

  const [dataLoaded, setDataLoaded] = useState(false);

  const parentRef = useRef<HTMLDivElement | null>(null);
  const { baseColor, highlightColor } = useTheme();

  // Resize handler
  useEffect(() => {
    const resizeHandler = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.offsetWidth);
      }
    };

    const resizeObserver = new ResizeObserver(resizeHandler);
    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    window.addEventListener("resize", resizeHandler);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Toggle Buy/Sell transaction view
  const toggleTransaction = useCallback(() => setIsBuy((prev) => !prev), []);

  // Determine if data is fully loaded
  useEffect(() => {
    if (!homeLoading && !infoLoading && homeData && infoData) {
      setDataLoaded(true);
    }
  }, [homeLoading, infoLoading, homeData, infoData]);

  // Memoize the data mapping
  const cryptoMap = useMemo(() => {
    return new Map(
      infoData?.cryptocurrency.map((crypto) => [crypto.symbol, crypto])
    );
  }, [infoData]);

  // Memoize filtered data
  const filterData = useMemo(() => {
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

  // Set current coin if not set
  useEffect(() => {
    if (!currentCoin && filterData.length > 0) {
      setCurrentCoin(filterData[0]);
    }
  }, [filterData, currentCoin]);

  return (
    <div
      ref={parentRef}
      className={`${!header ? "border-none" : ""
        } border-2 border-[#cccbcb80] rounded-xl text-[13px] md:text`}
    >
      {/* Header Section */}
      {header && (
        <div className="flex w-full gap-4 bg-secondary py-3 px-4 sm:py-5 sm:pr-6 rounded-t-xl">
          <button
            aria-label="  خرید از ارز هشت"
            onClick={() => setIsBuy(true)}
            className={`text-center w-full sm:w-auto text-sm md:text-lg cursor-pointer ${isBuy ? "text-green-500 font-bold" : "text-gray-500"
              }`}
          >
            خرید از ارز هشت
          </button>
          <button
            aria-label="  فروش به ارز هشت"
            onClick={() => setIsBuy(false)}
            className={`text-center w-full sm:w-auto text-sm md:text-lg cursor-pointer ${!isBuy ? "text-red-500 font-bold" : "text-gray-500"
              }`}
          >
            فروش به ارز هشت
          </button>
        </div>
      )}

      {/* Main Content Section */}
      {!dataLoaded ? (
        <div className="relative w-full h-full duration-500">
          <Skeleton
            className="!w-full !h-48 !pt-2"
            baseColor={baseColor}
            highlightColor={highlightColor}
          />
        </div>
      ) : (
        <div className="relative w-full duration-500">
          {isBuy ? (
            <Buy
              width={width}
              currencies={filterData}
              toggle={toggleTransaction}
              coin={coin || currentCoin}
              showPrice={showPrice}
              isBuy={isBuy}
              infoLoading={infoLoading}
              homeLoading={homeLoading}
              setCurrentCoin={setCurrentCoin}
            />
          ) : (
            <Sell
              width={width}
              currencies={filterData}
              toggle={toggleTransaction}
              coin={coin || currentCoin}
              showPrice={showPrice}
              isBuy={isBuy}
              infoLoading={infoLoading}
              homeLoading={homeLoading}
              setCurrentCoin={setCurrentCoin}
            />
          )}
        </div>
      )}
    </div>
  );
}
