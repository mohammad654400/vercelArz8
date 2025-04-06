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
              "@type": "LocalBusiness",
              "@id": "https://arz8.com/#localbusiness",
              "name": "ارز هشت",
              "url": "https://arz8.com",
              "logo": "https://arz8.com/logo.png",
              "priceRange": "$$$", 
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "مراغه جام جم، مجتمع سهند، طبقه 5",
                "addressLocality": "Maragheh",
                "addressRegion": "East Azerbaijan",
                "addressCountry": "IR"
              },
              "telephone": "+982191035288",
              "email": "info@arz8.com",
              "openingHours": "24/7",
              "sameAs": [
                "https://x.com/Arz8official",
                "https://t.me/arz8com",
                "https://www.instagram.com/arz8_official/",
                "https://www.aparat.com/arz8com",
                "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+9821-91035288",
                  "contactType": "Customer Support",
                  "areaServed": "IR",
                  "availableLanguage": ["Persian", "English"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+9821-284299",
                  "contactType": "Sales",
                  "areaServed": "IR",
                  "availableLanguage": ["Persian", "English"]
                }
              ]
            },
            {
              "@type": "SoftwareApplication",
              "@id": "https://arz8.com/#app",
              "name": "اپلیکیشن ارز هشت",
              "operatingSystem": "Android",
              "applicationCategory": "FinanceApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "IRR"
              },
              "downloadUrl": "https://cdn.arz8.com/application.apk",
              "softwareVersion": "1.0.0",
              "brand": {
                "@type": "Brand",
                "name": "ارز هشت"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1500"
              },
              "sameAs": [
                "https://myket.ir/app/com.arz8x.app.arz8x",
                "https://cafebazaar.ir/app/com.arz8x.app.arz8x"
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "ارسال تیکت پشتیبانی",
                  "url": "https://app.arz8.com/support"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "آموزش‌های صرافی",
                  "url": "https://arz8.com/faq"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "فرصت‌های شغلی",
                  "url": "https://arz8.com/job"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "قوانین و مقررات",
                  "url": "https://arz8.com/terms"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "گردونه شانس",
                  "url": "https://arz8.com/wheel-luck"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "سطوح کاربری",
                  "url": "https://arz8.com/wage"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "احراز هویت",
                  "url": "https://arz8.com/authenticate"
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "تماس با ما",
                  "url": "https://arz8.com/contact-us"
                },
                {
                  "@type": "ListItem",
                  "position": 9,
                  "name": "درباره ما",
                  "url": "https://arz8.com/about"
                },
                {
                  "@type": "ListItem",
                  "position": 10,
                  "name": "امنیت",
                  "url": "https://arz8.com/security"
                },
                {  
                  "@type": "ListItem",  
                  "position": 11, 
                  "name": "وبلاگ",  
                  "url": "https://arz8.com/blog"  
                } ,
                {  
                  "@type": "ListItem",  
                  "position": 12, 
                  "name": "دانلود اپلیکیشن",  
                  "url": "https://arz8.com/application"  
                } 
              ]
            }
          ]
        })
      }}
    />
  );
}
