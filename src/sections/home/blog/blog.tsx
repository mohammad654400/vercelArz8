import React from "react";
import Image from "next/image";
import hamester from "@/assets/images/hamester.png";
export default function Blog() {
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="text-lg font-bold">بلاگ ارز هشت</div>
        <div className="px-4 text-sm py-2 dark:text-black bg-[#F6F6F6] rounded-lg">
          اطلاعیه ارز هشت درمورد نحوه توزیع توکن های هدیه همستر اکنون در کانال
          تلگرام قرار گرفته همین حالا به کانال مراجعه کنید.
        </div>
        <button className="px-6 py-2 bg-primary rounded-xl">
          مطالعه بیشتر{" "}
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-[277px] h-auto py-[30px]">
          <Image className="pb-7 rounded-lg" alt="coin" src={hamester} width={280} height={174} />
          <p>بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
          <div className="flex justify-between items-center py-7">
          <div className="border px-3 py-2 rounded-xl">ایردراپ ها</div>
          <div className="text-primary">ادامه مطلب...</div>
          </div>
        </div>
        <div className="w-[277px] h-auto py-[30px]">
          <Image className="pb-7 rounded-lg" alt="coin" src={hamester} width={280} height={174} />
          <p>بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
          <div className="flex justify-between items-center py-7">
          <div className="border px-3 py-2 rounded-xl">ایردراپ ها</div>
          <div className="text-primary">ادامه مطلب...</div>
          </div>
        </div>
        <div className="w-[277px] h-auto py-[30px]">
          <Image className="pb-7 rounded-lg" alt="coin" src={hamester} width={280} height={174} />
          <p>بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
          <div className="flex justify-between items-center py-7">
          <div className="border px-3 py-2 rounded-xl">ایردراپ ها</div>
          <div className="text-primary">ادامه مطلب...</div>
          </div>
        </div>
        <div className="w-[277px] h-auto py-[30px]">
          <Image className="pb-7 rounded-lg" alt="coin" src={hamester} width={280} height={174} />
          <p>بهترین کیف پول همستر کامبت برای کاربران ایرانی</p>
          <div className="flex justify-between items-center py-7">
          <div className="border px-3 py-2 rounded-xl">ایردراپ ها</div>
          <div className="text-primary">ادامه مطلب...</div>
          </div>
        </div>
         
      </div>
    </div>
  );
}
