import React from "react";

export default function FooterSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://arz8.com/#organization",
              "name": "ارز هشت",
              "url": "https://arz8.com",
              "logo": "https://arz8.com/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+9821-284299",
                  "contactType": "Customer Support",
                  "areaServed": "IR",
                  "availableLanguage": ["Persian", "English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+9821-91035288",
                  "contactType": "Sales",
                  "areaServed": "IR",
                  "availableLanguage": ["Persian", "English"]
                }
              ],
              "sameAs": [
                "https://x.com/Arz8official",
                "https://t.me/arz8com",
                "https://www.instagram.com/arz8_official/",
                "https://www.aparat.com/arz8com",
                "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w"
              ]
            },
            {
              "@type": "MobileApplication",
              "@id": "https://arz8.com/#app",
              "url": "https://arz8.com/application",
              "name": "اپلیکیشن ارز هشت",
              "operatingSystem": "ANDROID, IOS",
              "applicationCategory": "FinanceApplication",
              "downloadUrl": [
                "https://cafebazaar.ir/app/com.arz8x.app.arz8x",
                "https://myket.ir/app/com.arz8x.app.arz8x"
              ],
              "brand": {
                "@type": "Brand",
                "name": "ارز هشت"
              },
              "description":
                "دانلود اپلیکیشن صرافی ارز هشت برای معامله امن و سریع ارزهای دیجیتال با بیش از 1800 رمز ارز، پشتیبانی ۲۴ ساعته و رابط کاربری حرفه‌ای.",
              "image": "https://arz8.com/logo.jpg",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ارسال تیکت پشتیبانی",
                  "item": "https://app.arz8.com/support"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "آموزش‌های صرافی",
                  "item": "https://arz8.com/faq"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "فرصت‌های شغلی",
                  "item": "https://arz8.com/job"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "قوانین و مقررات",
                  "item": "https://arz8.com/terms"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "گردونه شانس",
                  "item": "https://arz8.com/wheel-luck"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "سطوح کاربری",
                  "item": "https://arz8.com/wage"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "احراز هویت",
                  "item": "https://arz8.com/authenticate"
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "تماس با ما",
                  "item": "https://arz8.com/contact-us"
                },
                {
                  "@type": "ListItem",
                  "position": 9,
                  "name": "درباره ما",
                  "item": "https://arz8.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 10,
                  "name": "امنیت",
                  "item": "https://arz8.com/security"
                },
                {
                  "@type": "ListItem",
                  "position": 11,
                  "name": "وبلاگ",
                  "item": "https://arz8.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 12,
                  "name": "دانلود اپلیکیشن",
                  "item": "https://arz8.com/application"
                }
              ]
            }
          ]
        })
      }}
    />
  );
}
