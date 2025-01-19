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
              <div className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base"> بـــــــــــــازار</p>
                <Image alt="bazar" src={bazar} />
              </div>
              <div className="flex justify-between px-2 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base ">وب اپلیکیشن</p>
                <Image alt="bazar" src={webapp} />
              </div>
              <div className="flex justify-between px-3 items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-base"> مایکـــیت</p>
                <Image alt="bazar" src={myket} />
              </div>
              <div className="flex justify-between px-2  items-center bg-transparent border border-[#3C3B41] rounded-lg w-[151px] h-[41px] dark:border-white">
                <p className="text-sm "> دانلود مستقیم</p>
                <Image alt="bazar" src={directDownload} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-between ">
                <div className="">
                  <h1 className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary ">
                    راهنمای صرافی
                  </h1>
                  <ul className="flex flex-col gap-4">
                    <li> خرید و فروش ارزدیحیتال </li>
                    <li>قیمت لحظه ای ارز ها</li>
                    <li>دانلود اپلیکیشن</li>
                    <Link href='/calculate'>
                    <li>ماشین حساب</li>
                    </Link>
                    <li>گردونه شانس</li>
                    <li>
                      <Link href="/bugbounty">باگ بانتی</Link>
                    </li>
                    <li>وبلاگ</li>
                  </ul>
                </div>
                <div className="">
                  <p className="mb-6 text-[22px] font-bold border-r-4 pr-4 border-primary">
                    لینک های مفید
                  </p>
                  <ul className="flex flex-col gap-4">
                    <li> ارسال تیکت پشتیبانی</li>
                    <li> اموزش های صرافی</li>
                    <li> قوانین و مقررات</li>
                    <li>سطوح کاربری</li>
                      <Link href="/contactus">
                        <li> تماس با ما</li>
                      </Link>
                    <li> درباره ما</li>
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
                      <li> 021-284299</li>
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
          <div className="flex justify-center items-center text-[8px] md:text-[18px] gap-1 ">
            تمامی حقوق این وبسایت متعلق به{" "}
            <span className="text-primary ">صرافی ارزدیجیتال ارزهشت</span> است.
          </div>
          <div className="flex justify-center items-center gap-4 dark:text-secondary sm:order-last ">
            <span className="hidden md:block dark:text-gray-300 pl-1">
              <YouTube />            
            </span>
            <span  className="hidden md:block dark:text-gray-300">
              <Aparat />
            </span>
            <span  className="w-[10px] h-[10px] md:w-[34px] md:h-[34px] dark:text-gray-300">
              <Twitter />
            </span>
            <span  className="w-[10px] h-[10px] md:w-[38px] md:h-[38px] dark:text-gray-300">
              <Telegram />
            </span>
            <span className="w-[10px] h-[10px] md:w-[38px] md:h-[38px] dark:text-gray-300">
              <Instagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
