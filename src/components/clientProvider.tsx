"use client";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Footer from "@/sections/footer/footer";
import FeaturesBanner from "@/sections/home/featuresBanner/featuresBanner";
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
  console.log(isHomePage);
  return (
    <ThemeProvider>
      <div className="h-screen dark:bg-dark-no-gradient bg-custom-gradient">
        <FeaturesBanner />
        <div className={isHomePage ? "bg-transparent" : "bg-white"}>
          <Header />
        </div>
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
