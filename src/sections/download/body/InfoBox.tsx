import React from "react";
import Info from "@/assets/icons/rules/info";
import Magicpen from "@/assets/icons/downloadApp/magicpen"
import SpotRate from "@/assets/icons/downloadApp/spotRate"
import Diversity from "@/assets/icons/downloadApp/diversity"
import EarningMoney from "@/assets/icons/downloadApp/earningMoney"
import Support24 from "@/assets/icons/downloadApp/support24"
import Security from "@/assets/icons/downloadApp/security"


export default function InfoBox() {
    return (
        <div className="flex flex-col w-full -mt-10 lg:mt-14">
            <div className="hidden md:flex flex-col w-4/5 max-w-[600px] mb-10 self-center">
                <h1 className="flex justify-center text-3xl font-bold text-sixth">
                    برخی امکانات اپلیکیشن صرافی ارز هشت
                </h1>
                <hr className="border-t-4 border-primary mt-2" />
            </div>


            <div className="flex flex-wrap  justify-between sm:justify-between mt-[30px]  ">
                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full sm:w-[48%]  lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <Magicpen />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">احراز هویت سریع و آسان</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3" style={{lineHeight:"2rem"}}>سطوح مختلف احراز هویت و شروع به معامله با تایید شماره تلفن همراه</span>
                </div>


                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full sm:w-[48%]  lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <SpotRate />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">نرخ لحظه ایی</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3" style={{lineHeight:"2rem"}}>امکان مشاهده قیمت لحظه ایی ارز ها همراه با چارت یا نمودار پیشرفته با امکانات تحلیل تکنیکال</span>
                </div>


                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full  sm:w-[48%] lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <Diversity />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">تنوع بالای ارز</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3"style={{lineHeight:"2rem"}}>بیش از 400 ارز معتبر و 900 بازار جفت ارز فعال با پیر های مختلف مانند تومان، تتر، بیت کوین، بایننس کوین و ...</span>
                </div>


                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full  sm:w-[48%] lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <Support24 />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">پشتیبانی</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3"style={{lineHeight:"2rem"}}>چندین راه ارتباطی مختلف مانند چت آنلاین، تیکت، تلگرام و پشتیبانی تلفنی</span>
                </div>


                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full  sm:w-[48%] lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <Security />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">امنیت</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3"style={{lineHeight:"2rem"}}>نگهداری ارز ها در کیف پول های آفلاین و سخت افزاری</span>
                </div>


                <div className="flex flex-col pb-5 rounded-xl bg-third justify-center items-center h-80 w-full  sm:w-[48%] lg:w-[32%] mb-4 max-w-[400px]" >
                    <div className="h-24 w-24 mt-8 ">
                        <EarningMoney />
                    </div>

                    <span className="text-xl sm:text-base lg:text-lg xl:text-xl font-semibold text-seventh my-5">کسب درآمد</span>
                    <span className="text-base sm:text-sm lg:text-base font-normal text-sixth opacity-50 text-center px-3"style={{lineHeight:"2rem"}}>معرفی دوستان و کسب 30 درصد از کارمزد معاملات آنها </span>
                </div>
          </div>

        </div>

    );
}
