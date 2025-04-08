import Head from "next/head";

export default function DownloadAppSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "دانلود اپلیکیشن صرافی ارز هشت",
        "description":
          "با اپلیکیشن صرافی ارز هشت به دنیای خرید و فروش بیش از 1800 ارز دیجیتال وارد شوید. احراز هویت سریع، پشتیبانی ۲۴ ساعته و رابط کاربری حرفه‌ای.",
        "url": "https://arz8.com/application",
      },
      {
        "@type": "Organization",
        "name": "صرافی ارز هشت",
        "url": "https://arz8.com",
        "logo": "https://arz8.com/logo.jpg",
        "description":
          "صرافی ارز هشت با هدف ایجاد یک پلتفرم امن و شفاف برای ارزهای دیجیتال، بهترین تجربه کاربری را در اختیار مشتریان قرار می‌دهد.",
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
    ]
  };

  return (
    <Head>
      <title>دانلود اپلیکیشن صرافی ارز هشت | خرید و فروش ارز دیجیتال</title>
      <meta
        name="description"
        content="با اپلیکیشن صرافی ارز هشت به دنیای خرید و فروش بیش از 1800 ارز دیجیتال وارد شوید. احراز هویت سریع، پشتیبانی ۲۴ ساعته و رابط کاربری حرفه‌ای."
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://arz8.com/application" />
      <meta
        property="og:title"
        content="دانلود اپلیکیشن صرافی ارز هشت"
      />
      <meta
        property="og:description"
        content="با اپلیکیشن صرافی ارز هشت به دنیای خرید و فروش بیش از 1800 ارز دیجیتال وارد شوید."
      />
      <meta
        property="og:image"
        content="https://arz8.com/logo.jpg"
      />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="دانلود اپلیکیشن صرافی ارز هشت" />
      <meta
        name="twitter:description"
        content="با اپلیکیشن صرافی ارز هشت به دنیای خرید و فروش بیش از 1800 ارز دیجیتال وارد شوید."
      />
      <meta
        name="twitter:image"
        content="https://arz8.com/logo.jpg"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </Head>
  );
}
