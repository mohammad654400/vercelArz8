import type { Metadata } from "next";
import "@/style/globals.css";
import ClientProvider from "@/components/client-provider";

export const metadata: Metadata = {
  title: "ارز هشت - خرید و فروش ارز دیجیتال-صرافی آنلاین ارز دیجیتال",
  description: "صرافی ارز8، بستری امن برای خرید و فروش بیش از 1800 ارز دیجیتال با قیمت‌های لحظه‌ای و کارمزد کم.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        {/* Google reCAPTCHA */}
        {/* <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        /> */}

        {/* Goftino Chat Widget */}
        {/* <Script
          id="goftino-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function () {
        var i = "eh7SlC", a = window, d = document;
        function g() {
          var g = d.createElement("script"), s = "https://www.goftino.com/widget/" + i,
          l = localStorage.getItem("goftino_" + i);
          g.async = !0, g.src = l ? s + "?o=" + l : s;
          d.getElementsByTagName("head")[0].appendChild(g);
        }
        "complete" === d.readyState ? g() : a.attachEvent 
          ? a.attachEvent("onload", g) 
          : a.addEventListener("load", g, !1);
      }();
      
      window.addEventListener("goftino_ready", () => {
        if (typeof Helper !== "undefined" && Helper.computed.isUserLoggedIn()) {
          var user = Helper.computed.activeUserInfo();
          Goftino.setUser({
            about: "پشتیبانی از طریق صفحه اصلی",
          });
        }
      });
    `,
          }}
        /> */}
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
