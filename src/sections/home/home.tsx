"use client"
import React from "react";
import MainTop from "./main-top/main-top";
import TransAction from "@/sections/home/transaction/transAction";
import SecondBannerSlider from "@/components/slider/banner-slider/seceond-banner-slider";
import RealTimePrice from "./realtime-price/real-time-price";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quick-guide/quick-guide";
import Blog from "./blog/blog";
import useGetData from "@/hooks/useGetData";


export default function Home() {
  const { data: infoData, isLoading: infoLoading } = useGetData('info');
  const { data: homeData, isLoading: homeLoading } = useGetData('home', 60000);

  return (
    <div>
      <div className="base-style duration-1000">
        <MainTop homeData={homeData?.topChanges} infoData={infoData} infoLoading={infoLoading} homeLoading={homeLoading} />
        <TransAction homeData={homeData?.calculator} infoData={infoData} infoLoading={infoLoading} homeLoading={homeLoading} />
        <SecondBannerSlider />
        <RealTimePrice homeData={homeData?.table} infoData={infoData} infoLoading={infoLoading} homeLoading={homeLoading} />
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

