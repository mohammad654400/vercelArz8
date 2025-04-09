import Terms from '@/sections/terms/terms'
import { schemaData } from '@/schemas/terms-schema'
import React from 'react'


export const metadata = {
  title: "قوانین و مقررات صرافی ارز هشت | خرید و فروش ارز دیجیتال | ارز هشت",
  description: "در این صفحه شما می‌توانید با قوانین و مقررات صرافی ارز هشت آشنا شوید و از شرایط استفاده از خدمات آن مطلع شوید.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/terms",
  },
};

export default function RulesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Terms />
    </>
  )
}
