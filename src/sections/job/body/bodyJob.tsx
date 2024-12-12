import React, { forwardRef } from 'react';
import Profile from '@/assets/icons/job/profile';
import QuoteUpSquare from '@/assets/icons/job/quoteUpSquare';
import Insurance from '@/assets/icons/job/insurance';
import Clock from '@/assets/icons/job/clock';
import Category from '@/assets/icons/job/category';
import Location from '@/assets/icons/job/location';
import { jobListings, whyUs, OurCompanions } from '../data/data';
import Link from 'next/link';

const BodyJob = forwardRef<HTMLDivElement>((_, ref) => (
    <div className='flex flex-col'>
        <span className='mt-10 mb-5 text-lg font-bold'>چرا ارز هشت ایکس را انتخاب کنیم ...</span>
        <div className='flex justify-between flex-wrap'>
            {whyUs.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center mb-6 bg-[#FFFBEE] dark:bg-secondary p-4 rounded-xl shadow-sm gap-4 w-full  lg:w-[24%]  min-w-48 sm:w-[47%] "
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

        <span ref={ref} className='mt-10 mb-5 text-lg font-bold'>فرصت های شغلی</span>
        {jobListings.map((item) => (
            <div key={item.id} className='flex w-full my-4 p-4 bg-secondary justify-between rounded-xl'>
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

        <span className='mt-10 mb-5 text-lg font-bold'>همراهان ما تا این لحظه</span>
        <div className='flex flex-row flex-wrap justify-between'>
            {OurCompanions.map((item,index) => (
                <div key={index} className='lg:w-[30%] sm:w-[45%] w-full min-w-52 h-20 items-center bg-secondary flex flex-row rounded-xl mb-3'>
                    <div className='w-14 h-14 rounded-full mr-3 bg-ninth items-end justify-center flex'>
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

export default BodyJob;
