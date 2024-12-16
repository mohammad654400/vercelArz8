import React from "react";
import Image from "next/image";
import Phone from "@/assets/images/downloadApp/phone.png";
import Android from "@/assets/icons/downloadApp/android";
import Myket from "@/assets/icons/downloadApp/miket";
import CafeBazar from "@/assets/icons/downloadApp/cafeBazar";
import Web from "@/assets/icons/downloadApp/web";
import WaveDivider from "@/assets/icons/waveDivider";

export default function Header() {
  const iconSize = "lg:w-12 lg:h-12 w-8 h-8";

  return (
    <div className="flex flex-col w-full lg:h-[590px] h-auto pt-20 mb-[30px]">
      <div className="bg-[#242428] w-full h-full text-white text-center py-12 px-5 lg:py-10 lg:px-32">
        <div className="w-full h-full justify-center items-center flex flex-col lg:flex-row">
        
          <div className="w-full lg:w-[55%] order-3 lg:order-1 h-full flex flex-col justify-center text-center lg:text-start lg:mt-0 mt-10">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
              دانلود اپلیکیشن صرافی ارزهشت
            </h1>
            <span className="text-base lg:text-lg font-bold mt-2">
              با اپلیکیشن ارزهشت در یک صرافی تمام عیار معامله کنید.
            </span>
            <ul className="self-center lg:self-start text-start list-disc  my-16 list-inside text-base sm:text-lg lg:text-xl font-semibold">
              <li>دسترسی به بیش از 1600 ارز دیجیتال</li>
              <li className="my-7">پشتیبانی سریع و 24 ساعته</li>
              <li>احراز هویت سریع</li>
            </ul>
            <div className="flex w-full lg:justify-start justify-around">
              <DownloadOption Icon={Android} label="دانلود مستقیم" />
              <DownloadOption Icon={Web} label="وب اپلیکیشن" />
              <DownloadOption Icon={CafeBazar} label="کافه بازار" />
              <DownloadOption Icon={Myket} label="مایکت" />
            </div>
          </div>
          <div className="w-full lg:w-[45%] h-full order-2 flex justify-center lg:justify-end items-center">
            <Image
              alt="نمایش اپلیکیشن روی تلفن همراه"
              src={Phone}
              width={400}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-[#242428] -mt-[1px]">
        <WaveDivider strokeColor="#FFFFFF" />
      </div>
    </div>
  );
}

function DownloadOption({ Icon, label }: { Icon: React.FC; label: string }) {
  const iconSize = "lg:w-12 lg:h-12 w-8 h-8";

  return (
    <div className="flex flex-col items-center w-[64px] lg:w-[86px] mx-1">
      <div className={`flex mb-6 ${iconSize}`}>
        <Icon />
      </div>
      <span className="text-[9.9px] lg:text-xs font-semibold">{label}</span>
    </div>
  );
}
