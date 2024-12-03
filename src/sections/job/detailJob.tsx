'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { jobListings } from './data/data';
import Link from 'next/link';


export default function DetailJob() {
    const route = decodeURIComponent(usePathname().split('/')[2]);
    const job = jobListings.find(item => item.title === route);



    if (!job) {
        return <div>شغل مورد نظر پیدا نشد.</div>;
    }

    return (
        <div className="flex flex-col bg-background lg:px-[120px]  px-12  py-[30px]">
            <h1 className="text-4xl font-bold mb-28 flex justify-center">{job.titleFn}</h1>

            <div className='flex flex-row flex-wrap justify-between'>
                <div className='flex flex-col '>
                    <span className='text-foreground text-xl font-semibold'>عنوان شغلی</span>
                    <div className='w-1/5 min-w-48 h-14 rounded-xl  bg-third items-center flex p-5'>
                        <span className='text-foreground text-opacity-50 text-sm font-semibold'>{job.titleFn}</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='text-foreground text-xl font-semibold'>نوع فعالیت</span>
                    <div className='w-1/5 min-w-48 h-14 rounded-xl  bg-third items-center flex p-5'>
                        <span className='text-foreground text-opacity-50 text-sm font-semibold'>{job.workMode}</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-foreground text-xl font-semibold'>تایم حضور</span>
                    <div className='w-1/5 min-w-48 h-14 rounded-xl  bg-third items-center flex p-5'>
                        <span className='text-foreground text-opacity-50 text-sm font-semibold'>{job.employmentType}</span>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='text-foreground text-xl font-semibold'>مکان</span>
                    <div className='w-1/5 min-w-48 h-14 rounded-xl  bg-third items-center flex p-5'>
                        <span className='text-foreground text-opacity-50 text-sm font-semibold'>{job.city}</span>
                    </div>
                </div>


            </div>


            <div className='flex justify-between flex-wrap'>
                <div className='lg:w-[46%] w-full'>
                    <div className='flex flex-col'>
                        <h2 className='mt-8 mb-6' >اطلاعات عنوان شغلی</h2>
                        <div className="flex flex-col bg-third p-5 rounded-xl">
                            <span className="font-bold text-lg mt-6 mb-2 text-foreground text-opacity-50">وظایف:</span>
                            <ul className="pl-5 space-y-2">
                                {job.responsibilities.map((task, index) => (
                                    <li key={index} className="relative flex items-center text-lg text-foreground">
                                        <div className="w-2 h-2 rounded-full bg-foreground text-opacity-50 mt-1 mx-2"></div>
                                        {task}
                                    </li>
                                ))}
                            </ul>

                            <span className="font-bold text-lg mt-6 mb-2 text-foreground text-opacity-50">شرایط:</span>
                            <ul className="pl-5 space-y-2">
                                {job.requirements.map((requirement, index) => (
                                    <li key={index} className="relative text-lg text-foreground">
                                        <span className="text-foreground text-opacity-50">✔</span> {/* آیکون تیک */}
                                        {requirement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='lg:w-[46%] w-full'>
                    <div className='flex flex-col'>
                        <h2 className='mt-8 mb-6'>اطلاعات عنوان شغلی</h2>

                        <div className="flex flex-col bg-third p-5 rounded-xl">
                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>جنسیت</span>
                                <span className='text-foreground text-opacity-50'>{job.gender}</span>
                            </div>
                            <hr />

                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>سن</span>
                                <span className='text-foreground text-opacity-50'>{job.age}</span>
                            </div>
                            <hr />


                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>سطح مهارت:</span>
                                <span className='text-foreground text-opacity-50'>{job.skillLevel}</span>
                            </div>
                            <hr />


                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>حداقل سابقه کاری موردنیاز</span>
                                <span className='text-foreground text-opacity-50'>{job.minExperience}</span>
                            </div>
                            <hr />



                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>بازه حقوق</span>
                                <span className='text-foreground text-opacity-50'>{job.salaryRange}</span>
                            </div>
                            <hr />


                            <div className='flex flex-row justify-between mb-2 mt-6'>
                                <span className='text-foreground text-opacity-50'>روزهای کاری</span>
                                <span className='text-foreground text-opacity-50'>{job.workingDays}</span>
                            </div>
                            <hr />

                            <Link href={`/apply`}>
                                <button className='w-[90%] h-14 bg-primary text-white rounded-xl my-5 self-center'>ارسال رزومه</button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
