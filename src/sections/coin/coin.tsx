'use client'
import Search from "@/assets/icons/search";
import React from "react";
import Category from "./category";
import LivePriceTable from "@/components/live-price-table";

export default function Coin() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="bg-background dark:bg-[#3C3B41] pt-20 ">
      <div className=" flex flex-col justify-center bg-[#242428] dark:bg-[#242428] items-center w-full h-[296]  ">
        <div className="w-full flex flex-col items-center  text-white pt-8 ">
          <h1 className="text-3xl">قیمت لحظه ای ارز های دیحیتال</h1>
          <p className="text-sm text-justify pt-5 ">
          در این صفحه، قیمت لحظه‌ای و بروزترین تغییرات ارزهای دیجیتال محبوب را مشاهده کنید. برای
          </p>
          <p className=" text-sm pt-2  text-justify">
          یافتن ارز مورد نظرتان نام، نماد،... ارز دیجیتال را جستجو کنید
          </p>
          <div className="relative p-5">
            <input
              onChange={(e) => console.log(e.target.value)}
              className="w-[546px] pr-5 h-16 rounded-lg bg-[#3C3B41] border-primary border-2 text-xl outline-none"
              type="text"
            />
            <span className="w-[54px] h-[54px] absolute left-[25px] top-[25px]  bg-primary rounded-lg flex justify-center items-center">
              <div className="w-8 h-8">
                <Search />
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="base-style ">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <Category />
            <Category />
            <Category />
          </div>
          <div className="mt-12 border border-[#ADADAD80] dark:border-[#ADADAD80] rounded-xl">
            <LivePriceTable />
          </div>
        </div>
      </div>
    </div>
  );
}
