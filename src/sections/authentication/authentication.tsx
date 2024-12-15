import React from 'react'
import Timeline from './timeline '
import { cardData } from './data/data';
import Image from 'next/image';
import Asset from "@/assets/images/authentication/Asset.png"
import Link from 'next/link';


export default function Authentication() {
  return (
    <div className='flex flex-col bg-background px-5 lg:px-32'>

      <div className="flex flex-col lg:flex-row w-full justify-between mt-24">
        <div className="lg:w-6/12 w-full flex flex-col justify-center order-2">
          <h1 className='text-xl  md:text-2xl lg:text-3xl font-bold text-Seventh mt-16 lg:mt-10'>احراز هویت سریع در صرافی ارزهشت</h1>
          <p className='text-sm md:text-lg font-semibold  text-sixth mt-5 lg:mt-10 leading-7 sm:leading-9 text-justify'>احراز هویت در صرافی ارز هشت، یکی از ساده‌ترین و سریع‌ترین فرآیندها در بین صرافی‌های ارز دیجیتال ایرانی است. این صرافی با رعایت قوانین بین‌المللی و داخلی برای جلوگیری از تخلفات مالی، احراز هویت کاربران را به شکلی آسان طراحی کرده است تا تمامی افراد بتوانند در کمترین زمان ممکن از خدمات خرید و فروش ارز دیجیتال بهره‌مند شوند.</p>


          <Link className='self-end w-full lg:w-56 h-16' href={"https://app.arz8.com/auth/register"}>
            <button className=' bg-primary w-full h-full text-white text-xl font-bold rounded-xl mt-8'>ثبت نام و احراز هویت</button>
          </Link>
        </div>
        <div className="lg:w-5/12  w-full  order-1 lg:order-3 flex justify-center items-center self-center">
          <Image
            src={Asset}
            alt="image"
          />
        </div>

      </div>

      <div className="flex flex-wrap justify-between mt-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-[182px] sm:h-[278px] w-full max-[398px]:w-full min-[398px]:w-[171px] sm:w-[265px] 2xl:w-[287px] mb-4 mx-1 md:ml-0"
          >
            <div className="w-16 h-16 sm:h-24 sm:w-24 mt-4">
             
              <card.icon />
            </div>
            <span className="text-sm sm:text-xl font-semibold text-seventh my-5">
              {card.title}
            </span>
            <span className="text-[10px] sm:text-xs font-normal text-sixth opacity-50 text-center px-3">
              {card.description}
            </span>
          </div>
        ))}
      </div>
      <Timeline />
    </div>
  )
}
