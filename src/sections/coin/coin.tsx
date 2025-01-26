"use client";
import Search from "@/assets/icons/search";
import React, { useState, useRef } from "react";
import Category from "./category";
import LivePriceTable from "@/components/live-price-table";
import MoreDetails from "@/components/more-details";
import Suggestion from "./Suggestion";
import SecondCategory from "./secondCategory";

const data = {
  firstTitle: "قیمت و لیست",
  secondTitle: " کامل ارزهای دیجیتال",
  text: `خرید و فروش ارز دیجیتال با صرافی ارز هشت: سریع، امن و مطمئن
به صرافی ارز هشت خوش آمدید! جایی که خرید و فروش ارزهای دیجیتال به ساده‌ترین و امن‌ترین شکل ممکن انجام می‌شود. ما در صرافی ارز هشت، بستری حرفه‌ای، سریع و کاربرپسند برای معاملات ارزهای دیجیتال فراهم کرده‌ایم تا شما بدون هیچ دغدغه‌ای به سرمایه‌گذاری در دنیای رمزارزها بپردازید.
چرا صرافی ارز هشت؟
امنیت بالا: اطلاعات و دارایی‌های شما با استفاده از جدیدترین فناوری‌های امنیتی محافظت می‌شود.
پشتیبانی 24/7: تیم پشتیبانی حرفه‌ای ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شما است.
تنوع رمزارزها: خرید و فروش محبوب‌ترین ارزهای دیجیتال مانند بیت‌کوین، اتریوم، داگز، نات کوین، تون کوین و ده‌ها رمزارز دیگر.
کارمزد مناسب: با ارائه کارمزدی رقابتی، هزینه‌های شما در معاملات کاهش می‌یابد.
رابط کاربری آسان: حتی اگر تازه‌کار هستید، می‌توانید به راحتی از خدمات ما استفاده کنید.
خدمات ما
خرید و فروش آسان: تنها با چند کلیک، ارز دیجیتال مورد نظر خود را بخرید یا بفروشید.
کیف پول اختصاصی: کیف پول امن و اختصاصی برای ذخیره ارزهای دیجیتال شما.
آموزش و راهنمایی: مقالات و ویدئوهای آموزشی برای تازه‌کارها و حرفه‌ای‌ها.
معاملات پیشرفته: ابزارهای حرفه‌ای برای تحلیل و معامله ارزهای دیجیتال.
شروع کنید!
با ثبت‌نام در صرافی ارز هشت، سفری آسان و امن به دنیای ارزهای دیجیتال را آغاز کنید. ما همراه شما هستیم تا به بهترین شکل از فرصت‌های سرمایه‌گذاری در این بازار نوظهور بهره‌مند شوید.
صرافی ارز هشت؛ انتخاب هوشمندانه برای خرید و فروش ارزهای دیجیتال.
با ما در تماس باشید و همین حالا وارد دنیای ارز دیجیتال شوید!`,
};

export default function Coin() {
  const [sugesstions, setSugesstions] = useState(false);
  const [value, setValue] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(true);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.trim() !== "") {
      setSugesstions(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchRef?.current) {
      if (e.key === "Escape") {
        setSugesstions(false);
        searchRef?.current.blur();
      }
    }
  };

  return (
    <div className="bg-background dark:bg-[#3C3B41] pt-20 ">
      <div className="flex flex-col justify-center bg-[#242428] dark:bg-[#242428] items-center w-full h-[296]">
        <div className="w-full flex flex-col items-center text-white pt-8">
          <h1 className="text-[20px] md:text-3xl ">
            قیمت لحظه ای ارز های دیحیتال
          </h1>
          <p className="text-xs sm:text-sm pt-5 font-normal text-center w-[330px] sm:w-[477px] md:w-[575px] !leading-6 sm:!leading-10 ">
            در این صفحه، قیمت لحظه‌ای و بروزترین تغییرات ارزهای دیجیتال محبوب را
            مشاهده کنید. برای یافتن ارز مورد نظرتان نام، نماد،... ارز دیجیتال را
            جستجو کنید
          </p>
          <div className="relative p-5 ">
            <input
              onChange={handleChange}
              value={value}
              className="w-[308px] h-9 md:w-[546px] pr-5 md:h-16 rounded-2xl bg-[#3C3B41] border-primary border sm:border-2 text-lg md:text-xl outline-none placeholder:text-[13px] sm:placeholder:text-[15px]"
              type="text"
              placeholder="نام، نماد،...ارز"
              onFocus={() => setSugesstions(true)}
              onKeyUp={(e) => handleKeyDown(e)}
              ref={searchRef}
            />
            <div className="w-full h-full">
              {sugesstions && (
                <Suggestion setSugesstions={setSugesstions} value={value} />
              )}
            </div>
            <span className="w-6 h-6 md:w-[54px] md:h-[54px] absolute left-7 sm:left-[25px] top-[26px] sm:top-[25px] bg-primary rounded-[9.4px] md:rounded-2xl flex justify-center items-center">
              <div className="w-4 h-4 md:w-8 md:h-8">
                <Search />
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="base-style">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="hidden xl:block">
              <Category open={open} setOpen={setOpen} />
            </div>
            <div >
              <Category open={open} setOpen={setOpen} />
            </div>
            <div className="hidden xl:block">
              <Category open={open} setOpen={setOpen} />
            </div>
            <div className="block xl:hidden">
              <SecondCategory open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className="mt-12 border border-[#ADADAD80] dark:border-[#ADADAD80] rounded-xl">
            <LivePriceTable />
          </div>
        </div>
        <MoreDetails
          firstTitle={data.firstTitle}
          secondTitle={data.secondTitle}
          text={data.text}
        />
      </div>
    </div>
  );
}
