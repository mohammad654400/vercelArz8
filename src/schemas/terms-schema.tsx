import Head from 'next/head';

export  const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://arz8.com/terms",
                "name": "قوانین و مقررات صرافی ارز هشت",
                "description": "در این صفحه شما می‌توانید با قوانین و مقررات صرافی ارز هشت آشنا شوید و از شرایط استفاده از خدمات آن مطلع شوید.",
                "url": "https://arz8.com/terms",
                "inLanguage": "fa-IR"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "صفحه اصلی صرافی ارز هشت",
                        "item": "https://arz8.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "قوانین و مقررات",
                        "item": "https://arz8.com/terms"
                    }
                ]
            },
            {
                "@type": "LegalService",
                "name": "قوانین و مقررات صرافی ارز هشت",
                "description": "صرافی ارز هشت با ارائه پلتفرم خرید و فروش ارز دیجیتال، قوانین و شرایط استفاده از خدمات خود را مشخص کرده است.",
                "url": "https://arz8.com/terms",
                "serviceArea": "IR",
                "serviceType": "خدمات خرید و فروش ارز دیجیتال",
                "termsOfService": "https://arz8.com/terms",
                "provider": {
                    "@type": "Organization",
                    "name": "صرافی ارز هشت",
                    "url": "https://arz8.com"
                },
                "additionalType": "https://schema.org/Service",
                "serviceOutput": [
                    {
                        "@type": "WebPage",
                        "name": "پشتیبانی",
                        "url": "https://app.arz8.com/support",
                        "description": "برای دریافت کمک و پشتیبانی 24 ساعته از ارز هشت، به صفحه پشتیبانی مراجعه کنید."
                    },
                    {
                        "@type": "WebPage",
                        "name": "کیف پول",
                        "url": "https://app.arz8.com/wallets",
                        "description": "اطلاعات بیشتر در مورد کیف پول و نحوه استفاده از آن را در صفحه کیف پول پیدا کنید."
                    },
                    {
                        "@type": "WebPage",
                        "name": "احراز هویت",
                        "url": "https://arz8.com/authenticate",
                        "description": "ر صرافی ارز هشت، فرآیند احراز هویت یکی از ساده‌ترین و سریع‌ترین روش‌ها در بین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با رعایت قوانین داخلی و بین‌المللی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده تا همه افراد بتوانند در کمترین زمان ممکن از خدمات خرید و فروش ارز دیجیتال استفاده کنند."
                    },
                    {
                        "@type": "WebPage",
                        "name": "کارمزد",
                        "url": "https://arz8.com/wage",
                        "description": "سطح کاربری بر اساس حجم سفارشات خرید و فروش و ترید 30 روز گذشته بوده و هر روز راس ساعت 12 شب به روز رسانی می شود."
                    },
                    {
                        "@type": "WebPage",
                        "name": "معرفی و کسب درآمد",
                        "url": "https://app.arz8.com/referrals",
                        "description": "با ارائه لینک یا کد معرفی به دوستان خود میتوانید از کارمزد معاملات آنها کسب درآمد کنید و همچنین بخشی از این درآمد را به خود آنها اختصاص دهید که هم به نفع آنها و هم به نفع شما میباشد."
                    }
                ]
            },
        ]
    };

