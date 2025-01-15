import React from "react";
import MainTop from "./main-top/main-top";
import TransAction from "./transaction/transaction";
import SecondBannerSlider from "@/components/slider/banner-slider/seceond-banner-slider";
import RealTimePrice from "./realtime-price/real-time-price";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quick-guide/quick-guide";
import Blog from "./blog/blog";
export default function Home() {
  return (
    <div>
      <div className="base-style duration-1000">
        <MainTop />
        <TransAction />
        <SecondBannerSlider />
        <RealTimePrice />
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
