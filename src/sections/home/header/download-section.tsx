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
    <div className="relative z-50  w-[277px] h-[440px] bg-fifth dark:bg-secondary  rounded-xl pt-4 shadow-lg">
      <div className="absolute z-50 text-fifth dark:text-secondary left-2 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <p className="flex justify-center pb-[21px]">اسکن کنید:</p>
      <nav className="flex flex-col justify-center items-center gap-2">
       <Link href="./application">
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
        <Link  href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"} className=" w-[256px] text-[13px] px-[70px] py-4 bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px] 
         duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(47,161,37)] dark:hover:bg-[rgb(47,161,37)]  active:translate-y-0 
        ">
          دانلود از کافه بازار
        </Link>
        <Link href={"https://myket.ir/app/com.arz8x.app.arz8x"} className="px-[80px] w-[256px] py-4 text-[13px] bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px]
         duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[#0091EA] dark:hover:bg-[#0091EA]  active:translate-y-0 
        ">
          دانلود از مایکت
        </Link>
      </nav>
    </div>
  );
}
