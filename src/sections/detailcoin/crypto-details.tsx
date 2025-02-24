import { useTheme } from "@/contexts/theme-provider";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type CryptoDetailsProps = {
  icon?: JSX.Element;
  persianName: string;
  symbol: string;
  lastDollarPrice: string;
  priceChangePercent: string;
  iconColor: string;
  iconIsFont: boolean;
  isLoading?: boolean;
};

const CryptoDetails = ({ icon, persianName, symbol, lastDollarPrice, priceChangePercent, iconColor, iconIsFont, isLoading }: CryptoDetailsProps) => {

  const { baseColor, highlightColor } = useTheme();


  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-[52px] h-[52px]">
          <div className="min-w-[41px] w-[41px] h-[41px] rounded-full flex items-center">
            {isLoading ? (
              <Skeleton baseColor={baseColor} highlightColor={highlightColor} circle width={41} height={41} />
            ) : iconIsFont ? (
              <i
                className={`cf cf-${symbol.toLowerCase()} text-[41px] w-full h-full flex items-center justify-center object-cover`}
                style={{ color: iconColor }}
              ></i>
            ) : (
              <img
                src={`https://app.arz8.com/api/images/currency/${icon}`}
                alt={symbol}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {isLoading ? <Skeleton baseColor={baseColor} highlightColor={highlightColor} width={80} height={20} /> : <p className="text-lg font-semibold">{persianName}</p>}
          {isLoading ? <Skeleton baseColor={baseColor} highlightColor={highlightColor} width={50} height={18} /> : <p className="text-lg font-semibold opacity-50">{symbol}</p>}
        </div>
      </div>
      <div className="flex flex-col text-end gap-1">
        {isLoading ? <Skeleton baseColor={baseColor} highlightColor={highlightColor} width={60} height={25} /> : <p className="text-[21px] font-semibold">{lastDollarPrice}</p>}
        {isLoading ? <Skeleton baseColor={baseColor} highlightColor={highlightColor} width={50} height={18} /> : <p dir="ltr" className={`text-lg font-semibold ${priceChangePercent.includes('-') ? 'text-[#F00500]' : 'text-[#33B028]'}`}>{priceChangePercent} %</p>}
      </div>
    </div>
  );
};

export default CryptoDetails;
