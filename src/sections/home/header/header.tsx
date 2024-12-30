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
  
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="">
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
        ${isScrolled ? " bg-secondary shadow-sm top-0 " : "bg-transparent"}
      `}
      >
        <div className="flex items-center justify-between pl-[27px] pr-[20px]  md:px-6 h-20">
          {/* right section --------------------------------- */}
          <div
            onClick={toggleOpen}
            className="cursor-pointer flex justify-center items-center xl:hidden"
          >
            <BarIcon />
          </div>
          <div className="flex justify-center  items-center h-full ">
            <Link href="/">
              <div className="flex justify-center gap-1 items-center">
                <Image
                  alt="ارز هشت"
                  src={logo}
                  layout=""
                  property="false"
                  className="w-[64px] h-[64px] md:object-cover md:w-16"
                />
                <h1 className="text-[34px] font-extrabold">
                  ارزهشت
                </h1>
              </div>
            </Link>
            <div className="hidden xl:flex w-full h-full">
              <Menu />
            </div>
          </div>
          {/* left section --------------------------------- */}
          <div className="flex justify-center items-center gap-[24px] h-full md:gap-">
            <div className="hidden xl:flex text-foreground text-[19px] w-[190px] h-[50px] mx-auto bg-primary rounded-lg cursor-pointer flex justify-center items-center ">
              <p>ورود یا عضویت</p>
            </div>
            <div className="flex justify-center items-center cursor-pointer group h-full ">
              <span>
                <Downlaod />
              </span>
              <div className="hidden absolute left-10 top-[80px] group-hover:block z-50 ">
                <DownloadSection />
              </div>
            </div>
            <div className="cursor-pointer " onClick={toggleTheme}>
              {theme == "light" ? <Moon />:<Sun /> }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
