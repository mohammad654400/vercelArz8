import Security from '@/sections/security/security'
import React from 'react'
import { schemaData } from "@/schemas/security-schema";

export const metadata = {
  title: "امنیت صرافی ارز هشت | امنیت حساب کاربری و حفاظت از دارایی‌ها | ارز دیجیتال",
  description: "صرافی ارز هشت با بهره‌گیری از امکانات امنیتی پیشرفته نظیر ورود دو مرحله‌ای، کد پین، رمزنگاری اطلاعات و کیف‌پول‌های سرد، از دارایی‌های کاربران به‌طور کامل محافظت می‌کند. همچنین، احراز هویت با گوگل آتنتیکیتور و کد ورود یکبار مصرف، امنیت حساب‌ها را به بالاترین سطح می‌رساند.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/security",
  },
};

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Security />
    </>
  )
}
