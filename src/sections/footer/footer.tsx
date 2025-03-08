import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import bazar from "@/assets/images/footer/bazar.png";
import directDownload from "@/assets/images/footer/directDownload.png";
import myket from "@/assets/images/footer/myket.png";
import webapp from "@/assets/images/footer/webapp.png";
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
export default function Footer() {
  return (
    <div className="flex flex-col gap-8 bg-custom-gradient2 sm:px-[120px] pt-[279px] ">
      <div className="full-screen px-[20px]">
        <div className="flex gap-8 flex-wrap justify-center w-full md:justify-center lg:justify-between ">
          <div className="lg:px-0 px-5 md:w-2/3 w-full lg:w-[25%]">
            <div className="flex justify-start items-center gap-1 lg:gap ">
              <Image alt="ارز هشت" src={logo} width={64} height={64} />
              <h1 className="text-[30px] font-extrabold">ارزهشت</h1>
            </div>
            <p className="text-justify text-[14px] leading-10  ">
              از اردیبهشت ماه سال 1397 آغاز به فعالیت کرده که در ابتدا سامانه
              خرید و فروش ارز دیجیتال بود و سپس رفته رفته پا را فراتر گذاشته و
              اکنون پلتفرم ترید ارز دیجیتال را راه اندازی کرده است.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:w-[68%]">
            <div className="flex flex-wrap gap-2 justify-center w-auto lg:justify-between  md:justify-center 1 ">
              <Link href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"} className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base"> بـــــــــــــازار</p>
                <Image alt="bazar" src={bazar} />
              </Link>
              <div className="flex justify-between px-2 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base ">وب اپلیکیشن</p>
                <Image alt="bazar" src={webapp} />
              </div>
              <Link href={"https://myket.ir/app/com.arz8x.app.arz8x"} className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base"> مایکـــیت</p>
                <Image alt="bazar" src={myket} />
              </Link>
              <Link href={"https://cdn.arz8.com/application.apk"} className="flex justify-between px-2  items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-sm "> دانلود مستقیم</p>
                <Image alt="bazar" src={directDownload} />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between ">
                <div className="">
                  <h1 className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary ">
                    راهنمای صرافی
                  </h1>
                  <ul className="flex flex-col gap-4">
                    <Link href="/coins/BTC"> <li className=" hover:text-primary"> خرید و فروش ارزدیحیتال </li></Link>
                    <Link href="/coins"><li className=" hover:text-primary">قیمت لحظه ای ارز ها</li></Link>
                    <Link href="/download"><li className=" hover:text-primary"> دانلود اپلیکیشن</li></Link>
                    <Link href="/calculate"> <li className=" hover:text-primary">ماشین حساب</li></Link>
                    <Link href="/wheel-luck"><li className=" hover:text-primary">گردونه شانس </li></Link>
                    <Link href="/bug-bounty"><li className=" hover:text-primary">باگ بانتی</li></Link>
                    <Link href="https://arz8.com/blog/"><li className=" hover:text-primary">وبلاگ</li></Link>
                  </ul>
                </div>
                <div className="">
                  <p className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary">
                    لینک های مفید
                  </p>
                  <ul className="flex flex-col gap-4">
                    <Link href="https://app.arz8.com/support"> <li className=" hover:text-primary"> ارسال تیکت پشتیبانی</li></Link>
                    <Link href="/faq"><li className=" hover:text-primary"> اموزش های صرافی</li></Link>
                    <Link href="/job"><li className=" hover:text-primary">فرصت های شغلی</li></Link>
                    <Link href="/rules"> <li className=" hover:text-primary"> قوانین و مقررات</li></Link>
                    <Link href="/fee"><li className=" hover:text-primary">  سطوح کاربری</li></Link>
                    <Link href="/contact-us"><li className=" hover:text-primary"> تماس با ما</li></Link>
                    <Link href="/about"><li className=" hover:text-primary">درباره ما</li></Link>
                  </ul>
                </div>
                <div className="">
                  <p className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary ">
                    اطلاعات تماس
                  </p>
                  <ul className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <TownyFour />
                      <li> پشتیبانی انلاین </li>
                    </div>
                    <div className="flex gap-2">
                      <Fax />
                      <li>021-91035288 </li>
                    </div>
                    <div className="flex gap-2">
                      <Phone />
                      <a href="tel:021284299" className="cursor-pointer">021-284299</a>
                    </div>

                  </ul>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <DropdownFooter />
            </div>
          </div>
        </div>
        <div className=" w-full bg-secondary py-4 flex  sm:flex-row  justify-between gap-3  sm:justify-between px-5 rounded-lg my-24 ">
          <div className="flex justify-center items-center text-[7px] md:text-[18px] gap-1 ">
            تمامی حقوق این وبسایت متعلق به{" "}
            <span className="text-primary ">صرافی ارزدیجیتال ارزهشت</span> است.
          </div>
          <div className="flex justify-center items-center gap-4 dark:text-secondary sm:order-last ">
            <span className="hidden md:block dark:text-gray-300 pl-1 cursor-pointer dark:hover:text-primary hover:text-primary">
              <Link href='https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w'>
              <YouTube />
              </Link>
            </span>
            <span className="hidden md:block dark:text-gray-300  cursor-pointer dark:hover:text-primary hover:text-primary">
              <Link href='https://www.aparat.com/arz8com'>
              <Aparat />
              </Link>
            </span>
            <span className="w-[10px] h-[10px] md:w-[34px] md:h-[34px] dark:text-gray-300 dark:hover:text-primary hover:text-primary cursor-pointer">
              <Link href='https://x.com/Arz8official'>
              <Twitter />
              </Link>
            </span>
            <span className="w-[10px] h-[10px] md:w-[38px] md:h-[38px] dark:text-gray-300 dark:hover:text-primary cursor-pointer hover:text-primary">
              <Link href='https://t.me/arz8com'>
              <Telegram />
              </Link>
            </span>
            <span className="w-[10px] h-[10px] md:w-[38px] md:h-[38px] dark:text-gray-300 dark:hover:text-primary cursor-pointer hover:text-primary">
              <Link href='https://www.instagram.com/arz8_official/?hl=en-gb'>
              <Instagram />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
