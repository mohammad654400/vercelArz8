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
    <div className='flex flex-col gap-10 '>
        <div className='flex flex-col gap-[10px]'>
            <h3 className='text-lg font-bold'>چرا ارز هشت ایکس را انتخاب کنیم ...</h3>
            <div className='w-full  gap-x-4 gap-y-4 grid grid-cols-2 xl:grid-cols-4'>
                {whyUs.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center bg-[#FFFBEE] dark:bg-secondary px-2 py-[10px] sm:px-[17.6px] sm:py-[21px] rounded-[12.93px] sm:rounded-[22px] shadow-sm w-full   "
                    >
                        <div className="text-foreground w-[34.9px] h-[34.9px] sm:w-[59.4px] sm:h-[59.4px] lg:w-[54px] lg:h-[54px]  flex items-center">
                            <item.icon />
                        </div>
                        <div className="flex h-full flex-col mr-[5.7px]">
                            <span className="font-bold text-xs sm:text-[17.6px] lg:text-base">{item.title}</span>
                            <span className="text-[10px] sm:text-[13.2px] lg:text-xs leading-[15px] sm:leading-[27.5px] xl:leading-[25px] font-normal mt-2 opacity-50 ">{item.content}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <div className='flex flex-col gap-[10px]'>

            <h3 ref={ref} className='text-lg font-bold'>فرصت های شغلی</h3>
            {jobListings.map((item) => (
                <div key={item.id} className='flex w-full  p-4 bg-secondary justify-between rounded-xl'>
                    <div className='flex flex-col w-9/12'>
                        <h4 className="font-bold text-xs md:text-lg pb-2 ">{item.titleFn}</h4>
                        <div className='flex flex-wrap  gap-1 h-3 w-full  '>
                            <div className='flex items-center md:ml-3'>
                                <Insurance className="w-[10px] h-[10px]" />
                                <span className='mr-2 text-[10px] font-semibold text-foreground opacity-50'>{item.employmentType}</span>
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
            <div className='grid gap-4 grid-cols-2 md:grid-cols-3 justify-between'>
                {OurCompanions.map((item, index) => (
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
));

export default BodyJob;
