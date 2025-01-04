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
import SaidBar from "./menu/sideBar";
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
  
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div>
      <div className="relative z-50 transition-[max-w-249px] duration-500 ease-in-out">
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
        bg-background
        ${isScrolled ? "bg-secondary shadow-sm top-0 " : "md:bg-transparent  bg-secondary"}
      `}
      >
        <div className="flex items-center self-center justify-between px-[14px]  md:px-6 h-14  md:h-[78px] ">
          {/* right section --------------------------------- */}
          <div
            onClick={toggleOpen}
            className="cursor-pointer flex justify-center items-center xl:hidden"
          >
            <BarIcon />
          </div>
          {/*central section --------------------------------- */}
          <div className="flex justify-center mr-6 md:mr-0  items-center h-full ">
            <Link href="/">
              <div className="flex justify-center gap-1 items-center">
                <Image
                  alt="ارز هشت"
                  src={logo}
                  layout=""
                  property="false"
                  className="md:w-[64px] md:h-[64px] md:object-cover w-[31px] h-[31px] "
                />
                <h1 className="text-[17px] md:text-[34px] font-extrabold">
                  ارزهشت
                </h1>
              </div>
            </Link>
            <div className="hidden xl:flex w-full h-full">
              <Menu />
            </div>
          </div>
          {/* left section --------------------------------- */}
          <div className="flex justify-center items-center md:gap-[24px] gap-[9px] h-full md:gap-">
            <div className="hidden xl:flex text-foreground text-[19px] w-[190px] h-[50px] mx-auto bg-primary rounded-lg cursor-pointer flex justify-center items-center ">
              <Link href='https://app.arz8.com/auth/login'>
              <p>ورود یا عضویت</p>
              </Link>
            </div>
            <div className="flex justify-center items-center cursor-pointer group h-full  ">
              <span className="md:w-[42px] md:h-[42px] w-[30px] h-[30px] mt-1 md:mt-0">
                <Downlaod />
              </span>
              <div className="hidden absolute left-10 top-[80px] group-hover:block z-50 ">
                <DownloadSection />
              </div>
            </div>
            <div className="cursor-pointer pr-1  md:pr-0 -order-1 md:order-1" onClick={toggleTheme} >
              {theme == "light" ? <div className="md:w-[42px] l-1 md:h-[42px] w-[25px] h-[25px] mt-1 md:mt-0"><Moon /></div>
              :<div className="md:w-[38px] md:h-[38px] w-[30px] h-[30px]"><Sun /></div> }
            </div>
            <span className="xl:hidden  w-[30px] h-[30px]">
              <UserIcon/>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
