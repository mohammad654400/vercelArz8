import React, { useState } from "react";
import Phone from "@/assets/icons/footer/phone";
import Fax from "@/assets/icons/footer/fax";
import TownyFour from "@/assets/icons/footer/TownyFour";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import Link from "next/link";

export default function DropdownMenu() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section: any) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg ">
      <div className="border-b border-gray-300">
        <button
          onClick={() => toggleSection("links")}
          className="flex justify-between w-full items-center text-right  text-[16px] font-bold py-2"
        >
          لینک‌های مفید
          <span className="text-primary text-xl">
            {openSection === "links" ?
              <div className="text-white w-5 h-5"><ArrowUp /></div> :
              <div className="text-white w-5 h-5"><ArrowDown /></div>
            }
          </span>
        </button>
        {openSection === "links" && (
          <ul className="mt-2 pl-4 text-[14px]  flex flex-col gap-4 cursor-pointer">
            <Link href="/coins/BTC">خرید و فروش ارزدیجیتال<li className="hover:text-primary"></li></Link>
            <Link href="/download"> دانلود اپلیکیشن<li className="hover:text-primary"></li></Link>
            <Link href="/coin"> قیمت لحظه‌ای ارزها  <li className="hover:text-primary"></li></Link>
            <Link href="https://arz8.com/blog/">وبلاگ <li className="hover:text-primary"></li></Link>
            <Link href="/coin">گردونه شانس <li className="hover:text-primary mb-3"></li></Link>
          </ul>
        )}
      </div>

      <div className="border-b border-gray-300">
        <button
          onClick={() => toggleSection("guide")}
          className="flex justify-between w-full items-center text-right  text-[16px] font-bold py-2"
        >
          راهنمای صرافی
          <span className="text-primary text-xl">
            {openSection === "guide" ?
              <div className="text-white w-5 h-5"><ArrowUp /></div> :
              <div className="text-white w-5 h-5"><ArrowDown /></div>
            }
          </span>
        </button>
        {openSection === "guide" && (
          <ul className="mt-2 pl-4 text-[14px]  flex flex-col gap-4 cursor-pointer">
            <Link href="/faq"> <li className="hover:text-primary"> اموزش های صرافی</li></Link>
            <Link href="/about"><li className="hover:text-primary">درباره ما</li></Link>
            <Link href="/contact-us"> <li className="hover:text-primary">تماس با ما</li></Link>
            <Link href="https://app.arz8.com/support"> <li className="hover:text-primary">ارسال تیکت پشتیبانی</li></Link>
            <Link href="/rules"> <li className="hover:text-primary">قوانین و مقررات</li></Link>
            <Link href="/fee"> <li className="hover:text-primary mb-3">سطوح کاربری</li></Link>
          </ul>
        )}
      </div>

      <div className="border-b border-gray-300">
        <button
          onClick={() => toggleSection("contact")}
          className="flex justify-between w-full items-center text-right text-[16px] font-bold py-2"
        >
          اطلاعات تماس
          <span className="text-primary text-xl">
            {openSection === "contact" ?
              <div className="text-white w-5 h-5"><ArrowUp /></div> :
              <div className="text-white w-5 h-5"><ArrowDown /></div>
            }
          </span>
        </button>
        {openSection === "contact" && (
          <ul className="mt-2 pl-4 text-[14px]  flex flex-col gap-4 cursor-pointer">
            <li className="flex items-center gap-2">
              <Phone /> 021-284299
            </li>
            <li className="flex items-center gap-2">
              <Fax /> 021-91035288
            </li>
            <li className="flex items-center gap-2 hover:text-primary mb-3">
              <TownyFour /> پشتیبانی آنلاین
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
