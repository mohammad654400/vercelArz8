import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
export default function FeaturesBanner() {
  return (
    <Link href="/download">
      <div className="w-full h-12 md:h-14 bg-[#242428] text-white  flex justify-center items-center gap-2">
        <Image
          alt="ارز هشت"
          src={logo}
          width={64}
          height={64}
          className="w-10 md:object-cover"
        />
        <p className="text-xl ">امکانات جدید ارز هشت</p>
      </div>
    </Link>
  );
}
