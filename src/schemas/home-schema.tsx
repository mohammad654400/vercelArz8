import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

export default function HomeSchema() {
    return (
        <Head>
            <title>صرافی ارز دیجیتال - خرید و فروش ارزهای دیجیتال</title>
            <meta name="description" content="ارز هشت یک صرافی ارز دیجیتال است که به شما امکان خرید و فروش ارزهای دیجیتال با بهترین قیمت، امنیت بالا و تسویه آنی را می‌دهد." />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://arz8.com" />

            <Script
                id="schema-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "name": "ارز هشت",
                                "url": "https://arz8.com",
                                "logo": "https://arz8.com/logo.png",
                                "email": "info@arz8.com",
                                "sameAs": [
                                    "https://x.com/Arz8official",
                                    "https://t.me/arz8com",
                                    "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w",
                                    "https://www.instagram.com/arz8_official",
                                    "https://www.aparat.com/arz8com"
                                ],
                                "contactPoint": [
                                    {
                                        "@type": "ContactPoint",
                                        "telephone": "+982191035288",
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
                                    "target": "https://arz8.com/search?q={search_term_string}",
                                    "query-input": "required name=search_term_string"
                                },
                                "mainEntityOfPage": "https://arz8.com",
                            }
                        ]
                    })
                }}
            />
        </Head>

    )
}
