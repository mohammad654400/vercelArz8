'use client';
import { usePathname, notFound } from 'next/navigation';
import React, { useState } from 'react';
import { jobListings } from './data/data';
import ApplyPage from '../apply/apply';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function DetailJob() {
    const route = usePathname().split('/')[2];
    const job = jobListings.find(item => item.title === route);
    const [open, setIsOpen] = useState(false);

    const handlerOpen = () => {
        setIsOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const jobDetails = [
        { label: "عنوان شغلی", value: job?.titleFn },
        { label: "نوع فعالیت", value: job?.workMode },
        { label: "تایم حضور", value: job?.employmentType },
        { label: "مکان", value: job?.city },
    ];


    if (!job) {
        notFound();
    }

    return (
        <div className="bg-background base-style">
            {open ? (
                <GoogleReCaptchaProvider
                    reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    scriptProps={{
                        async: true,
                        defer: true,
                        appendTo: "head",
                    }}
                >
                    <ApplyPage title={job.titleFn} />
                </GoogleReCaptchaProvider>
            ) : (
                <div className='mt-[76px] sm:mt-[174px] lg:mt-[215px] '>
                    <h1 className="text-xl  sm:text-[38.8px] lg:text-4xl  lg:mb-[114px] sm:mb-[108px] mb-[20px] font-bold  flex justify-center text-eighth">{job.titleFn}</h1>

                    <div className='flex flex-col gap-y-[15px] sm:gap-y-[38px] lg:gap-y-[30px]'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-x-[25px] gap-y-[15px] sm:gap-y-[25px]">
                            {jobDetails.map((detail, index) => (
                                <div key={index} className=" flex flex-col gap-2">
                                    <span className="text-foreground text-base sm:text-xl lg:text-[19px] font-semibold">
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

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-[40px] sm:gap-y-[38px] lg:gap-y-[30px]">
                            <div className="w-full gap-[26px] flex flex-col">
                                <h2 className="text-xl font-semibold">اطلاعات عنوان شغلی</h2>
                                <div className="flex flex-col bg-third px-3 sm:px-5 py-5 rounded-xl gap-5">

                                    <div className='flex flex-col gap-5'>
                                        <span className="font-normal text-sm sm:text-lg lg:text-base  text-sixth opacity-50">
                                            وظایف:
                                        </span>
                                        <ul className="flex flex-col gap-y-5">
                                            {job.responsibilities.map((task, index) => (
                                                <li key={index} className="flex text-sixth items-center gap-x-2 ">
                                                    <div className="">
                                                        <div className="w-2 h-2 rounded-full bg-sixth "></div>
                                                    </div>
                                                    <span className=' font-normal text-sm sm:text-lg lg:text-base   text-justify opacity-50'>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='flex flex-col gap-5'>
                                        <span className="font-normal text-sm sm:text-lg lg:text-base   text-sixth opacity-50">
                                            شرایط:
                                        </span>
                                        <ul className="flex flex-col gap-y-5">
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index} className="flex font-normal text-sm sm:text-lg lg:text-base  text-sixth items-center gap-x-2 ">
                                                    <span >✔</span> <span className='text-justify opacity-50'> {requirement}  </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='flex gap-x-2 '>
                                        <span className='mt-2'>🎯</span>
                                        <span className="relative font-normal text-sm sm:text-lg lg:text-base  text-sixth">
                                            <span className='opacity-50 text-justify leading-[35px]'> اگر علاقه‌مند به کار در محیطی پویا و دوستانه هستید، رزومه خود را به [ایمیل یا شماره واتساپ] ارسال کنید یا با شماره [شماره تماس] تماس بگیرید.
                                                ما منتظر حضور شما در تیم حرفه‌ای‌مان هستیم!</span> 🙌
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full gap-[26px] flex flex-col">
                                <h2 className=" text-xl font-semibold">شرایط</h2>
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

                                            <div className={`flex flex-row justify-between mb-3 ${index > 0 ? 'mt-6' : ''}`}>
                                                <span className="text-sixth text-sm sm:text-base opacity-50">{info.label}</span>
                                                <span className="text-sixth text-sm sm:text-base opacity-50">{info.value}</span>
                                            </div>
                                            <div className="bg-[#ADADAD80] h-[1px] opacity-50" />

                                        </React.Fragment>
                                    ))}
                                    <button
                                        onClick={handlerOpen}
                                        className="w-full h-[38px] sm:h-[60px] lg:h-14 text-base sm:text-xl lg:text-[19px] bg-primary text-white rounded-xl sm:rounded-[18px] mt-8 self-center  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:translate-y-0 active:bg-primary"
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
