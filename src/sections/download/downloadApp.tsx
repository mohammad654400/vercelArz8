import React from 'react'

import BannerDownload from '../../components/BannerDownload';
import { cardData } from "./data/data";
import Info from "@/assets/icons/rules/info";

export default function DownloadApp() {
  return (
    <div className="bg-background pt-[127px]">
      <BannerDownload showWaveDivider={true} />
       <div className="base-style my-[65px] lg:my-[113px]" style={{ gap: "0px" }}>
            <div className="flex bg-primary w-full rounded-[20px] p-[13px] items-center  lg:mb-[69px] mb-[40px]">
              <div className="lg:w-[49px] lg:h-[49px] w-[20px] h-[20px]">
                <Info />
              </div>
              <span className="text-[13px] lg:text-base font-normal lg:font-semibold mr-[10px]">برای استفاده از صرافی ارز هشت در گوشی های ios  میتوانید از طریق سایت اقدام کنید.</span>
            </div>
            <div className="hidden lg:flex flex-col  self-center">
              <h1 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center">
              برخی امکانات اپلیکیشن صرافی ارز هشت        </h1>
            </div>
      
      
            <div className="grid gap-x-[14px] gap-y-5 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  w-full grid-flow-row-dense mt-10 lg:mt-[82px]">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col  rounded-[20px] bg-third justify-center items-center py-5 lg:py-0  w-full mx-auto h-[338px] max-w-[390px]"
                >
                  <div className="h-[102px] w-[102px] mb-6">
                    <card.icon />
                  </div>
                  <span className="text-[27px] font-semibold text-seventh mb-2">
                    {card.title}
                  </span>
                  <span className="text-base font-normal text-sixth opacity-50 text-center px-8" style={{ lineHeight: "35px" }}>
                    {card.description}
                  </span>
                </div>
              ))}
            </div>
      
      
          </div>
    </div>

  )
}
