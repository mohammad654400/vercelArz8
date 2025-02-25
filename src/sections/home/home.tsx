"use client"
import React, { useMemo } from "react";
import MainTop from "./main-top/main-top";
import TransAction from "@/sections/home/transaction/transAction";
import RealTimePrice from "./realtime-price/real-time-price";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quick-guide/quick-guide";
import Blog from "./blog/blog";
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

interface InfoData {
  cryptocurrency: CryptocurrencyInfo[];
}

export default function Home() {
  const { data: infoData, isLoading: infoLoading } = useGetData('info');
  const { data: homeData, isLoading: homeLoading } = useGetData('home', 60000);

  const infoMap = useMemo(
    () =>
      infoData?.cryptocurrency.reduce((acc: Record<string, CryptocurrencyInfo>, item: CryptocurrencyInfo) => {
        acc[item.symbol] = item;
        return acc;
      }, {} as Record<string, InfoData["cryptocurrency"][0]>),
    [infoData]
  );

  return (
    <div>
      <div className="base-style duration-1000">
        <MainTop homeData={homeData?.topChanges} infoMap={infoMap} isLoading={infoLoading || homeLoading} />
        <TransAction homeData={homeData?.calculator} infoData={infoData} infoLoading={infoLoading} homeLoading={homeLoading} />
        <RealTimePrice homeData={homeData?.table} infoMap={infoMap} isLoading={infoLoading || homeLoading} />
      </div>
      <div className="px-5 md:px-12 lg:px-16 xl:px-0 mt-[72px] mb-10 lg:my-[100px]">
        <Banner />
      </div>
      <div className="base-style">
        <QuickGuide />
        <Blog />
        <Description />
      </div>
    </div>
  );
}

