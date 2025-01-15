import React from 'react'
import Timeline from './time-line '
import { cardData } from './data/data';
import Image from 'next/image';
import Asset from "@/assets/images/authentication/Asset.png"
import Link from 'next/link';


export default function Authentication() {
  return (
    <div className='base-style' style={{ gap: 0 }}>

      <div className='flex flex-col gap-10 md:gap-24 mt-28 mb-24'>


        <div className="flex flex-col lg:flex-row  w-full justify-between ">
          <div className="lg:w-7/12 lg:ml-10 w-full flex flex-col justify-center order-2">
            <h1 className='text-base md:text-2xl lg:text-3xl xl:text-[40px] font-bold text-Seventh mt-10 lg:mt-0'>احراز هویت سریع در صرافی ارزهشت</h1>
            <p className='text-sm md:text-lg font-semibold  text-sixth text-justify mb-[20px] lg:mb-[33px] mt-[11px] lg:mt-[25px] leading-[33px] lg:leading-[60px]'>احراز هویت در صرافی ارز هشت، یکی از ساده‌ترین و سریع‌ترین فرآیندها در بین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با رعایت قوانین بین‌المللی و داخلی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده است تا تمامی افراد بتوانند در کمترین زمان ممکن از خدمات خرید و فروش ارز دیجیتال بهره‌مند شوند.</p>


            <Link className='self-end w-full lg:w-56 h-[47px] lg:h-[61px]' href={"https://app.arz8.com/auth/register"}>
              <button className=' bg-primary w-full h-full text-white text-[15px] lg:text-xl font-bold rounded-xl'>ثبت نام و احراز هویت</button>
            </Link>
          </div>
          <div className="lg:w-5/12 md:w-[500px] sm:w-[350px]  w-[300px] h-auto  lg:justify-end order-1 lg:order-3 flex justify-center items-center self-center">
            <Image
              src={Asset}
              alt="image"
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold text-seventh mb-[31px] lg:mb-[50px] ">مراحل احراز هویت سریع در صرافی ارز هشت</h2>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-full grid-flow-row-dense ">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-third justify-center items-center h-[182px] sm:h-[278px] w-full"
              >
                <div className="w-16 h-16 sm:h-24 sm:w-24 mt-4">
                  <card.icon />
                </div>
                <span className="text-sm sm:text-xl font-semibold text-seventh my-2 sm:my-5">
                  {card.title}
                </span>
                <span className="text-[10px] sm:text-xs font-normal text-sixth opacity-50 text-center px-3">
                  {card.description}
                </span>
              </div>
            ))}
          </div>
        </div>


        <Timeline />

        <div className='bg-[#1C1D1F] lg:pt-[62px] lg:pb-[55px] pt-5 pb-[15px] xl:text-3xl px-3 md:px-10 lg:px-16 flex flex-col rounded-3xl justify-center items-center w-full'>
          <span className='text-sm lg:text-[29px] font-bold text-white text-center'>
            همین حالا ثبت نام و احراز هویت خودتان را تکمیل کنید.
          </span>

          <span className='text-xs lg:text-[18.94px] xl:text-xl opacity-50 lg:opacity-100 font-semibold text-white mt-4 lg:mt-6 mb-5 lg:mb-7 text-center'>
            احراز هویت در صرافی ارز هشت، یکی از ساده‌ترین و سریع‌ترین فرآیندها در بین صرافی‌های ارز دیجیتال ایرانی است.
          </span>

          <button className='h-[24px] w-[109px] lg:h-[75px] lg:w-[340px] items-center justify-center rounded-xl flex text-[9px] lg:text-[28px] font-bold text-white bg-primary'>
            ثبت نام و احراز هویت
          </button>
        </div>
      </div>
    </div>
  )
}
