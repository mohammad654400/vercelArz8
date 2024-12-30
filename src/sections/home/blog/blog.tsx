import React from "react";
import Image from "next/image";
import hamester from "@/assets/images/hamester.png";

export default function Blog() {
  return (
    <div>
      {/* Header Section */}
      <div className="flex gap-2 w-full justify-between items-center">
        <div className="font-bold text-[10px] md:text-3xl hidden md:block">بلاگ ارز هشت</div>
        <div className="px-2 flex justify-center items-center text-[10px] md:text-sm py-2 dark:text-black bg-[#F6F6F6] rounded-lg text-nowrap overflow-hidden">
          اطلاعیه ارز هشت درمورد نحوه توزیع توکن های هدیه همستر اکنون در کانال
          تلگرام قرار گرفته همین حالا به کانال مراجعه کنید.
        </div>
        <button className="px-6 py-2 bg-primary rounded-2xl text-background  text-[10px] md:text-sm">
          مطالعه بیشتر{" "}
        </button>
      </div>

      {/* Scrollable Cards Section */}
      <div className="overflow-x-auto whitespace-nowrap py-4 ">
        <div className="flex justify-between gap-4">
          {/* Single Card */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="text-xs  bg-background rounded-lg  py-[30px]"
            >
              <Image
                className="pb-7 rounded-lg"
                alt="coin"
                src={hamester}
                width={280}
                height={174}
              />
              <p>بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
              <div className="flex justify-between items-center py-7 ">
                <div className="border-2 border-[#3C3B41] px-3 py-2 rounded-xl">ایردراپ ها</div>
                <div className="text-primary">ادامه مطلب...</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
