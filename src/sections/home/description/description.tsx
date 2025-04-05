"use client";
import BigArrow from "@/assets/icons/bigarrow";
import MobileIcon from "@/assets/icons/mobile";
import React, { useRef, useState } from "react";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowUp from "@/assets/icons/arrrow/arrow-top"; 
import Link from "next/link";


const Description = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-full mx-auto">
      <section className="w-full mx-auto">
        <h2 className="mt-8 mb-4 text-[17px] sm:text-[33px] font-bold">
          <span className="text-primary">{"خرید ارز دیجیتال از صرافی ارز هشت"}</span>
          {" "}
          {"سریع، امن و آسان"}
        </h2>

        <div
          ref={contentRef}
          className="relative overflow-hidden transition-all duration-700 ease-in-out !leading-10 text-justify text-sm sm:text-base"
          style={{
            maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "160px",
          }}
        >
          <p>{"خرید ارز دیجیتال این روزها به یکی از پرطرفدارترین روش‌های سرمایه‌گذاری تبدیل شده است. با رشد سریع بازار رمزارزها، انتخاب یک صرافی امن و معتبر برای خرید و فروش ارزهای دیجیتال اهمیت زیادی دارد. صرافی ارز هشت با ارائه خدماتی سریع، مطمئن و با کاربری آسان، بهترین گزینه برای افرادی است که به دنبال معامله امن و پرسود در دنیای ارزهای دیجیتال هستند."}</p>
          <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">چرا صرافی ارز هشت بهترین انتخاب برای خرید ارز دیجیتال است؟</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>تنوع گسترده ارزهای دیجیتال: در صرافی ارز هشت می‌توانید به بیش از 1600 ارز دیجیتال محبوب و نوظهور دسترسی داشته باشید. از خرید بیت‌کوین (BTC) و اتریوم (ETH) گرفته تا آلتکوین‌های کمتر شناخته‌شده</li>
            <li>امنیت بالا: امنیت دارایی‌های شما اولویت ماست. با استفاده از جدیدترین فناوری‌های رمزگذاری و تأیید هویت دو مرحله‌ای (2FA)، تمامی تراکنش‌ها در محیطی امن انجام می‌شود.</li>
            <li>احراز هویت سریع و آسان: فرآیند ثبت‌نام و احراز هویت در ارز هشت به‌سادگی انجام می‌شود تا در کمترین زمان ممکن بتوانید خرید ارز دیجیتال را آغاز کنید.</li>
            <li>پشتیبانی 24 ساعته: تیم پشتیبانی حرفه‌ای ما به صورت 24/7 آماده پاسخگویی به سوالات و رفع مشکلات شماست.</li>
            <li>کارمزدهای رقابتی: در صرافی ارز هشت، کارمزدهای معاملاتی به‌صورت شفاف و رقابتی تعیین شده است تا بتوانید با خیال راحت و بدون هزینه‌های پنهان خرید و فروش کنید.</li>
          </ol>
          <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">آموزش خرید ارز دیجیتال در صرافی ارز هشت</h3>
          <p>اگر تازه‌کار هستید و می‌خواهید خرید ارز دیجیتال را شروع کنید، مراحل زیر را دنبال کنید:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>ثبت‌نام و احراز هویت: ابتدا در صرافی ارز هشت ثبت‌نام کرده و اطلاعات خود را جهت احراز هویت ارسال کنید. این فرآیند کمتر از 15 دقیقه زمان می‌برد.</li>
            <li>واریز ریالی: پس از تایید هویت، کیف پول ریالی خود را شارژ کرده و آماده خرید شوید.</li>
            <li>انتخاب ارز دیجیتال: از میان ارزهای موجود، ارز مورد نظر خود را انتخاب کنید. مثلاً بیت‌کوین (BTC)، اتریوم (ETH) یا تتر (USDT).</li>
            <li>ثبت سفارش: میزان و قیمت مدنظر خود را وارد کرده و سفارش خرید را ثبت کنید.</li>
            <li>دریافت ارز: پس از تکمیل تراکنش، ارز دیجیتال به کیف پول شما واریز می‌شود و می‌توانید هر زمان که بخواهید آن را برداشت کنید.</li>
          </ol>
          <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">مزایای خرید ارز دیجیتال از صرافی ارز هشت</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>سرعت بالا در انجام معاملات: تراکنش‌ها در ارز هشت با کمترین تاخیر انجام می‌شوند.</li>
            <li>قیمت لحظه‌ای و دقیق: دسترسی به قیمت‌های به‌روز و واقعی برای انجام معاملات بهتر.</li>
            <li>کیف پول اختصاصی: امکان ذخیره امن دارایی‌ها در کیف پول داخلی صرافی.</li>
            <li>انعطاف‌پذیری در روش‌های پرداخت: واریز و برداشت به روش‌های متنوع و آسان.</li>
          </ul>


          <h3 className="mt-2 sm:mt-4 mb-1 sm:mb-2 font-semibold text-base sm:text-lg">خرید آسان و سریع ارز دیجیتال</h3>
          <p>ما در ارز هشت تلاش کرده‌ایم تا فرآیند خرید ارز دیجیتال را تا حد امکان ساده کنیم. با ثبت‌نام سریع و رابط کاربری روان، هر کاربری – از مبتدی تا حرفه‌ای – می‌تواند به راحتی ارز دیجیتال خریداری کند.</p>

          <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">چرا باید همین حالا خرید ارز دیجیتال را شروع کنید؟</h3>
          <p>بازار رمزارزها به سرعت در حال رشد است و فرصت‌های فراوانی برای کسب سود وجود دارد. با ورود زودهنگام به این بازار، شانس بیشتری برای بهره‌مندی از رشد قیمتی و افزایش سرمایه خود خواهید داشت. صرافی ارز هشت این امکان را فراهم کرده تا بدون دغدغه و با اطمینان کامل وارد دنیای ارزهای دیجیتال شوید.</p>

          <h3  className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">سوالات متداول درباره خرید ارز دیجیتال از ارز هشت</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>آیا برای خرید ارز دیجیتال از ارز هشت نیاز به احراز هویت دارم؟ بله، برای حفظ امنیت معاملات، احراز هویت در ارز هشت الزامی است و فرآیندی سریع و ساده دارد.</li>
            <li>حداقل مبلغ برای خرید ارز دیجیتال چقدر است؟ حداقل مبلغ بسته به نوع ارز دیجیتال متفاوت است. می‌توانید با مبالغ کم نیز خرید خود را آغاز کنید.</li>
            <li>آیا امکان برداشت ارز دیجیتال به کیف پول شخصی وجود دارد؟ بله، پس از تکمیل فرآیند خرید، می‌توانید ارز دیجیتال خود را به کیف پول شخصی انتقال دهید.</li>
            <li>آیا ارز هشت کارمزد اضافی دریافت می‌کند؟ خیر، تمامی کارمزدها به‌صورت شفاف اعلام می‌شوند و هیچ هزینه پنهانی وجود ندارد.</li>
          </ol>

          <h3  className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">نتیجه‌گیری</h3>
          <p>اگر به دنبال یک راه امن، سریع و آسان برای خرید ارز دیجیتال هستید، صرافی ارز هشت بهترین گزینه برای شماست. با امکانات پیشرفته، پشتیبانی قوی و فرآیند ساده، می‌توانید به راحتی وارد دنیای رمزارزها شوید. همین حالا ثبت‌نام کنید و اولین خرید خود را انجام دهید!</p>


          {/* Gradient Overlay */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#ffffff] to-[#3C3B4100] dark:from-[#3C3B41] dark:to-[#3C3B4100] pointer-events-none transition-opacity duration-700 opacity-100"></div>
          )}
        </div>

        <div>
          <button
            onClick={toggleExpand}
            className="w-full hover:text-primary duration-300 focus:outline-none flex items-center justify-center gap-2"
          >
            {isExpanded ? (
              <>
                <span className="w-5 h-5">
                  <ArrowUp />
                </span>
                <span className="text-sm sm:text-lg">نمایش کمتر</span>
              </>
            ) : (
              <>
                <span className="w-5 h-5">
                  <ArrowDown />
                </span>
                <span className="text-sm sm:text-lg">نمایش بیشتر</span>
              </>
            )}
          </button>
        </div>
      </section>
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
              <Link href={phoneNumber ? `https://app.arz8.com/auth/register?mobile=${phoneNumber}` : "https://app.arz8.com/auth/register"}>
                <button className="absolute left-2 top-1/2 -translate-y-1/2 px-4 text-for cursor-pointer rounded-lg bg-primary py-[10px] text-xs hover:px-[18px] hover:py-[11px]">
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
