import WheelLuck from '@/sections/wheel-luck/wheel-luck'
import React from 'react'
import { schemaData } from "@/schemas/wheel-luck-schema";

export const metadata = {
  title: "گردونه شانس صرافی ارز هشت | شانست رو امتحان کن و برنده شو",
  description: "هیجان را به اوج برسان! هر ۲۴ ساعت یک‌بار، به‌طور رایگان گردونه شانس صرافی ارز هشت را بچرخان و شانس خود را برای برنده شدن جوایز ارز دیجیتال امتحان کن. فرصتی برای دریافت جوایز عالی از دنیای ارز دیجیتال.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/wheel-luck",
  },
};
export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <WheelLuck />
    </>
  )
}
