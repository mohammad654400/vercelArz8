"use client";
import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HomeData {
  profit: Array<any>;
  loss: Array<any>;
}

interface InfoData {
  cryptocurrency: Array<{
    symbol: string;
    name: { fa: string };
    icon: string | undefined;  
    color: string | undefined;
    isFont: boolean;
  }>;
}

interface MergedData {
  id: number;
  symbol: string;
  name: string;
  icon: string | undefined;  
  color: string | undefined;
  isFont: boolean;
  priceToman: number;
  priceChangePercent: string;
}

export default function BannerSlider({ homeData, infoData }: { homeData: HomeData; infoData: InfoData }) {
  
  const chunkArray = (array: any[], size: number) => {
    return array.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(array.slice(i, i + size));
      return acc;
    }, [] as any[][]);
  };


  const mergedData = useMemo<MergedData[]>(() => {
    return (homeData?.profit || [])
      .concat(homeData?.loss || [])
      .map((item, index) => {
        const matchedInfo = infoData?.cryptocurrency.find(crypto => crypto.symbol === item.symbol);

        return {
          id: index + 1,
          symbol: item.symbol,
          name: matchedInfo?.name?.fa || item.symbol,
          icon: matchedInfo?.icon,
          color: matchedInfo?.color,
          isFont: matchedInfo?.isFont || false,
          priceToman: item.priceToman, 
          priceChangePercent: item.priceChangePercent,
        };
      });
  }, [homeData, infoData]);

  const chunkedData = useMemo<MergedData[][]>(() => chunkArray(mergedData, 4), [mergedData]);


  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {chunkedData.map((group: MergedData[], pageIndex: number) => (
          <div className="w-full" key={pageIndex}>
            <div className="flex justify-between flex-wrap text-[10px] lg:text-sm w-full">
              {group.map((card,index) => (
                <div key={card.id} className="flex justify-center gap-5 md:gap-10 mt-4">
                
                  <div className="flex flex-col justify-center">
                    <div className="flex pb-1 gap-1 text-[10px] md:text-[13.5px] font-semibold">
                      <span>تومان</span>
                      <p>{card.priceToman}</p>
                    </div>
                    <p
                      className={`${
                        parseFloat(card.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                      } text-[10px] md:text-[11px] font-semibold`}
                    >
                      % {card.priceChangePercent}
                    </p>
                  </div>

      
                  <div
                    className={`flex items-center dark:border-10 ${
                      (index + 1) % 4 !== 0
                        ? "md:border-r-[3px] md:border-[#ADADAD80] md:pr-5"
                        : "pr-0"
                    }
                      ${
                        (index + 1) % 2 !== 0
                          ? "border-r-[3px] border-[#ADADAD80] pr-4"
                          : "pr-0"
                      }
                    `}
                  >
                    <div className="flex flex-col justify-center items-end mr-3 md:mr-2">
                      <p className="text-[10px] md:text-[12px] pb-1">{card.name}</p>
                      <p className="text-[10px] md:text-[12px] opacity-50">{card.symbol}</p>
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] object-cover">
                      {card.isFont ? (
                        <i
                          className={`object-cover cf cf-${card.symbol.toLowerCase()} ${
                            card.color ? `text-${card.color}` : "text-black"
                          }`}
                        ></i>
                      ) : (
                        <img
                          src={`https://app.arz8.com/api/images/currency/${card.icon}`}
                          alt={card.symbol}
                          className="w-full h-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
