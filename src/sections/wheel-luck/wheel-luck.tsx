"use client"
import Image from 'next/image'
import Link from 'next/link'


import React, { useRef, useState } from 'react'
import wheel from "@/assets/images/wheelluck/wheell.png"
 import ImageCarousel from './Image-Carousel'
import Discount from "@/assets/icons/wheel/discount"
import Arz from "@/assets/icons/wheel/arz"
import Awards from "@/assets/icons/wheel/awards"
import Accordion from '@/components/Accordion'
import Ghar from '@/assets/images/wheelluck/ghar.png'

import Silver from "@/assets/images/wheelluck/Silver.png"
import Bronze from "@/assets/images/wheelluck/Bronze.png"
import Gold from "@/assets/images/wheelluck/Gold.png"
import Crystal from "@/assets/images/wheelluck/Crystal.png"



const awards = [
  {
    icon: Bronze,
    title: "سطح برنزی",
    description: "سطح برنزی ارز هشت مخصوص کاربرانی است که احراز هویت اولیه (اطلاعات هویتی) خود را تکمیل کرده و حجم معاملات ماهانه آن‌ها بین ۰ تا ۱۰۰ میلیون تومان باشد."
  },
  {
    icon: Silver,
    title: "سطح نقره ای",
    description: "گردونه شانس سطح نقره‌ای برای کاربرانی فعال می‌شود که حجم معاملات ماه گذشته آن‌ها بین ۱۰۰ تا ۴۰۰ میلیون تومان باشد."
  },
  {
    icon: Gold,
    title: "سطح طلایی",
    description: "در این سطح، گردش معاملاتی ماهانه شما باید بین ۴۰۰ میلیون تا ۱ میلیارد تومان باشد تا امکان چرخاندن گردونه طلایی را داشته باشید."
  },
  {
    icon: Crystal,
    title: "سطح کریستالی",
    description: "سطح کریستالی با جوایز ویژه مستلزم حجم معاملات ماهانه بیش از یک میلیارد تومان است."
  },
]



export const AccordionData = [
  {
    id: 1,
    title: " چطور میتونیم جایزه ای که در گردونه برنده شدیم رو برداشت کنیم؟",
    content: "به محض چرخش گردونه و برنده شدن جایزه، مبلغ جایزه نقدی یا ارز دیجیتال به کیف پولتون اضافه میشه و قابل برداشت به حساب بانکی هست . حتی بدون فعالیت در صرافی می‌تونید مبلغ رو برداشت کنید."
  },

  {
    id: 2,
    title: "در هر ۲۴ ساعت چندبار میتونیم گردونه شانش را بچرخونیم؟",
    content: "در هر ۲۴ ساعت فقط یک بار می‌تونید اقدام به چرخش گردونه کنید. در صورتی که همین الان گردونه رو بچرخونید، فردا همین موقع دوباره می‌تونید شانس خودتون رو مجدد امتحان کنید."
  },
  {
    "id": 3,
    "title": "آیا سطح حساب کاربری در برنده شدن جایزه گردونه شانس تأثیرگذار است؟",
    "content": "بله، در گردونه شانس جدید «ارز هشت»، جوایزی که برای هر سطح در نظر گرفته شده متفاوت است و این موضوع وابسته به حجم معاملات و گردش 30 روزه شما در سایت است. سطوح کاربری برای چرخش گردونه به شرح زیر است:<br/>1. **سطح برنزی:** برای کاربرانی که احراز هویت اولیه (اطلاعات هویتی) را کامل کرده و حجم معاملات آن‌ها در طی 1 ماه بین 0 تا 100 میلیون تومان بوده است.<br/>2. **سطح نقره‌ای:** گردونه شانس برای کاربرانی قابل چرخش است که حجم معاملاتی یک ماه اخیرشان از 100 میلیون تا 400 میلیون تومان باشد.<br/>3. **سطح طلایی:** در این سطح، مبلغ گردش معاملاتی شما باید در یک ماه از 400 میلیون تا 1 میلیارد تومان باشد تا بتوانید گردونه طلایی را بچرخانید.<br/>4. **سطح کریستالی:** آخرین سطح، سطح کریستالی است که جوایز ویژه‌ای برای آن در نظر گرفته شده. برای چرخاندن گردونه در این سطح، حجم معاملات شما در یک ماه باید بیشتر از 1 میلیارد تومان باشد.<br/>**نکته:** در سطح‌های طلایی و کریستالی گزینه پوچ وجود ندارد و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد."
  },
  {
    id: 4,
    title: "کد تخفیف ترید به چه صورت اعمال میشود؟",
    content: "تخفیف کارمزد و سایر جوایز نقدی بصورت خودکار در حساب کاربری اعمال میشود."
  },
  {
    "id": 5,
    "title": "گردونه شانس در کدام قسمت است؟",
    "content": "برای چرخش گردونه شانس وارد پنل شده و به قسمت گردونه شانس مراجعه کنید. دسترسی به این صفحه از طریق لینک زیر هم امکان پذیر است:  https://app.arz8.com/tools/wheel "
  },
  {
    id: 6,
    title: "تایمر گردونه برای من کار نمیکند؟",
    content: "برای رفع این مشکل از آخرین نسخه مرورگر گوگل کروم و فایرفاکس استفاده کنید و چک کنید که حتما آخرین نسخه مرورگر روی گوشی یا کامپیوتر شما نصب باشد."
  },
]

export default function WheelLuck() {
  const [selectItem, setSelectItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0)



  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };




  return (
    <div className='base-style' style={{ gap: "0" }}>

      <div className='flex flex-col gap-10 lg:gap-24 mt-28'>



        <div className="flex flex-col xl:flex-row gap-y-10   w-full justify-between  ">
          <div className=" w-full flex flex-col justify-center order-2">
            <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-[40px] font-bold text-Seventh'>گردونه شانس صرافی ارز هشت</h1>
            <p className='text-sm md:text-[18.94px] font-semibold  text-sixth text-justify mb-[20px] lg:mb-[33px] mt-[11px] lg:mt-[25px] leading-[33.65px] lg:leading-[60.36px]'>گردونه شانس یکی از امکانات جدید و هیجان‌انگیز پلتفرم ارز هشت است که به تازگی رونمایی شده و فرصت ویژه‌ای برای کاربران فراهم کرده است. با این قابلیت، تمامی کاربران می‌توانند هر ۲۴ ساعت یک‌بار گردونه را به صورت کاملاً رایگان بچرخانند و شانس خود را برای دریافت جوایز ارز دیجیتال امتحان کنند.</p>


            <Link className='self-end w-full lg:w-56 h-[47px] lg:h-[61px]' href={"#"}>
              <button className=' bg-primary w-full h-full text-white text-xl lg:text-2xl font-bold rounded-[15.3px] xl:rounded-[20px]  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary'>گرداندن گردونه</button>
            </Link>
          </div>
          <div className="w-full order-1 xl:order-3 flex justify-center xl:justify-end items-center ">
            <Image
              src={wheel}
              alt="image"
            />
          </div>
        </div>

        <div className='flex flex-col gap-5 lg:gap-10'>
          <h2 className='text-lg md:text-2xl lg:text-3xl font-bold'>جوایز گزدونه شانس ارزهشت</h2>
          <div className='w-full overflow-x-auto custom-scrollbar' ref={containerRef}>
            <div className='flex flex-row gap-4 w-full'
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >

              <div className='w-[33%] min-w-40 md:min-w-[195px] '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex flex-col gap-4 rounded-xl justify-center items-center  lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Awards />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>جوایز نقدی</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-[195px]  '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex mx-auto flex-col gap-4 rounded-xl justify-center items-center lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Arz />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>ارزدیجیتال رایگان</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-[195px] '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex mr-auto flex-col gap-4 rounded-xl justify-center items-center lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-20 h-20 md:w-16 md:h-16'>
                    <Discount />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>جایزه تخفیف کارمزد</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='w-[360px] sm:w-[388px]  lg:w-[489px] h-[479px] lg:h-[604px] self-center'>
            <ImageCarousel />
          </div>
          <div className='flex flex-col w-full mt-12 lg:mt-0 lg:mr-[75px] justify-center '>
            <h3 className='text-lg md-text-2xl  xl:text-3xl font-bold mb-[16px] lg:mb-[28px]'>همین الان ثبت نام کن و گردونه رو بچرخون!</h3>
            <p className='text-sm md:text-base  xl:text-xl font-semibold text-sixth text-justify leading-9 lg:leading-[63px] xl:leading-[63px] '>با گردونه شانس، ارز دیجیتال رایگان دریافت کنید! پس از برنده شدن، می‌توانید مبلغ جایزه را به‌راحتی به حساب بانکی خود برداشت کنید و از این طریق به‌سادگی از یک صرافی ارز دیجیتال درآمد دلاری کسب کنید.
            </p>
            <div className='flex justify-end w-full  h-[53px] lg:h-16 '>
              <Link className='mt-2 md:mt-[26px] rounded-[15px] lg:rounded-[21px] w-full  lg:w-[230px] h-full' href={"https://app.arz8.com/auth/register"}>
                <button className='text-xl lg:text-2xl rounded-[15px] lg:rounded-[21px]  w-full   h-full font-bold text-white bg-primary  text-center  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary'>ثبت نام سریع</button>
              </Link>
            </div>
          </div>


        </div>

        <div className='flex flex-col'>
          <h2 className='text-lg md:text-2xl lg:text-3xl font-bold'>جوایز طبق سطح کاربری</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[26px] lg:mt-10'>
            {awards.map((item, index) => (
              <div key={index} className='flex flex-col w-full py-[15px] px-[18px]  sm:px-3  bg-third rounded-xl'>
                <div className='flex gap-4 items-center mb-2 sm:mb-3'>
                  <Image
                    src={item.icon}
                    alt='icon'
                    width={60}
                    height={60}
                    className='w-10 h-10 md:w-[60px] md:h-[60px]'
                  />
                  <span className='text-base sm:text-[18.9px] font-bold'>{item.title}</span>
                </div>
                <span className='text-sm sm:text-base font-normal text-justify mt-xl leading-[30px] sm:leading-[45px]'>{item.description}</span>
              </div>
            ))}
          </div>

          <div className='flex w-full py-[15px] px-[18px] mt-5 bg-third rounded-xl '>
            <span className='flex w-full text-sm sm:text-xl font-normal text-center justify-center items-center leading-[30px]' >نکته: در سطح طلایی و کریستال گزینه پوچ وجود نداره و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد.</span>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row  justify-between '>
          <div className=" w-full lg:w-[55%] flex flex-col justify-center order-3 lg:order-1  ">
            <h2 className='text-lg md:text-2xl lg:text-3xl leading-[35px] lg:leading-[39px] font-bold text-Seventh mb-[16px] lg:mb-[28px] text-justify w-[100%]'>چگونه از گردونه شانس صرافی ارز 8 استفاده کنیم؟</h2>
            <p className='text-xs md:text-xl font-semibold leading-[37px] md:leading-[63px]  text-sixth text-justify md:mb-[26px]'>به طور کلی استفاده از گردونه صرافی ارز هشت، شرایط پیچیده ای ندارد، فقط کافی است تا در صرافی ثبت نام کنید و هر روز شانس‌تان را برای برنده شدن امتحان کنید.</p>


            <Link className='self-end w-full lg:w-[230px] sm:h-16 h-[53px] mt-5 lg:mt-0 ' href="#">
              <button className=' bg-primary w-full h-full text-white text-xl lg:text-2xl font-bold rounded-[15px]  lg:rounded-[20px]  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary'>چرخش گردونه</button>
            </Link>
          </div>
          <div className='w-full lg:w-[45%] order-2 flex justify-center'>
            <Image className='w-[305px] h-[633px]' src={Ghar} alt='Ghar' width={305} height={633}/>
          </div>

        </div>


        <div className='flex flex-col gap-10'>
          <h2 className='text-lg md:text-2xl lg:text-3xl font-bold text-Seventh'>سوالات متداول گردونه شانس ارزهشت</h2>
          <div className='flex flex-col gap-5'>
            <Accordion
              items={AccordionData}
              defaultOpenId={selectItem}
              onToggle={(id) => setSelectItem(id)}
              textTitle="text-[13px]"
              smTextTitle="sm:text-xl"
              lgTextTitle="lg:text-xl"
              textContent="text-[11px]"
              smTextContent="sm:text-sm"
              lgTextContent="lg:text-sm"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
