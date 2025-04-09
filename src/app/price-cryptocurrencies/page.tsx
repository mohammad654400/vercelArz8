import Coin from "@/sections/coin/coin";
import { schemaData } from "@/schemas/coin-schema";
import React from "react";

export const metadata = {
  title: "صرافی ارز هشت | قیمت ارزهای دیجیتال |قیمت لحظه‌ای ارز دیجیتال | خرید و فروش ارز دیجیتال | صرافی آنلاین ارز دیجیتال | ارز هشت",
  description: "مشاهده لیست قیمت لحظه‌ای بیش از 1800 ارز دیجیتال در صرافی ارز هشت. امکان فیلتر، مرتب‌سازی و جستجو برای انتخاب بهترین ارزها با قیمت‌های به‌روز.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/price-cryptocurrencies",
  },
};


export default function CoinsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Coin />
    </>
  );
}
