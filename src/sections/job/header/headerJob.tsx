"use client"
import opportunity from "@/assets/images/job/opportunity.png";
import Image from 'next/image';
import React from 'react';

export default function HeaderJob({ scrollToJobs }: { scrollToJobs: () => void }) {
    return (
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center h-full w-full mt-20">
            <div className="flex flex-col w-full xl:w-[460px] z-10 gap-7">
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-extrabold ">فرصت های شغلی ارز هشت</h1>
                <p className="text-sm sm:text-base xl:text-sm font-normal  text-justify" style={{ lineHeight: "1.5rem" }}>

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
    );
}
