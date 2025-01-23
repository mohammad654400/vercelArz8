import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import MobileIcon from "@/assets/icons/mobile";
import Ring from "@/assets/icons/ring";
import BannerSlider from "@/components/slider/banner-slider/banners-slider";
import CryptoSlider from "@/components/slider/crypto-slider/crypto-slider";
import React from "react";

export default function MainTop() {
  return (
    <div>
      <div className="flex flex-wrap text-sm justify-center pt-28 mt-2 gap-8 lg:justify-between">
        <div className="flex flex-col  md:justify-center w-[489px] gap-6">
          <h1 className="text-[25px] md:text-[40px] font-bold mx-auto md:mx-0">
            با خیال راحت معامله کنید،
          </h1>
          <p >
            خرید و فروش بیش از{" "}
            <span className="text-primary text-3xl font-bold">1300</span>{" "}
            ارزدیجیتال در صرافی ارزهشت
          </p>
          <p className="mx-auto text-sm md:text-lg md:mx-0  opacity-50">
            در سریع ترین زمان ممکن ثبت نام کنید.
          </p>
          <div className="relative  ">
            <span className="absolute top-4 right-4">
              <MobileIcon />
            </span>
            <input
              maxLength={11}
              typeof="number"
              placeholder="شماره موبایل خود را وارد کنید..."
              className="px-4 pr-12 w-full h-16 bg-third dark:border-secondary border-2 rounded-xl outline-none text-[20px] placeholder:text-[15px]"
              type="text"
            />
            <button className="absolute left-[5px] top-1/2 transform -translate-y-1/2 text-lg md:text-xl rounded-xl text-white bg-primary py-3 px-3 md:px-6">
              شروع کنید
            </button>
          </div>
        </div>
        <div>
          <BannerSlider />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center  mt-8 rounded-xl py-2 w-full bg-[#FFFFFF] dark:bg-[#242428] text-[9px] md:text-sm ">
        <div className="flex gap-2 items-center md:gap-2">
          <div className="pr-5">
            <Ring />
          </div>
          <span>ارز ترامپ بروزرسانی شد.</span>
          <button className="h-[18px] w-[37px] text-xs mr-2 bg-[#FFCAC9] text-[#F00500] rounded-2xl">
            جدید
          </button>
        </div>
        <div className="flex gap-2 items-center pl-5 cursor-pointer md:gap-2">
          <p className="text-xs">مشاهده تمام اعلانات</p>
          <div className="w-4 h-4">
            <ArrowLeft />
          </div>

        </div>
      </div>
      <div className="w-full h-[2px] bg-[#ADADAD80] dark:bg-[#242428] mt-5"></div>
      <div className="w-full mt-4 z-30 ">
        <div>
          <CryptoSlider />
        </div>
      </div>
    </div>
  );
}
