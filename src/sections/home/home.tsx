"use client"
import React, { ReactNode, useMemo } from "react";
import MainTop from "./main-top/main-top";
import TransAction from "@/sections/home/transaction/transAction";
import RealTimePrice from "./realtime-price/real-time-price";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quick-guide/quick-guide";
import useGetData from "@/hooks/useGetData";

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

export default function Home({ blogSection }: { blogSection: ReactNode }) {
  const { data: infoData, isLoading: infoIsLoading } = useGetData("info", undefined, undefined, {
    gcTime: 1000 * 60 * 60,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  }); const { data: homeData, isLoading: homeLoading } = useGetData('home', 60000);

  const infoMap = useMemo(() => {
    if (!infoData?.cryptocurrency) return {};
    return infoData.cryptocurrency.reduce((acc: Record<string, CryptocurrencyInfo>, item: CryptocurrencyInfo) => {
      acc[item.symbol] = item;
      return acc;
    }, {});
  }, [infoData]);

  return (
    <>
      <div className="base-style duration-1000">
        <MainTop homeData={homeData?.topChanges} infoMap={infoMap} isLoading={infoIsLoading || homeLoading} />
        <TransAction homeData={homeData?.calculator} infoData={infoData} infoLoading={infoIsLoading} homeLoading={homeLoading} />
        <RealTimePrice homeData={homeData?.table} infoMap={infoMap} isLoading={infoIsLoading || homeLoading} />
      </div>
      <div className="px-5 md:px-12 lg:px-16 xl:px-0 mt-[72px] mb-10 lg:my-[100px]">
        <Banner />
      </div>
      <div className="base-style">
        <QuickGuide />
        {blogSection}
        <Description />
      </div>
    </>
  );
}