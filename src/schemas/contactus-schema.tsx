import Head from 'next/head';

export default function ContactUsSchema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://arz8.com/contact-us",  // اصلاح شده
        },
        "name": "تماس با پشتیبانی صرافی ارزهشت",
        "url": "https://arz8.com/contact-us",  // اصلاح شده
        "description": "صفحه تماس با پشتیبانی صرافی ارزهشت برای سوالات، پیشنهادات و درخواست‌های پشتیبانی.",
        "contactOption": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": [
                "+9821284299",
                "+982191035288"
            ],
            "areaServed": "IR",
            "availableLanguage": "fa",
            "email": "info@arz8.com",
        },
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "مراغه جام جم ، مجتمع سهند ، طبقه 5",
                "addressLocality": "مراغه",
                "addressCountry": "IR",
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "مشهد صاحب الزمان 28 ساختمان رضوان ، طبقه 2",
                "addressLocality": "مشهد",
                "addressCountry": "IR",
            },
        ],
        "sameAs": [
            "https://x.com/Arz8official",
            "https://t.me/arz8com",
            "https://www.instagram.com/arz8_official/",
            "https://www.aparat.com/arz8com",
            "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w",
        ],
    };

    return (
        <Head>
            {/* Meta Data for SEO */}
            <meta name="description" content="تماس با پشتیبانی صرافی ارزهشت برای سوالات، پیشنهادات و درخواست‌های پشتیبانی. تماس تلفنی و آنلاین با تیم پشتیبانی ما." />
            <meta name="robots" content="index, follow" />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://arz8.com/contact-us" />
            <meta property="og:title" content="تماس با پشتیبانی صرافی ارزهشت" />
            <meta property="og:description" content="صفحه تماس با پشتیبانی صرافی ارزهشت برای سوالات، پیشنهادات و درخواست‌های پشتیبانی." />
            <meta property="og:image" content="https://arz8.com/logo.jpg" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="تماس با پشتیبانی صرافی ارزهشت" />
            <meta name="twitter:description" content="صفحه تماس با پشتیبانی صرافی ارزهشت برای سوالات، پیشنهادات و درخواست‌های پشتیبانی." />
            <meta name="twitter:image" content="https://arz8.com/logo.jpg" />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </Head>
    );
}
