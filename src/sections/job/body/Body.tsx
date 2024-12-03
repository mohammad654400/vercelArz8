import React, { forwardRef } from 'react';
import Profile from '@/assets/icons/opportunity/profile';
import QuoteUpSquare from '@/assets/icons/opportunity/quoteUpSquare';
import Insurance from '@/assets/icons/opportunity/insurance';
import Clock from '@/assets/icons/opportunity/clock';
import Category from '@/assets/icons/opportunity/category';
import Location from '@/assets/icons/opportunity/location';
import { jobListings, whyUs, OurCompanions } from '../data/data';
import Link from 'next/link';

const Body = forwardRef<HTMLDivElement>((_, ref) => (
    <div className='flex flex-col'>
        <span className='mt-10 mb-5 text-lg font-bold'>چرا ارز هشت ایکس را انتخاب کنیم ...</span>
        <div className='flex justify-between flex-wrap'>
            {whyUs.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center mb-6 bg-[#FFFBEE] dark:bg-secondary p-4 rounded-xl shadow-sm gap-4 w-[24%] min-w-56"
                >
                    <div className="text-foreground w-12 h-12">
                        <item.icon />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-md">{item.title}</span>
                        <span className="text-sm font-normal text-opacity-50">{item.content}</span>
                    </div>
                </div>
            ))}
        </div>

        <span ref={ref} className='mt-10 mb-5 text-lg font-bold'>فرصت های شغلی</span>
        {jobListings.map((item) => (
            <div key={item.id} className='flex w-full my-4 p-4 bg-secondary rounded-xl'>
                <div className='flex flex-col w-full'>
                    <span className="font-bold text-lg">{item.titleFn}</span>
                    <div className='flex mt-2 h-3'>
                        <div className='flex items-center ml-3'>
                            <Insurance className="w-[10px] h-[10px]" />
                            <span className='mr-1 text-[10px] font-semibold text-foreground text-opacity-50'>{item.employmentType}</span>
                        </div>
                        <div className='flex items-center ml-3'>
                            <Clock className="w-[10px] h-[10px]" />
                            <span className='mr-1 text-[10px] font-semibold text-foreground text-opacity-50'>{item.workMode}</span>
                        </div>
                        <div className='flex items-center ml-3'>
                            <Location />
                            <span className='mr-1 text-[10px] font-semibold text-foreground text-opacity-50'>{item.city}</span>
                        </div>
                        <div className='flex items-center'>
                            <Category />
                            <span className='mr-1 text-[10px] font-semibold text-foreground text-opacity-50'>{item.jobCategory}</span>
                        </div>
                    </div>
                </div>
                <Link href={`job/${item.title}`}>
                    <button className='ml-4 text-white w-28 sm:w-40 h-12 bg-primary text-base font-bold rounded-xl'>مشاهده جزئیات</button>
                </Link>
            </div>
        ))}

        <span className='mt-10 mb-5 text-lg font-bold'>همراهان ما تا این لحظه</span>
        <div className='flex flex-row flex-wrap justify-between'>
            {OurCompanions.map((item) => (
                <div className='lg:w-[30%] w-[45%] min-w-52 h-20 items-center bg-secondary flex flex-row rounded-xl mb-3'>
                    <div className='w-14 h-14 rounded-full mr-3 bg-[#3C3B41] items-end justify-center flex'>
                        <Profile />
                    </div>
                    <div className='flex flex-col mr-5'>
                        <span className='text-base font-semibold text-foreground'>{item.name}</span>
                        <div className='flex items-center mt-3'>
                            <QuoteUpSquare />
                            <span className='text-[10px] text-foreground font-semibold text-opacity-50'>{item.position}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
));

export default Body;
