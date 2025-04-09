// 'use client';

// import React from 'react';
// import Head from 'next/head';

// interface CoinSchemaProps {
//   coinName: string;        // e.g., BTC
//   coinTitle: string;       // e.g., بیت کوین (BTC)
//   coinLogo: string;        // logo URL (could be Font Awesome icon class or image URL)
//   isFontIcon: boolean;     // Whether the logo is a Font Awesome icon
//   priceUSD: string;
//   priceToman: string;
//   change24h: string;       // percent
//   description: string;     // server-rendered intro text
// }

// const DetailCoinSchema: React.FC<CoinSchemaProps> = ({
//   coinName,
//   coinTitle,
//   coinLogo,
//   isFontIcon,
//   priceUSD,
//   priceToman,
//   change24h,
//   description
// }) => {
//   const schema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebPage",
//         "@id": `https://arz8.com/price-cryptocurrencies/${coinName}`,
//         "name": `قیمت ${coinTitle}`,
//         "description": `قیمت، نمودار و اطلاعات کامل درباره ${coinTitle} در صرافی ارز هشت.`,
//         "url": `https://arz8.com/price-cryptocurrencies/${coinName}`,
//       },
//       {
//         "@type": "Cryptocurrency",
//         "name": coinTitle,
//         "symbol": coinName,
//         "image": coinLogo,
//         "price": {
//           "@type": "PriceSpecification",
//           "priceCurrency": "USD",
//           "price": priceUSD,
//         },
//         "alternateName": coinName,
//         "description": description,
//       },
//       {
//         "@type": "Article",
//         "headline": `${coinTitle} | معرفی، قیمت و خرید`,
//         "author": {
//           "@type": "Organization",
//           "name": "صرافی ارز هشت"
//         },
//         "publisher": {
//           "@type": "Organization",
//           "name": "صرافی ارز هشت",
//           "logo": {
//             "@type": "ImageObject",
//             "url": "https://arz8.com/logo.jpg"
//           }
//         },
//         "datePublished": "2025-04-06",
//         "articleBody": description,
//         "mainEntityOfPage": `https://arz8.com/price-cryptocurrencies/${coinName}`
//       },
//       {
//         "@type": "Thing",
//         "name": "قیمت‌های روز ارز دیجیتال",
//         "description": "در این صفحه علاوه بر اطلاعات کامل ${coinTitle}، لیست ارزهای جدید، پرسودترین ارزها و ابزار خرید و فروش را مشاهده کنید.",
//         "url": `https://arz8.com/price-cryptocurrencies/${coinName}`
//       }
//     ]
//   };

//   return (
//     <Head>
//       <title>{`قیمت ${coinTitle} | خرید و فروش ${coinName}`}</title>
//       <meta name="description" content={`قیمت لحظه‌ای، نمودار، ابزار خرید و معرفی کامل ${coinTitle} در صرافی ارز هشت.`} />
//       <meta name="robots" content="index, follow" />

//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={`https://arz8.com/price-cryptocurrencies/${coinName}`} />
//       <meta property="og:title" content={`قیمت ${coinTitle} | خرید و فروش ${coinName}`} />
//       <meta property="og:description" content={`در این صفحه قیمت، تحلیل، خرید و معرفی کامل ${coinTitle} را مشاهده می‌کنید.`} />
//       <meta property="og:image" content={coinLogo} />

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={`قیمت ${coinTitle} | ${coinName}`} />
//       <meta name="twitter:description" content={`تحلیل، ابزار خرید و اطلاعات کامل ${coinTitle}`} />
//       <meta name="twitter:image" content={coinLogo} />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
//     </Head>
//   );
// };

// export default DetailCoinSchema;
