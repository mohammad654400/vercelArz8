import levelsData from "@/sections/authentication/data/data";

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "احراز هویت در صرافی ارز هشت",
  "description": "فرآیند احراز هویت در صرافی ارز هشت یکی از ساده‌ترین و سریع‌ترین روش‌ها برای استفاده از خدمات خرید و فروش ارز دیجیتال است. این صرافی با رعایت قوانین داخلی و بین‌المللی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده تا همه افراد بتوانند در کمترین زمان ممکن از خدمات استفاده کنند.",
  "url": "https://arz8.com/authenticate",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://arz8.com/authenticate"
  },
  "publisher": {
    "@type": "Organization",
    "name": "صرافی ارز هشت",
    "logo": {
      "@type": "ImageObject",
      "url": "https://arz8.com/logo.png"
    }
  },
  "author": {
    "@type": "Organization",
    "name": "صرافی ارز هشت",
    "url": "https://arz8.com"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "خانه",
        "item": "https://arz8.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "احراز هویت",
        "item": "https://arz8.com/authenticate"
      }
    ]
  },
  "hasPart": levelsData.map((level, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": level.level,
    "description": `مراحل و اطلاعات مورد نیاز برای سطح ${level.level}`,
    "url": `https://arz8.com/authenticate#${level.level}`,
    "itemListElement": [
      {
        "@type": "HowToDirection",
        "text": `اطلاعات مورد نیاز: ${level.requiredInformation.join(', ')}`
      },
      {
        "@type": "HowToDirection",
        "text": `دسترسی‌ها: ${level.accessibility.join(', ')}`
      },
      {
        "@type": "HowToDirection",
        "text": `محدودیت‌ها: ${level.restrictions.join(', ')}`
      }
    ]
  })),
  "featureList": [
    {
      "@type": "PropertyValue",
      "name": "امنیت بالا",
      "value": "اطلاعات کاربران به‌صورت کاملاً محرمانه ذخیره می‌شود و با استفاده از استانداردهای روز امنیتی حفاظت می‌شود."
    },
    {
      "@type": "PropertyValue",
      "name": "سرعت در تأیید",
      "value": "مدارک کاربران کمتر از 15 دقیقه زمان می‌برد تا تأیید شود."
    },
    {
      "@type": "PropertyValue",
      "name": "امکان معامله بی‌درنگ",
      "value": "پس از تأیید هویت، کاربران می‌توانند به‌طور بلافاصله وارد معاملات ارز دیجیتال شوند."
    },
    {
      "@type": "PropertyValue",
      "name": "پشتیبانی 24 ساعته",
      "value": "تیم پشتیبانی ارز هشت به‌صورت شبانه‌روزی در دسترس شما است و آماده پاسخگویی به سوالات و مشکلات کاربران می‌باشد."
    }
  ]
};
