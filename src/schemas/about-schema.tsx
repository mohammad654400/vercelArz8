import Head from 'next/head';

export default function AboutSchema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://arz8.com/about",
                "name": "درباره صرافی ارز هشت",
                "description": "در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم.",
                "url": "https://arz8.com/about",
                "inLanguage": "fa-IR"
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
                "description": "صرافی ارز هشت با هدف ایجاد یک پلتفرم امن و شفاف برای ارزهای دیجیتال، بهترین تجربه کاربری را در اختیار مشتریان قرار می‌دهد.",
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+9821-284299",
                        "contactType": "Customer Support",
                        "areaServed": "IR",
                        "availableLanguage": ["fa", "en"]
                    },
                    {
                        "@type": "ContactPoint",
                        "telephone": "+9821-91035288",
                        "contactType": "Sales",
                        "areaServed": "IR",
                        "availableLanguage": ["fa", "en"]
                    }
                ],
                "sameAs": [
                    "https://x.com/Arz8official",
                    "https://t.me/arz8com",
                    "https://www.instagram.com/arz8_official/",
                    "https://www.aparat.com/arz8com",
                    "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w"
                ],
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "ماموریت",
                        "value": "ایجاد فضایی امن، شفاف و کاربرپسند برای همه افرادی که به آینده ارزهای دیجیتال اعتقاد دارند."
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "ارزش‌ها",
                        "value": "شفافیت، نوآوری، و توجه به بازخورد کاربران"
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
                        "name": "درباره ما",
                        "item": "https://arz8.com/about"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "صرافی ارز دیجیتال",
                        "item": "https://arz8.com"
                    },
                ]
            }
        ]
    };

    return (
        <Head>
            <title>درباره صرافی ارز هشت</title>

            <meta name="description" content="صرافی ارز هشت با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهد." />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://arz8.com/about" />
            <meta property="og:title" content="درباره صرافی ارز هشت" />
            <meta property="og:description" content="در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم." />
            <meta property="og:image" content="https://arz8.com/logo.jpg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="درباره صرافی ارز هشت" />
            <meta name="twitter:description" content="در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم." />
            <meta name="twitter:image" content="https://arz8.com/logo.jpg" />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </Head>
    );
}
