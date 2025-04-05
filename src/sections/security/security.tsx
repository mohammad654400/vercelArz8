import Image from 'next/image'
import React from 'react'
import btcMining from "@/assets/images/security/btcMining.png"
import { cardData, securitySolutions } from './data'

export default function Security() {
    return (
            <div className=' flex flex-col pt-[77px] sm:pt-[187px] gap-10 md:gap-0 bg-background'>
                <div className=" full-screen flex flex-col   lg:flex-row w-full gap-x-[78px] gap-y-10 justify-between">
                    <div className="  w-full flex flex-col justify-center order-2  px-5 md:px-12 lg:pl-0 lg:pr-16 xl:px-0   ">
                        <h2 className='text-base  md:text-2xl xl:text-4xl font-bold text-Seventh lg:mt-0'>امنیت، مهم‌ترین اولویت در ارزهشت</h2>
                        <p className='text-sm  md:text-base xl:text-[18.94px] font-semibold  text-sixth text-justify mt-3 lg:mt-[25px] leading-[33.65px] lg:leading-[60.36px]'>در ارزهشت، امنیت شما از هر چیز دیگری مهم‌تر است. ما به‌عنوان یکی از پلتفرم‌های پیشرو در معاملات ارز دیجیتال در ایران، تمام خدمات خود را ( وب‌سایت و اپلیکیشن ) با جدیدترین استانداردهای امنیتی و کمک تیمی حرفه‌ای در امنیت سایبری طراحی کرده‌ایم تا شما بتوانید با خیال راحت معامله کنید.</p>
                    </div>
                    <div className=" max-w-[366px] md:max-w-[549px]  w-full  order-1 lg:order-3 flex justify-center items-center self-end">
                        <Image
                            src={btcMining}
                            alt="image"
                            priority
                        />
                    </div>

                </div>

                <div className='w-full self-center bg-secondary md:mt-[50px] '>
                    <div className='base-style py-[23px] lg:pt-[87px] lg:pb-[56px]' style={{ gap: "0px" }}>
                        <div className='hidden lg:flex flex-col items-center w-full mb-[95px]'>
                            <h1 className="text-[35px] font-bold border-b-4 border-primary pb-2  w-auto text-center ">
                                امکانات امنیتی صرافی ارزهشت
                            </h1>
                        </div>


                        <div className="grid gap-y-5 gap-x-4 sm:gap-x-[42px] grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 w-full grid-flow-row-dense justify-between">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col rounded-[20px]  bg-fifth justify-center items-center min-w-[162px] min-h-[162px] sm:w-full  xl:max-w-[155px] xl:max-h-[155px] "
                                >
                                    <div className="w-[73px] h-[73px] sm:h-[70px] sm:w-[70px]">
                                        <card.icon />
                                    </div>
                                    <h2 className="text-base font-semibold text-seventh mt-3">
                                        {card.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className='base-style !gap-0 text-xs md:text-base md:mt-[76px]  leading-[36px] md:leading-[59.8px]'>
                    <h2 className='text-sm md:text-[23px] font-semibold mb-2 lg:mb-3'>راهکارهای امنیتی در ارزهشت</h2>
                    {securitySolutions.map((items) => (
                        <div key={items.id} className='flex flex-col'>
                            <div className='flex gap-x-1'>
                                <span className=''>{items.id}</span>
                                <h2>{items.title}</h2>
                            </div>
                            <p className='mr-4' >{items.description}</p>
                        </div>
                    ))}
                </div>
            </div>

    )
}
