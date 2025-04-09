import Wage from '@/sections/wage/Wage'
import { schemaData } from "@/schemas/wage-schems";
import React from 'react'

export const metadata = {
  title: "کارمزد معاملات و تسویه حساب | ارز هشت",
  description: "در این صفحه می‌توانید اطلاعات دقیق درباره کارمزد معاملات، سطوح کاربری، زمان‌بندی برداشت ریالی و انتقال رایگان ارز دیجیتال را مشاهده کنید. صرافی ارز هشت با شفافیت کامل، بدون کارمزد پنهان، خدمات ارائه می‌دهد.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/wage",
  },
};

export default function WagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Wage />
    </>
  )
}
