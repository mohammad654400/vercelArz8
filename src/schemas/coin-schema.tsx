import Head from "next/head";

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

export default function CoinsSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "قیمت و لیست کامل ارزهای دیجیتال | صرافی ارز هشت",
        description:
          "جدیدترین قیمت ارزهای دیجیتال، ارزهای با بیشترین سود و ضرر، و لیست کامل رمزارزها با قابلیت جستجو و فیلتر در صرافی ارز هشت.",
        url: "https://arz8.com/price-cryptocurrencies",
      },
      {
        "@type": "ItemList",
        name: "لیست کامل ارزهای دیجیتال",
        itemListOrder: "http://schema.org/ItemListOrderDescending",
        numberOfItems: staticCoins.length,
        itemListElement: staticCoins.map((coin, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: coin.name,
          url: `https://arz8.com/price-cryptocurrencies/${coin.symbol}`,
        })),
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
            "name": "بیشترین رشد ارز های دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "بیشترین ضرر ارز های دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "جدیدترین ارز های دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "محبوب ترین ارز های دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "قیمت و لیست کامل ارز های دیجیتال",
            "item": "https://arz8.com/price-cryptocurrencies"
          },
        ]
      },
      {
        "@type": "Article",
        headline: "صرافی ارز هشت | خرید و فروش ارز دیجیتال",
        author: {
          "@type": "Organization",
          name: "صرافی ارز هشت",
        },
        publisher: {
          "@type": "Organization",
          name: "صرافی ارز هشت",
        },
        datePublished: "2025-04-06",
        articleBody: `قیمت و لیست کامل ارزهای دیجیتال خرید و فروش در صرافی ارز هشت.
به صرافی ارز هشت خوش آمدید! ما در اینجا تجربه‌ای سریع، امن و حرفه‌ای از خرید و فروش ارزهای دیجیتال را برای شما فراهم کرده‌ایم. اگر به دنبال یک پلتفرم مطمئن برای انجام معاملات رمزارزها هستید، جای درستی آمده‌اید! با ما همراه باشید تا با ویژگی‌های منحصربه‌فرد و خدمات پیشرفته‌ی ما بیشتر آشنا شوید.`,
      },
    ],
  };

  return (
    <Head>
      {/* Meta Tags */}
      <title>قیمت ارزهای دیجیتال | صرافی ارز هشت</title>
      <meta
        name="description"
        content="لیست قیمت لحظه‌ای ارزهای دیجیتال همراه با امکان فیلتر، مرتب‌سازی و جستجو در صرافی ارز هشت."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://arz8.com/price-cryptocurrencies" />
      <meta property="og:title" content="قیمت ارزهای دیجیتال | صرافی ارز هشت" />
      <meta
        property="og:description"
        content="لیست قیمت و مشخصات کامل ارزهای دیجیتال به همراه توضیحاتی درباره صرافی ارز هشت."
      />
      <meta property="og:image" content="https://arz8.com/logo.jpg" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="قیمت ارزهای دیجیتال | صرافی ارز هشت" />
      <meta
        name="twitter:description"
        content="جدول قیمت‌ها، رمزارزهای سودده و جدیدترین ارزهای قابل معامله در صرافی ارز هشت."
      />
      <meta name="twitter:image" content="https://arz8.com/logo.jpg" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
}
