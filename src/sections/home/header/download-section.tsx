import React from "react";
import Image from "next/image";
import qrCodeDark from "@/assets/images/downloadApp/qrcode/qrcodedark.png";
import qrCodeLight from "@/assets/images/downloadApp/qrcode/qrcodelight.png";
import HalfCircle from "@/assets/icons/halfCircle";
import { useTheme } from "@/contexts/theme-provider";
import Link from "next/link";
export default function DownloadSection() {
  const { theme } = useTheme();
  return (
    <div className="relative z-50  w-[277px] h-[480px] bg-fifth dark:bg-secondary dark:bg-background rounded-xl pt-4 shadow-lg">
      <div className="absolute z-50 text-fifth dark:text-secondary left-2 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <p className="flex justify-center pb-[21px]">اسکن کنید:</p>
      <div className="flex flex-col justify-center items-center gap-2">
       <Link href="./download">
        {theme === "light" ? (
          <Image
            alt="qrcode"
            src={qrCodeDark}
            width={200}
            height={207}
            className="bg-white rounded-xl mb-8"
          />
        ) : (
          <Image
            alt="qrcode"
            src={qrCodeLight}
            width={200}
            height={207}
            className="mb-8"
          />
        )}
        </Link>
        <div className=" w-[256px] text-[13px] px-[70px] py-4 bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px] ">
          دانلود از کافه بازار
        </div>
        <div className="px-[80px] w-[256px] py-4 text-[13px] bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px]">
          دانلود از مایکت
        </div>
        <div className="mb-5 px-[80px] w-[256px] text-[13px] py-4 bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px]">
          دانلود مستقیم
        </div>
      </div>
    </div>
  );
}
