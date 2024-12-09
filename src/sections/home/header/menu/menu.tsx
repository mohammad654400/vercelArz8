import Arrow from "@/assets/icons/arrow";
import React from "react";
import SubMenu from "./modal/subMenu";
import OtherServices from "./otherServices";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-start items-start gap-7 pr-7 h-full w-full ">
      <div className="flex justify-center items-center h-full w-[80]  gap-2 duration-300 group cursor-pointer">
        <p className="group-hover:text-primary"> قیمت ارز های دیجیتال</p>
        <div className="group-hover:text-primary group-hover:rotate-180 duration-300 cursor-pointer">
          <Arrow />
        </div>
        <div className="hidden group-hover:block absolute top-[130px] right-[229px]">
          <SubMenu />
        </div>
      </div>

      <div className="flex justify-center items-center  h-full hover:text-primary duration-500 cursor-pointer">
        خرید و فروش آنی
      </div>
      <div className="group flex justify-center items-center  h-full hover:text-primary duration-500 cursor-pointer">
        <Link href="/faq">سوالات متداول</Link>
      </div>
      <div className="relative flex justify-center  h-full  items-center gap-2 group cursor-pointer">
        <p className="hover:text-primary"> سایر خدمات</p>
        <div className="group group-hover:rotate-180 group-hover:text-primary duration-300 cursor-pointer">
          <Arrow />
        </div>
        <div className="hidden group-hover:block">
          <OtherServices />
        </div>
      </div>
      <div className="flex justify-center items-center  h-full hover:text-primary duration-500 cursor-pointer">
        فرصت های شغلی
      </div>
    </div>
  );
}
