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
import DropdownFooter from "./dropdownFooter";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col gap-8 bg-custom-gradient2 sm:px-[120px] sm:py-[30px]">

      <div className="flex gap-8 flex-wrap justify-center w-full md:justify-between lg:justify-between">

        <div className="px-5 w-full md:w-full lg:w-[260px]">
          <div className="flex justify-center items-center gap-2 ">
            <Image alt="ارز هشت" src={logo} width={64} height={64} />
            <h1 className="text-[30px] font-extrabold">ارزهشت</h1>
          </div>
          <p className="w-full">
            از اردیبهشت ماه سال 1397 آغاز به فعالیت کرده که در ابتدا سامانه خرید
            و فروش ارز دیجیتال بود و سپس رفته رفته پا را فراتر گذاشته و اکنون
            پلتفرم ترید ارز دیجیتال را راه اندازی کرده است.
          </p>
        </div>

        <div className="flex flex-col gap-8 ">
          <div className="flex flex-wrap gap-2 justify-around w-auto">
            <div>
              <Image
                className="dark:bg-white rounded-xl "
                alt="بازار"
                src={bazar}
              />
            </div>
            <div>
              <Image
                className="dark:bg-white rounded-xl  "
                alt="بازار"
                src={directDownload}
              />
            </div>
            <div>
              <Image
                className="dark:bg-white rounded-xl"
                alt="بازار"
                src={myket}
              />
            </div>
            <div>
              <Image
                className="dark:bg-white rounded-xl"
                alt="بازار"
                src={webapp}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-around px-4">
              <div className="mt-6">
                <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary">
                  {" "}
                  راهنمای صرافی
                </h1>
                <ul className="flex flex-col gap-4">
                  <li> اموزش های صرافی</li>
                  <li> درباره ما</li>
                  <Link href="/contactus">
                  <li> تماس با ما</li>
                  </Link>
                  <li> ارسال تیکت پشتیبانی</li>
                  <li> قوانین و مقررات</li>
                  <li>سطوح کاربری</li>
                </ul>
              </div>
              <div className="mt-6">
                <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary">
                  لینک های مفید
                </h1>
                <ul className="flex flex-col gap-4">
                  <li> خرید و فروش ارزدیحیتال </li>
                  <li>دانلود اپلیکیشن</li>
                  <li>قیمت لحظه ای ارز ها</li>
                  <li>وبلاگ</li>
                  <li>گردونه شانس</li>
                </ul>
              </div>
              <div className="mt-6">
                <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary ">
                  {" "}
                  اطلاعات تماس
                </h1>
                <ul className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Phone />
                    <li> 021-284299</li>
                  </div>
                  <div className="flex gap-2">
                    <Fax />
                    <li>021-91035288 </li>
                  </div>
                  <div className="flex gap-2">
                    <TownyFour />
                    <li> پشتیبانی انلاین </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
           <DropdownFooter/>
          </div>
        </div>

      </div>

      <div className=" w-full bg-background py-4 flex justify-between px-5 rounded-lg ">
        <div className="text-[8px]">
          تمامی حقوق این وبسایت متعلق به{" "}
          <span className="text-primary ">صرافی ارزدیجیتال ارزهشت</span> است
        </div>
        <div className="flex gap-4 dark:text-secondary">
          <span className="text-background">
            <YouTube />
          </span>
          <Instagram />
          <Telegram />
          <Twitter />
          <Aparat />
        </div>
      </div>
    </div>
  );
}
