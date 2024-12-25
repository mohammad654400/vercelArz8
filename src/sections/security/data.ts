import OneTimeLoginCode from "@/assets/icons/security/oneTimeLoginCode";
import EmailAddress from "@/assets/icons/security/emailAddress";
import PinCode from "@/assets/icons/security/pinCode";
import TwoStepLogin from "@/assets/icons/security/twoStepLogin";
import Google from "@/assets/icons/security/google";
import Sms from "@/assets/icons/security/sms";
import { title } from "process";


interface CardData {
  icon: () => JSX.Element; 
  title: string;
}

export const cardData: CardData[] = [
  {
    icon: Sms,
    title: "پیامک",
  },
  {
    icon: Google,
    title: "گوگل آتنتیکیتور",
   
  },
  {
    icon: TwoStepLogin,
    title: "ورود دو مرحله ای",
  },
  {
    icon: PinCode,
    title: "کد پین",
  },
  {
    icon: EmailAddress,
    title: "ادرس ایمیل",
  },
  {
    icon: OneTimeLoginCode,
    title: "کد ورود یک بار مصرف",
  },
];



export const securitySolutions =[
    {
        id:"1.",
        title:"ذخیره‌سازی امن اطلاعات:",
        description:"اطلاعات کاربران به‌صورت کاملاً رمزنگاری‌شده در سرورهای ایمن نگهداری می‌شود تا حریم خصوصی و امنیت آن‌ها تضمین شود."
    },
    {
        id:"2.",
        title:"احراز هویت دو مرحله‌ای:",
        description:"برای اطمینان از امنیت حساب‌ها، امکان فعال‌سازی احراز هویت دو مرحله‌ای فراهم شده است تا دسترسی‌های غیرمجاز مسدود شوند."
    },
    {
        id:"3.",
        title:"مانیتورینگ شبانه‌روزی:",
        description:"تیم تخصصی امنیت ما به‌صورت ۲۴ ساعته فعالیت‌ها را نظارت می‌کند تا هرگونه تهدید احتمالی شناسایی و سریعاً برطرف شود."
    },
    {
        id:"4.",
        title:"محافظت از ارتباطات:",
        description:"ارتباطات میان کاربران و سرورها با استفاده از پروتکل‌های پیشرفته رمزنگاری (SSL) ایمن‌سازی شده‌اند تا هیچ اطلاعاتی در طول مسیر به خطر نیفتد."
    },
    {
        id:"5.",
        title:"کیف‌پول‌های امن:",
        description:"دارایی‌های دیجیتال کاربران در کیف‌پول‌های سرد (Cold Wallet) ذخیره می‌شوند تا از حملات سایبری و خطرات اینترنتی در امان باشند."
    },
]