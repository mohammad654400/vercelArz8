import React from 'react';
import ContactUs from "@/sections/contact-us/contact-us";
import { schemaData } from "@/schemas/contact-us-schema";

export const metadata = {
  title: "تماس با صرافی ارز هشت | پشتیبانی ارز دیجیتال | خرید و فروش ارز دیجیتال | ارز هشت",
  description: "تماس با پشتیبانی صرافی ارز هشت برای دریافت کمک و مشاوره در زمینه خرید و فروش ارز دیجیتال. پشتیبانی آنلاین و سریع برای پاسخ به سوالات شما.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />


      <ContactUs />
    </>
  );
}