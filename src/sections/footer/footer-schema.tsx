import React from "react";

export default function FooterSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ارزهشت",
          "url": "https://arz8.com",
          "logo": "https://arz8.com/logo.png",
          "sameAs": [
            "https://x.com/Arz8official",
            "https://t.me/arz8com",
            "https://www.instagram.com/arz8_official/",
            "https://www.aparat.com/arz8com",
            "https://www.youtube.com/channel/UCD1InrQ1dXUdUtSORnjp68w"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+9821-91035288",
              "contactType": "Customer Support",
              "areaServed": "IR",
              "availableLanguage": "Persian"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+9821-284299",
              "contactType": "Sales",
              "areaServed": "IR",
              "availableLanguage": "Persian"
            }
          ]
        }),
      }}
    />
  );
}
