"use client"
import opportunity from "@/assets/images/opportunity.png";
import Image from 'next/image';
import React from 'react';

export default function HeaderJob({ scrollToJobs }: { scrollToJobs: () => void }) {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center h-full w-full">
            <div className="flex flex-col w-full lg:w-1/3  ">
                <h1 className=" text-4xl font-extrabold ">فرصت های شغلی ارز هشت</h1>
                <span className="leading-10 text-sm font-normal my-5">
                    صرافی ارز هشت بستری خلاقانه برای ، شکوفایی و پرورش استعدادهای شما ست. اگر خود را متعهد به پیشرفت می‌دانید.
                    ارزهشت کوتاه ‌ترین راه رسیدن به این هدف است.
                </span>
                <button 
                onClick={scrollToJobs}
                className="flex text-2xl max-w-48 py-2 px-3 bg-primary text-white rounded-xl">
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
