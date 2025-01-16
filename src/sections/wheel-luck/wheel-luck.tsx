"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wheel from "@/assets/images/wheelluck/wheel.png"
import ImageCarousel from './Image-Carousel'
import Discount from "@/assets/icons/wheel/discount"
import Arz from "@/assets/icons/wheel/arz"
import Awards from "@/assets/icons/wheel/awards"
import Accordion from '@/components/Accordion'
import Ghar from '@/assets/images/wheelluck/ghar.png'
import ImageOne from '@/assets/images/wheelluck/8.png'
import ImageTwo from '@/assets/images/wheelluck/9.png'
import ImageThree from '@/assets/images/wheelluck/1.png'
import ImageFour from '@/assets/images/wheelluck/2.png'
import ImageFive from '@/assets/images/wheelluck/3.png'
import ImageSix from '@/assets/images/wheelluck/4.png'
import ImageSeven from '@/assets/images/wheelluck/5.png'
import ImageEight from '@/assets/images/wheelluck/6.png'
import ImageNine from '@/assets/images/wheelluck/7.png'
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

const imageUrls = [
  ImageOne.src,
  ImageTwo.src,
  ImageThree.src,
  ImageFour.src,
  ImageFive.src,
  ImageSix.src,
  ImageSeven.src,
  ImageEight.src,
  ImageNine.src,
];


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
    "content": "بله، در گردونه شانس جدید «ارز هشت»، جوایزی که برای هر سطح در نظر گرفته شده متفاوت است و این موضوع وابسته به حجم معاملات و گردش 30 روزه شما در سایت است. سطوح کاربری برای چرخش گردونه به شرح زیر است:\n\n1. **سطح برنزی:** برای کاربرانی که احراز هویت اولیه (اطلاعات هویتی) را کامل کرده و حجم معاملات آن‌ها در طی 1 ماه بین 0 تا 100 میلیون تومان بوده است.\n\n2. **سطح نقره‌ای:** گردونه شانس برای کاربرانی قابل چرخش است که حجم معاملاتی یک ماه اخیرشان از 100 میلیون تا 400 میلیون تومان باشد.\n\n3. **سطح طلایی:** در این سطح، مبلغ گردش معاملاتی شما باید در یک ماه از 400 میلیون تا 1 میلیارد تومان باشد تا بتوانید گردونه طلایی را بچرخانید.\n\n4. **سطح کریستالی:** آخرین سطح، سطح کریستالی است که جوایز ویژه‌ای برای آن در نظر گرفته شده. برای چرخاندن گردونه در این سطح، حجم معاملات شما در یک ماه باید بیشتر از 1 میلیارد تومان باشد.\n\n**نکته:** در سطح‌های طلایی و کریستالی گزینه پوچ وجود ندارد و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد."
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
  return (
    <div className='base-style' style={{ gap: "0" }}>
      <div className='flex flex-col gap-10 md:gap-24 mt-28'>

        <div className="flex flex-col gap-10 lg:flex-row  w-full justify-between">
          <div className="w-full flex flex-col justify-center order-2">
            <h1 className='mb-[9px] lg:mb-[15px] text-xl md:text-2xl lg:text-3xl font-bold text-Seventh'>گردونه شانس صرافی ارز هشت</h1>
            <p className='text-sm lg:text-base leading-[38px] lg:leading-[60px] font-semibold  text-sixth text-justify '>گردونه شانس یکی از امکانات جدید و هیجان‌انگیز پلتفرم ارز هشت است که به تازگی رونمایی شده و فرصت ویژه‌ای برای کاربران فراهم کرده است. با این قابلیت، تمامی کاربران می‌توانند هر ۲۴ ساعت یک‌بار گردونه را به صورت کاملاً رایگان بچرخانند و شانس خود را برای دریافت جوایز ارز دیجیتال امتحان کنند.</p>


            <Link className='self-end w-full lg:w-[220px] h-[53px] lg:h-[61px]' href="#">
              <button className='mt-5 lg:mt-[13px] bg-primary w-full h-full text-white text-xl lg:text-2xl font-bold rounded-[15px] lg:rounded-xl'>گرداندن گردونه</button>
            </Link>
          </div>
          <div className="w-full h-full  lg:justify-end order-1 lg:order-3 flex justify-center items-center self-center">
            <Image
              src={wheel}
              alt="image"
              className=' w-[388px] lg:w-[538px] h-full '
            />
          </div>
        </div>

        <div className='flex flex-col gap-5 md:gap-10'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>جوایز گزدونه شانس ارزهشت</h2>
          <div className='w-full overflow-x-auto'>
            <div className='flex flex-row gap-4 w-full'>
              <div className='w-[33%] min-w-40 md:min-w-48 '>
                <div className='w-40 h-40 md:w-48 md:h-48 bg-third flex flex-col gap-4 rounded-xl shadow-lg justify-center items-center'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Awards />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>جوایز نقدی</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-48  '>
                <div className='w-40 h-40 md:w-48 md:h-48 bg-third flex mx-auto flex-col gap-4 rounded-xl shadow-lg justify-center items-center'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Arz />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>ارزدیجیتال رایگان</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-48 '>
                <div className='w-40 h-40 md:w-48 md:h-48 bg-third flex mr-auto flex-col gap-4 rounded-xl shadow-lg justify-center items-center'>
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
          <div className='w-[388px] sm:w-[450px] lg:w-[489px] lg:h-[604px] self-center'>
            <ImageCarousel imageUrls={imageUrls} />
          </div>
          <div className='flex flex-col w-full  gap-7 mt-12 lg:mt-0 lg:mr-[75px] justify-center '>
            <h3 className='text-xl md-text-2xl  xl:text-3xl font-bold'>همین الان ثبت نام کن و گردونه رو بچرخون!</h3>
            <p className='text-sm md:text-base  xl:text-xl font-semibold text-sixth text-justify leading-9 lg:leading-[63px] xl:leading-[63px]'>با گردونه شانس، ارز دیجیتال رایگان دریافت کنید! پس از برنده شدن، می‌توانید مبلغ جایزه را به‌راحتی به حساب بانکی خود برداشت کنید و از این طریق به‌سادگی از یک صرافی ارز دیجیتال درآمد دلاری کسب کنید.
            </p>
            <div className='flex justify-end  h-12 lg:h-16'>
              <button className='text-lg lg:text-2xl rounded-xl w-full h-full lg:w-auto font-bold text-white bg-primary px-7 py-2 text-center'>ثبت نام سریع</button>
            </div>
          </div>


        </div>

        <div className='flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-16'>
            {awards.map((item, index) => (
              <div key={index} className='flex flex-col w-full py-[15px] px-[18px] sm:my-[10px] sm:px-3  bg-third rounded-xl'>
                <div className='flex gap-4 items-center mb-2 sm:mb-3'>
                  <Image
                    src={item.icon} 
                    alt='icon'
                    className='w-10 h-10 md:w-[60px] md:h-[60px]'
                  />
                  <span className='text-base sm:text-[18.9px] font-bold'>{item.title}</span>
                </div>
                <span className='text-sm sm:text-base font-normal text-justify mt-xl leading-[30px] sm:leading-[45px]'>{item.description}</span>
              </div>
            ))}
          </div>

          <div className='flex w-full py-[15px] px-[18px] bg-third rounded-xl '>
            <span className='flex w-full text-sm sm:text-xl font-normal text-center justify-center items-center leading-[30px]' >نکته: در سطح طلایی و کریستال گزینه پوچ وجود نداره و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد.</span>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row justify-between ' style={{ lineHeight: "2rem" }}>
          <div className=" w-full gap-7 mb-4 lg:mb-0 flex flex-col justify-center order-3 lg:order-1">
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-Seventh'>چگونه از گردونه شانس صرافی ارز 8 استفاده کنیم؟</h2>
            <p className='text-xs md:text-xl font-semibold  text-sixth text-justify' style={{ lineHeight: "2rem" }}>به طور کلی استفاده از گردونه صرافی ارز هشت، شرایط پیچیده ای ندارد، فقط کافی است تا در صرافی ثبت نام کنید و هر روز شانس‌تان را برای برنده شدن امتحان کنید.</p>


            <Link className='self-end w-full lg:w-56 sm:h-16 h-[53px]' href="#">
              <button className=' bg-primary w-full h-full text-white text-xl lg:text-3xl font-bold rounded-xl'>چرخش گردونه</button>
            </Link>
          </div>

          <Image className='order-2 mx-auto lg:mx-28 ' src={Ghar} alt='Ghar' width={305} height={633} />


        </div>


        <div className='flex flex-col gap-10'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-Seventh'>چگونه از گردونه شانس صرافی ارز 8 استفاده کنیم؟</h2>

          <div className='flex flex-col gap-5'>
            <Accordion items={AccordionData} />
          </div>

        </div>
      </div>


    </div>
  )
}
