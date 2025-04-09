import { cardData, securitySolutions } from "@/sections/security/data";

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

export const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "امنیت در ارزهشت",
            "description":
                "در این صفحه، امکانات امنیتی پیشرفته صرافی ارزهشت معرفی می‌شود. از جمله قابلیت‌های امنیتی این سیستم می‌توان به ورود دو مرحله‌ای، استفاده از کد پین، رمزنگاری اطلاعات، و کیف‌پول‌های سرد برای حفاظت از دارایی‌های کاربران اشاره کرد. همچنین، کاربران می‌توانند از روش‌های احراز هویت مانند گوگل آتنتیکیتور و کد ورود یکبار مصرف بهره‌مند شوند تا امنیت حساب‌های خود را به بالاترین سطح برسانند.",
            "url": "https://arz8.com/security",
            "mainEntityOfPage": "https://arz8.com/security", 
            "inLanguage": "fa-IR",  
        },
        {
            "@type": "ItemList",
            "name": "امکانات امنیتی ارزهشت",
            "description": "این لیست شامل امکانات امنیتی ارائه‌شده در صرافی ارزهشت می‌باشد.",
            "itemListElement": itemList,
        },
        {
            "@type": "HowTo",
            "name": "راهکارهای امنیتی ارزهشت",
            "description": "در این بخش، مراحل و راهکارهای امنیتی که در صرافی ارزهشت برای کاربران در نظر گرفته شده است توضیح داده می‌شود.",          
            "step": howToList,
        },
    ],
};
