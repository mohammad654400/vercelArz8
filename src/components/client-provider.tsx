"use client";
import { ThemeProvider } from "@/contexts/theme-provider";
import Footer from "@/sections/footer/footer";
import FeaturesBanner from "@/sections/home/features-banner/features-banner";
import Header from "@/sections/home/header/header";
import { usePathname } from "next/navigation";
import React from "react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = usePathname();
  const isHomePage = route == "/" ? true : false;
  return (
    <ThemeProvider>
      <div className="h-screen dark:bg-dark-no-gradient bg-custom-gradient">
        <FeaturesBanner />
        <div
          className={
            isHomePage ? "bg-transparent" : "bg-background dark:bg-[#3C3B41]"
          }
        >
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
