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

    if (!job) {
        return <div>شغل مورد نظر پیدا نشد.</div>;
    }

    return (
        <div className="flex flex-col bg-background lg:px-[120px] px-12 py-[30px] pt-24">
            {open ? (
                <ApplyPage title={job.titleFn} />
            ) : (
                <div className='mt-32'>
                    <h1 className="sm:text-4xl text-2xl font-bold mb-28 flex justify-center text-eighth">{job.titleFn}</h1>
                    <div className=" grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-x-10 lg:gap-x-16  xl:gap-x-40 justify-items-stretch ">
                        <div className=" xl:max-w-[290px] flex flex-col mb-8">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-3">عنوان شغلی</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.titleFn}
                                </span>
                            </div>
                        </div>
                        <div className=" xl:max-w-[290px] flex flex-col mb-8">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-3">نوع فعالیت</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.workMode}
                                </span>
                            </div>
                        </div>
                        <div className=" xl:max-w-[290px] flex flex-col mb-8">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-3">تایم حضور</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.employmentType}
                                </span>
                            </div>
                        </div>
                        <div className=" xl:max-w-[290px] flex flex-col mb-8">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-3">مکان</span>
                            <div className="w-full h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm  font-semibold">
                                    {job.city}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap">
                        <div className="lg:w-[48%] w-full">
                            <div className="flex flex-col">
                                <h2 className="mt-8 mb-6 text-xl font-semibold">اطلاعات عنوان شغلی</h2>
                                <div className="flex flex-col bg-third px-5 py-5 rounded-xl">
                                    <span className="font-bold text-lg  mb-2 text-foreground opacity-50">
                                        وظایف:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.responsibilities.map((task, index) => (
                                            <li key={index} className="relative flex items-center opacity-50 text-foreground">
                                                <div className="w-2 h-2 rounded-full bg-foreground opacity-50 mt-1  mx-2"></div>
                                                <span className='text-lg lg:text-base font-normal'>{task}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="font-bold text-lg mt-6 mb-2 text-foreground opacity-50">
                                        شرایط:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.requirements.map((requirement, index) => (
                                            <li key={index} className="relative text-lg lg:text-base text-foreground opacity-50">
                                                <span className="text-foreground ">✔</span> {requirement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[48%] w-full">
                            <div className="flex flex-col">
                                <h2 className="mt-8 mb-6 text-xl font-semibold">شرایط</h2>
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
                                            <div className="flex flex-row justify-between mb-2 mt-6">
                                                <span className="text-foreground text-sm sm:text-base opacity-50">{info.label}</span>
                                                <span className="text-foreground text-sm sm:text-base opacity-50">{info.value}</span>
                                            </div>
                                            <div className="bg-[#242428] h-[1px]" />

                                        </React.Fragment>
                                    ))}
                                    <button
                                        onClick={handlerOpen}
                                        className="w-full h-14 bg-primary text-white rounded-xl mt-12 self-center"
                                    >
                                        ارسال رزومه
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
