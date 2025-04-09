import Home from "@/sections/home/home";
import { schemaData } from "@/schemas/home-schema";

export const metadata = {
  title: "ارز هشت - خرید و فروش ارز دیجیتال | صرافی آنلاین ارز دیجیتال",
  description: "صرافی ارز8، بستری امن برای خرید و فروش بیش از 1800 ارز دیجیتال با قیمت‌های لحظه‌ای و کارمزد کم. پلتفرم معاملاتی پیشرفته برای تریدرهای حرفه‌ای.",
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
    <>
    
      <main>
        <h1 className="sr-only">
          صرافی ارز دیجیتال ارز هشت | خرید و فروش بیت کوین، اتریوم، تتر و سایر ارزهای دیجیتال با بهترین قیمت لحظه‌ای، امنیت فوق‌العاده و تسویه آنی در سریع‌ترین زمان
        </h1>

        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <Home />
      </main>
    </>
  );
}
