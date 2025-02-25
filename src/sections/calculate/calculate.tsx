"use client"
import React from "react";
import Transaction from "@/sections/home/transaction/transAction";
import Banner from "@/sections/home/banner/banner";
import useGetData from "@/hooks/useGetData";

export default function Calculate() {
  const { data: infoData, isLoading: infoLoading } = useGetData('info');
  const { data: homeData, isLoading: homeLoading } = useGetData('home', 60000);

  return (

    <>
      <header className="base-style pt-[77px] lg:pt-[187px] mb-4 lg:mb-[68px]">
        <div className="w-full flex justify-center">
          <h1 className="text-lg lg:text-[35px] pb-[10px] lg:pb-5 border-b-[2.67px] lg:border-b-[5px] border-primary">
            ماشین حساب ارز های دیجیتال
          </h1>
        </div>
      </header>


      <main>
        <section className="max-w-[750px] mx-auto ">
          <Transaction homeData={homeData?.calculator} infoData={infoData} header={false} showPrice={false} isLoading={infoLoading || homeLoading} />
        </section>

        <div className="mt-4 mb-10 lg:mt-[68px] lg:mb-[100px]">
          <Banner />
        </div>

        <section className="base-style">
          <div className="flex flex-col gap-1">
            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                ماشین حساب تبدیل قیمت ارزهای دیجیتال صرافی ارز هشت
              </h2>
              <p >
                ماشین حساب تبدیل قیمت ارزهای دیجیتال صرافی ارز هشت، ابزاری قدرتمند
                برای محاسبه قیمت رمز ارزها است که به شما این امکان را می‌دهد تا مقدار
                یک ارز دیجیتال را به ارز دیگری تبدیل کنید یا ارزش ریالی و دلاری آن
                را مشخص کنید. این ابزار به‌ویژه برای کاربران ایرانی طراحی شده و کمک
                می‌کند پیش از انجام معاملات، اطلاعات دقیقی درباره میزان سود و زیان
                خود به دست آورید.
              </p>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                مزایای استفاده از ماشین حساب ارز دیجیتال ارز هشت

              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li>تبدیل دقیق ارزها</li>
                <p>با استفاده از این ماشین حساب، می‌توانید به‌راحتی ارزهای دیجیتال مختلف را به یکدیگر تبدیل کنید. مثلاً متوجه شوید با فروش 1 بیت کوین، چه تعداد اتریوم دریافت خواهید کرد یا ارزش ریالی یک دوج‌کوین چقدر است.</p>
                <li>پشتیبانی از طیف گسترده ارزهای دیجیتال</li>
                <p>این ابزار از تعداد زیادی رمز ارز پشتیبانی می‌کند و به شما امکان می‌دهد آن‌ها را مستقیماً به یکدیگر تبدیل کنید، بدون نیاز به استفاده از ارزی واسطه.</p>
                <li>بروز بودن قیمت‌ها</li>
                <p>قیمت‌ها در ماشین حساب ارز دیجیتال ارز هشت به‌صورت لحظه‌ای به‌روزرسانی می‌شوند. با توجه به نوسانات شدید بازار ارزهای دیجیتال، این ویژگی تضمین می‌کند که محاسبات شما همیشه دقیق باشد.</p>
                <li>نمایش ارزش ریالی و دلاری</li>
                <p>یکی از ویژگی‌های کلیدی این ماشین حساب، امکان محاسبه قیمت رمز ارزها بر مبنای ریال و دلار است که برای کاربران ایرانی بسیار کاربردی است.</p>
                <li>بررسی سود و زیان پیش از معامله</li>
                <p>با استفاده از این ابزار، پیش از فروش یک ارز دیجیتال برای خرید ارز دیگر، می‌توانید مقدار دقیق ارز موردنیاز یا دریافتی را محاسبه کنید و در نتیجه تصمیم‌گیری بهتری داشته باشید.</p>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                ویژگی‌های منحصربه‌فرد ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li>محاسبه لحظه‌ای و دقیق: تمامی نرخ‌ها به‌صورت لحظه‌ای از بازارهای معتبر دریافت و نمایش داده می‌شوند.</li>
                <li>سادگی در استفاده: رابط کاربری آسان و محیط کاربرپسند، این ماشین حساب را برای افراد مبتدی و حرفه‌ای مناسب کرده است.</li>
                <li>پشتیبانی از تومان و دلار: کاربران ایرانی می‌توانند ارزش رمز ارزها را به تومان مشاهده کنند، درحالی‌که امکان محاسبه دلاری نیز وجود دارد.</li>
                <li>تبدیل مستقیم رمز ارزها: نیازی به استفاده از ارز واسطه نیست؛ می‌توانید رمز ارزها را مستقیماً به یکدیگر تبدیل کنید.</li>
                <li>پشتیبانی از ارزهای محبوب: این ابزار از ارزهای پرطرفداری مانند بیت کوین، اتریوم، تتر، ترون، کاردانو و بسیاری دیگر پشتیبانی می‌کند.</li>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                نحوه استفاده از ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li>انتخاب ارز مبنا و مقصد: </li>
                <p className="mr-2 lg:mr-4">در کادر اول، ارز مبنا (مثلاً بیت کوین) و در کادر دوم، ارز مقصد (مثلاً اتریوم) را انتخاب کنید</p>
                <li>وارد کردن مقدار:</li>
                <p className="mr-2 lg:mr-4">عدد موردنظر را در کادر مربوط به ارز مبنا وارد کنید. ماشین حساب، مقدار معادل در ارز مقصد را بلافاصله نمایش می‌دهد.</p>
                <li>مشاهده قیمت ریالی و دلاری:</li>
                <p className="mr-2 lg:mr-4">می‌توانید هم‌زمان قیمت لحظه‌ای ارز دیجیتال انتخابی را به تومان و دلار مشاهده کنید.</p>
              </ul>
              <p>چرا از ماشین حساب ارز هشت استفاده کنیم؟</p>
              <p>ماشین حساب تبدیل ارز دیجیتال در صرافی ارز هشت، ابزاری است که بر اساس قیمت‌های دقیق و به‌روز طراحی شده و مبنای محاسبات آن، معاملات واقعی در بازار است. به همین دلیل می‌توانید از صحت اطلاعات و ارقام ارائه‌شده اطمینان کامل داشته باشید.</p>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">شروع معامله در صرافی ارز هشت</h2>
              <p className="">
                پس از محاسبات اولیه با ماشین حساب تبدیل ارز دیجیتال، می‌توانید در
                صرافی ارز هشت ثبت‌نام کنید و مراحل احراز هویت خود را طی کنید. این
                فرآیند کمتر از 15 دقیقه زمان می‌برد.
              </p>
              <ul className="flex flex-col list-decimal list-inside">
                <li>پلتفرم OTC (معاملات خارج از بورس):</li>
                <p className="mr-2 lg:mr-4">در این بخش، خریدوفروش ارزهای دیجیتال با نرخ مشخص و سرعت بالا انجام می‌شود. این روش برای ارزهای کمتر شناخته‌شده با نقدینگی پایین نیز مناسب است.</p>
                <li>پلتفرم P2P (معاملات کاربر به کاربر):</li>
                <p className="mr-2 lg:mr-4">در این پلتفرم، شما قیمت خرید یا فروش رمز ارزها را تعیین می‌کنید. این روش برای افراد مسلط به تحلیل تکنیکال مناسب‌تر است.</p>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
