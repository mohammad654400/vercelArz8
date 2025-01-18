import React from "react";
import Transaction from "../home/transaction/transaction";
import Banner from "../home/banner/banner";

export default function Calculate() {
  return (
    <>
      <header className="base-style pt-[187px]">
        <div className="w-full flex justify-center">
          <h1 className="text-[35px] pb-5 border-b-[5px] border-primary">
            ماشین حساب ارز های دیجیتال
          </h1>
        </div>
      </header>

      <main>
        <section className="w-[585px] mx-auto pt-24">
          <Transaction />
        </section>

        <Banner />

        <section className="base-style">
          <div className="flex flex-col gap-1">
            <article className="flex flex-col text-xs lg:text-base leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-lg font-bold">
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

            <article className="flex flex-col text-xs lg:text-base leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-lg font-bold">
                مزایای استفاده از ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="flex flex-col list-decimal list-inside ">
                <li>تبدیل دقیق ارزها</li>
                <li>
                  با استفاده از این ماشین حساب، می‌توانید به‌راحتی ارزهای دیجیتال
                  مختلف را به یکدیگر تبدیل کنید.
                </li>
                <li>پشتیبانی از طیف گسترده ارزهای دیجیتال</li>
                <li>
                  قیمت‌ها در ماشین حساب ارز دیجیتال ارز هشت به‌صورت لحظه‌ای
                  به‌روزرسانی می‌شوند.
                </li>
                <li>نمایش ارزش ریالی و دلاری</li>
                <li>
                  بررسی سود و زیان پیش از معامله با استفاده از این ابزار.
                </li>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-lg font-bold">
                ویژگی‌های منحصربه‌فرد ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ul className="list-disc list-inside ">
                <li>محاسبه لحظه‌ای و دقیق با نرخ‌های به‌روز.</li>
                <li>سادگی در استفاده با رابط کاربری آسان.</li>
                <li>پشتیبانی از تومان و دلار.</li>
                <li>تبدیل مستقیم رمز ارزها بدون واسطه.</li>
                <li>پشتیبانی از ارزهای محبوب.</li>
              </ul>
            </article>

            <article className="flex flex-col text-xs lg:text-base leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-lg font-bold">
                نحوه استفاده از ماشین حساب ارز دیجیتال ارز هشت
              </h2>
              <ol className="list-decimal list-inside">
                <li>
                  انتخاب ارز مبنا و مقصد در کادرهای مربوطه.
                </li>
                <li>
                  وارد کردن مقدار و مشاهده معادل ارز مقصد.
                </li>
                <li>
                  مشاهده قیمت ریالی و دلاری به‌صورت هم‌زمان.
                </li>
              </ol>
            </article>

            <article className="flex flex-col text-xs lg:text-base leading-8 lg:leading-9 ">
              <h2 className="text-sm lg:text-lg font-bold">شروع معامله در صرافی ارز هشت</h2>
              <p className="">
                پس از محاسبات اولیه با ماشین حساب تبدیل ارز دیجیتال، می‌توانید در
                صرافی ارز هشت ثبت‌نام کنید و مراحل احراز هویت خود را طی کنید. این
                فرآیند کمتر از 15 دقیقه زمان می‌برد.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>پلتفرم OTC:</strong> مناسب برای معاملات با سرعت بالا و
                  نرخ مشخص.
                </li>
                <li>
                  <strong>پلتفرم P2P:</strong> مناسب برای افراد مسلط به تحلیل
                  تکنیکال.
                </li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
