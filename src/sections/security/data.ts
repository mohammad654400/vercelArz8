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
        title:"نگهداری امن اطلاعات:",
        description:"اطلاعات کاربران به‌صورت رمزنگاری‌شده در سرورهای امن ذخیره می‌شود تا از حریم خصوصی و امنیت آن‌ها محافظت شود."
    },
    {
        id:"2.",
        title:"احراز هویت دو مرحله‌ای:",
        description:"برای افزایش امنیت حساب‌ها، کاربران می‌توانند احراز هویت دو مرحله‌ای را فعال کنند تا از ورودهای غیرمجاز جلوگیری شود."
    },
    {
        id:"3.",
        title:"نظارت شبانه‌روزی:",
        description:"تیم امنیتی ما به‌صورت ۲۴ ساعته همه فعالیت‌ها را بررسی می‌کند تا در صورت وجود تهدید، سریعاً اقدام کند."
    },
    {
        id:"4.",
        title:"امنیت ارتباطات:",
        description:"ارتباط کاربران با سرورها از طریق فناوری‌های رمزنگاری (SSL) محافظت می‌شود تا اطلاعات در مسیر انتقال ایمن بماند."
    },
    {
        id:"5.",
        title:"کیف‌پول‌های امن:",
        description:"دارایی‌های کاربران در کیف‌پول‌های سرد (Cold Wallet) نگهداری می‌شود تا در برابر حملات اینترنتی محافظت شود."
    },
]