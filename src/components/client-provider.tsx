"use client";

import { ThemeProvider } from "@/contexts/theme-provider";
import Footer from "@/sections/footer/footer";
import FeaturesBanner from "@/sections/home/features-banner/features-banner";
import Header from "@/sections/home/header/header";
import { usePathname, useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState, useEffect, useRef } from "react";
import DownloadNotification from "./DownloadNotification";

// Extend the Window interface to include Goftino
declare global {
  interface Window {
    Goftino?: {
      destroy?: () => void;
    };
  }
}

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [queryClient] = useState(() => new QueryClient());
  const prevPathRef = useRef(pathname);
  const goftinoInitializedRef = useRef(false);

  // Function to clean up Goftino elements
  const cleanupGoftinoElements = () => {
    console.log("Cleaning up Goftino elements");

    try {
      // Try to call destroy if available
      if (window.Goftino && typeof window.Goftino.destroy === 'function') {
        window.Goftino.destroy();
      }
    } catch (e) {
      console.error("Error destroying Goftino:", e);
    }

    // Remove all scripts
    const scripts = document.querySelectorAll('script[src*="goftino"]');
    scripts.forEach(el => el.remove());

    // Remove all elements
    ['[id^="goftino_"]', 'iframe[src*="goftino"]', 'div[class*="goftino"]', '#goftino_w'].forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Set a flag
    goftinoInitializedRef.current = false;

    // Clear any localStorage entries
    localStorage.setItem("goftino_removed_timestamp", Date.now().toString());
  };

  // This function will load Goftino
  const loadGoftino = () => {
    console.log("Loading Goftino");
    if (goftinoInitializedRef.current) {
      console.log("Goftino already initialized, skipping");
      return;
    }

    cleanupGoftinoElements(); // Clean up first to avoid duplicates

    const i = "eh7SlC";
    const script = document.createElement("script");
    script.id = "goftino_loader";
    script.async = true;

    const l = localStorage.getItem(`goftino_${i}`);
    const s = `https://www.goftino.com/widget/${i}`;
    script.src = l ? `${s}?o=${l}` : s;

    document.head.appendChild(script);
    goftinoInitializedRef.current = true;

    console.log("Goftino script added to DOM");
  };

  // Handle initial load and client-side navigation
  useEffect(() => {
    // If we're on homepage, load Goftino
    if (isHomePage) {
      // Use a small timeout to ensure DOM is ready
      setTimeout(loadGoftino, 100);
    }
    // If we've navigated away from homepage, clean up
    else if (prevPathRef.current === "/") {
      cleanupGoftinoElements();
    }

    // Update ref for next change
    prevPathRef.current = pathname;

    // Listen for Next.js route change complete events
    const handleRouteChangeComplete = () => {
      const url = window.location.pathname;
      console.log(`Route change completed to: ${url}`);
      if (url === "/") {
        setTimeout(loadGoftino, 100);
      } else if (prevPathRef.current === "/") {
        cleanupGoftinoElements();
      }
    };

    // Add event listener for route changes
    window.addEventListener('popstate', handleRouteChangeComplete);

    return () => {
      // Clean up event listener
      window.removeEventListener('popstate', handleRouteChangeComplete);
    };
  }, [pathname, isHomePage, router]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="h-screen dark:bg-dark-no-gradient bg-custom-gradient">
          <div className={isHomePage ? "bg-transparent" : "bg-background dark:bg-[#3C3B41]"}>
            <Header />
            {children}
          </div>
          <Footer />
          <DownloadNotification />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}