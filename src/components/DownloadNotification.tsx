"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import logo from "@/assets/logo.png";
import IconClose from "@/assets/icons/icon-close";
import Link from "next/link";

const COOKIE_NAME = "hideDownloadNotification";
const COOKIE_EXPIRATION_DAYS = 2;

const DownloadNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Detect if user is on Android
  const isAndroid = useMemo(() => {
    return typeof window !== "undefined" && /Android/i.test(navigator.userAgent);
  }, []);

  useEffect(() => {
    // Check if the cookie is set to "true", if not, show the notification
    if (isAndroid && !Cookies.get(COOKIE_NAME)) {
      setShowNotification(true);
    }
  }, [isAndroid]);

  const hideNotification = () => {
    Cookies.set(COOKIE_NAME, "true", { expires: COOKIE_EXPIRATION_DAYS });
    setShowNotification(false);
  };

  if (!isAndroid || !showNotification) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[10000000000] w-full bg-black flex items-center justify-between px-2 py-1">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={40} height={35} />
        <div className="flex flex-col gap-px">
          <h4 className="text-[10px] font-semibold text-white">دانلود اپلیکیشن صرافی ارز هشت</h4>
          <h5 className="text-[8px] text-gray-300">معامله بیش از 1300 ارز دیجیتال</h5>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <Link
          href="/download"
          className="bg-white text-black p-[6px] text-[10px] rounded-lg"
          onClick={hideNotification} // Hide notification when the user clicks the download button
        >
          دانلود اپلیکیشن
        </Link>
        <button className="h-4 w-4 text-white" onClick={hideNotification}>
          <IconClose />
        </button>
      </div>
    </div>
  );
};

export default DownloadNotification;
