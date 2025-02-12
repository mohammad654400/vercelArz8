import MultiplyIcon from "@/assets/icons/multiply";
import Accordion from "./accordion";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SideBar({ close }: { close: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10); // انیمیشن را فعال می‌کند
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => close(), 500); // صبر کردن تا انیمیشن بسته شدن کامل شود
  };

  return (
    <>
      {/* پس‌زمینه محو با انیمیشن */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-[#ADADAD80] dark:bg-[#24242880] z-40 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      ></div>

      {/* سایدبار با انیمیشن باز و بسته شدن */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-60 bg-background rounded-tl-3xl rounded-bl-3xl shadow-xl transform transition-all duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="fixed flex top-0 right-0 z-50 h-full xl:hidden w-60 text-xs">
          <div className="right-0 px-6 py-2 sm:py-3 top-0 w-full h-full bg-background rounded-tl-3xl rounded-bl-3xl">
            <div className="flex justify-between">
              <div className="text-xl pt-2">منو</div>
              <div onClick={handleClose} className="cursor-pointer relative right-3">
                <MultiplyIcon />
              </div>
            </div>
            <div className="mt-4 z-50 flex flex-col gap-4">
              <Link href="/">
                <h1>منوی اصلی</h1>
              </Link>
              <Accordion title="قیمت ارزهای دیجیتال">
                <div className="w-full rounded-xl bg-secondary py-3 pr-4 hover:bg-[#FFF6DD] hover:border-[#FFC107] transition-all">
                  <Link onClick={handleClose} href="/coins/BTC">
                    خرید و فروش سریع
                  </Link>
                </div>

                <div className="w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  <Link href="/coins">ارز های جدید</Link>
                </div>

                <div className="w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  <Link onClick={handleClose} href="/coins">
                    لیست همه ارز ها
                  </Link>
                </div>
              </Accordion>
              <Link href="/coins/BTC">
                <p className="pb-3">خرید و فروش انی </p>
              </Link>
              <Link onClick={handleClose} href="/faq">
                <p>سوالات متداول</p>
              </Link>
              <Accordion title="سایر خدمات">
                <div className="flex justify-between w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  <Link onClick={handleClose} href="/wheel-luck">
                    گردونه شانس
                  </Link>
                  <div className="w-7 -rotate-90 flex justify-center items-center text-[10px] h-auto bg-[#F00500] rounded-3xl">
                    جدید
                  </div>
                </div>
                <div className="w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  کسب درامد
                </div>
                <div className="w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  کارت هدیه
                </div>
                <div className="w-full rounded-xl bg-secondary py-3 pr-4 transition-all">
                  تخفیفات
                </div>
              </Accordion>
              <Link href="/job">
                <p>فرصت های شغلی</p>
              </Link>
              <Link className="pt-2" onClick={handleClose} href="https://arz8.com/blog">
                <p>بلاگ</p>
              </Link>
              <Link
                href="https://app.arz8.com/auth/login"
                className="mt-5 sm:mt-10 w-full bg-primary text-sm sm:text-xl font-semibold py-1 leading-7 sm:leading-10 text-white rounded-[9.85px] sm:rounded-2xl text-center transition-all"
              >
                ورود / عضویت
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
