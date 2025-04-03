"use client";
import Search from "@/assets/icons/search";
import React, { useState, useRef, useMemo, useEffect } from "react";
import Category from "./category";
import LivePriceTable from "@/components/live-price-table";
import Suggestion from "./Suggestion";
import SecondCategory from "./secondCategory";
import useGetData from "@/hooks/useGetData";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowUp from "@/assets/icons/arrrow/arrow-top";


interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

export default function Coin() {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [symbolsQuery, setSymbolsQuery] = useState<string[]>([]);
  const [sugesstions, setSugesstions] = useState(false);
  const [value, setValue] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { data: infoData } = useGetData('info');
  const { data: maxData } = useGetData("cryptocurrencies", 60000, {
    limit: 3,
    page: 1,
    sort: "profit",
  });

  const { data: minData } = useGetData("cryptocurrencies", 60000, {
    limit: 3,
    page: 1,
    sort: "loss",
  });

  const { data: newData } = useGetData("cryptocurrencies", 60000, {
    limit: 3,
    page: 1,
    sort: "new",
  });
  const { data: searchData } = useGetData("cryptocurrencies", 60000, {
    limit: 5,
    page: 1,
    sort: "default",
    search: searchQuery,
    symbols: symbolsQuery
  });

  const infoMap = useMemo(() => {
    const map: Record<string, CryptocurrencyInfo> = {};
    infoData?.cryptocurrency.forEach((info: CryptocurrencyInfo) => {
      map[info.symbol] = info;
    })
    return map;
  }, [infoData]);

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
            برای یافتن ارز مورد نظرتان نام، نماد،... ارز دیجیتال را جستجو کنید.
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
                <Suggestion
                  setSuggestions={setSugesstions}
                  value={value}
                  setSearchQuery={setSearchQuery}
                  setSymbolsQuery={setSymbolsQuery}
                  searchData={searchData?.lists}
                  infoMap={infoMap}
                  symbolsQuery={symbolsQuery}
                />
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
              <Category open={open} setOpen={setOpen} title={"بیشترین رشد"} data={maxData?.lists} infoMap={infoMap} />
            </div>
            <div >
              <Category open={open} setOpen={setOpen} title={"بیشترین ضرر"} data={minData?.lists} infoMap={infoMap} />
            </div>
            <div className="hidden xl:block">

              <Category open={open} setOpen={setOpen} title={"جدیدترین ارز های ما"} data={newData?.lists} infoMap={infoMap} />
            </div>
            <div className="block xl:hidden">
              <SecondCategory open={open} setOpen={setOpen} title={"جدیدترین ارز های ما"} data={newData?.lists} infoMap={infoMap} />
            </div>
          </div>
          <div className="mt-12 border border-[#ADADAD80] dark:border-[#ADADAD80] rounded-xl">
            <LivePriceTable infoMap={infoMap} />
          </div>
        </div>
        <section className="w-full mx-auto">
          <h2 className="mt-8 mb-4 text-[17px] sm:text-[33px] font-bold">
            <span className="text-primary">{"قیمت و لیست کامل ارزهای دیجیتال"}</span>
            {" "}
            {"خرید و فروش در صرافی ارز هشت"}
          </h2>

          <div
            ref={contentRef}
            className="relative overflow-hidden transition-all duration-700 ease-in-out !leading-10 text-justify text-sm sm:text-base"
            style={{
              maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "160px",
            }}
          >
            <p>به صرافی ارز هشت خوش آمدید! ما در اینجا تجربه‌ای سریع، امن و حرفه‌ای از خرید و فروش ارزهای دیجیتال را برای شما فراهم کرده‌ایم. اگر به دنبال یک پلتفرم مطمئن برای انجام معاملات رمزارزها هستید، جای درستی آمده‌اید! با ما همراه باشید تا با ویژگی‌های منحصربه‌فرد و خدمات پیشرفته‌ی ما بیشتر آشنا شوید.</p>

            <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">چرا صرافی ارز هشت؟</h3>
            <ul className="space-y-1">
              <li>امنیت بالا: ما از پیشرفته‌ترین فناوری‌های امنیتی و پروتکل‌های رمزنگاری برای محافظت از اطلاعات و دارایی‌های شما استفاده می‌کنیم. تمامی تراکنش‌ها با استفاده از پروتکل‌های SSL و احراز هویت دو مرحله‌ای (2FA) انجام می‌شوند تا سطح حداکثری امنیت را برای شما فراهم کنیم. امنیت اطلاعات کاربران برای ما در اولویت قرار دارد و به‌طور مداوم سیستم‌های امنیتی ما به‌روزرسانی می‌شوند</li>
              <li>پشتیبانی ۲۴/۷: هر زمان که به کمک نیاز داشتید، تیم پشتیبانی حرفه‌ای ما به‌صورت شبانه‌روزی آماده پاسخگویی به شماست. ما متعهد هستیم که در هر زمان از شبانه‌روز مشکلات شما را حل کرده و به سوالات شما پاسخ دهیم. شما می‌توانید از طریق چت آنلاین، ایمیل و تماس تلفنی با ما در ارتباط باشید.</li>
              <li>تنوع گسترده ارزهای دیجیتال: از محبوب‌ترین رمزارزها مانند بیت‌کوین (BTC) و اتریوم (ETH) گرفته تا رمزارزهای نوظهور مانند تون کوین (TON) و نات کوین (NOT)، همه در دسترس شما هستند. ما به طور مداوم ارزهای جدید را به پلتفرم اضافه می‌کنیم تا شما به گسترده‌ترین انتخاب‌ها دسترسی داشته باشید. مهم نیست که به دنبال ارزهای معروف هستید یا پروژه‌های نوظهور، ما همه‌ی نیازهای شما را پوشش می‌دهیم.</li>
              <li>کارمزد رقابتی: ما با ارائه‌ی نرخ‌های کارمزد منصفانه، هزینه‌های شما را در معاملات کاهش می‌دهیم و سودآوری شما را به حداکثر می‌رسانیم. شفافیت در کارمزدها یکی از اصول ماست و شما همیشه قبل از انجام معامله از میزان دقیق کارمزد مطلع خواهید شد. در صرافی ارز هشت خبری از کارمزدهای پنهان نیست.</li>
              <li>رابط کاربری ساده و کاربرپسند: طراحی پلتفرم ما به گونه‌ای است که چه تازه‌کار باشید و چه حرفه‌ای، بتوانید به راحتی معاملات خود را انجام دهید. داشبورد ما به گونه‌ای طراحی شده که اطلاعات مهم مانند قیمت‌ها، موجودی حساب و تاریخچه معاملات به آسانی در دسترس شما باشد. حتی اگر اولین بار است که وارد دنیای ارزهای دیجیتال می‌شوید، می‌توانید بدون پیچیدگی و سردرگمی خرید و فروش کنید.</li>
            </ul>
            <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">خدمات ما در صرافی ارز هشت</h3>
            <p>اگر تازه‌کار هستید و می‌خواهید خرید ارز دیجیتال را شروع کنید، مراحل زیر را دنبال کنید:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>خرید و فروش سریع و آسان: با چند کلیک ساده، می‌توانید انواع ارزهای دیجیتال را خریداری یا به فروش برسانید. روند انجام معامله در پلتفرم ما کاملاً خودکار بوده و در کمترین زمان ممکن انجام می‌شود. ما به شما این امکان را می‌دهیم که به صورت آنی و با بهترین نرخ‌های بازار معامله کنید.</li>
              <li>کیف پول اختصاصی و امن: ما یک کیف پول دیجیتال اختصاصی برای شما فراهم کرده‌ایم که امنیت دارایی‌های شما را تضمین می‌کند. این کیف پول از جدیدترین پروتکل‌های امنیتی بهره می‌برد و به شما امکان مدیریت آسان دارایی‌ها را می‌دهد. همچنین می‌توانید دارایی‌های خود را به کیف پول‌های خارجی منتقل کرده یا از آن‌ها برای معاملات روزانه استفاده کنید.</li>
              <li>معاملات پیشرفته: برای کاربران حرفه‌ای، ابزارهای تحلیل بازار و معاملات پیشرفته‌ی متعددی ارائه شده است. شما می‌توانید از انواع سفارشات مانند سفارشات محدود (Limit Order)، سفارشات آنی (Market Order) و سفارشات شرطی (Stop-Loss) بهره‌مند شوید. این ابزارها به شما کمک می‌کنند تا استراتژی‌های معاملاتی خود را به بهترین شکل اجرا کنید و ریسک خود را مدیریت نمایید.</li>
              <li>آموزش و راهنمایی جامع: با مقالات و ویدئوهای آموزشی ما، همواره به‌روز باشید و مهارت‌های خود را افزایش دهید. ما به آموزش اهمیت زیادی می‌دهیم و محتوای آموزشی ما شامل آموزش مفاهیم پایه‌ای ارزهای دیجیتال، تحلیل تکنیکال و فاندامنتال، مدیریت ریسک و نکات امنیتی است. با ما همیشه یک قدم جلوتر باشید.</li>
              <li>طرح‌های تشویقی و پاداش: با شرکت در برنامه‌های ویژه‌ی ما، از تخفیف‌های کارمزد، پاداش‌های معرف و طرح‌های وفاداری بهره‌مند شوید. ما برای کاربران فعال و وفادار خود، مزایای متعددی در نظر گرفته‌ایم تا از فعالیت در صرافی ارز هشت بیشترین سود را ببرید.</li>
            </ol>
            <h3 className="mt-2 sm:mt-4  mb-1 sm:mb-2  font-semibold text-base sm:text-lg">شروع کنید!</h3>
            <p>قدم اول برای ورود به دنیای ارزهای دیجیتال، ثبت‌نام سریع و آسان در صرافی ارز هشت است. کافیست در چند دقیقه حساب کاربری خود را ایجاد کرده و به جمع هزاران کاربر ما بپیوندید.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>ثبت‌نام رایگان و بدون پیچیدگی: فرآیند ثبت‌نام در صرافی ارز هشت کاملاً رایگان بوده و تنها با چند کلیک انجام می‌شود.</li>
              <li>احراز هویت سریع و امن: برای افزایش امنیت و جلوگیری از سوءاستفاده، فرآیند احراز هویت ما سریع و مطابق با استانداردهای جهانی است.</li>
              <li>دسترسی فوری به بازارهای جهانی: پس از تکمیل ثبت‌نام و احراز هویت، می‌توانید بلافاصله خرید و فروش ارزهای دیجیتال را آغاز کنید.</li>
            </ul>


            <h3 className="mt-2 sm:mt-4 mb-1 sm:mb-2 font-semibold text-base sm:text-lg">چرا همین امروز به ما بپیوندید؟</h3>
            <p>بازار ارزهای دیجیتال پر از فرصت‌های هیجان‌انگیز است و ما در صرافی ارز هشت، در کنار شما هستیم تا از این فرصت‌ها به بهترین شکل استفاده کنید. با زیرساخت‌های مدرن، خدمات بی‌نظیر و پشتیبانی مستمر، ما همراه شما هستیم تا تجربه‌ای متفاوت از معاملات رمزارزها را داشته باشید.</p>
            <p>با صرافی ارز هشت، خرید و فروش ارزهای دیجیتال نه‌تنها ساده‌تر، بلکه ایمن‌تر و مقرون‌به‌صرفه‌تر از همیشه است. همین امروز شروع کنید و از فرصت‌های بی‌نظیر بازار ارزهای دیجیتال بهره‌مند شوید!</p>

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
      </div>
    </div>
  );
}