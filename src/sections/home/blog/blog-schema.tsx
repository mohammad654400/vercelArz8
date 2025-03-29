import Head from "next/head";

export default function BlogSchema() {
  return (
    <Head>
      <title>بلاگ ارز هشت</title>
      <meta name="description" content="آخرین اخبار و مقالات بلاگ ارز هشت درباره بازار ارز و سایر مطالب مرتبط" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "بلاگ صرافی ارز هشت",
          "headline": "بلاگ صرافی ارز هشت",
          "description": "آخرین اخبار و مقالات بلاگ ارز هشت درباره بازار ارز و سایر مطالب مرتبط",
          "url": "https://arz8.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "صرافی ارز هشت",
            "logo": {
              "@type": "ImageObject",
              "url": "https://arz8.com/logo.png"
            }
          }
        })
      }} />
    </Head>
  );
}
