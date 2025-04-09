import About from "@/sections/about/About";
import { schemaData } from "@/schemas/about-schema";

export const metadata = {
  title: "درباره صرافی ارز هشت | خرید و فروش ارز دیجیتال | ارز هشت ",
  description: "صرافی ارزهشت با هدف فراهم کردن پلتفرمی امن و پیشرفته برای معامله‌گران و سرمایه‌گذاران ارزهای دیجیتال راه‌اندازی شده است. تیم ما متشکل از متخصصان با تجربه در بلاکچین، امنیت اطلاعات و بازارهای مالی است و تلاش می‌کند بهترین خدمات را به شما ارائه دهد.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://arz8.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <About />
    </>
  );
}
