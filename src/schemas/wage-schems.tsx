import Head from 'next/head';
import Script from 'next/script';

export default function WageSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "کارمزد و خدمات تسویه در ارز هشت",
        "description": "اطلاعات دقیق و شفاف درباره کارمزد معاملات، سطوح کاربری، زمان‌بندی برداشت ریالی و انتقال رایگان ارز دیجیتال در ارز هشت.",
        "url": "https://arz8.com/wage"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "کارمزد واریز و برداشت رمز ارز",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ارز هشت برای واریز و برداشت رمز ارزها هیچ‌گونه کارمزدی دریافت نمی‌کند و تمامی کارمزدها مربوط به شبکه بلاکچین است."
            }
          },
          {
            "@type": "Question",
            "name": "انتقال بین کاربری",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "انتقال ارز و تومان بین کاربران در ارز هشت بدون کارمزد انجام می‌شود."
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
              "text": "واریز ریالی رایگان است، اما برداشت ریالی دارای کارمزد بین ۱۰۰۰ تا ۵۰۰۰ تومان است."
            }
          }
        ]
      },
      {
        "@type": "Table",
        "name": "کارمزد معاملات بر اساس سطح کاربری",
        "description": "جدول کارمزد خرید و فروش بر اساس سطح کاربری در ارز هشت",
        "hasPart": [
          {
            "@type": "ItemList",
            "name": "سطح 1",
            "itemListElement": [
              "0 تا 100 میلیون تومان",
              "0.35% خرید",
              "0.35% فروش"
            ]
          },
          {
            "@type": "ItemList",
            "name": "سطح 2",
            "itemListElement": [
              "100 تا 400 میلیون تومان",
              "0.32% خرید",
              "0.32% فروش"
            ]
          },
          {
            "@type": "ItemList",
            "name": "سطح 3",
            "itemListElement": [
              "400 میلیون تا 1 میلیارد تومان",
              "0.3% خرید",
              "0.3% فروش"
            ]
          },
          {
            "@type": "ItemList",
            "name": "سطح 4",
            "itemListElement": [
              "بالای 1 میلیارد تومان",
              "0.27% خرید",
              "0.27% فروش"
            ]
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "زمان‌بندی برداشت ریالی",
        "description": "زمان‌بندی برداشت ریالی بر اساس ساعت ثبت درخواست در ارز هشت",
        "step": [
          {
            "@type": "HowToStep",
            "name": "00:00 تا 10:00",
            "text": "واریز بین 11:30 تا 12:30"
          },
          {
            "@type": "HowToStep",
            "name": "10:00 تا 13:00",
            "text": "واریز بین 13:30 تا 14:30"
          },
          {
            "@type": "HowToStep",
            "name": "13:00 تا 18:00",
            "text": "واریز بین 19:30 تا 20:30"
          },
          {
            "@type": "HowToStep",
            "name": "18:00 تا 23:59",
            "text": "واریز بین 05:30 تا 06:30 روز بعد"
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

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>کارمزد معاملات و تسویه حساب | ارز دیجیتال | ارز هشت</title>
        <meta
          name="description"
          content="مشاهده دقیق کارمزد معاملات، سطوح کاربری، زمان‌بندی برداشت ریالی و انتقال رایگان ارز دیجیتال در ارز هشت. شفافیت کامل و بدون کارمزد پنهان."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arz8.com/wage" />
        <meta property="og:title" content="کارمزد معاملات و برداشت | ارز هشت" />
        <meta
          property="og:description"
          content="جدول کامل کارمزد خرید و فروش، برداشت ریالی، سطح کاربری و انتقال رایگان در پلتفرم ارز هشت."
        />
        <meta property="og:image" content="https://arz8.com/images/og-image-wage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="کارمزد و خدمات تسویه در ارز هشت" />
        <meta
          name="twitter:description"
          content="اطلاعات دقیق و شفاف درباره کارمزد معاملات، سطوح کاربری، زمان‌بندی برداشت ریالی و انتقال رایگان ارز دیجیتال در ارز هشت."
        />
        <meta name="twitter:image" content="https://arz8.com/images/og-image-wage.png" />
        <link rel="canonical" href="https://arz8.com/wage" />
      </Head>

      {/* Structured Data Schema */}
      <Script
        id="wage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
