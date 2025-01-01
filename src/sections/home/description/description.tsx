"use client";
import BigArrow from "@/assets/icons/bigarrow";
import MobileIcon from "@/assets/icons/mobile";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import React, { useState } from "react";

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full mx-auto">
      <h1 className="mt-8 mb-4 text-2xl">
        <span className="text-primary">خرید و فروش سریع</span> ارزهای دیجیتال با
        ارز هشت{" "}
      </h1>
      <div
        className={`relative overflow-hidden transition-all duration-100 ${
          isExpanded ? "max-h-full" : "max-h-20"
        }`}
      >
        <p className="leading-10 text-justify">
          خرید و فروش ارز دیجیتال با صرافی ارز هشت: سریع، امن و مطمئن به صرافی
          ارز هشت خوش آمدید! جایی که خرید و فروش ارزهای دیجیتال به ساده‌ترین و
          امن‌ترین شکل ممکن انجام می‌شود. ما در صرافی ارز هشت، بستری حرفه‌ای،
          سریع و کاربرپسند برای معاملات ارزهای دیجیتال فراهم کرده‌ایم تا شما
          بدون هیچ دغدغه‌ای به سرمایه‌گذاری در دنیای رمزارزها بپردازید. چرا
          صرافی ارز هشت؟ امنیت بالا: اطلاعات و دارایی‌های شما با استفاده از
          جدیدترین فناوری‌های امنیتی محافظت می‌شود. پشتیبانی 24/7: تیم پشتیبانی
          حرفه‌ای ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شما است.
          تنوع رمزارزها: خرید و فروش محبوب‌ترین ارزهای دیجیتال مانند بیت‌کوین،
          اتریوم، داگز، نات کوین، تون کوین و ده‌ها رمزارز دیگر. کارمزد مناسب: با
          ارائه کارمزدی رقابتی، هزینه‌های شما در معاملات کاهش می‌یابد. رابط
          کاربری آسان: حتی اگر تازه‌کار هستید، می‌توانید به راحتی از خدمات ما
          استفاده کنید. خدمات ما خرید و فروش آسان: تنها با چند کلیک، ارز دیجیتال
          مورد نظر خود را بخرید یا بفروشید. کیف پول اختصاصی: کیف پول امن و
          اختصاصی برای ذخیره ارزهای دیجیتال شما. آموزش و راهنمایی: مقالات و
          ویدئوهای آموزشی برای تازه‌کارها و حرفه‌ای‌ها. معاملات پیشرفته:
          ابزارهای حرفه‌ای برای تحلیل و معامله ارزهای دیجیتال. شروع کنید! با
          ثبت‌نام در صرافی ارز هشت، سفری آسان و امن به دنیای ارزهای دیجیتال را
          آغاز کنید. ما همراه شما هستیم تا به بهترین شکل از فرصت‌های
          سرمایه‌گذاری در این بازار نوظهور بهره‌مند شوید. صرافی ارز هشت؛ انتخاب
          هوشمندانه برای خرید و فروش ارزهای دیجیتال. با ما در تماس باشید و همین
          حالا وارد دنیای ارز دیجیتال شوید!
        </p>

        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#ffffff] to-[#3C3B4100] dark:from-[#3C3B41] dark:to-[#3C3B4100] pointer-events-none"></div>
        )}
      </div>
      <div>
        <button
          onClick={toggleExpand}
          className="w-full mt-2 hover:text-primary focus:outline-none flex items-center justify-center gap-2 bg-opacity-0"
        >
          {isExpanded ? <ArrowUp /> : <ArrowDown />}
          {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      </div>
      <div className="w-full mt-8   h-[266] bg-[#242428] text-background rounded-2xl rounded-tr-none">
        <div className="flex flex-col gap-8 justify-center items-center py-8">
          <div className="dark:text-white text-2xl font-bold">
            بدون معطلی ثبت نام و احراز هویت کن!
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-primary">
            <p className="text-2xl">ثبت نام</p>
            <span className="-rotate-90 py-8 sm:py-0 sm:rotate-0">
              <BigArrow />
            </span>
           <p className="text-2xl"> احراز هویت</p>
            <span className="-rotate-90 py-8 sm:py-0 sm:rotate-0">
              <BigArrow />
            </span>
           <p className="text-2xl">
           ارز دلخواه خودتون رو بخرید
           </p>
          </div>
          <div className="relative">
            <span className="absolute right-2 top-2">
              <MobileIcon />
            </span>
            <input
            
              placeholder="شماره موبایل خود را وارد کنید"
              className="w-full md:w-[400px] text-white h-12 bg-[#282624] rounded-xl outline-none pr-10 border border-[#ADADAD80] placeholder:text-[10px] md:placeholder:text-sm placeholder:text-gray-500"
              type="text"
            />
            <div>
              <button className="absolute left-1 top-1 px-4 text-for cursor-pointer rounded-lg bg-primary py-[12px] text-xs">
                <p className="text-white">شروع کنید</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
