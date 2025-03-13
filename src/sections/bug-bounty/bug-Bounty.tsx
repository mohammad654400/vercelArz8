"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { damage, expertData } from "./data";
import AllBugBountyIcon from "@/assets/icons/bugbounty/allBugBounty";
import user from "@/assets/images/user.png";
import Rules from "./rules";
import Form from "./form";
import bgBugLight from "@/assets/images/bugbounty/bgBugLight.png";
import bgBugDark from "@/assets/images/bugbounty/bgBugDark.png";
import Back from "@/assets/icons/bugbounty/back";

import { useTheme } from "@/contexts/theme-provider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function BugBounty() {
  const { theme } = useTheme();

  const backgroundImage = useMemo(
    () => (theme == "dark" ? bgBugDark : bgBugLight),
    [theme]
  );

  const [open, setOpen] = useState(false);
  const toggleTransaction = () => {
    setOpen((prevState) => !prevState);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="base-style" style={{ gap: 0 }}>
      {open ? (
        <div className="pt-[76px] lg:pt-60  flex flex-col justify-center items-center gap-10 lg:gap-24  z-10">
          <div className="flex w-full justify-center">
            <div onClick={() => setOpen(false)} className="flex h-7 w-7 lg:h-[51px] lg:w-[154px] items-center justify-center bg-[#FFFFFF] dark:bg-[#242428] rounded-[10px] lg:rounded-2xl gap-3 cursor-pointer">

              <span className="w-5 h-5 lg:w-6 lg:h-6"><Back /></span>
              <span className="hidden lg:flex text-2xl font-normal">بازگشت</span>
            </div>
            <h3 className="text-[11px] sm:text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5  w-auto text-center mx-2 lg:mx-10 leading-4 lg:leading-9">
              رویداد باگ بانتی ارزهشت | چالش امنیتی با جوایز نقدی
            </h3>
            <div className="w-7 xl:w-[154px]"></div>
          </div>

          <Image
            src={backgroundImage}
            alt=""
            className="absolute w-screen top-32 z-[-1]  object-cover h-[410px] lg:h-[730px]"
          />
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            scriptProps={{
              async: true,
              defer: true,
              appendTo: "head",
            }}>
            <Form />
          </GoogleReCaptchaProvider>

          <Rules />
        </div>
      ) : (
        <div className="py-[76px] lg:py-60 flex flex-col justify-center items-center gap-10 lg:gap-24 z-10">
          <Image
            src={backgroundImage}
            alt="Background Image"
            className="absolute w-screen top-32 z-[-1]  object-cover h-[410px] lg:h-[730px]"
            priority
          />

          <div className="flex flex-col items-center">
            <h1 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center">
              رویداد باگ بانتی ارزهشت | چالش امنیتی با جوایز نقدی
            </h1>

            <p className="text-xs lg:text-[25px]  text-justify mt-[13px] mb-5 lg:mt-10 lg:mb-[25px] leading-[35px] lg:leading-[70px]">
              تیم امنیت ارزهشت فرصتی ویژه برای متخصصان امنیتی فراهم کرده است! با
              شرکت در رویداد باگ بانتی ارزهشت، توانایی خود را در کشف
              آسیب‌پذیری‌های امنیتی سامانه و اپلیکیشن این صرافی به چالش بکشید.
              اگر تخصصی در تست نفوذ دارید و به دنبال فرصتی برای اثبات
              مهارت‌هایتان هستید، این فرصت استثنایی را از دست ندهید! با شناسایی
              و گزارش باگ‌ها و آسیب‌پذیری‌های ارزهشت بر اساس قوانین ذکر شده، پس
              از بررسی و تأیید تیم امنیت، می‌توانید پاداش نقدی دریافت کنید.
              مهارتتان را به نمایش بگذارید و برنده جوایز شوید! برای اطلاعات
              بیشتر و ارسال گزارش‌ها، به انتهای این صفحه مراجعه کنید.
            </p>

            <button
              onClick={toggleTransaction}
              className="text-white bg-primary py-3 px-6 rounded-xl lg:rounded-[20px] text-[15px] lg:text-[25px] font-semibold w-full h-11 lg:h-[75px] lg:w-[232px]  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary"
            >
              ارسال باگ
            </button>
          </div>

          <Rules />

          <div className="flex flex-col items-center w-full">
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5  w-auto text-center mb-[40px]">
              آسیب های مورد تایید
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-48  gap-x-24 gap-y-8 place-content-between  w-full grid-flow-row-dense">
              {damage.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full items-center justify-start gap-8"
                >
                  <item.icon />
                  <span className="text-center text-[10px] lg:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5  w-auto text-center mb-[40px]">
              متخصصان برتر
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full grid-flow-row-dense">
              {expertData.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col w-full py-2  bg-secondary rounded-[10px] lg:rounded-[15px]"
                >
                  <div className="flex  gap-7 p-[15px] pb-5 items-center border-b border-[#ADADAD80] ">
                    <Image
                      alt="user"
                      src={user}
                      className="rounded-full w-[60px] h-[60px]"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-normal">{data.name}</p>
                      <p className="text-base font-semibold">{data.amount}</p>
                    </div>
                  </div>
                  <div className="pr-5 flex pt-2">
                    <AllBugBountyIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1C1D1F] w-full hidden lg:flex flex-col justify-center items-center pt-[62px] pb-[50px] rounded-[20px] ">
            <h4 className="text-white text-[29px] font-bold">
              با گزارش باگ، هم کمک کنید، هم پاداش بگیرید!
            </h4>
            <p className="text-white text-xl font-semibold w-[85%] text-center mt-6 mb-9 leading-[38px]">
              با شناسایی و گزارش آسیب‌پذیری‌های امنیتی به تیم امنیت ارزهشت،
              کیفیت خدمات را بهبود دهید و در عین حال، پاداش نقدی دریافت کنید.
              این یک فرصت ویژه برای متخصصان تست نفوذ است تا توانایی‌های خود را
              به چالش بکشند و در ارتقای امنیت سهیم باشند.
            </p>
            <button
              onClick={toggleTransaction}
              className="bg-primary h-[75px] w-[340px] text-[28px] font-bold rounded-[20px] text-white  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary"
            >
              ارسال باگ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
