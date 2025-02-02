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
import Logo from "@/assets/logo.png";
import Image from 'next/image';


export default function Home() {
  const { data: infoData, error: infoError, loading: infoLoading } = useGetData('info');
  const { data: homeData, error: homeError, loading: homeLoading } = useGetData('home');
  
  if (homeLoading || infoLoading) {
    return (
      <div className="w-full h-full bg-background flex justify-center items-center py-52 md:py-96">
        <Image alt="logo" src={Logo} width={189} height={120} />
      </div>
    )
  }
  return (

    <div>
      <div className="base-style duration-1000">
        <MainTop  homeData={homeData?.topChanges} infoData={infoData}/>
        <TransAction/>
        <SecondBannerSlider />
        <RealTimePrice homeData={homeData?.table} infoData={infoData} homeLoading={homeLoading} infoLoading={infoLoading} />


      </div>
      <div className="px-5 md:px-12 lg:px-16 xl:px-0">
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

