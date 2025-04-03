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
          <Transaction homeData={homeData?.calculator} infoData={infoData} header={false} showPrice={false} infoLoading={infoLoading} homeLoading={homeLoading} />
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
                ماشین حساب تبدیل قیمت ارزهای دیجیتال صرافی ارز هشت ابزاری قدرتمند است که به شما امکان می‌دهد قیمت رمز ارزها را به دقت محاسبه کنید و از آن برای انجام معاملات هوشمند استفاده کنید. با این ابزار، می‌توانید مقدار یک ارز دیجیتال را به ارز دیگری تبدیل کنید یا ارزش آن را به ریال و دلار محاسبه کنید. این ماشین حساب به‌ویژه برای کاربران ایرانی طراحی شده و به شما کمک می‌کند پیش از انجام هرگونه معامله، میزان سود و زیان خود را دقیقاً ارزیابی کنید.
              </p>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                مزایای استفاده از ماشین حساب ارز دیجیتال ارز هشت

              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li >تبدیل دقیق ارزها</li>
                <p  className="mr-2 lg:mr-4">با استفاده از این ماشین حساب، می‌توانید به‌راحتی و بدون دردسر ارزهای دیجیتال مختلف را به یکدیگر تبدیل کنید. مثلاً به‌سادگی متوجه شوید که با فروش 1 بیت کوین، چه تعداد اتریوم دریافت خواهید کرد یا اینکه ارزش ریالی یک دوج‌کوین چقدر است. این ابزار به شما کمک می‌کند تصمیمات مالی دقیق‌تری بگیرید.</p>
                <li >پشتیبانی از طیف گسترده ارزهای دیجیتال</li>
                <p  className="mr-2 lg:mr-4">ماشین حساب ارز هشت از تعداد زیادی رمز ارز پشتیبانی می‌کند و این به شما این امکان را می‌دهد تا ارزهای مختلف را به‌طور مستقیم و بدون نیاز به استفاده از ارز واسطه‌ای تبدیل کنید. می‌توانید ارزهایی مانند بیت کوین، اتریوم، تتر، کاردانو و بسیاری دیگر را به هم تبدیل کنید.</p>
                <li >بروز بودن قیمت‌ها</li>
                <p  className="mr-2 lg:mr-4">قیمت‌ها در ماشین حساب ارز هشت به‌طور لحظه‌ای و به‌روز از بازارهای معتبر دریافت و نمایش داده می‌شوند. با توجه به نوسانات شدید بازار ارزهای دیجیتال، این ویژگی تضمین می‌کند که محاسبات شما همیشه دقیق و بر اساس قیمت‌های واقعی بازار انجام می‌شود.</p>
                <li >نمایش ارزش ریالی و دلاری</li>
                <p  className="mr-2 lg:mr-4">یکی از ویژگی‌های برجسته این ماشین حساب، امکان محاسبه قیمت ارزهای دیجیتال به‌صورت همزمان در دو واحد ریال و دلار است. این ویژگی برای کاربران ایرانی بسیار مفید است و امکان مشاهده ارزش ارزهای دیجیتال در واحد پولی خود را فراهم می‌کند.</p>
                <li >بررسی سود و زیان پیش از معامله</li>
                <p  className="mr-2 lg:mr-4">قبل از انجام هرگونه معامله، می‌توانید با استفاده از این ابزار، میزان سود یا زیان خود را بررسی کرده و تصمیم‌گیری بهتری داشته باشید. برای مثال، می‌توانید محاسبه کنید که چه مقدار ارز نیاز دارید یا با چه مقدار ارز دریافت خواهید کرد و آیا این معامله به‌صرفه است یا خیر.</p>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                ویژگی‌های منحصربه‌فرد ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li >محاسبه لحظه‌ای و دقیق</li>
                <p  className="mr-2 lg:mr-4">تمامی نرخ‌ها به‌صورت لحظه‌ای و از بازارهای معتبر دریافت و نمایش داده می‌شوند. این ویژگی تضمین می‌کند که شما همیشه اطلاعات به‌روز و دقیق در اختیار دارید.</p>
                <li >سادگی در استفاده</li>
                <p  className="mr-2 lg:mr-4">رابط کاربری ساده و محیط کاربرپسند این ماشین حساب، آن را به ابزاری مناسب برای افراد مبتدی و حرفه‌ای تبدیل کرده است. حتی اگر تازه‌کار باشید، می‌توانید به‌راحتی از آن استفاده کنید.</p>
                <li >پشتیبانی از تومان و دلار</li>
                <p  className="mr-2 lg:mr-4">این ابزار امکان مشاهده قیمت ارزها به واحد تومان و دلار را برای کاربران ایرانی فراهم می‌آورد. شما می‌توانید قیمت ارزهای دیجیتال را در واحد پولی خود مشاهده کنید و محاسبات دقیق‌تری انجام دهید.</p>
                <li >تبدیل مستقیم رمز ارزها</li>
                <p  className="mr-2 lg:mr-4">ماشین حساب ارز هشت امکان تبدیل مستقیم رمز ارزها به یکدیگر را بدون نیاز به ارز واسطه فراهم می‌کند. این ویژگی سرعت معاملات شما را افزایش می‌دهد و به شما این امکان را می‌دهد که به‌راحتی و سریع ارزهای دیجیتال را به هم تبدیل کنید.</p>
                <li >پشتیبانی از ارزهای محبوب</li>
                <p  className="mr-2 lg:mr-4">ماشین حساب ارز هشت از ارزهای دیجیتال محبوب مانند بیت کوین، اتریوم، تتر، ترون، کاردانو و بسیاری دیگر پشتیبانی می‌کند، که این ویژگی آن را برای طیف وسیعی از کاربران مناسب می‌سازد.</p>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                نحوه استفاده از ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li>انتخاب ارز مبنا و مقصد: </li>
                <p className="mr-2 lg:mr-4">در کادر اول، ارز مبنا (مثلاً بیت کوین) و در کادر دوم، ارز مقصد (مثلاً اتریوم) را انتخاب کنید. (مثلاً اتریوم) را انتخاب کنید</p>
                <li>وارد کردن مقدار:</li>
                <p className="mr-2 lg:mr-4">عدد موردنظر برای ارز مبنا را وارد کنید. سپس ماشین حساب به‌طور خودکار معادل آن را در ارز مقصد نمایش می‌دهد.</p>
                <li>مشاهده قیمت ریالی و دلاری:</li>
                <p className="mr-2 lg:mr-4">شما می‌توانید هم‌زمان قیمت لحظه‌ای ارز دیجیتال انتخابی را به تومان و دلار مشاهده کنید.</p>
              </ul>
            </article>
            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                چرا از ماشین حساب ارز هشت استفاده کنیم؟
              </h2>
              <p>ماشین حساب تبدیل ارز دیجیتال در صرافی ارز هشت ابزاری است که برای ارائه محاسبات دقیق و به‌روز طراحی شده است. این ماشین حساب از اطلاعات واقعی بازار برای انجام محاسبات استفاده می‌کند، بنابراین می‌توانید با اطمینان کامل از صحت اطلاعات و ارقام ارائه‌شده بهره‌برداری کنید.</p>

            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">شروع معامله در صرافی ارز هشت</h2>
              <p className="">
                پس از انجام محاسبات اولیه با ماشین حساب ارز دیجیتال، شما می‌توانید در صرافی ارز هشت ثبت‌نام کرده و مراحل احراز هویت خود را طی کنید. این فرآیند کمتر از 15 دقیقه زمان می‌برد.
              </p>

            </article>
            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                پلتفرم OTC (معاملات خارج از بورس):
              </h2>
              <p>در این پلتفرم، خرید و فروش ارزهای دیجیتال با نرخ‌های مشخص و سرعت بالا انجام می‌شود. این روش برای ارزهای کمتر شناخته‌شده با نقدینگی پایین بسیار مناسب است.</p>
            </article>

            <article className="flex flex-col text-xs lg:text-base font-normal leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-xl font-bold mb-1">
                پلتفرم P2P (معاملات کاربر به کاربر):
              </h2>
              <p>در این پلتفرم، شما می‌توانید قیمت خرید یا فروش رمز ارزها را خودتان تعیین کنید. این روش برای افرادی که به تحلیل‌های تکنیکال تسلط دارند و می‌خواهند تصمیمات دقیق‌تری بگیرند، مناسب‌تر است.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
