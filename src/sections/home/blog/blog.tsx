import React from "react";
import Image from "next/image";
import hamester from "@/assets/images/hamester.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import LongArrow from "@/assets/icons/arrrow/long-arrow";

export default function Blog() {
  return (
    <div className="flex flex-col gap-y-[14px] md:gap-y-[60px]">
      {/* Header Section */}
      <div className="flex  gap-y-5 w-full justify-between items-center flex-col xl:flex-row">
        <div className="font-bold text-lg md:text-4xl w-full ">
          <span className="flex justify-center xl:justify-start ">
            بلاگ ارز هشت
          </span>
        </div>
        <div className="flex w-full gap-x-10 justify-between">
          <div className="px-4 border-[#ADADAD80] dark:border-[#242428] border flex justify-center items-center text-[10px] md:text-sm font-semibold py-[10px]  bg-[#F6F6F6] dark:bg-[#302F34] rounded-[14px] text-nowrap overflow-hidden">
            اطلاعیه ارز هشت درمورد نحوه توزیع توکن های هدیه همستر اکنون در کانال
            تلگرام قرار گرفته همین حالا به کانال مراجعه کنید.
          </div>
          <button className="flex gap-2  items-center  px-4 h-[35px] md:h-[50px] justify-center bg-primary rounded-2xl text-foreground  text-[8px] md:text-[16px]">
            <p className="flex text-white gap-x-1">
              <p className="hidden md:flex text-base font-semibold">مقالات</p>
              <p className="text-[12px] md:text-base font-semibold">بیشتر...</p>
            </p>
            <span className="text-white w-3 h-3 md:w-6 md:h-6">
              <ArrowLeft />
            </span>
          </button>
        </div>

      </div>

      {/* Scrollable Cards Section */}
      <div className="flex justify-center">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={` text-xs bg-background rounded-lg w-[277px] h-[286px] transition-all duration-300 ${index >= 1 ? "hidden sm:block" : "mx-auto"
                }`}
            >
              <Image
                className=" rounded-3xl"
                alt="coin"
                src={hamester}
                width={276}
                height={180}
              />
              <p className="text-lg md:text-sm text-wrap text-justify font-bold leading-[38px] md:leading-[30px] py-2 md:py-[11px]">
                بهترین کیف پول همستر کامبت برای کاربران ایرانی
              </p>
              <div className="flex justify-between items-center ">
                <div className="border border-foreground px-2 py-1 rounded-[15px] text-sm leading-6">
                  ایردراپ ها
                </div>
                <div className="text-primary text-lg  md:text-base font-bold">ادامه مطلب...</div>
              </div>

            </div>
          ))}
          <div className=" absolute top-20 -left-10 w-[37px] h-[37px] text-foreground ">
            <LongArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
