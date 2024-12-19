'use client'

import React, { useState } from "react";
import Image from "next/image";
import { damage, expertData } from "./data";
import AllBugBountyIcon from "@/assets/icons/bugbounty/allBugBounty";
import user from "@/assets/images/user.png";
import Rules from "./rules";
import Form from "./form";

export default function BugBounty() {
  const [open, setOpen] = useState(false);
  const toggleTransaction = () => {
    setOpen((prevState) => !prevState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="base-style">
      {open ? (
        <div className="pt-28 flex flex-col justify-center items-center gap-8">
          <Form />
          <Rules />
        </div>
      ) : (
        <div className="pt-28 flex flex-col justify-center items-center gap-8">

          <h1 className="text-xl border-b-4 border-primary pb-2 ">
            رویداد باگ بانتی ارزهشت | چالش امنیتی با جوایز نقدی
          </h1>

          <p className="text-lg font-black text-justify">
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

          <button className="bg-primary py-3 px-6 rounded-lg">ارسال باگ</button>

          <Rules />

          <h3 className="text-xl border-b-4 border-primary pb-2">
            آسیب های مورد تایید
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8  w-full grid-flow-row-dense">

            {damage.map((item) => (
              <div className="flex flex-col w-full items-center justify-start gap-4">
                <item.icon />
                <span className="text-center">{item.text}</span>
              </div>
            ))}

          </div>

          <h4 className="text-xl border-b-4 border-primary pb-2">
            متخصصان برتر
          </h4>

          <div className="grid sm:grid-cols-2 gap-4 w-full grid-flow-row-dense">
            {expertData.map((data) => (
              <div key={data.id} className="flex flex-col w-full py-2  bg-secondary rounded-xl">
                <div className="flex gap-4 p-5 items-center border-b border-[#ADADAD80] ">
                  <Image alt="user" src={user} className="rounded-full" />
                  <div>
                    <p>{data.name}</p>
                    <p>{data.amount}</p>
                  </div>
                </div>
                <div className="pr-5 flex pt-2">
                  <AllBugBountyIcon />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1C1D1F] w-full flex flex-col justify-center items-center py-10 gap-8 rounded-lg ">
            <h4 className="text-white text-xl">
              با گزارش باگ، هم کمک کنید، هم پاداش بگیرید!
            </h4>
            <p className="text-white w-[80%] text-justify">
              با شناسایی و گزارش آسیب‌پذیری‌های امنیتی به تیم امنیت ارزهشت،
              کیفیت خدمات را بهبود دهید و در عین حال، پاداش نقدی دریافت کنید.
              این یک فرصت ویژه برای متخصصان تست نفوذ است تا توانایی‌های خود را
              به چالش بکشند و در ارتقای امنیت سهیم باشند.
            </p>
            <button
              onClick={toggleTransaction}
              className="bg-primary py-4 px-14 rounded-lg text-background"
            >
              ارسال باگ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
