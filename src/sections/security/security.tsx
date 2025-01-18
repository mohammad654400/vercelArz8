import Image from 'next/image'
import React from 'react'
import btcMining from "@/assets/images/security/btcMining.png"
import { cardData, securitySolutions } from './data'
import { dir } from 'node:console'

export default function Security() {
    return (
        <div className='base-style bg-background'>
            <div className='flex flex-col mt-[77px] sm:mt-[187px] gap-10 md:gap-0'>
                <div className="full-screen flex flex-col   lg:flex-row w-full gap-x-[78px] gap-y-10 justify-between">
                    <div className="  w-full flex flex-col justify-center order-2  px-5 md:px-12 lg:pl-0 lg:pr-16 xl:px-0   ">
                        <h1 className='text-base  md:text-2xl xl:text-[40px] font-bold text-Seventh lg:mt-0'>امنیت، اولویت اول در ارزهشت</h1>
                        <p className='text-sm  md:text-base xl:text-[18.94px] font-semibold  text-sixth text-justify mt-3 lg:mt-[25px] leading-[33.65px] lg:leading-[60.36px]'>در ارزهشت، امنیت کاربران اساس فعالیت‌های ماست. به‌عنوان یکی از پیشروترین پلتفرم‌های معاملاتی ارز دیجیتال در ایران، تمام خدمات ما اعم از وب‌سایت و اپلیکیشن، بر پایه به‌روزترین استانداردهای امنیتی و با بهره‌گیری از تخصص تیم مجرب امنیت سایبری طراحی شده‌اند. </p>
                    </div>
                    <div className=" max-w-[366px] md:max-w-[549px]  w-full  order-1 lg:order-3 flex justify-center items-center self-end">
                        <Image
                            src={btcMining}
                            alt="image"
                        />
                    </div>

                </div>

                <div className='w-screen self-center bg-secondary md:mt-[50px] '>
                    <div className='base-style py-[23px] lg:pt-[87px] lg:pb-[56px]' style={{ gap: "0px" }}>
                        <div className='hidden lg:flex flex-col items-center w-full mb-[95px]'>
                            <h3 className="text-[35px] font-bold border-b-4 border-primary pb-2  w-auto text-center ">
                                امکانات امنیتی صرافی ارزهشت
                            </h3>
                        </div>


                        <div className="grid gap-y-5 gap-x-[42px] grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 w-full grid-flow-row-dense justify-between">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col rounded-[20px]  bg-fifth justify-center items-center min-w-[172px] min-h-[172px] sm:w-full  xl:max-w-[165px] xl:max-h-[165px] "
                                >
                                    <div className="w-[73px] h-[73px] sm:h-[70px] sm:w-[70px]">
                                        <card.icon />
                                    </div>
                                    <span className="text-base font-semibold text-seventh mt-3">
                                        {card.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className=' text-xs md:text-base md:mt-[76px]  leading-[36px] md:leading-[59.8px]'>
                    <h2 className='text-sm md:text-[23px] font-semibold mb-2 lg:mb-3'>راهکارهای امنیتی در ارزهشت</h2>
                    {securitySolutions.map((items) => (
                        <div key={items.id} className='flex flex-col'>
                            <div className='flex gap-x-1'>
                                <span className=''>{items.id}</span>
                                <span>{items.title}</span>
                            </div>
                            <span className='mr-4' >{items.description}</span>

                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
