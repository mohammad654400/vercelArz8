import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Phone from "@/assets/images/downloadApp/phone.png";
import Android from "@/assets/icons/downloadApp/android";
import GooglePlay from "@/assets/icons/downloadApp/googlePlay";
import Myket from "@/assets/icons/downloadApp/miket";
import CafeBazar from "@/assets/icons/downloadApp/cafeBazar";
import Web from "@/assets/icons/downloadApp/web";
import BG from "@/assets/images/downloadApp/bg.png";
import QrCode from "@/assets/images/qrCodeImage.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full  self-center">
      <div className="w-full bg-[#242428] h-[310px] sm:h-[400px] lg:h-[614px]" style={{ backgroundImage: `url(${BG.src})` }}>
        <div className="flex flex-col base-style h-full z-10" style={{ gap: "0px" }}>
          <div className="w-full h-full text-white text-center">
            <div className=" w-full h-full justify-center items-center hidden lg:flex flex-row">

              <div className="w-full   h-full flex flex-col justify-center text-center">
                <div className="flex flex-col pb-11">
                  <h2 className="text-start text-[35px] font-extrabold">
                    دانلود اپلیکیشن صرافی ارزهشت
                  </h2>
                  <p className="text-start text-base font-bold">
                  با اپلیکیشن ارزهشت، راحت و مطمئن معامله کنید:                  </p>
                </div>

                <ul className="flex flex-col text-start text-lg font-semibold gap-y-5">
                  {[
                    "دسترسی به بیش از 1800 ارز دیجیتال",
                    "احراز هویت سریع و آسان",
                    "پشتیبانی 24 ساعته، همیشه کنار شما",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-x-[5px] items-center">
                      <div className="w-[10px] h-[10px] rotate-45 rounded-[3px] bg-white"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <nav  className="flex w-full lg:justify-start justify-start py-[30px]" aria-label="دانلود اپلیکیشن">
                  <Link  className="z-20 hover:text-[#4a80f5]" href={"https://cdn.arz8.com/application.apk"}><DownloadOption Icon={Android} label="دانلود مستقیم" /></Link>
                  <Link  className="z-20 hover:text-primary" href={""}><DownloadOption Icon={Web} label="وب اپلیکیشن" /> </Link>
                  <Link  className="z-20 hover:text-[#27b681]" href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={CafeBazar} label="کافه بازار" /> </Link>
                  <Link  className="z-20 hover:text-[#0091EA]" href={"https://myket.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={Myket} label="مایکت" /> </Link>
                  <Link  className="z-20  hover:text-primary" href={""}  ><DownloadOption Icon={GooglePlay} label="گوگل پلی" /></Link>

                </nav>

                <div className="flex items-center gap-x-4">
                  <Link href="/application">
                    <Image loading="lazy" src={QrCode}   alt="دانلود اپلیکیشن از طریق QR Code" quality={100} className="w-[102px] h-[102px]" ></Image>
                  </Link>

                  <div className="flex flex-col gap-y-3">
                    <span className="text-white text-xl font-bold">برای دانلود اپلیکیشن</span>
                    <span className="text-white text-xl font-bold"> اسکن کنید</span>
                  </div>

                </div>

              </div>


              <div className="w-full h-full   flex justify-center lg:justify-end  items-center ">
                <Image
                  alt="نمایش اپلیکیشن روی تلفن همراه"
                  src={Phone}
                  width={413}
                  height={534}
                  className="object-contain"
                  quality={100}
                  loading="lazy"
                />
              </div>


            </div>



            <div className=" w-full h-full justify-center items-center flex lg:hidden flex-col">
              <div className="flex  flex-col pt-8 pb-6 gap-y-3">
                <h2 className="text-center text-lg sm:text-3xl font-extrabold">
                  دانلود اپلیکیشن صرافی ارزهشت
                </h2>
                <p className="text-center text-[8px] sm:text-base font-bold">
                  با اپلیکیشن ارزهشت در یک صرافی تمام عیار معامله کنید.
                </p>
              </div>

              <div className="flex w-full h-full justify-between">
                <div className="w-1/2   h-full flex flex-col justify-center text-center">


                  <div className="flex flex-col items-center gap-y-3">
                    <Image src={QrCode}   alt="دانلود اپلیکیشن از طریق QR Code" className="w-[70px] h-16" quality={100} loading="lazy"></Image>

                    <div className="flex flex-col gap-y-1">
                      <span className="text-white text-[8px] sm:text-xs font-bold">برای دانلود اپلیکیشن</span>
                      <span className="text-white text-[8px] sm:text-xs font-bold"> اسکن کنید</span>
                    </div>

                  </div>

                  <nav className="flex w-full  justify-center mt-[10px] sm:mt-5">
                    <Link className="z-20 flex" href={"https://cdn.arz8.com/application.apk"}><DownloadOption Icon={Android} label="دانلود مستقیم" /></Link>
                    <Link className="z-20 flex" href={""}><DownloadOption Icon={Web} label="وب اپلیکیشن" /> </Link>
                    <Link className="z-20 flex" href={"https://cafebazaar.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={CafeBazar} label="کافه بازار" /> </Link>
                    <Link className="z-20 flex" href={"https://myket.ir/app/com.arz8x.app.arz8x"}><DownloadOption Icon={Myket} label="مایکت" /> </Link>
                    <Link className="z-20 flex" href={""}><DownloadOption Icon={GooglePlay} label="گوگل پلی" /> </Link>
                  </nav>

                </div>


                <div className="w-1/2 h-full  flex justify-center items-center self-center ">
                  <Image
                    alt="نمایش اپلیکیشن روی تلفن همراه"
                    src={Phone}
                    width={148}
                    height={192}
                    className="max-h-[192px] max-w-[148px] justify-center items-center self-center"
                    quality={100}
                    loading="lazy"
                  />
                </div>

              </div>


            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
function DownloadOption({ Icon, label }: { Icon: React.FC; label: string }) {
  return (
    <div className="flex flex-col items-center ml-3 sm:ml-5 lg:ml-[37px] gap-y-2">
      <div className={`flex lg:w-[45px] lg:h-[45px] sm:w-6 sm:h-6 w-4 h-4`}>
        <Icon />
      </div>
      <span className="flex text-[5px] sm:text-[8px] lg:text-[11px] font-semibold">{label}</span>
    </div>
  )
}
