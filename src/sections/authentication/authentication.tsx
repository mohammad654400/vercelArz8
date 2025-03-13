import React from 'react'
import Timeline from './time-line '
import { cardData } from './data/data';
import Image from 'next/image';
import Asset from "@/assets/images/authentication/Asset.png"
import Link from 'next/link';


export default function Authentication() {
  return (
    <div className='base-style' style={{ gap: 0 }}>

      <div className='flex flex-col gap-10 xl:gap-[100px]  mt-20 xl:mt-[198px]'>


        <div className="flex flex-col xl:flex-row gap-10 xl:gap-[92px]  w-full justify-between  ">
          <div className=" w-full flex flex-col justify-center order-2">
            <h1 className='text-base md:text-2xl lg:text-3xl xl:text-[40px] font-bold text-Seventh'>احراز هویت سریع در صرافی ارزهشت</h1>
            <p className='text-sm md:text-[18.94px] font-semibold  text-sixth text-justify mb-[20px] lg:mb-[33px] mt-[11px] lg:mt-[25px] leading-[33.65px] lg:leading-[60.36px]'>احراز هویت در صرافی ارز هشت، یکی از ساده‌ترین و سریع‌ترین فرآیندها در بین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با رعایت قوانین بین‌المللی و داخلی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده است تا تمامی افراد بتوانند در کمترین زمان ممکن از خدمات خرید و فروش ارز دیجیتال بهره‌مند شوند.</p>


            <Link className='self-end w-full lg:w-56 h-[47px] lg:h-[61px]' href={"https://app.arz8.com/auth/register"}>
              <button className=' bg-primary w-full h-full text-white text-[15px] lg:text-xl font-bold rounded-[15.3px] xl:rounded-[20px] transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)]  active:translate-y-0 active:bg-primary'>ثبت نام و احراز هویت</button>
            </Link>
          </div>
          <div className="w-[273px] xl:w-[715.9px] h-[268px] xl:h-[406px]  order-1 xl:order-3 flex justify-center items-center self-center">
            <Image
              src={Asset}
              alt="image"                        
            />
          </div>
        </div>

        <div className='flex flex-col gap-[31px] xl:gap-[50px] '>
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold text-seventh">احراز هویت سریع در صرافی ارز هشت</h2>

          <div className="grid gap-y-[25.56px] gap-x-[13.11px] lg:gap-x-5 grid-cols-2 lg:grid-cols-4 w-full grid-flow-row-dense ">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col lg:gap-y-[10px] gap-y-[6px] rounded-xl bg-third justify-center items-center h-[182px] sm:h-[278px] w-full"
              >
                <div className="w-16 h-16 sm:h-24 sm:w-24 ">
                  <card.icon />
                </div>
                <span className="text-sm sm:text-xl font-semibold text-seventh ">
                  {card.title}
                </span>
                <span className="text-[10px] sm:text-xs font-normal text-sixth text-center px-3 leading-[19.66px] sm:leading-[30px]">
                  {card.description}
                </span>
              </div>
            ))}
          </div>
        </div>


        <Timeline />

        <div className='bg-[#1C1D1F] lg:pt-[62px] lg:pb-[55px] pt-5 pb-[15px] xl:text-3xl px-3 md:px-10 lg:px-16 flex flex-col rounded-[10px] sm:rounded-[20px] justify-center items-center w-full'>
          <span className='text-sm lg:text-[29px] font-bold text-white text-center'>
            همین حالا ثبت نام و احراز هویت خودتان را تکمیل کنید.
          </span>

          <span className='px-[15px] lg:px-[100
          px]  text-xs lg:text-[18.94px]  font-semibold opacity-50 sm:opacity-100  leading-[19.5px] lg:leading-[60px] xl:leading-[60px] text-white mt-4 lg:mt-6 mb-5 lg:mb-7 text-center'>
            احراز هویت در صرافی ارز هشت، یکی از ساده‌ترین و سریع‌ترین فرآیندها در بین صرافی‌های ارز دیجیتال ایرانی است.
          </span>

          <Link href={"https://app.arz8.com/auth/register"} className='h-[24px] w-[109px] lg:h-[75px] lg:w-[340px] items-center justify-center rounded-[6.47px] xl:rounded-[20px] flex text-[9px] lg:text-[28px] font-bold text-white bg-primary transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:translate-y-0 active:bg-primary'>
            ثبت نام و احراز هویت
          </Link>
        </div>
      </div>
    </div>
  )
}
