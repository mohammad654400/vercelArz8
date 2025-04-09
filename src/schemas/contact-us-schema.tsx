export const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://arz8.com/contact-us",
        "url": "https://arz8.com/contact-us",
        "name": "تماس با پشتیبانی صرافی ارزهشت",
        "description": "صفحه تماس با پشتیبانی صرافی ارزهشت برای سوالات، پیشنهادات و درخواست‌های پشتیبانی.",
        "inLanguage": "fa-IR",
        "breadcrumb": {
          "@id": "https://arz8.com/contact-us#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://arz8.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://arz8.com/#organization",
        "name": "صرافی ارز هشت",
        "url": "https://arz8.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://arz8.com/logo.png"
        },
        "email": "info@arz8.com",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "مراغه، جام جم، مجتمع سهند، طبقه ۵",
            "addressLocality": "مراغه",
            "addressCountry": "IR"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "مشهد، صاحب الزمان ۲۸، ساختمان رضوان، طبقه ۲",
            "addressLocality": "مشهد",
            "addressCountry": "IR"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+9821284299",
            "areaServed": "IR",
            "availableLanguage": ["fa"]
          },
          {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+982191035288",
            "areaServed": "IR",
            "availableLanguage": ["fa"]
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
        "@type": "BreadcrumbList",
        "@id": "https://arz8.com/contact-us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "صفحه اصلی",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "تماس با ما",
            "item": "https://arz8.com/contact-us"
          }
        ]
      }
    ]
  };
  