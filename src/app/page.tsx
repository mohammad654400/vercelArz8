import HomeSchema from "@/schemas/home-schema";
import Home from "@/sections/home/home";
import Head from "next/head";

export default function HomePage() {


  return (
    <>
      <HomeSchema />

      <main>
        <h1 className="sr-only">
          صرافی ارز دیجیتال ارز هشت | خرید و فروش بیت کوین، اتریوم، تتر و سایر ارزهای دیجیتال با بهترین قیمت لحظه‌ای، امنیت فوق‌العاده و تسویه آنی در سریع‌ترین زمان
        </h1>
        <Home />
      </main>
    </>
  );
}

