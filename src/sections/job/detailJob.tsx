'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { jobListings } from './data/data';
import Link from 'next/link';
import ApplyPage from '../apply/apply';

export default function DetailJob() {
    const route = decodeURIComponent(usePathname().split('/')[2]);
    const job = jobListings.find(item => item.title === route);
    const [open, setIsOpen] = useState(false);

    const handlerOpen = () => {
        setIsOpen(true);
    };

    const jobDetails = [
        { label: "عنوان شغلی", value: job?.titleFn },
        { label: "نوع فعالیت", value: job?.workMode },
        { label: "تایم حضور", value: job?.employmentType },
        { label: "مکان", value: job?.city },
    ];

    if (!job) {
        return <div>شغل مورد نظر پیدا نشد.</div>;
    }

    return (
        <div className="bg-background base-style">
            {open ? (
                <ApplyPage title={job.titleFn} />
            ) : (
                <div className='mt-[128px] gap-8'>
                    <h1 className="sm:text-4xl text-2xl font-bold mb-[114px] flex justify-center text-eighth">{job.titleFn}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
                        {jobDetails.map((detail, index) => (
                            <div key={index} className=" flex flex-col gap-2">
                                <span className="text-foreground text-base sm:text-xl font-semibold">
                                    {detail.label}
                                </span>
                                <div className="w-full h-14 rounded-xl bg-third items-center flex p-5">
                                    <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                                        {detail.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/2 w-full gap-4 flex flex-col">
                            <h2 className="mt-10 text-xl font-semibold">اطلاعات عنوان شغلی</h2>
                            <div className="flex flex-col bg-third px-3 sm:px-5 py-5 rounded-xl">
                                <span className="font-bold text-lg  mb-2 text-foreground opacity-50">
                                    وظایف:
                                </span>
                                <ul className="pl-5 space-y-2">
                                    {job.responsibilities.map((task, index) => (
                                        <li key={index} className="flex text-foreground">
                                            <div className='w-3 mt-3 lg:mt-2  ml-2'>
                                                <div className="w-2 h-2 rounded-full bg-foreground  "></div>
                                            </div>
                                            <span className=' text-sm sm:text-lg lg:text-base font-normal leading-7 text-justify opacity-50 ' >{task}</span>
                                        </li>
                                    ))}
                                </ul>

                                <span className="font-bold text-lg mt-6 mb-2 text-foreground opacity-50">
                                    شرایط:
                                </span>
                                <ul className="pl-5 space-y-2">
                                    {job.requirements.map((requirement, index) => (
                                        <li key={index} className="flex text-sm sm:text-lg lg:text-base text-foreground ">
                                            <span >✔</span> <span className='mr-4 leading-7 text-justify opacity-50'> {requirement}  </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className='flex  mt-3'>
                                    <span className='ml-2'>🎯</span>
                                    <span className="relative text-sm sm:text-lg lg:text-base text-foreground">
                                        <span className='opacity-50 leading-7 text-justify'> اگر علاقه‌مند به کار در محیطی پویا و دوستانه هستید، رزومه خود را به [ایمیل یا شماره واتساپ] ارسال کنید یا با شماره [شماره تماس] تماس بگیرید.
                                            ما منتظر حضور شما در تیم حرفه‌ای‌مان هستیم!</span> 🙌
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full  gap-4 flex flex-col">
                            <h2 className="mt-10 text-xl font-semibold">شرایط</h2>
                            <div className="flex flex-col">
                                {[
                                    { label: 'جنسیت', value: job.gender },
                                    { label: 'سن', value: job.age },
                                    { label: 'سطح مهارت', value: job.skillLevel },
                                    { label: 'حداقل سابقه کاری موردنیاز', value: job.minExperience },
                                    { label: 'بازه حقوق', value: job.salaryRange },
                                    { label: 'روزهای کاری', value: job.workingDays },
                                ].map((info, index) => (
                                    <React.Fragment key={index}>

                                        <div className={`flex flex-row justify-between mb-2 ${index > 0 ? 'mt-6' : ''}`}>
                                            <span className="text-foreground text-sm sm:text-base opacity-50">{info.label}</span>
                                            <span className="text-foreground text-sm sm:text-base opacity-50">{info.value}</span>
                                        </div>
                                        <div className="bg-[#242428] h-[1px]" />

                                    </React.Fragment>
                                ))}
                                <button
                                    onClick={handlerOpen}
                                    className="w-full h-14 bg-primary text-white rounded-xl mt-8 self-center"
                                >
                                    ارسال رزومه
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
