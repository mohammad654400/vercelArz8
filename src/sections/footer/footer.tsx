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
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-custom-gradient2 px-[120px] py-[30px]">
      <div className="flex justify-between w-full h-[400px]">
        <div className="w-[360px]">
          <div className="flex items-center gap-2 ">
            <Image alt="ارز هشت" src={logo} width={64} height={64} />
            <h1 className="text-[30px] font-extrabold">ارزهشت</h1>
          </div>
          <p>
            صرافی ارز هشت با ارائه خدماتی سریع، امن و حرفه‌ای، بستری مطمئن برای
            خرید و فروش ارزهای دیجیتال فراهم کرده است. با پشتیبانی 24/7، تنوع
            رمزارزها و کارمزدی رقابتی، ما همراه شما هستیم تا تجربه‌ای متفاوت از
            معاملات ارز دیجیتال داشته باشید.صرافی ارز هشت؛ همراه شما در دنیای
            رمزارزها!
          </p>
        </div>
        <div className="flex flex-col gap-8 h-12">
          <div className="flex gap-8 ">
            <Image
              className="dark:bg-white rounded-xl"
              alt="بازار"
              src={bazar}
            />
            <div>
              <Image
                className="dark:bg-white rounded-xl"
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
          <div className="flex justify-around">
            <div className="mt-6 cursor-pointer ">
              <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary">
                {" "}
                راهنمای صرافی
              </h1>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-primary"> اموزش های صرافی</li>
                <li className="hover:text-primary"> درباره ما</li>
                <Link href="contactus">
                  <li className="hover:text-primary"> تماس با ما</li>
                </Link>
                <li className="hover:text-primary"> ارسال تیکت پشتیبانی</li>
                <li className="hover:text-primary"> قوانین و مقررات</li>
                <li className="hover:text-primary">سطوح کاربری</li>
              </ul>
            </div>

            <div className="mt-6 cursor-pointer">
              <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary">
                لینک های مفید
              </h1>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-primary"> خرید و فروش ارزدیحیتال </li>
                <li className="hover:text-primary">دانلود اپلیکیشن</li>
                <li className="hover:text-primary">قیمت لحظه ای ارز ها</li>
                <li className="hover:text-primary">وبلاگ</li>
                <li className="hover:text-primary">گردونه شانس</li>
                <Link href="/job">
                  <li className="hover:text-primary">فرصت های شغلی</li>
                </Link>
              </ul>
            </div>
            <div className="mt-6">
              <h1 className="mb-6 text-lg border-r-4 pr-4 border-primary">
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
                  <li className="hover:text-primary cursor-pointer"> پشتیبانی انلاین </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-background py-4 flex justify-between px-5 rounded-lg ">
        <div>
          تمامی حقوق این وبسایت متعلق به{" "}
          <span className="text-primary">صرافی ارزدیجیتال ارزهشت</span> است
        </div>
        <div className="flex gap-4 dark:text-secondary">
          <YouTube />
          <Instagram />
          <Telegram />
          <Twitter />
          <Aparat />
        </div>
      </div>
    </div>
  );
}
