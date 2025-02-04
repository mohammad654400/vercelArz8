import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import MobileIcon from "@/assets/icons/mobile";
import Ring from "@/assets/icons/ring";
import BannerSlider from "@/components/slider/banner-slider/banners-slider";
import CryptoSlider from "@/components/slider/crypto-slider/crypto-slider";
import Link from "next/link";
import React, { useRef } from "react";

export default function MainTop({ homeData, infoData }: any) {

  const phoneNumberRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <div className="flex flex-wrap text-sm justify-center pt-28 mt-2 gap-8 lg:justify-between">
        <div className="flex flex-col  md:justify-center w-[489px] gap-3 sm:gap-6">
          <h1 className="text-[25px] md:text-[40px] font-bold mx-auto md:mx-0">
            با خیال راحت معامله کنید،
          </h1>
          <p className="text-[13.23px] sm:text-base font-semibold">
            خرید و فروش بیش از{" "}
            <span className="text-primary text-xl sm:text-3xl font-semibold">1300</span>{" "}
            ارزدیجیتال در صرافی ارزهشت
          </p>
          <p className="mx-auto text-sm md:text-lg md:mx-0  opacity-50">
            در سریع ترین زمان ممکن ثبت نام کنید.
          </p>
          <div className="relative flex items-center">
            <span className="absolute top-4 right-4 w-[18.9px]  h-[24.5px] sm:w-[22.8px] sm:h-[29.7px] ">
              <MobileIcon />
            </span>
            <input
              maxLength={11}
              typeof="number"
              ref={phoneNumberRef}
              placeholder="شماره موبایل خود را وارد کنید"
              className="px-4 pr-12 w-full h-[53px] sm:h-16 bg-third dark:border-secondary border-2 rounded-[14px] sm:rounded-[17px] outline-none text-[20px] placeholder:text-[13px] sm:placeholder:text-[15px]"
              type="text"
            />
            <Link href={`https://app.arz8.com/auth/login?phone=${phoneNumberRef.current?.value}`}>
              <button className="absolute left-[5px] top-1/2 transform -translate-y-1/2 text-base sm:text-lg md:text-xl rounded-xl text-white bg-primary py-2 md:py-3 px-3 sm:px-2 md:px-6">
                شروع کنید
              </button>
            </Link>
          </div>
        </div>
        <div>
          <BannerSlider />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center  mt-8 rounded-[5.9px] sm:rounded-xl py-2 w-full bg-[#F6F6F6] dark:bg-[#242428] ">
        <div className="flex gap-2 items-center md:gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mr-5 flex self-center items-center ">
            <Ring />
          </div>
          <span className="text-xs">ارز ترامپ بروزرسانی شد.</span>
          <button className="h-[10.5px] w-[21.7px] sm:h-[18px] sm:w-[37px] text-[7px] sm:text-xs mr-2 bg-[#FFCAC9] text-[#F00500] rounded-2xl">
            جدید
          </button>
        </div>
        <div className="flex gap-2 items-center pl-5 cursor-pointer md:gap-2">
          <p className="text-[10px] sm:text-xs">مشاهده تمام اعلانات</p>
          <div className="w-[9px] h-[9px] sm:w-4 sm:h-4">
            <ArrowLeft />
          </div>

        </div>
      </div>
      <div className="w-full h-[2px] bg-[#ADADAD80] dark:bg-[#242428] mt-5"></div>
      <div className="w-full mt-4 z-30 ">
        <div>
          <CryptoSlider homeData={homeData} infoData={infoData} />
        </div>
      </div>
    </div>
  );
}
