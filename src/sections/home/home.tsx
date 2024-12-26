import React from "react";
import MainTop from "./maintop/mainTop";
import TransAction from "./transaction/transaction";
import SecondBannerSlider from "@/components/slider/bannerslider/seceondBannerSlider";
import RealTimePrice from "./realtimeprice/realTimePrice";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quickguide/quickGuide";
import Blog from "./blog/blog";
export default function Home() {
  return (
    <div>
      <div className="base-style">
        <MainTop />
        <TransAction />
        <SecondBannerSlider />
        <RealTimePrice />
      </div>
      <Banner />
      <div className="base-style">
        <QuickGuide />
        <Blog />
        <Description />
      </div>

    </div>
  );
}
