import Image from 'next/image'
import React from 'react'
import Image404 from "@/assets/images/Image404.png"
import Arz from "@/assets/icons/wheel/arz"
import GeneralQuestions from "@/assets/icons/guidanceCenter/generalQuestions";
import Login from "@/assets/icons/notFound/login"
import Download from "@/assets/icons/notFound/download"
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='base-style' style={{ gap: 0 }}>

      <div className='flex flex-col gap-y-12 md:gap-y-24 justify-center items-center  mt-[104px] md:mt-[232px]'>
        <div className='flex flex-col justify-center items-center gap-y-5 md:gap-y-5'>
          <h1 className='text-xl md:text-[53px] font-bold  md:py-5'>احتمالا مشکلی پیش اومده!؟</h1>
          <h2 className='text-primary text-base md:text-[63px] font-bold md:py-5'>ارور 404</h2>
          <div className='flex flex-col gap-y-10 justify-center items-center'>
            <span className='md:text-[27px] text-sm font-normal  md:py-5'>صفحه مورد نظرتان یافت نشد .</span>
            <Image src={Image404} alt='404' quality={100} />
          </div>

        </div>
        <Link className=' w-[177px] md:w-[221px] h-[42px] md:h-[59px] bg-primary rounded-[10px] md:rounded-[20px]' href={"/"}>
          <button className='text-white w-full h-full text-base md:text-xl font-bold text-center'>بازگشت به صفحه اصلی</button>
        </Link>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 grid-flow-row-dense gap-3 mb-20'>
          <Link className='flex flex-col w-[153px] h-[153px] md:w-[183px] md:h-[183px] rounded-[20px] bg-third justify-center items-center gap-2 md:gap-7 justify-self-start  md:justify-self-center' href={"/application"}>
            <div className='w-[56px] h-[56px]'>
              <Download />
            </div>
            <span className='text-lg font-semibold'>دانلود اپلیکیشن</span>

          </Link>

          <Link className='flex flex-col w-[153px] h-[153px] md:w-[183px] md:h-[183px] rounded-[20px] bg-third justify-center items-center gap-2 md:gap-7 justify-self-end  md:justify-self-center' href={"/contact-us"}>
            <div className='w-[56px] h-[56px]'>
              <GeneralQuestions />
            </div>
            <span className='text-lg font-semibold'>تماس با ما</span>

          </Link>

          <Link className='flex flex-col w-[153px] h-[153px] md:w-[183px] md:h-[183px] rounded-[20px] bg-third justify-center items-center gap-2 md:gap-7 justify-self-start  md:justify-self-center' href={"/coins"}>
            <div className='w-[56px] h-[56px]'>
              <Arz />
            </div>
            <span className='text-lg font-semibold'>خرید و فروش ارز</span>

          </Link>


          <Link className='flex flex-col w-[153px] h-[153px] md:w-[183px] md:h-[183px] rounded-[20px] bg-third justify-center items-center gap-2 md:gap-7 justify-self-end  md:justify-self-center' href={"https://app.arz8.com/auth/register"}>
            <div className='w-[56px] h-[56px]'>
              <Login />
            </div>
            <span className='text-lg font-semibold'>ورود یا ثبت نام</span>

          </Link>

        </div>
      </div>


    </div>
  )
}
