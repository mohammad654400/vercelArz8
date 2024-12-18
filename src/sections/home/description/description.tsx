"use client";
import BigArrow from "@/assets/icons/bigarrow";
import MobileIcon from "@/assets/icons/mobile";
import React, { useState } from "react";

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full mx-auto  ">
      <h1 className="my-8 text-lg ">
        <span className="text-primary">خرید و فروش سریع</span> ارزهای دیجیتال با
        ارز هشت{" "}
      </h1>
      <div
        className={`relative overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-full" : "max-h-20"
        }`}
      >
        <p>
        ارز هشت یک پلتفرم آنلاین معاملاتی است که به شما امکان خرید، فروش و مدیریت انواع ارزهای دیجیتال را می‌دهد. با استفاده از ارز هشت، شما می‌توانید به سادگی و امنیت کامل، دارایی‌های دیجیتال خود را معامله کنید و وارد دنیای هیجان‌انگیز ارزهای دیجیتال شوید.
        ارز دیجیتال یا رمز ارز نوعی پول الکترونیکی است که به صورت مجازی وجود دارد و از رمزنگاری برای تأمین امنیت تراکنش‌ها و کنترل ایجاد واحدهای جدید استفاده می‌کند. به عبارت ساده‌تر، ارز دیجیتال پولی است که به صورت آنلاین و بدون نیاز به واسطه‌های مالی مانند بانک‌ها قابل انتقال است.
        </p>

        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent bg-gradient-to-t dark:from-gray-500 to-transparent pointer-events-none"></div>
        )}
      </div>
      <button
        onClick={toggleExpand}
        className="w-full mt-2 hover:text-primary focus:outline-none"
      >
        {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
      </button>
      <div className="w-full mt-8 bg-foreground dark:bg-[#242428] h-[266] text-background rounded-2xl">
        <div className="flex flex-col gap-8 justify-center items-center py-8">
          <div className="dark:text-white">بدون معطلی ثبت نام و احراز هویت کن!</div>
          <div className="flex flex-col  md:flex-row items-center  gap-4 text-primary ">
            ثبت نام 
            <span className="-rotate-90 py-8 sm:py-0 sm:rotate-0"><BigArrow /></span>
            احراز هویت
            <span className="-rotate-90 py-8 sm:py-0 sm:rotate-0"><BigArrow /></span>
            ارز دلخواه خودتون رو بخرید{" "}
          </div>
          <div className="relative">
            <span className="absolute right-2 top-2">
              <MobileIcon />
            </span>
            <input
              placeholder="شماره موبایل خود را وارد کنید"
              className="w-full md:w-[400px] h-12 bg-foreground rounded-xl outline-none pr-10 border-2 border-gray-400 placeholder:text-xs md:placeholder:text-sm placeholder:text-gray-500"
              type="text"
            />
            <div>
              <button className="absolute left-1 top-1 px-2 cursor-pointer rounded-lg bg-primary py-[10px] text-sm  ">
                شروع کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
