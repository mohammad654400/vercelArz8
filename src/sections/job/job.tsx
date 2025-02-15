"use client"
import React, { useRef } from 'react'
import Profile from '@/assets/icons/job/profile';
import QuoteUpSquare from '@/assets/icons/job/quoteUpSquare';
import Insurance from '@/assets/icons/job/insurance';
import Clock from '@/assets/icons/job/clock';
import Category from '@/assets/icons/job/category';
import Location from '@/assets/icons/job/location';
import { jobListings, whyUs, OurCompanions } from './data/data';
import Link from 'next/link';
import opportunity from "@/assets/images/job/opportunity.png";
import Image from 'next/image';


export default function Job() {

  const jobListingsRef = useRef<HTMLDivElement>(null);

  const scrollToJobs = () => {
    if (jobListingsRef.current) {
      const offsetTop = jobListingsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='bg-background base-style'>
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center h-full w-full mt-20">
        <div className="flex flex-col w-full xl:w-[460px] z-10 gap-7">
          <h1 className="text-xl sm:text-2xl xl:text-3xl font-extrabold ">فرصت های شغلی ارز هشت</h1>
          <p className="flex text-sm sm:text-base xl:text-sm font-normal  text-justify !leading-[44px] lg:!leading-[44px] " >
            صرافی ارز هشت بستری خلاقانه برای ، شکوفایی و پرورش استعدادهای شما ست. اگر خود را متعهد به پیشرفت می‌دانید.
            ارزهشت کوتاه ‌ترین راه رسیدن به این هدف است.
          </p>
          <button
            onClick={scrollToJobs}
            className="flex w-full md:w-[178px]  py-2  bg-primary text-white text-base  md:text-2xl font-bold rounded-[13px] md:rounded-[15px] justify-center items-center">
            مشاهده فرصت
          </button>
        </div>

        <Image
          src={opportunity}
          alt="Picture of the author"
        />

      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <span className='text-lg font-bold'>چرا ارز هشت ایکس را انتخاب کنیم ...</span>
          <div className='w-full gap-4 grid grid-cols-2 lg:grid-cols-4'>
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center bg-[#FFFBEE] dark:bg-secondary p-2 lg:p-4 rounded-xl shadow-sm gap-2 lg:gap-4 w-full   "
              >
                <div className="text-foreground w-8 h-8 max-w-8 max-h-8 lg:w-12 lg:h-12 lg:max-w-12 lg:max-h-12 min-w-8 lg:min-w-12">
                  <item.icon />
                </div>
                <div className="flex h-full flex-col ">
                  <span className="font-bold text-[10px] sm:text-xs lg:text-base">{item.title}</span>
                  <span className="text-[8px] sm:text-[10px] font-normal lg:mt-2 opacity-50 !leading-4 sm:!leading-6">{item.content}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='flex flex-col gap-4'>

          <span ref={jobListingsRef} className='text-lg font-bold'>فرصت های شغلی</span>
          {jobListings.map((item) => (
            <div key={item.id} className='flex w-full px-2 py-[9px] sm:p-4 bg-secondary justify-between rounded-xl'>
              <div className='flex flex-col w-9/12'>
                <h4 className="font-bold text-xs md:text-base pb-2 ">{item.titleFn}</h4>
                <div className='flex flex-wrap  gap-1 h-3 w-full  '>
                  <div className='flex items-center ml-[5px] md:ml-3'>
                    <Insurance className="w-[10px] h-[10px]" />
                    <span className='mr-[2px]  text-[10px] font-semibold text-foreground opacity-50'>{item.employmentType}</span>
                  </div>
                  <div className='flex items-center ml-[5px]  md:ml-3'>
                    <Clock className="w-[10px] h-[10px]" />
                    <span className='mr-[2px]  text-[10px] font-semibold text-foreground opacity-50'>{item.workMode}</span>
                  </div>
                  <div className='flex items-center ml-[5px] md:ml-3'>
                    <Location />
                    <span className='mr-[2px]  text-[10px] font-semibold text-foreground opacity-50'>{item.city}</span>
                  </div>
                  <div className='flex items-center'>
                    <Category />
                    <span className='mr-[2px] text-[10px]  font-semibold text-foreground opacity-50'>{item.jobCategory}</span>
                  </div>
                </div>
              </div>
              <Link className='flex justify-center items-center' href={`job/${item.title}`}>
                <button className='text-white w-full  bg-primary md:text-base sm:text-xs text-[8px] font-bold rounded-[9px] md:rounded-[15px] whitespace-nowrap px-2 py-2 md:px-7 md:py-3'>مشاهده جزئیات</button>
              </Link>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <span className='text-lg font-bold'>همراهان ما تا این لحظه</span>
          <div className='grid gap-[10px] grid-cols-2 md:grid-cols-3 justify-between'>
            {OurCompanions.map((item, index) => (
              <div key={index} className='w-full h-20 items-center bg-secondary flex flex-row rounded-xl '>
                <div className='w-10 h-10 sm:w-14 sm:h-14 rounded-full mr-3 bg-fourth items-end justify-center flex '>
                  <div className='text-secondary'>
                    <Profile />
                  </div>

                </div>
                <div className='flex flex-col mr-2 gap-y-2'>
                  <span className='text-sm sm:text-base font-semibold text-foreground'>{item.name}</span>
                  <div className='flex items-center'>
                    <QuoteUpSquare />
                    <span className='text-[8px] sm:text-[10px] text-foreground mr-2 font-semibold text-opacity-50'>{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
