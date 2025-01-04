import Search from "@/assets/icons/search";
import React from "react";
import Category from "./category";
import LivePriceTable from "@/components/livePriceTable";

export default function Coin() {
  return (
    <div className="bg-background dark:bg-[#3C3B41] pt-20 ">
      <div className="flex flex-col justify-center bg-[#242428] dark:bg-[#242428] items-center w-full h-[296]  ">
        <div className="w-full flex flex-col items-center  text-white pt-8 ">
          <h1 className="text-lg">قیمت لحظه ای ارز های دیحیتال</h1>
          <p className="text-[10px]">
            در این صفحه، قیمت لحظه‌ای و بروزترین تغییرات ارزهای دیجیتال محبوب را
            مشاهده کنید. برای یافتن ارز مورد نظرتان نام، نماد،... ارز دیجیتال را
            جستجو کنید.
          </p>

          <div className="relative p-5">
            <input
              className="px-12 py-3 rounded-lg bg-[#3C3B41] border-primary border-2 outline-none"
              type="text"
            />
            <span className="w-10 h-10 absolute left-[25px] top-[26px]  bg-primary rounded-lg flex justify-center items-center">
              <div className="w-8 h-8">
              <Search />
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-[120px] py-[30px]">
        <div className="flex justify-between">
          <Category />
          <Category />
          <Category />
        </div>
        <div>
          <LivePriceTable/>
        </div>
      </div>
    </div>
  );
}
