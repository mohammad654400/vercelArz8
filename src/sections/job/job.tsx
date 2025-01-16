"use client"
import React, { useRef,forwardRef } from 'react'
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
      console.log(window.scrollY)
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
            className="flex  text-lg w-full md:w-60 xl:max-w-48 py-2 px-3 bg-primary text-white rounded-xl justify-center items-center">
            مشاهده فرصت
          </button>
        </div>

        <Image
          src={opportunity}
          alt="Picture of the author"
        />

      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
        <span className='text-lg font-bold'>چرا ارز هشت ایکس را انتخاب کنیم ...</span>
        <div className='w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-4'>
            {whyUs.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center bg-[#FFFBEE] dark:bg-secondary p-4 rounded-xl shadow-sm gap-4 w-full   "
                >
                    <div className="text-foreground w-12 h-12">
                        <item.icon />
                    </div>
                    <div className="flex h-full flex-col mr-4">
                        <span className="font-bold text-base">{item.title}</span>
                        <span className="text-xs font-normal mt-2 opacity-50">{item.content}</span>
                    </div>
                </div>
            ))}
        </div>

        </div>

        <div className='flex flex-col gap-4'>
       
        <span ref={jobListingsRef}  className='text-lg font-bold'>فرصت های شغلی</span>
        {jobListings.map((item) => (
            <div key={item.id} className='flex w-full  p-4 bg-secondary justify-between rounded-xl'>
                <div className='flex flex-col w-9/12'>
                    <h4 className="font-bold text-sm md:text-lg pb-2 ">{item.titleFn}</h4>
                    <div className='flex flex-wrap  gap-1 h-3 w-full  '>
                        <div className='flex items-center md:ml-3'>
                            <Insurance className="w-[10px] h-[10px]" />
                            <span className='mr-2  text-[10px] font-semibold text-foreground opacity-50'>{item.employmentType}</span>
                        </div>
                        <div className='flex items-center  md:ml-3'>
                            <Clock className="w-[10px] h-[10px]" />
                            <span className='mr-2  text-[10px] font-semibold text-foreground opacity-50'>{item.workMode}</span>
                        </div>
                        <div className='flex items-center md:ml-3'>
                            <Location />
                            <span className='mr-2  text-[10px] font-semibold text-foreground opacity-50'>{item.city}</span>
                        </div>
                        <div className='flex items-center'>
                            <Category />
                            <span className='mr-2 text-[10px]  font-semibold text-foreground opacity-50'>{item.jobCategory}</span>
                        </div>
                    </div>
                </div>
                <Link className='flex w-3/12 min-w-20  max-w-32' href={`job/${item.title}`}>
                    <button className='text-white w-full h-12 bg-primary text-[10px] sm:text-sm font-bold rounded-xl whitespace-nowrap'>مشاهده جزئیات</button>
                </Link>
            </div>
        ))}
        </div>
        <div className='flex flex-col gap-4'>
        <span className='text-lg font-bold'>همراهان ما تا این لحظه</span>
        <div className='grid gap-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 justify-between'>
            {OurCompanions.map((item,index) => (
                <div key={index} className='w-full h-20 items-center bg-secondary flex flex-row rounded-xl mb-3'>
                    <div className='w-14 h-14 rounded-full mr-3 bg-fourth items-end justify-center flex '>
                        <div className='text-secondary'>
                        <Profile />
                        </div>
                        
                    </div>
                    <div className='flex flex-col mr-5'>
                        <span className='text-base font-semibold text-foreground'>{item.name}</span>
                        <div className='flex items-center mt-3'>
                            <QuoteUpSquare />
                            <span className='text-[10px] text-foreground mr-2 font-semibold text-opacity-50'>{item.position}</span>
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
