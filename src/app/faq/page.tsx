import React from 'react'
import FaqView from "@/sections/faq/FaqView"
import { faqSchema } from "@/schemas/faq-schema";

export const metadata = {
  title: "سوالات متداول | صرافی ارز هشت - خرید و فروش ارز دیجیتال | ارز هشت",
  description: "سوالات متداول صرافی ارز هشت: راهنمای کامل برای خرید، فروش، و مدیریت ارزهای دیجیتال. پاسخ به سوالات رایج کاربران در زمینه امنیت، احراز هویت و سایر خدمات.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
      <FaqView />
    </>
  )
}
