import Authentication from '@/sections/authentication/authentication'
import { schemaData } from '@/schemas/authenticate-schema'
import React from 'react'

export const metadata = {
  title: "احراز هویت و سطوح حساب کاربری در صرافی ارز هشت | ارز هشت ",
  description: "در صرافی ارز هشت، فرآیند احراز هویت یکی از ساده‌ترین و سریع‌ترین روش‌ها در بین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با رعایت قوانین داخلی و بین‌المللی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده تا همه افراد بتوانند در کمترین زمان ممکن از خدمات خرید و فروش ارز دیجیتال استفاده کنند.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/authenticate",
  },
};


export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Authentication />
    </>
  )
}
