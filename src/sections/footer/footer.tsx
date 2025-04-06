import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import directDownload from "@/assets/images/footer/directDownload.png";
import Myket from "@/assets/icons/downloadApp/miket";
import DirectDownload from "@/assets/icons/footer/directDownload"
import CafeBazar from "@/assets/icons/downloadApp/cafeBazar";
import Web from "@/assets/icons/downloadApp/web";
import YouTube from "@/assets/icons/footer/youtube";
import Instagram from "@/assets/icons/footer/instagram";
import Telegram from "@/assets/icons/footer/telegram";
import Twitter from "@/assets/icons/footer/twitter";
import Aparat from "@/assets/icons/footer/aparat";
import Phone from "@/assets/icons/footer/phone";
import Fax from "@/assets/icons/footer/fax";
import TownyFour from "@/assets/icons/footer/TownyFour";
import DropdownFooter from "./dropdown-footer";
import Link from "next/link";
import FooterSchema from "../../schemas/footer-schema";
export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-custom-gradient2 sm:px-[120px] pt-[279px] ">
      <div className="full-screen px-5">
        <div className="flex gap-8 flex-wrap justify-center w-full md:justify-center lg:justify-between ">
          <section className="lg:px-0 px-5 md:w-2/3 w-full lg:w-[25%]">
            <div className="flex justify-start items-center gap-1 lg:gap ">
              <Image alt="لوگوی صرافی ارز دیجیتال ارزهشت - خرید و فروش بیت‌کوین و ارزهای دیجیتال" src={logo} width={64} height={64} quality={100} loading="lazy" />
              <span className="text-[30px] font-extrabold">ارزهشت</span>
            </div>
            <p className="text-justify text-[14px] leading-10  ">
              از اردیبهشت ماه سال 1397 آغاز به فعالیت کرده که در ابتدا سامانه
              خرید و فروش ارز دیجیتال بود و سپس رفته رفته پا را فراتر گذاشته و
              اکنون پلتفرم ترید ارز دیجیتال را راه اندازی کرده است.
            </p>
          </section>

          <section className="flex flex-col gap-8 lg:w-[68%]">
            <nav className="flex flex-wrap gap-2 justify-center w-auto lg:justify-between  md:justify-center 1 ">
              <Link href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"} className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white hover:text-[#27b681] hover:border-[#27b681] dark:hover:border-[#27b681]">
                <p className="text-base"> بـــــــــــــازار</p>
                <div className="w-6 h-6 ">
                  <CafeBazar />
                </div>
              </Link>
              <div className="flex justify-between px-2 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white  hover:text-primary hover:border-primary dark:hover:border-primary">
                <p className="text-base ">وب اپلیکیشن</p>
                <div className="w-6 h-6 ">
                  <Web />
                </div>
              </div>
              <Link href={"https://myket.ir/app/com.arz8x.app.arz8x"} className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white hover:text-[#0091EA] hover:border-[#0091EA] dark:hover:border-[#0091EA]">
                <p className="text-base"> مایکـــیت</p>
                <div className="w-6 h-6 ">
                  <Myket />
                </div>
              </Link>
              <Link href={"https://cdn.arz8.com/application.apk"} className="flex justify-between px-2  items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white hover:text-[#4a80f5] hover:border-[#4a80f5] dark:hover:border-[#4a80f5]">
                <p className="text-sm "> دانلود مستقیم</p>
                <div className="w-6 h-6 ">
                  <DirectDownload />
                </div>
              </Link>
            </nav>
            <div className="hidden md:block">
              <div className="flex justify-between ">

                <section>
                  <h3 className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary">
                    لینک های مفید
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li className=" hover:text-primary"><Link href="https://app.arz8.com/support">ارسال تیکت پشتیبانی</Link></li>
                    <li className=" hover:text-primary"><Link href="/faq">آموزش‌های صرافی</Link></li>
                    <li className=" hover:text-primary"><Link href="/job">فرصت‌های شغلی</Link></li>
                    <li className=" hover:text-primary"><Link href="/rules">قوانین و مقررات</Link></li>
                    <li  className="hover:text-primary"><Link href="/wheel-luck">گردونه شانس</Link></li>
                    <li className=" hover:text-primary"><Link href="/wage">سطوح کاربری</Link></li>
                    <li className=" hover:text-primary"><Link href="/authenticate">احراز هویت</Link></li>
                    <li className=" hover:text-primary"><Link href="/contact-us">تماس با ما</Link></li>
                    <li className=" hover:text-primary"><Link href="/about">درباره ما</Link></li>
                    <li className=" hover:text-primary"><Link href="/security">امنیت</Link></li>
                  </ul>
                </section>

                <section >
                  <h3 className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary ">
                    راهنمای صرافی
                  </h3>
                  <ul className="flex flex-col gap-4">

                    <li className=" hover:text-primary"><Link href="/coins/BTC">خرید و فروش ارز دیجیتال</Link></li>
                    <li className=" hover:text-primary"><Link href="/coins">قیمت لحظه‌ای ارزها</Link></li>
                    <li className=" hover:text-primary"><Link href="/application">دانلود اپلیکیشن</Link></li>
                    <li className=" hover:text-primary"><Link href="/calculate">ماشین حساب</Link></li>
                    <li className=" hover:text-primary"><Link href="/bug-bounty">باگ بانتی</Link></li>
                    <li className=" hover:text-primary"><Link href="https://arz8.com/blog/">وبلاگ</Link></li>

                  </ul>
                </section>

                <section className="">
                  <h3 className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary ">
                    اطلاعات تماس
                  </h3>
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-x-2"><TownyFour /> پشتیبانی آنلاین</li>
                    <li className="flex gap-x-2"><Fax /> <a href="tel:02191035288">021-91035288</a></li>
                    <li className="flex gap-x-2"><Phone /> <a href="tel:021284299">021-284299</a></li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="block md:hidden">
              <DropdownFooter />
            </div>
          </section>
        </div>
        <div className=" w-full bg-secondary py-4 flex flex-col  sm:flex-row  justify-between gap-3  sm:justify-between px-2 sm:px-5 rounded-lg mt-16 mb-10 md:my-24 ">
          <div className="flex flex-wrap justify-center items-center text-xs md:text-[18px] gap-1 ">
            تمامی حقوق این وبسایت متعلق به{" "}
            <span className="text-primary ">صرافی ارزدیجیتال ارزهشت</span> است.
          </div>
          <nav className="flex justify-center items-center gap-4 dark:text-secondary sm:order-last ">
            <span className="hidden md:block dark:text-gray-300 pl-1 cursor-pointer dark:hover:text-[#CD201F] hover:text-[#CD201F]">
              <Link href='https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w'>
                <YouTube />
              </Link>
            </span>
            <span className="hidden md:block dark:text-gray-300  cursor-pointer dark:hover:text-[#ED145B] hover:text-[#ED145B]">
              <Link href='https://www.aparat.com/arz8com' aria-label="صفحه رسمی آپارات ارزهشت">
                <Aparat />
              </Link>
            </span>

            <span className="min-w-5 min-h-5 w-5 h-5 md:w-[34px] md:h-[34px] dark:text-gray-300 dark:hover:text-primary hover:text-primary">
              <Link href='https://x.com/Arz8official' aria-label="صفحه رسمی توییتر ارزهشت">
                <Twitter />
              </Link>
            </span>

            <span className="min-w-5 min-h-5 w-5 h-5 md:w-[38px] md:h-[38px] dark:text-gray-300 dark:hover:text-[#0088CC] cursor-pointer  hover:text-[#0088CC]">
              <Link href='https://t.me/arz8com' aria-label="صفحه رسمی تلگرام ارزهشت">
                <Telegram />
              </Link>


            </span>
            <span className="min-w-5 min-h-5 w-5 h-5 md:w-[38px] md:h-[38px] dark:text-gray-300 dark:hover:text-[#F77737] cursor-pointer hover:text-[#F77737]">
              <Link href="https://www.instagram.com/arz8_official" aria-label="صفحه رسمی اینستاگرام ارزهشت">
                <Instagram />
              </Link>

            </span>
          </nav>
        </div>
      </div>
      <FooterSchema />
    </footer>
  );
}
