const staticCoins = [
    { name: "بیت کوین", symbol: "BTC" },
    { name: "اتریوم", symbol: "ETH" },
    { name: "ریپل", symbol: "XRP" },
    { name: "لایت کوین", symbol: "LTC" },
    { name: "ترون", symbol: "TRX" },
    { name: "بایننس کوین", symbol: "BNB" },
    { name: "دوج کوین", symbol: "DOGE" },
    { name: "اینترنت کامپیوتر", symbol: "ICP" },
    { name: "شیبا", symbol: "SHIB" },
    { name: "پولکادات", symbol: "DOT" },
    { name: "کاردانو", symbol: "ADA" },
    { name: "سولانا", symbol: "SOL" },
    { name: "چین لینک", symbol: "LINK" },
    { name: "یونی سواپ", symbol: "UNI" },
    { name: "آوالانچ", symbol: "AVAX" },
    { name: "نئو", symbol: "NEO" },
    { name: "فایل کوین", symbol: "FIL" },
    { name: "تون کوین", symbol: "TON" },
    { name: "بی بی دوج", symbol: "babydoge" },
    { name: "سند باکس", symbol: "SAND" },
    { name: "اتریوم کلاسیک", symbol: "ETC" },
    { name: "سویی", symbol: "SUI" },
    { name: "انس طلا", symbol: "XAUT" },
    { name: "ملانیا", symbol: "MELANIA" },
    { name: "ترامپ", symbol: "TRUMP" },
    { name: "بی بی بی ان بی", symbol: "BABYBNB" },
  ];
  
  export const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "ارز هشت",
        "url": "https://arz8.com",
        "logo": "https://arz8.com/logo.png",
        "telephone": "+982191035288",
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
            "contactType": "Customer Service",
            "areaServed": "IR",
            "availableLanguage": ["Persian", "English"]
          }
        ]
      },
      {
        "@type": "WebSite",
        "name": "ارز هشت",
        "url": "https://arz8.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://arz8.com/price-cryptocurrencies/{search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "mainEntityOfPage": "https://arz8.com"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "چگونه می‌توان ارز دیجیتال خرید؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "برای خرید ارز دیجیتال از ارز هشت، کافی است وارد سایت شوید، ثبت‌نام کنید، و سپس ارز دیجیتال خود را خریداری کنید."
            }
          },
          {
            "@type": "Question",
            "name": "چگونه می‌توان ارز دیجیتال فروخت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "برای فروش ارز دیجیتال، ابتدا باید وارد حساب خود شوید، ارز مورد نظر را انتخاب کنید و مراحل فروش را تکمیل کنید."
            }
          },
          {
            "@type": "Question",
            "name": "آیا ارز هشت از ارزهای مختلف پشتیبانی می‌کند؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "بله، ارز هشت از بسیاری از ارزهای دیجیتال معتبر مانند بیت‌کوین، اتریوم، تتر، و غیره پشتیبانی می‌کند. صرافی ارز هشت بیش از 1800 ارز رو پشتیبانی می‌کند."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "صرافی ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "خرید ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "فروش ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "بهترین صرافی ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "قیمت لحظه ای ارز دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "محبوب ترین ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "جدید ترین ارز دیجیتال",
            "item": "https://arz8.com"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "دانلود اپلیکیشن صرافی ارز دیجیتال",
            "item": "https://arz8.com/application"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "وبلاگ صرافی ارز هشت",
            "item": "https://arz8.com/blog"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "لیست کامل ارزهای دیجیتال",
        "itemListOrder": "http://schema.org/ItemListOrderDescending",
        "numberOfItems": staticCoins.length,
        "itemListElement": staticCoins.map((coin, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": coin.name,
          "url": `https://arz8.com/price-cryptocurrencies/${coin.symbol}`
        }))
      }
    ]
  };
  