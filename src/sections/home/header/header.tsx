"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Menu from "./menu/menu";
import Downlaod from "@/assets/icons/downlaod";
import Moon from "@/assets/icons/moon";
import { useTheme } from "@/contexts/ThemeProvider";
import DownloadSection from "./downloadSection";
import Sun from "@/assets/icons/sun";
import BarIcon from "@/assets/icons/bar";
import SaidBar from "./menu/saidbar";
export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const [open,setOpen] =useState(false)
  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  }
  return (
    <div className="flex items-center justify-between px-6 h-20">
      {/* right section --------------------------------- */}
      <div onClick={toggleOpen} className="cursor-pointer xl:hidden">
        <BarIcon />
      </div>
      {open && <SaidBar close={toggleOpen}/>}
      <div className="flex justify-center items-center h-full w-full ">
        <Link href="/">
          <div className="flex justify-center items-center gap-2 ">
            <Image alt="ارز هشت" src={logo} width={64} height={64} />
            <h1 className="text-[30px] font-extrabold">ارزهشت</h1>
          </div>
        </Link>
        <div className="hidden xl:flex w-full">
          <Menu />
        </div>
      </div>
      {/* left section --------------------------------- */}
      <div className="flex justify-center items-center gap-6 h-full">
        <div className="hidden xl:block  text-[14px] w-[120px] py-4 text-center   bg-primary rounded-lg cursor-pointer ">
          ورود یا عضویت
        </div>
        <div className="flex justify-center items-center cursor-pointer group h-full ">
          <Downlaod />
          <div className="hidden absolute left-10 top-36 group-hover:block ">
            <DownloadSection />
          </div>
        </div>
        <div className="cursor-pointer " onClick={toggleTheme}>
          {theme == "light" ? <Moon /> : <Sun />}
        </div>
      </div>
    </div>
  );
}
