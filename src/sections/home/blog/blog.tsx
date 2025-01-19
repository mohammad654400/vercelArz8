import React from "react";
import Image from "next/image";
import hamester from "@/assets/images/hamester.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import LongArrow from "@/assets/icons/arrrow/long-arrow";

export default function Blog() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex gap-2 w-full justify-between items-center">
        <div className="font-bold text-[10px] md:text-3xl hidden md:block">
          بلاگ ارز هشت
        </div>
        <div className="px-4 border-secondary border flex justify-center items-center text-[10px] md:text-sm py-[10px] md:py-3  bg-fifth rounded-lg text-nowrap overflow-hidden">
          اطلاعیه ارز هشت درمورد نحوه توزیع توکن های هدیه همستر اکنون در کانال
          تلگرام قرار گرفته همین حالا به کانال مراجعه کنید.
        </div>
        <button className="flex gap-2  items-center w-[146px] h-[35px] md:h-[50px] justify-center bg-primary rounded-2xl text-foreground  text-[8px] md:text-[16px]">
          <p className="flex text-white ">
            <p className="hidden md:block"> مقالات </p>
            <p className="text-[12px]"> بیشتر</p>
          </p>
          <span className="text-white">
            <ArrowLeft />
          </span>
        </button>
      </div>

      {/* Scrollable Cards Section */}
      <div className="py-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`relative text-xs bg-background rounded-lg w-[277px] h-[286px] transition-all duration-300 ${
                index >= 1 ? "hidden sm:block" : "mx-auto"
              }`}
            >
              <Image
                className="mb-5 rounded-lg"
                alt="coin"
                src={hamester}
                width={276}
                height={180}
              />
              <p className="text-sm text-wrap text-justify font-bold">
                بهترین کیف پول همستر کامبت برای کاربران ایرانی
              </p>
              <div className="flex justify-between items-center py-4">
                <div className="border-[1px] border-foreground px-3 py-2 rounded-xl">
                  ایردراپ ها
                </div>
                <div className="text-primary font-bold">ادامه مطلب...</div>
              </div>
              <div className="md:hidden absolute top-20 -left-8 text-foreground ">
                <LongArrow/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
