import Arrow from "@/assets/icons/arrrow/arrow";
import React from "react";
import SubMenu from "./modal/subMenu";
import OtherServices from "./otherServices";
import Link from "next/link";

export default function Menu() {
  return (
    <nav   className="flex justify-center items-start gap-[30px] pr-9 h-full text-[14px] " role="menu">
      <div className="flex justify-center items-center h-full gap-2  group cursor-pointer " role="menuitem">
        <p className="group-hover:text-primary "> قیمت ارز های دیجیتال</p>
        <div className="group-hover:text-primary group-hover:rotate-180 duration-300 cursor-pointer">
          <Arrow />
        </div>
        <div className="hidden group-hover:block absolute top-[75px] right-[229px] delay-700">
          <SubMenu />
        </div>
      </div>
      <div className="flex justify-center items-center  h-full hover:text-primary cursor-pointer" role="menuitem">
       <Link href='/price-cryptocurrencies/BTC' aria-label="خرید و فروش آنی">
        خرید و فروش آنی
       </Link>
      </div>
      <div className="group flex justify-center items-center  h-full hover:text-primary cursor-pointer" role="menuitem">
        <Link href="/faq" aria-label="سوالات متداول">سوالات متداول</Link>
      </div>
      <div className="flex justify-center items-center w-[80]  h-full hover:text-primary cursor-pointer pr-" role="menuitem">
        <Link href="/job" aria-label="فرصت های شغلی">فرصت های شغلی</Link>
      </div>
      <div className="relative flex justify-center items-center h-full  group cursor-pointer" role="menuitem">
        <p className="hover:text-primary"> سایر خدمات</p>
        <div className="mr-3 group-hover:text-primary group-hover:rotate-180 duration-300 cursor-pointer">
          <Arrow />
        </div>
        <div className="hidden group-hover:block">
          <OtherServices />
        </div>
      </div>
      <div className="group flex justify-center items-center  h-full hover:text-primary cursor-pointer " role="menuitem">
        <Link href="https://arz8.com/blog" aria-label="بلاگ">بلاگ</Link>
      </div>
    </nav>
  );
}
