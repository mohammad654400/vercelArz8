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
      <head></head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
