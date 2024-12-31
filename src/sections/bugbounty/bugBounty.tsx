'use client'

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { damage, expertData } from "./data";
import AllBugBountyIcon from "@/assets/icons/bugbounty/allBugBounty";
import user from "@/assets/images/user.png";
import Rules from "./rules";
import Form from "./form";
import bgBugLight from "@/assets/images/bugbounty/bgBugLight.png"
import bgBugDark from "@/assets/images/bugbounty/bgBugDark.png"
import { useTheme } from "@/contexts/ThemeProvider";


export default function BugBounty() {

  const { theme } = useTheme();

  const backgroundImage = useMemo(() => (theme == "dark" ? bgBugDark : bgBugLight), [theme]);



  const [open, setOpen] = useState(false);
  const toggleTransaction = () => {
    setOpen((prevState) => !prevState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="base-style" style={{ gap: 0 }}>
      {open ? (

        <div className="mt-[76px] lg:mt-[243px]  flex flex-col justify-center items-center gap-10 lg:gap-0 z-10">
          <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 lg:mb-[45px]  w-auto text-center">
            رویداد باگ بانتی ارزهشت | چالش امنیتی با جوایز نقدی
          </h3>
          <Image src={backgroundImage} alt="" className="absolute w-screen top-32 z-[-1]  object-cover h-[410px] lg:h-[730px]" />

          <Form />
          <div className="lg:mt-[59px]">

          <Rules />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-24 z-10">

          <Image src={backgroundImage} alt="" className="absolute w-screen top-32 z-[-1]  object-cover h-[410px] lg:h-[800px]" />

          <div className="flex flex-col items-center mt-[77px] lg:mt-[243px]">
            <h1 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center">
              رویداد باگ بانتی ارزهشت | چالش امنیتی با جوایز نقدی
            </h1>

            <p className="text-xs lg:text-[25px] font-normal  text-justify mt-[13px] mb-5 lg:mt-10 lg:mb-[25px] leading-[35px] lg:leading-[70px]">
              تیم امنیت ارزهشت فرصتی ویژه برای متخصصان امنیتی فراهم کرده است! با
              شرکت در رویداد باگ بانتی ارزهشت، توانایی خود را در کشف
              آسیب‌پذیری‌های امنیتی سامانه و اپلیکیشن این صرافی به چالش بکشید. اگر
              تخصصی در تست نفوذ دارید و به دنبال فرصتی برای اثبات مهارت‌هایتان
              هستید، این فرصت استثنایی را از دست ندهید! با شناسایی و گزارش باگ‌ها
              و آسیب‌پذیری‌های ارزهشت بر اساس قوانین ذکر شده، پس از بررسی و تأیید
              تیم امنیت، می‌توانید پاداش نقدی دریافت کنید. مهارتتان را به نمایش
              بگذارید و برنده جوایز شوید! برای اطلاعات بیشتر و ارسال گزارش‌ها، به
              انتهای این صفحه مراجعه کنید.
            </p>

            <button
              onClick={toggleTransaction}
              className="text-white bg-primary py-3 px-6 rounded-xl lg:rounded-[20px] text-[15px] lg:text-[25px] font-semibold w-full h-11 lg:h-[75px] lg:w-[232px]">ارسال باگ</button>

          </div>

          <Rules />

          <div className="flex flex-col items-center w-full gap-10] lg:gap-[72px]">
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5  w-auto text-center ">
              آسیب های مورد تایید
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-3   gap-x-[102px] gap-y-[49px] xl:gap-y-[46px] xl:gap-x-[180px] place-content-between  w-full grid-flow-row-dense">

              {damage.map((item, index) => (
                <div key={index} className="flex flex-col w-full items-center justify-start gap-8">
                  <item.icon />
                  <span className="text-center text-[10px] lg:text-base">{item.text}</span>
                </div>
              ))}

            </div>

          </div>

          <div className="flex flex-col items-center w-full gap-10">
            <h3 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5  w-auto text-center ">
              متخصصان برتر
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full grid-flow-row-dense">
              {expertData.map((data) => (
                <div key={data.id} className="flex flex-col w-full py-2  bg-secondary rounded-[10px] lg:rounded-[15px]">
                  <div className="flex  gap-7 p-[15px] pb-5 items-center border-b border-[#ADADAD80] ">
                    <Image alt="user" src={user} className="rounded-full w-[60px] h-[60px]" />
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
            <p className="text-white px-[103px] text-xl font-semibold  text-center mt-6 mb-9  leading-[38.4px]">
              با شناسایی و گزارش آسیب‌پذیری‌های امنیتی به تیم امنیت ارزهشت،
              کیفیت خدمات را بهبود دهید و در عین حال، پاداش نقدی دریافت کنید.
              این یک فرصت ویژه برای متخصصان تست نفوذ است تا توانایی‌های خود را
              به چالش بکشند و در ارتقای امنیت سهیم باشند.
            </p>
            <button
              onClick={toggleTransaction}
              className="bg-primary h-[75px] w-[340px] text-[28px] font-bold rounded-[20px] text-white"
            >
              ارسال باگ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
