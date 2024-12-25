import React from 'react';
import Image from 'next/image';
import Bot from "@/assets/images/about/bot.png"
import { aboutData } from './data/aboutData';

export default function About() {
    return (
        <div className="bg-background base-style" style={{ gap: "0" }}>
            <div className="flex flex-col pt-20  xl:flex-row w-full justify-between ">
                <div className=" w-full flex flex-col justify-center order-2  mt-10 md:mt-[113px] xl:mt-0">
                    <h1 className='text-xl sm:text-[40px] font-bold text-Seventh'>درباره صرافی ارزهشت</h1>
                    <p className='text-sm sm:text-[19px] font-semibold  text-sixth  leading-[35px] sm:leading-[60px] text-justify mt-[10px] md:mt-[39px]'>صرافی ارزهشت با هدف ایجاد یک پلتفرم مطمئن و پیشرفته برای معامله‌گران و سرمایه‌گذاران ارزهای دیجیتال راه‌اندازی شده است. تیم ما از متخصصین با تجربه در حوزه فناوری بلاکچین، امنیت اطلاعات و بازارهای مالی تشکیل شده و متعهد است بهترین خدمات ممکن را به شما ارائه دهد.</p>
                </div>
                <div className="h-full  w-full  order-1 xl:order-3 flex justify-center xl:justify-end items-center self-center">
                    <Image
                        src={Bot}
                        alt="image"
                        className='sm:max-h-[407px] sm:max-w-[407px] lg:min-w-[507px] lg:min-h-[507px]'
                    />
                </div>
            </div>


            <h2 className='text-[18px] sm:text-[30px] font-semibold text-Seventh mt-[10px] sm:mt-[90px] xl:"mt-[100px] mb-[20px] sm:mb-[50px]'>چرا صرافی ارز هشت</h2>

            <div className='flex flex-wrap justify-center gap-2'>
                {aboutData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='mb-2 mx-auto  w-[183px] h-[183px] sm:w-[203px] sm:h-[203px] bg-secondary flex flex-col items-center justify-center rounded-[18px] sm:rounded-[20px] shadow-lg'
                        >
                            <div className='w-[95px] sm:w-[105px] h-[95px] sm:h-[105px] flex items-center justify-center '>
                                <item.src />
                            </div>

                            <span className='py-2 text-[17px] sm:text-[19px] font-semibold text-Seventh'>{item.text}</span>
                        </div>
                    );
                })}
            </div>


            <div className='flex flex-col lg:flex-row justify-between gap-8 mt-[39px] sm:mt-[60px]  lg:mt-[100px] '>
                <div className='w-full lg:w-1/2 flex flex-col  '>
                    <span className='text-Seventh sm:text-[30px] text-lg font-semibold mb-[10px] sm:mb-[20px] lg:mb-[30px]'>ماموریت صرافی ارز هشت</span>
                    <div className='w-full  rounded-[13px] sm:rounded-[22px] lg:rounded-[20px] px-[14px] py-[17px] sm:px-[24px] sm:py-[30px] lg:px-[22px] lg:py-[27px] bg-third'>
                        <span className='text-Seventh lg:text-xl sm:text-[22px] text-sm font-normal leading-9'>ایجاد فضایی امن، شفاف و کاربرپسند برای همه افرادی که به آینده ارزهای دیجیتال اعتقاد دارند.</span>
                    </div>

                </div>
                <div className='w-full lg:w-1/2 flex flex-col  '>
                    <span className='text-Seventh sm:text-[30px] text-lg font-semibold mb-[10px] sm:mb-[20px] lg:mb-[30px]'>ارزش های صرافی ارز هشت</span>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full  rounded-[13px] sm:rounded-[22px] lg:rounded-[20px] px-[14px] py-[17px] sm:px-[24px] sm:py-[30px] lg:px-[22px] lg:py-[27px] bg-third'>
                            <span className='text-Seventh lg:text-xl sm:text-[22px] text-sm font-normal leading-9'>شفافیت در تمامی مراحل و فرآیندها</span>
                        </div>
                        <div className='w-full  rounded-[13px] sm:rounded-[22px] lg:rounded-[20px] px-[14px] py-[17px] sm:px-[24px] sm:py-[30px] lg:px-[22px] lg:py-[27px] bg-third'>
                            <span className='text-Seventh lg:text-xl sm:text-[22px] text-sm font-normal leading-9'> ارائه راهکارهای جدید و پیشرفته برای آسان‌تر کردن معاملات</span>
                        </div>
                        <div className='w-full  rounded-[13px] sm:rounded-[22px] lg:rounded-[20px] px-[14px] py-[17px] sm:px-[24px] sm:py-[30px] lg:px-[22px] lg:py-[27px] bg-third'>
                            <span className='text-Seventh lg:text-xl sm:text-[22px] text-sm font-normal leading-9'>همیشه گوش به نیازها و بازخوردهای شما هستیم</span>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
