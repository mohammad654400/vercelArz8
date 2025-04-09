export const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://arz8.com/wage",
      "url": "https://arz8.com/wage",
      "name": "کارمزد و خدمات تسویه در ارز هشت",
      "description": "اطلاعات دقیق و شفاف درباره کارمزد معاملات، سطوح کاربری، زمان‌بندی برداشت ریالی و انتقال رایگان ارز دیجیتال در صرافی ارز هشت.",
      "inLanguage": "fa-IR",
      "mainEntity": [
        { "@id": "https://arz8.com/wage#faq" },
        { "@id": "https://arz8.com/wage#howto" },
        { "@id": "https://arz8.com/#organization" }
      ]
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
      "sameAs": [
        "https://x.com/Arz8official",
        "https://t.me/arz8com",
        "https://www.instagram.com/arz8_official/",
        "https://www.aparat.com/arz8com",
        "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://arz8.com/wage#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "کارمزد واریز و برداشت رمز ارز",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ارز هشت برای واریز و برداشت و در کل انتقال رمز ارزها هیچ‌گونه کارمزدی دریافت نمی‌کند و تمامی کارمزدها متعلق به شبکه بلاکچین است و خارج از اختیار ارز هشت است."
          }
        },
        {
          "@type": "Question",
          "name": "انتقال بین کاربری",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "کارمزدهای برداشت بر اساس کارمزدهای جهانی شبکه بلاکچین رمز ارزها محاسبه شده است و برای هریک از رمزارزها متفاوت خواهد بود."
          }
        },
        {
          "@type": "Question",
          "name": "کارمزد برداشت رمز ارز",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "کارمزد برداشت بستگی به کارمزد شبکه بلاکچین دارد و برای هر رمزارز متفاوت است."
          }
        },
        {
          "@type": "Question",
          "name": "واریز و برداشت ریال",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "واریز ریال مشمول کارمزد نمی‌باشد. برداشت‌های ریالی به علت هزینه‌های درگاه‌های پرداخت مشمول حداقل هزار تومان و حداکثر ۵ هزار تومان کارمزد می‌باشد."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://arz8.com/wage#levels",
      "name": "سطوح کاربری و کارمزدها",
      "itemListOrder": "Ascending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "سطح ۱ - ۰ تا ۱۰۰ میلیون تومان",
          "description": "۰.۳۵٪ کارمزد خرید و فروش"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "سطح ۲ - ۱۰۰ تا ۴۰۰ میلیون تومان",
          "description": "۰.۳۲٪ کارمزد خرید و فروش"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "سطح ۳ - ۴۰۰ میلیون تا ۱ میلیارد تومان",
          "description": "۰.۳٪ کارمزد خرید و فروش"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "سطح ۴ - بالای ۱ میلیارد تومان",
          "description": "۰.۲۷٪ کارمزد خرید و فروش"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://arz8.com/wage#howto",
      "name": "زمان‌بندی برداشت ریالی",
      "description": "زمان‌بندی برداشت ریالی بر اساس ساعت ثبت درخواست در ارز هشت",
      "step": [
        {
          "@type": "HowToStep",
          "name": "00:00 تا 10:00",
          "text": "واریز بین ۱۱:۳۰ تا ۱۲:۳۰"
        },
        {
          "@type": "HowToStep",
          "name": "10:00 تا 13:00",
          "text": "واریز بین ۱۳:۳۰ تا ۱۴:۳۰"
        },
        {
          "@type": "HowToStep",
          "name": "13:00 تا 18:00",
          "text": "واریز بین ۱۹:۳۰ تا ۲۰:۳۰"
        },
        {
          "@type": "HowToStep",
          "name": "18:00 تا 23:59",
          "text": "واریز بین ۰۵:۳۰ تا ۰۶:۳۰ روز بعد"
        },
        {
          "@type": "HowToStep",
          "name": "روز تعطیل",
          "text": "بدون واریز"
        }
      ]
    }
  ]
};
