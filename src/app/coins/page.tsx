import React from "react";

export default function CoinsPage() {
  return (
    <div className="flex flex-col justify-center bg-foreground items-center w-full h-[296]  ">
      <div className="w-full flex flex-col items-center  text-white pt-8 ">
        <h1 className="text-lg">قیمت لحظه ای ارز های دیحیتال</h1>
        <p className="text-[10px]">
          در این صفحه، قیمت لحظه‌ای و بروزترین تغییرات ارزهای دیجیتال محبوب را
          مشاهده کنید. برای یافتن ارز مورد نظرتان نام، نماد،... ارز دیجیتال را
          جستجو کنید.
        </p>
        <div className="p-5">
        <input className="px-12 py-3 rounded-lg" type="text" />
        </div>
      </div>
    </div>
  );
}
