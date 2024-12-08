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
        <div className="flex flex-col bg-background lg:px-[120px] px-12 py-[30px]">
            {open ? (
                <ApplyPage title={job.titleFn} />
            ) : (
                <div>
                    <h1 className="text-4xl font-bold mb-28 flex justify-center">{job.titleFn}</h1>
                    <div className="flex flex-row flex-wrap justify-between">
                        <div className="flex flex-col">
                            <span className="text-foreground text-xl font-semibold">عنوان شغلی</span>
                            <div className="w-1/5 min-w-48 h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground text-opacity-50 text-sm font-semibold">
                                    {job.titleFn}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-foreground text-xl font-semibold">نوع فعالیت</span>
                            <div className="w-1/5 min-w-48 h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground text-opacity-50 text-sm font-semibold">
                                    {job.workMode}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-foreground text-xl font-semibold">تایم حضور</span>
                            <div className="w-1/5 min-w-48 h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground text-opacity-50 text-sm font-semibold">
                                    {job.employmentType}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-foreground text-xl font-semibold">مکان</span>
                            <div className="w-1/5 min-w-48 h-14 rounded-xl bg-third items-center flex p-5">
                                <span className="text-foreground text-opacity-50 text-sm font-semibold">
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
                                    <span className="font-bold text-lg mt-6 mb-2 text-foreground text-opacity-50">
                                        وظایف:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.responsibilities.map((task, index) => (
                                            <li key={index} className="relative flex items-center text-lg text-foreground">
                                                <div className="w-2 h-2 rounded-full bg-foreground text-opacity-50 mt-1 mx-2"></div>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="font-bold text-lg mt-6 mb-2 text-foreground text-opacity-50">
                                        شرایط:
                                    </span>
                                    <ul className="pl-5 space-y-2">
                                        {job.requirements.map((requirement, index) => (
                                            <li key={index} className="relative text-lg text-foreground">
                                                <span className="text-foreground text-opacity-50">✔</span> {requirement}
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
                                                <span className="text-foreground text-opacity-50">{info.label}</span>
                                                <span className="text-foreground text-opacity-50">{info.value}</span>
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
