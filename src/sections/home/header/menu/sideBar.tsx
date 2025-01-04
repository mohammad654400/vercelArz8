import MultiplyIcon from "@/assets/icons/multiply";
import Accordion from "./accordion";
import React from "react";
import Link from "next/link";

export default function SideBar({ close }: any) {
  return (
    <div className="fixed flex top-0 right-0 z-50 w-full h-full xl:hidden  text-xs ">
      <div className="bg-secondary z-50  w-[249px] md:w-[70%] lg:w-[60%] ">
        <div className="bg-background right-0 px-6 py-8 top-0 w-[160%] md:w-[70%] lg:w-[60%] h-full rounded-tl-3xl rounded-bl-3xl">
          <div className="flex justify-between ">
            <div className="text-xl pt-2 ">منو</div>
            <div onClick={close} className="cursor-pointer relative right-3">
              <MultiplyIcon />
            </div>
          </div>
          <div className="mt-4 z-50 flex flex-col gap-4  ">
            <h1>منوی اصلی</h1>
            <Accordion title="قیمت ارزهای دیجیتال">
              <div className="w-full rounded-xl bg-secondary py-3 pr-4 hover:bg-[#FFC107] ">
                خرید و فروش سریع
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                ارز های جدید
              </div>
              <div className="w-full rounded-xl bg-secondary py-3 pr-4">
                لیست همه ارز ها
              </div>
            </Accordion>
            <p className="pb-3">خرید و فروش انی </p>
            <Link href="/faq">
              <p>سوالات متداول</p>
            </Link>
            <Accordion title="سایر خدمات">
              <div className="flex justify-between w-full rounded-xl bg-secondary py-3 pr-4">
                گردونه شانس
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
