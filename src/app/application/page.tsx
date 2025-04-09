import { schemaData } from "@/schemas/download-app-schema";
import Application from '@/sections/application/downloa-app'
import React from 'react'

export const metadata = {
  title: "دانلود اپلیکیشن صرافی ارز هشت | خرید و فروش ارز دیجیتال | صرافی آنلاین ارز دیجیتال ",
  description: "با اپلیکیشن ارزهشت در یک صرافی تمام عیار معامله کنید.دسترسی به بیش از 1800 ارز دیجیتال - پشتیبانی سریع و 24 ساعته - احراز هویت سریع",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/application",
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Application />
    </>
  )
}
