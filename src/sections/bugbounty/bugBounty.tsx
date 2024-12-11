'use client'
import AuthIcon from "@/assets/icons/bugbounty/authicon";
import CrossSiteIcon from "@/assets/icons/bugbounty/crossSite";
import ImportAccessIcon from "@/assets/icons/bugbounty/importAccess";
import InformationIcon from "@/assets/icons/bugbounty/information";
import ServerSideIcon from "@/assets/icons/bugbounty/serverSide";
import SqIinjectionIcon from "@/assets/icons/bugbounty/sqIinjectionIcon";
import React, { useState } from "react";
import BugBountyCard from "./bugBountyCard";
import Image from "next/image";
import bgbugobunty from "@/assets/images/bugbounty/bg-bugbounty.png";

export default function BugBounty() {
  const [open, setOpen] = useState(false);
  const toggleTransaction = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div>
      {open ? (
        <div>Hello</div>
      ) : (
        <div className="mt-24 sm:px-[120px] sm:py-[30px] flex flex-col justify-center items-center gap-8">
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
          <h2 className="text-xl border-b-4 border-primary pb-2">
            قوانین و مقرارا رویداد باگ بانتی ارزهشت
          </h2>
          <div className="bg-background w-full p-6 rounded-lg flex flex-col gap-5">
            <p>
              حریم خصوصی تمامی کاربران ارزهشت باید رعایت شود. از افشاء، تغییر،
              سرقت و نابودی اطلاعات کاربران به شدت خودداری شود.{" "}
            </p>
            <p>
              فرآیند تست فقط با استفاده از اکانت ارزهشت و شماره همراه متعلق به
              خودتان انجام شود.
            </p>
            <p>
              قبل از شروع تست، بخش محدوده برنامه را بررسی کنید تا اطمینان حاصل
              کنید دامنه مورد نظر در حوزه باگ بانتی قرار دارد.
            </p>
            <p>
              از انجام هرگونه تست که در فرآیند کسب‌وکار ارزهشت اختلال ایجاد کند،
              اجتناب کنید.
            </p>
            <p>باگ‌ها باید فقط در محدوده‌های مجاز ذکر شده گزارش شوند.</p>
            <p>
              هر گزارش باید شامل یک باگ امنیتی مشخص و مطابق با استاندارد CVSS
              برای تعیین اهمیت باشد.
            </p>
            <p>
              گزارش‌ها باید شامل پیلود (کد، اسکریپت و ...) استفاده شده برای کشف
              باگ باشند و باگ‌ها باید قابل اثبات و تکرارپذیر باشند. همچنین
              جزئیات گام‌به‌گام نحوه کشف باگ ارائه شود.
            </p>
            <p>
              نتایج اسکنرها و ابزارهای خودکار برای گزارش باگ‌ها قابل قبول
              نیستند.
            </p>
            <p>
              هیچ‌گونه اطلاعات یا آسیب‌پذیری مرتبط نباید بدون رضایت کتبی ارزهشت
              به اشخاص ثالث، شبکه‌های اجتماعی، مطبوعات یا سایر شرکت‌ها افشا شود.
            </p>
            <p>
              در صورت گزارش نقض یا نشت داده، مکان دقیق داده‌ها را ارائه دهید و
              اطلاعات مرتبط را با دیگران به اشتراک نگذارید.
            </p>
            <p>
              پس از ثبت گزارش، در مدت 1 روز کاری دریافت یا رد آسیب‌پذیری اعلام
              می‌شود.
            </p>
            <p>
              حداکثر طی 10 روز کاری تیم امنیتی ارزهشت گزارش را بررسی کرده و در
              صورت تأیید، ایمیل شامل سطح شدت و مقدار پاداش ارسال خواهد شد.
            </p>
            <p>
              در نهایت، حداکثر طی 14 روز کاری پاداش به حساب بانکی یا آدرس رمزارز
              شما واریز خواهد شد.
            </p>
          </div>
          <h3 className="text-xl border-b-4 border-primary pb-2">
            آسیب های مورد تایید
          </h3>
          <div className="w-full flex justify-between flex-wrap items-center">
            <AuthIcon />
            <CrossSiteIcon />
            <ImportAccessIcon />
            <SqIinjectionIcon />
            <ServerSideIcon />
            <InformationIcon />
          </div>
          <h4 className="text-xl border-b-4 border-primary pb-2">
            متخصصان برتر
          </h4>
          <div className="w-full flex">
            <BugBountyCard />
          </div>
          <div className="bg-foreground w-full flex flex-col justify-center items-center py-10 gap-8 rounded-lg ">
            <h4 className="text-background text-xl">
              با گزارش باگ، هم کمک کنید، هم پاداش بگیرید!
            </h4>
            <p className="text-background w-[80%] text-justify">
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
