import Job from '@/sections/job/job'
import { schemaData } from '@/schemas/job-schema' 
import React from 'react'

export const metadata = {
  title: "فرصت های شغلی صرافی ارز هشت | ارز هشت",
  description: "صرافی ارز هشت بستری خلاقانه برای شکوفایی و پرورش استعدادها با فرصت‌های شغلی در زمینه‌های مختلف",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/job",
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Job />
    </>
  )
}

