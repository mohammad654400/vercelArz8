import React from "react";
import Image from "next/image";
import Phone from "@/assets/images/downloadApp/phone.png";
import Android from "@/assets/icons/downloadApp/android";
import Myket from "@/assets/icons/downloadApp/miket";
import CafeBazar from "@/assets/icons/downloadApp/cafeBazar";
import Web from "@/assets/icons/downloadApp/web";
import WaveDivider from "@/assets/icons/waveDivider";
import BG from "@/assets/images/downloadApp/bg.png";

import Link from "next/link";

export default function BannerDownload({ showWaveDivider }: { showWaveDivider: boolean }) {
  return (
    <div className="w-full bg-[#242428] h-[697px] lg:h-[614px]" style={{ backgroundImage: `url(${BG.src})` }}>
      <div className="flex flex-col base-style h-full z-10" style={{ gap: "0px" }}>
        <div className="w-full h-full text-white text-center">
          <div className="w-full h-full justify-center items-center flex flex-col lg:flex-row">

            <div className="w-full   order-3 lg:order-1 h-full flex flex-col justify-center text-center lg:text-start lg:mt-0 mt-10">
              <div className="flex flex-col ">
                <h1 className="text-[26px] lg:text-[40px] font-extrabold">
                  دانلود اپلیکیشن صرافی ارزهشت
                </h1>
                <span className="text-xs lg:text-lg mt-2 font-bold">
                  با اپلیکیشن ارزهشت در یک صرافی تمام عیار معامله کنید.
                </span>
              </div>

              <ul className="gap-[19px] lg:gap-[30px] mt-[32px] mb-[43px] lg:mt-[76px] lg:mb-[74px] self-center lg:self-start text-start list-disc list-inside text-[13px]  lg:text-[21px] font-semibold">
                <li>دسترسی به بیش از 1600 ارز دیجیتال</li>
                <li className="my-4">پشتیبانی سریع و 24 ساعته</li>
                <li>احراز هویت سریع</li>
              </ul>
              <div className="flex w-full lg:justify-start justify-around ">
                <Link className="z-20" href={"https://cdn.arz8.com/application.apk"}><DownloadOption Icon={Android} label="دانلود مستقیم" /></Link>
                <Link className="z-20" href={""}><DownloadOption Icon={Web} label="وب اپلیکیشن" /> </Link>
                <Link className="z-20" href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={CafeBazar} label="کافه بازار" /> </Link>
                <Link className="z-20" href={"https://myket.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={Myket} label="مایکت" /> </Link>
              </div>
            </div>
            <div className="w-[215px] h-[278px] mt-10 lg:mt-[30]  lg:w-[413px] lg:h-[534px]  order-2 flex justify-center lg:justify-end  items-center ">
              <Image
                alt="نمایش اپلیکیشن روی تلفن همراه"
                src={Phone}
                width={413}
                height={534}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
        {showWaveDivider && (
        <div className="w-full flex justify-center text-[#242428] mt-[29px] lg:mt-[39px] ">
          <WaveDivider strokeColor="#FFFFFF" />
        </div>
        )}
      </div>
    </div>
  );
}

function DownloadOption({ Icon, label }: { Icon: React.FC; label: string }) {
  return (
    <div className="flex flex-col items-center ml-[28px] lg:ml-[37px]">
      <div className={`flex mb-6 lg:w-[55px]  lg:h-[55px] w-[41px] h-[41px]`}>
        <Icon />
      </div>
      <span className="text-[10px] lg:text-[13px] font-semibold">{label}</span>
    </div>
  );
}
