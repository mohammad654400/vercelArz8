"use client"
import { useState } from "react";
import CollapsibleList from "./sections/CollapsibleList";
import Header from "./sections/Header";
import BodyGuidanceCenter from "./sections/bodyGuidanceCenter/BodyGuidanceCenter";
import { Question } from "./type/types";

const questionsByCategory: { [key: string]: Question[] } = {
  all_questions: [
    {
      title: "ارزهشت چیست؟",
      content:"پس از ثبت نام در سایت ارز هشت و تکمیل فرایند احراز هویت و تایید حساب بانکی توسط پشتیبانی سایت اقدام به خرید ارز دیجیتال کنند. همچنین برای راهنمایی بیشتر میتوانید با پشتیبان های ارز هشت در ارتباط باشید.",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "ارزدیجیتال چیست؟",
      content: "ارز دیجیتال یک واحد پولی دیجیتال یا مجازی است که از رمزنگاری استفاده می‌کند.",
    },
    {
      title: "چگونه میتوان حساب کاربری خود را مسدود کرده یا از حالت مسدود خارج کنیم؟",
      content:
      "اگر قصد خرید رمز ارزی مثل بیت کوین و یا هر ارز دیگری دارید یا میخواهید دارایی دیجیتال خود را به ریال تبدیل کنید! ارز هشت به شما کمک میکند در سریعترین زمان ممکن به این هدف برسید. ارز هشت یکی از قدیمی ترین سایت های حوزه ارز دیجیتال میباشد که فعالیت خود را از سال 97 شروع کرده و در این مدت فعالیت توانسته رضایت مشتریان خود را جلب نماید.",
  
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "بیت کوین چیست؟",
      content: "بیت کوین اولین ارز دیجیتال غیرمتمرکز است که بر روی بلاکچین کار می‌کند.",
    },
    {
      title: "چگونه میتوان حساب کاربری خود را مسدود کرده یا از حالت مسدود خارج کنیم؟",
      content: "برای مسدود کردن حساب کاربری، با پشتیبانی تماس بگیرید.",
    },
    {
      title: "آموزش ویدیویی خرید ارز دیجیتال",
      content: "روش‌های مختلف کسب درآمد از ارز دیجیتال.",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ],
  general_questions: [
    {
      title: "چگونه میتوان حساب کاربری خود را مسدود کرده یا از حالت مسدود خارج کنیم؟",
      content: "برای مسدود کردن حساب کاربری، با پشتیبانی تماس بگیرید.",
    },
  ],
  buy_sell_currency: [
    {
      title: "خرید ارز دیجیتال",
      content: "چگونه میتوان ارز دیجیتال خریداری کرد؟",
    },
  ],
  currency_transactions: [
    {
      title: "نحوه انجام تراکنش ارز دیجیتال",
      content: "چگونه تراکنش‌های ارزی انجام می‌شود؟",
    },
  ],
  income_generation: [
    {
      title: "چگونه میتوان از ارز دیجیتال درآمد کسب کرد؟",
      content: "روش‌های مختلف کسب درآمد از ارز دیجیتال.",
    },
  ],
  video_tutorial: [
    {
      title: "آموزش ویدیویی خرید ارز دیجیتال",
      content: "روش‌های مختلف کسب درآمد از ارز دیجیتال.",
      videoLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ],
};

export default function GuidanceCenterView() {
  const [activeKey, setActiveKey] = useState<string | null>("video_tutorial");

  const safeActiveKey = activeKey ?? "video_tutorial"; 
  const questions = questionsByCategory[safeActiveKey];

  return (
    <div className="flex w-full flex-col">
      <Header questions={questions} />
      <CollapsibleList activeKey={activeKey} setActiveKey={setActiveKey} />
      <BodyGuidanceCenter activeKey={activeKey} questions={questions} />
    </div>
  );
}
