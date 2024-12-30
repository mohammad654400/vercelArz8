import React from "react";
import Image from "next/image";
import qrCode from '@/assets/images/qrcode.png'
import HalfCircle from "@/assets/icons/halfCircle";
export default function DownloadSection() {
  return (
    <div className="relative z-50  w-[277px] bg-background dark:bg-background rounded-lg pt-4 shadow-lg">
      <div className="absolute z-50 text-background left-2 rounded-xl -top-3 "> 
      <HalfCircle/>
      </div>
     <div className="flex flex-col justify-center items-center gap-2">
     <Image alt="qrcode" src={qrCode} width={200} className="bg-white rounded-xl p-5" />
     <div className="mt-5 w-[256px] text-[13px] px-[70px] py-4 bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px] ">دانلود از کافه بازار</div>
     <div className="px-[80px] w-[256px] py-4 text-[13px] bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px]">دانلود از مایکت</div>
     <div className="mb-5 px-[80px] w-[256px] text-[13px] py-4 bg-[#F6F6F6] dark:bg-[#302F34] rounded-[10px]">دانلود مستقیم</div>
     </div>
    </div>
  );
}
