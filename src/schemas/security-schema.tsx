import Head from "next/head";
import Script from "next/script";
import React from "react";
import { cardData, securitySolutions } from "@/sections/security/data"; 

export default function SecuritySchema() {
    const itemList = cardData.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
    }));

    const howToList = securitySolutions.map((solution, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: solution.title,
        text: solution.description,
    }));

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            // اسکیما WebPage برای صفحه
            {
                "@type": "WebPage",
                "name": "امنیت در ارزهشت",
                "description":
                    "در این صفحه، امکانات امنیتی پیشرفته صرافی ارزهشت معرفی می‌شود. از جمله قابلیت‌های امنیتی این سیستم می‌توان به ورود دو مرحله‌ای، استفاده از کد پین، رمزنگاری اطلاعات، و کیف‌پول‌های سرد برای حفاظت از دارایی‌های کاربران اشاره کرد. همچنین، کاربران می‌توانند از روش‌های احراز هویت مانند گوگل آتنتیکیتور و کد ورود یکبار مصرف بهره‌مند شوند تا امنیت حساب‌های خود را به بالاترین سطح برسانند.",
                "url": "https://arz8.com/security",
            },
            // اسکیما ItemList برای امکانات امنیتی
            {
                "@type": "ItemList",
                "name": "امکانات امنیتی ارزهشت",
                "itemListElement": itemList,
            },
            // اسکیما HowTo برای راهکارهای امنیتی
            {
                "@type": "HowTo",
                "name": "راهکارهای امنیتی ارزهشت",
                "step": howToList,
            },
        ],
    };

    return (
        <Head>
            <meta name="description" content="در این صفحه، امکانات امنیتی پیشرفته صرافی ارزهشت معرفی می‌شود. از جمله قابلیت‌های امنیتی این سیستم می‌توان به ورود دو مرحله‌ای، استفاده از کد پین، رمزنگاری اطلاعات، و کیف‌پول‌های سرد برای حفاظت از دارایی‌های کاربران اشاره کرد. همچنین، کاربران می‌توانند از روش‌های احراز هویت مانند گوگل آتنتیکیتور و کد ورود یکبار مصرف بهره‌مند شوند تا امنیت حساب‌های خود را به بالاترین سطح برسانند." />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://arz8.com/security" />
            <meta property="og:title" content="امنیت در ارزهشت" />
            <meta property="og:description" content="در این صفحه، امکانات امنیتی پیشرفته صرافی ارزهشت معرفی می‌شود. از جمله قابلیت‌های امنیتی این سیستم می‌توان به ورود دو مرحله‌ای، استفاده از کد پین، رمزنگاری اطلاعات، و کیف‌پول‌های سرد برای حفاظت از دارایی‌های کاربران اشاره کرد. همچنین، کاربران می‌توانند از روش‌های احراز هویت مانند گوگل آتنتیکیتور و کد ورود یکبار مصرف بهره‌مند شوند." />
            <meta property="og:image" content="https://arz8.com/logo.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="امنیت در ارزهشت" />
            <meta name="twitter:description" content="در این صفحه، امکانات امنیتی پیشرفته صرافی ارزهشت معرفی می‌شود. از جمله قابلیت‌های امنیتی این سیستم می‌توان به ورود دو مرحله‌ای، استفاده از کد پین، رمزنگاری اطلاعات، و کیف‌پول‌های سرد برای حفاظت از دارایی‌های کاربران اشاره کرد." />
            <meta name="twitter:image" content="https://arz8.com/logo.jpg" />

            {/* اسکیما */}
            <Script
                id="security-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </Head>
    );
}
