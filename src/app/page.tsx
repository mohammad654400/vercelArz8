import Home from "@/sections/home/home";
import { schemaData } from "@/schemas/home-schema";

export const metadata = {
  title: "ارز هشت | صرافی آنلاین ارز دیجیتال",
  description: "ارز هشت، صرافی آنلاین برای خرید و فروش بیت‌کوین، اتریوم، تتر و بیش از ۱۳۰۰ ارز دیجیتال با قیمت لحظه‌ای، کارمزد کم، امنیت بالا و پشتیبانی ۲۴ ساعته.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://arz8.com",
  }
};

export default function HomePage() {
  return (
    <main>
      <h1 className="sr-only">
        خرید و فروش فوری بیت‌کوین، اتریوم، تتر و ۱۳۰۰+ ارز دیجیتال با قیمت لحظه‌ای، امنیت پیشرفته و تسویه آنی در ارز هشت
      </h1>



      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Home />
    </main>
  );
}
