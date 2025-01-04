import React from "react";
import BannerDownload from "@/components/BannerDownload";

export default function Banner() {
  return (
    <div className="w-full  overflow-hidden self-center m-0 p-0 my-[100px] ">
      <div className="w-full bg-[#242428] h-[697px] lg:h-[614px]">
        <div>
          <p>دانلود اپلیکیشن صرافی ارزهشت</p>
          <p className="pb-8">با اپلیکیشن ارزهشت در یک صرافی تمام عیار معامله کنید.</p>
          <p className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full"></div>دسترسی به بیش از 1600 ارز دیجیتال </p>
          <p className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full"></div></p>
          <p className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full"></div></p>
        </div>
      </div>
    </div>
  );
}
