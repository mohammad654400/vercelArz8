import React from 'react';
import Image from 'next/image';
import Bot from "@/assets/images/about/bot.png"
import { aboutData } from './data/aboutData';

export default function About() {
    return (
        <div className="flex flex-col bg-background base-style ">
            <div className="flex flex-col lg:flex-row w-full justify-between lg:mt-16">
                <div className="lg:w-2/3 w-full flex flex-col justify-center order-2">
                    <h1 className='text-2xl sm:text-4xl font-bold text-Seventh mt-7 lg:mt-0'>درباره صرافی ارزهشت</h1>
                    <p className='text-sm sm:text-lg font-semibold  text-sixth mt-10 leading-7 sm:leading-9'>صرافی ارزهشت با هدف ایجاد یک پلتفرم مطمئن و پیشرفته برای معامله‌گران و سرمایه‌گذاران ارزهای دیجیتال راه‌اندازی شده است. تیم ما از متخصصین با تجربه در حوزه فناوری بلاکچین، امنیت اطلاعات و بازارهای مالی تشکیل شده و متعهد است بهترین خدمات ممکن را به شما ارائه دهد.</p>
                </div>
                <div  className="lg:w-1/3  w-full  order-1 lg:order-3 flex justify-center items-center self-center">
                <Image
                    src={Bot}
                    alt="image"
                />
                </div>
                
            </div>


            <span className='text-xl sm:text-3xl font-semibold text-Seventh '>چرا صرافی ارز هشت</span>

            <div className='flex flex-wrap justify-center'>
                {aboutData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='mb-7 mx-auto w-36 sm:w-52 h-36 sm:h-52 bg-secondary flex flex-col items-center justify-center rounded-xl shadow-lg'
                        >
                            <div className='w-16 sm:w-[105px] h-16 sm:h-[105px] flex items-center justify-center '>
                                <item.src />
                            </div>

                            <span className='py-2 text-sm sm:text-lg font-semibold text-Seventh'>{item.text}</span>
                        </div>
                    );
                })}
            </div>


            <div className='flex flex-col md:flex-row justify-between mt-2'>
                <div className='w-full md:w-1/2 flex flex-col ml-2'>
                    <span className='mb-7 text-Seventh sm:text-2xl text-lg font-semibold  '>ماموریت صرافی ارز هشت</span>
                    <div className='w-full  rounded-xl px-4 py-5 bg-third'>
                        <span className='text-Seventh sm:text-base text-sm font-normal leading-9'>ایجاد فضایی امن، شفاف و کاربرپسند برای همه افرادی که به آینده ارزهای دیجیتال اعتقاد دارند.</span>
                    </div>

                </div>
                <div className='w-full md:w-1/2 flex flex-col mr-2 mt-7 md:mt-0'>
                    <span className='mb-7 text-Seventh sm:text-2xl text-lg font-semibold '>ارزش های صرافی ارز هشت</span>
                    <div className='w-full mb-2  rounded-xl px-4 py-5 bg-third'>
                        <span className='text-Seventh sm:text-base text-sm font-normal'>شفافیت در تمامی مراحل و فرآیندها</span>
                    </div>
                    <div className='w-full mb-2  rounded-xl px-4 py-5 bg-third'>
                        <span className='text-Seventh sm:text-base text-sm font-normal leading-9'> ارائه راهکارهای جدید و پیشرفته برای آسان‌تر کردن معاملات</span>
                    </div>
                    <div className='w-full mb-2 rounded-xl px-4 py-5 bg-third'>
                        <span className='text-Seventh sm:text-base text-sm font-normal leading-9'>همیشه گوش به نیازها و بازخوردهای شما هستیم</span>
                    </div>

                </div>
            </div>




        </div>
    );
}
