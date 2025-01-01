import React from "react";
import Image from "next/image";
import hamester from "@/assets/images/hamester.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";

export default function Blog() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex gap-2 w-full justify-between items-center">
        <div className="font-bold text-[10px] md:text-3xl hidden md:block">بلاگ ارز هشت</div>
        <div className="px-4 border-secondary border flex justify-center items-center text-[10px] md:text-sm py-3  bg-fifth rounded-lg text-nowrap overflow-hidden">
          اطلاعیه ارز هشت درمورد نحوه توزیع توکن های هدیه همستر اکنون در کانال
          تلگرام قرار گرفته همین حالا به کانال مراجعه کنید.
        </div>
        <button className="flex gap-2 items-center w-[146px] h-[50px] justify-center bg-primary rounded-2xl text-foreground  text-[10px] md:text-[16px]">
        مقالات بیشتر...{" "} <ArrowLeft/>
        </button>
      </div>

      {/* Scrollable Cards Section */}
      <div className="overflow-x-auto whitespace-nowrap py-4 ">
        <div className="flex justify-between gap-4">
          {/* Single Card */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="text-xs  bg-background rounded-lg w-[277px] h-[286px] "
            >
              <Image
                className="mb-5 rounded-lg "
                alt="coin"
                src={hamester}
                width={276}
                height={180}
              />
              <p className="text-sm text-wrap text-justify font-bold">بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
              <div className="flex justify-between items-center py-4 ">
                <div className="border-[1px] border-foreground px-3 py-2 rounded-xl">ایردراپ ها</div>
                <div className="text-primary font-bold">ادامه مطلب...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
