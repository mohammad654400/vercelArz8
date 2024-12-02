"use client"
import Image from "next/image";
import React from "react";
import logo from '@/assets/logo.png'
import Link from "next/link";
import Menu from "./menu/menu";
import Downlaod from "@/assets/icons/downlaod";
import Moon from "@/assets/icons/moon";
import { useTheme } from "@/contexts/ThemeProvider";
import DownloadSection from "./downloadSection";
import Sun from "@/assets/icons/sun";
export default function Header() {
  const {toggleTheme,theme} = useTheme()
  return (
    <div className="flex items-center justify-between px-6 h-20">
      {/* right section --------------------------------- */}
      <div className="flex justify-center items-center h-full ">
        <Link href='/'>
        <div className="flex items-center gap-2 "> 
          <Image alt="ارز هشت" src={logo} width={64} height={64} />
          <h1 className="text-[30px] font-extrabold">ارزهشت</h1>
        </div>
        </Link>
        <Menu/>
      </div>
      {/* left section --------------------------------- */}
      <div className="flex justify-center items-center gap-7 h-full">
        <div className="hidden lg:block px-8 py-3 bg-primary rounded-lg cursor-pointer ">
         ورود یا عضویت
        </div>
        <div className="flex justify-center items-center cursor-pointer group h-full ">
          <Downlaod/>
          <div className="hidden absolute left-10 top-36 group-hover:block ">
           <DownloadSection/>
          </div>
        </div>
        <div className="cursor-pointer " onClick={toggleTheme}>
          {theme=='light'?<Moon/>:<Sun/>}
        </div>
      </div>
    </div>
  );
}
