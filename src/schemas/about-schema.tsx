import Head from 'next/head';

export default function AboutSchema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [

            {
                "@type": "WebPage",
                "name": "درباره صرافی ارز هشت",
                "description": "در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم.",
                "url": "https://arz8.com/about",
            },

            {
                "@type": "Organization",
                "name": "صرافی ارز هشت",
                "url": "https://arz8.com",
                "logo": "https://arz8.com/logo.jpg",
                "description": "صرافی ارز هشت با هدف ایجاد یک پلتفرم امن و شفاف برای ارزهای دیجیتال، بهترین تجربه کاربری را در اختیار مشتریان قرار می‌دهد."
            },

            {
                "@type": "MissionAction",
                "name": "ماموریت صرافی ارز هشت",
                "description": "ایجاد فضایی امن، شفاف و کاربرپسند برای همه افرادی که به آینده ارزهای دیجیتال اعتقاد دارند.",
                "target": {
                    "@type": "Audience",
                    "audienceType": "عموم کاربران علاقه‌مند به ارزهای دیجیتال"
                },
                "url": "https://arz8.com/about#mission"
            },

            {
                "@type": "Thing",
                "name": "ارزش‌های صرافی ارز هشت",
                "description": "شفافیت در تمامی مراحل و فرآیندها، ارائه راهکارهای جدید و پیشرفته برای آسان‌تر کردن معاملات، و همیشه گوش به نیازها و بازخوردهای کاربران بودن.",
                "url": "https://arz8.com/about#values"
            }
        ]
    };

    return (
        <Head>

            <meta name="description" content="صرافی ارز هشت با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهد." />
            <meta name="robots" content="index, follow" />


            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://arz8.com/about" />
            <meta property="og:title" content="درباره صرافی ارز هشت" />
            <meta property="og:description" content="در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم." />
            <meta property="og:image" content="https://arz8.com/logo.jpg" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="درباره صرافی ارز هشت" />
            <meta name="twitter:description" content="در این صفحه با صرافی ارز هشت آشنا می‌شوید. ما با هدف ایجاد یک پلتفرم امن و شفاف برای معاملات ارزهای دیجیتال، خدمات نوآورانه‌ای را به معامله‌گران و سرمایه‌گذاران ارائه می‌دهیم." />
            <meta name="twitter:image" content="https://arz8.com/logo.jpg"/>


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </Head>
    );
}
