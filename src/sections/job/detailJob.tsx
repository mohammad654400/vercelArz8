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
                <div>
                    <h1 className="sm:text-4xl text-2xl font-bold mb-28 flex justify-center">{job.titleFn}</h1>
                    <div className="flex flex-row flex-wrap justify-between">
                        <div className="w-full sm:w-1/5  flex flex-col mb-2">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-1">عنوان شغلی</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.titleFn}
                                </span>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col mb-2">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-1">نوع فعالیت</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.workMode}
                                </span>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col mb-2">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-1">تایم حضور</span>
                            <div className="w-full  h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm font-semibold">
                                    {job.employmentType}
                                </span>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/5 flex flex-col mb-2">
                            <span className="text-foreground text-base sm:text-xl font-semibold mb-1">مکان</span>
                            <div className="w-full h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground opacity-50 text-xs sm:text-sm  font-semibold">
                                    {job.city}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap">
                        <div className="lg:w-[46%] w-full">
                            <div className="flex flex-col">
                                <h2 className="mt-8 mb-6">اطلاعات عنوان شغلی</h2>
                                <div className="flex flex-col bg-third p-5 rounded-xl">
                                    <span className="font-bold text-lg mt-6 mb-2 text-foreground opacity-50">
                                        وظایف:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.responsibilities.map((task, index) => (
                                            <li key={index} className="relative flex items-center text-sm sm:text-lg opacity-50 text-foreground">
                                                <div className="w-2 h-2 rounded-full bg-foreground opacity-50 mt-1  mx-2"></div>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="font-bold text-lg mt-6 mb-2 text-foreground opacity-50">
                                        شرایط:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.requirements.map((requirement, index) => (
                                            <li key={index} className="relative text-sm sm:text-lg text-foreground opacity-50">
                                                <span className="text-foreground ">✔</span> {requirement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[46%] w-full">
                            <div className="flex flex-col">
                                <h2 className="mt-8 mb-6">اطلاعات عنوان شغلی</h2>
                                <div className="flex flex-col bg-third p-5 rounded-xl">
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
                                                <span className="text-foreground text-sm sm:text-lg opacity-50">{info.label}</span>
                                                <span className="text-foreground text-sm sm:text-lg opacity-50">{info.value}</span>
                                            </div>
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                    <button
                                        onClick={handlerOpen}
                                        className="w-[90%] h-14 bg-primary text-white rounded-xl my-5 self-center"
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
