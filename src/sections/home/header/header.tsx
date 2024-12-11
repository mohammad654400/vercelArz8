"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
import { space } from "postcss/lib/list";
import UserIcon from "@/assets/icons/user";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative z-50">
        {open && <SaidBar close={toggleOpen} />}
      </div>
      <header
        className={`
        fixed
        top-49 
        left-0 
        right-0 
        z-30
        transition-all 
        duration-500 
        ${isScrolled ? " backdrop-blur-lg shadow-sm top-0" : "bg-transparent"}
      `}
      >
        <div className="flex items-center justify-between px-3  md:px-6 h-20">
          {/* right section --------------------------------- */}
          <div
            onClick={toggleOpen}
            className="cursor-pointer flex justify-center items-center xl:hidden"
          >
            <BarIcon />
          </div>
          <div className="flex justify-center  items-center h-full ">
            <Link href="/">
              <div className="flex justify-center items-center gap-2  ">
                <Image
                  alt="ارز هشت"
                  src={logo}
                  layout=""
                  className="w-8 h-8 md:object-cover md:w-16"
                />
                <h1 className="text-[20px] md:text-[30px] font-extrabold">
                  ارزهشت
                </h1>
              </div>
            </Link>
            <div className="hidden xl:flex w-full h-full">
              <Menu />
            </div>
          </div>
          {/* left section --------------------------------- */}
          <div className="flex justify-center items-center gap-3 h-full md:gap-6">
            <div className="hidden xl:block  text-[14px] w-[150px] py-3 text-center bg-primary rounded-lg cursor-pointer ">
              ورود یا عضویت
            </div>
            <div className="flex justify-center items-center cursor-pointer group h-full ">
              <span className="w-7">
                <Downlaod />
              </span>
              <div className="hidden absolute left-10 top-[80px] group-hover:block z-50 ">
                <DownloadSection />
              </div>
            </div>
            <div className="cursor-pointer " onClick={toggleTheme}>
              {theme == "light" ? <Moon /> : <Sun />}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
