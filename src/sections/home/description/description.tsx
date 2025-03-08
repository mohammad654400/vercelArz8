"use client";
import BigArrow from "@/assets/icons/bigarrow";
import MobileIcon from "@/assets/icons/mobile";
import React, { useState } from "react";
import MoreDetails from "@/components/more-details";
import Link from "next/link";
const data = {
  firstTitle: "خرید و فروش سریع ",
  secondTitle: "ارزهای دیجیتال باارز هشت",
  text: `خرید و فروش ارز دیجیتال با صرافی ارز هشت: سریع، امن و مطمئن به صرافی
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
          حالا وارد دنیای ارز دیجیتال شوید!`,
};
const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
  
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    };
  
  return (
    <div className="w-full mx-auto">
      <MoreDetails
        firstTitle={data.firstTitle}
        secondTitle={data.secondTitle}
        text={data.text}
      />
      <div className="w-full  mt-[100px] h-[266] bg-[#242428] text-background rounded-2xl rounded-tr-none">
        <div className="flex flex-col gap-8 justify-center items-center py-8">
          <div className="dark:text-white text-[18px] md:text-2xl font-bold">
            بدون معطلی ثبت نام و احراز هویت کن!
          </div>
          <div className="flex flex-col  md:flex-row items-center gap-4 text-primary">
            <p className=" text-sm md:text-2xl">ثبت نام</p>
            <span className=" -rotate-90 py-8 sm:py-0 sm:rotate-0">
              <BigArrow />
            </span>
            <p className="text-sm md:text-2xl"> احراز هویت</p>
            <span className="-rotate-90 py-8 sm:py-0 sm:rotate-0">
              <BigArrow />
            </span>
            <p className="text-sm md:text-2xl">ارز دلخواه خودتون رو بخرید</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="relative w-[300px] md:w-[400px]">
              {/* Mobile Icon */}
              <span className="absolute text-white right-3 top-1/2 -translate-y-1/2 text-foreground z-20 w-[18.9px]  h-[24.5px] sm:w-[22.8px] sm:h-[29.7px]">
                <MobileIcon />
              </span>

              {/* Input Field */}
              <input
              dir="rtl"
                placeholder="شماره موبایل خود را وارد کنید"
                className="w-full text-white h-12 bg-[#282624] rounded-xl outline-none pr-10 pl-24 border border-[#ADADAD80] placeholder:text-[10px] md:placeholder:text-sm placeholder:text-gray-500"
                maxLength={11}
                minLength={11}
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  const input = e.target as HTMLInputElement;
                  input.value = input.value.replace(/\D/g, '');
                }}
              />

              {/* Start Button */}
              <Link href={phoneNumber ? `https://app.arz8.com/auth/register?mobile=${phoneNumber}` : "#"}>
              <button className="absolute left-2 top-1/2 -translate-y-1/2 px-4 text-for cursor-pointer rounded-lg bg-primary py-[10px] text-xs">
                <p className="text-white">شروع کنید</p>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
