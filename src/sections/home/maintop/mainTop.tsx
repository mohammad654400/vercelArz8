import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import Ring from "@/assets/icons/ring";
import BannerSlider from "@/components/slider/bannerslider/bannerSlider";
import CryptoSlider from "@/components/slider/cryptoslider/cryptoSlider";
import React from "react";

export default function MainTop() {
  return (
    <div>
      <div className="flex flex-wrap text-sm justify-center pt-24 gap-8 lg:justify-between">
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          <h1 className="text-3xl font-bold mx-auto">با خیال راحت معامله کنید،</h1>
          <p className="mx-auto">
            خرید و فروش بیش از{" "}
            <span className="text-primary text-2xl font-bold">1500</span>{" "}
            ارزدیجیتال در صرافی ارزهشت
          </p>
          <p className="mx-auto opacity-50">در سریع ترین زمان ممکن ثبت نام کنید.</p>
          <div className="relative ">
            <input
              placeholder="شماره موبایل خود را وارد کنید ..."
              className="pr-4 pl-4 w-full h-16 bg-background border-2 rounded-xl outline-none"
              type="text"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-xl text-white bg-primary py-3 px-4">
              شروع کنید
            </button>
          </div>
        </div>
        <div>
          <BannerSlider />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center  mt-8 rounded-xl py-2 w-full bg-background text-[9px] md:text-sm ">
        <div className="flex  gap-2 items-center md:gap-4">
          <div className="pr-5">
            <Ring />
          </div>
          <span>ارز ترامپ بروزرسانی شد.</span>
          <button className="px-2 py-1 bg-[#FFCAC9] text-[#F00500] rounded-2xl">
            جدید
          </button>
        </div>
        <div className="flex gap-2 items-center pl-5 cursor-pointer md:gap-4">
          <p>مشاهده تمام اعلانات</p>
          <ArrowLeft />
        </div>
      </div>
      <div className="w-full mt-8 z-30 ">
        <div>
          <CryptoSlider />
        </div>
      </div>
    </div>
  );
}
