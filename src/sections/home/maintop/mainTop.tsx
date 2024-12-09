import ArrowLeft from "@/assets/icons/arrowLeft";
import Ring from "@/assets/icons/ring";
import BannerSlider from "@/components/slider/bannerslider/bannerSlider";
import CryptoSlider from "@/components/slider/cryptoslider/cryptoSlider";
import React from "react";

export default function MainTop() {
  return (
    <div>
      <div className="flex flex-wrap justify-center pt-16 lg:justify-between ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">با خیال راحت معامله کنید،</h1>
          <p>
            خرید و فروش بیش از{" "}
            {<span className="text-primary text-2xl text-bold">1500</span>}{" "}
            ارزدیجیتال در صرافی ارزهشت
          </p>
          <p>در سریع ترین زمان ممکن ثبت نام کنید.</p>
          <div className="relative w-96">
            <input
              placeholder="شماره موبایل خود را وارد کنید ..."
              className=" pr-4 w-96 h-16 bg-background border-2 rounded-xl outline-none "
              type="text"
            />
            <button className="absolute left-2 top-2 rounded-xl text-white  bg-primary py-3 px-4 ">
              شروع کنید
            </button>
          </div>
        </div>
        <div>
          <BannerSlider />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 mt-8 rounded-xl py-2 w-full bg-background">
       <div className="flex gap-4 items-center">
       <div className="pr-5">
          <Ring/>
        </div>
        <span>
        ارز ترامپ بروزرسانی شد.
        </span>
        <button className="px-2 py-1 bg-[#FFCAC9] text-[#F00500] rounded-2xl">
          جدید
        </button>
       </div>
       <div className="flex items-center  gap-4 pl-5 cursor-pointer">
        <p>مشاهده تمام اعلانات</p>
        <ArrowLeft/>
       </div>

       </div>
       <div className="w-full mt-8">  
          <div>
            <CryptoSlider/>
          </div>
      </div>
    </div>
  );
}
