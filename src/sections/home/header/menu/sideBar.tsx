import MultiplyIcon from "@/assets/icons/multiply";
import Accordion from "./accordion";
import React from "react";
import Link from "next/link";

export default function SideBar({ close }: any) {
  return (
    <div className="fixed flex top-0 right-0 z-50 w-full h-full xl:hidden  text-xs  bg-[#ADADAD80] dark:bg-[#24242880] ">
      <div className=" z-50  w-full h-full max-w-96 min-w-60 overflow-hidden  rounded-tl-3xl rounded-bl-3xl bg-background ">
        <div className=" right-0 px-6 py-2 sm:py-3 top-0 w-full  h-full ">
          <div className="flex justify-between ">
            <div className="text-xl pt-2 ">منو</div>
            <div onClick={close} className="cursor-pointer relative right-3">
              <MultiplyIcon />
            </div>
          </div>
          <div className="mt-4 z-50 flex flex-col gap-4  ">
            <h1>منوی اصلی</h1>
            <Accordion title="قیمت ارزهای دیجیتال">
              <div className="w-full rounded-xl bg-secondary py-3 pr-4 !hover:bg-[#FFF6DD] !hover:border-[#FFC107]  ">
              <Link onClick={close} href='/coins/BTC'>
                خرید و فروش سریع
              </Link>
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                ارز های جدید
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
              <Link onClick={close} href='/coins'>
                لیست همه ارز ها
              </Link>
              </div>
            </Accordion>
            <p className="pb-3">خرید و فروش انی </p>
            <Link onClick={close} href="/faq">
              <p>سوالات متداول</p>
            </Link>
            <Accordion  title="سایر خدمات">
              
              <div className="flex justify-between w-full rounded-xl bg-secondary py-3 pr-4">
                <Link onClick={close} href='/wheel-luck'>
                گردونه شانس
                </Link>
                <div className="w-7 -rotate-90 flex justify-center items-center text-[10px]  h-auto  bg-[#F00500] rounded-3xl">جدید</div>
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                کسب درامد
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                کارت هدیه
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                تخفیفات
              </div>
            </Accordion>
            <Link href="/job">
              <p>فرصت های شغلی</p>
            </Link>

            <Link href="https://app.arz8.com/auth/login" className="mt-5 sm:mt-10 w-full bg-primary text-sm sm:text-xl font-semibold py-1 leading-7 sm:leading-10 text-white rounded-[9.85px] sm:rounded-2xl">ورود / عضویت</Link>
          </div>
        </div>
      </div>
      <div
        onClick={close}
        className="w-full h-full bg-foreground opacity-50"
      ></div>
    </div>
  );
}
