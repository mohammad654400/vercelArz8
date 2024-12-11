import React, { useState } from "react";
import Phone from "@/assets/icons/footer/phone";
import Fax from "@/assets/icons/footer/fax";
import TownyFour from "@/assets/icons/footer/TownyFour";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";

export default function DropdownMenu() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
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
            {openSection === "links" ? <ArrowUp /> : <ArrowDown />}
          </span>
        </button>
        {openSection === "links" && (
          <ul className="mt-2 pl-4 text-[14px]  flex flex-col gap-4 cursor-pointer">
            <li className="hover:text-primary">خرید و فروش ارزدیجیتال</li>
            <li className="hover:text-primary">دانلود اپلیکیشن</li>
            <li className="hover:text-primary">قیمت لحظه‌ای ارزها</li>
            <li className="hover:text-primary">وبلاگ</li>
            <li className="hover:text-primary">گردونه شانس</li>
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
            {openSection === "guide" ? <ArrowUp /> : <ArrowDown />}
          </span>
        </button>
        {openSection === "guide" && (
          <ul className="mt-2 pl-4 text-[14px]  flex flex-col gap-4 cursor-pointer">
            <li className="hover:text-primary">آموزش‌های صرافی</li>
            <li className="hover:text-primary">درباره ما</li>
            <li className="hover:text-primary">تماس با ما</li>
            <li className="hover:text-primary">ارسال تیکت پشتیبانی</li>
            <li className="hover:text-primary">قوانین و مقررات</li>
            <li className="hover:text-primary">سطوح کاربری</li>
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
            {openSection === "contact" ? <ArrowUp /> : <ArrowDown />}
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
            <li className="flex items-center gap-2 hover:text-primary">
              <TownyFour /> پشتیبانی آنلاین
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
