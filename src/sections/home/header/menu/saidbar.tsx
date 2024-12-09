import MultiplyIcon from "@/assets/icons/multiply";
import React from "react";

export default function SaidBar({close}:any) {
  return (
    <div className="absolute flex top-0 right-0 z-50 w-full h-full xl:hidden">
      <div className="bg-background right-0 top-0 w-[160%] md:w-[70%] lg:w-[60%] h-full rounded-tl-3xl rounded-bl-3xl">
        <div className="flex justify-between px-3 py-4">
          <div className="text-xl pt-2 pr-2">منو </div>
          <div onClick={close} className="cursor-pointer"><MultiplyIcon/></div>
        </div>
        <div>
          <p>صفحه اصلی</p>
          <div>قیمت ارز های دیجیتال</div>
          <div>خرید و فروش آنی</div>
          <div>سوالات متداول</div>
          <div>سایر خدمات</div>
          <div>فرصت های شغلی</div>
        </div>
      </div>
      <div onClick={close} className="bg-slate-700 opacity-50 w-full h-full"></div>
    </div>
  );
}
