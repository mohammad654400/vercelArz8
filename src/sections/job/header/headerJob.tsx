"use client"
import opportunity from "@/assets/images/job/opportunity.png";
import Image from 'next/image';
import React from 'react';

export default function HeaderJob({ scrollToJobs }: { scrollToJobs: () => void }) {
    return (
        <div className="flex  flex-col-reverse lg:flex-row justify-between items-center h-full w-full mt-20">
            <div className="flex flex-col w-full lg:w-[583px] xl:w-[427px]  z-10 gap-[10px]">
                <h1 className="text-xl sm:text-3xl lg:text-[37px] font-extrabold ">فرصت های شغلی ارز هشت</h1>
                <p className="text-[12.69px] sm:text-[21.59px] lg:text-sm font-normal text-justify leading-[39.89px] sm:leading-[67.85px] lg:leading-[44px]">
                    صرافی ارز هشت بستری خلاقانه برای ، شکوفایی و پرورش استعدادهای شما ست. اگر خود را متعهد به پیشرفت می‌دانید.
                    ارزهشت کوتاه ‌ترین راه رسیدن به این هدف است.
                </p>
                <button 
                onClick={scrollToJobs}
                className="flex   w-full sm:w-[274px] lg:w-[178px] h-[46px] sm:h-[77px] lg:h-[50px]  bg-primary text-white rounded-[13.6px] sm:rounded-[23.13px] lg:rounded-[15px]  justify-center items-center text-base sm:text-[21.59] lg:text-2xl font-bold">
                    مشاهده فرصت
                </button>
            </div>
         
            <Image
                src={opportunity}
                alt="Picture of the author"
            />
           
        </div>
    );
}
