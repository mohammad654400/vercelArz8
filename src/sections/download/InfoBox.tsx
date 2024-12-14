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
        <div className="flex flex-col w-full">
            <div className="flex items-center py-4 px-2 bg-primary rounded-xl">
                <div className="w-6 min-w-12 items-start justify-start self-start flex">
                    <Info />
                </div>
                <span className="text-[#242428] text-xs sm:text-base font-semibold mr-3 text-justify">برای استفاده از صرافی ارز هشت در گوشی های ios  میتوانید از طریق سایت اقدام کنید.
                </span>
            </div>

            <div className="hidden md:flex flex-col w-4/5 max-w-[600px] mt-16 mb-20 self-center">
                <h1 className="flex justify-center text-3xl font-bold text-sixth">
                    برخی امکانات اپلیکیشن صرافی ارز هشت
                </h1>
                <hr className="border-t-4 border-primary mt-2" />
            </div>


            <div className="flex flex-wrap w-full justify-between">
                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <Magicpen />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">احراز هویت سریع و آسان</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">سطوح مختلف احراز هویت و شروع به معامله با تایید شماره تلفن همراه</span>
                </div>


                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <SpotRate />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">نرخ لحظه ایی</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">امکان مشاهده قیمت لحظه ایی ارز ها همراه با چارت یا نمودار پیشرفته با امکانات تحلیل تکنیکال</span>
                </div>


                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <Diversity />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">تنوع بالای ارز</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">بیش از 400 ارز معتبر و 900 بازار جفت ارز فعال با پیر های مختلف مانند تومان، تتر، بیت کوین، بایننس کوین و ...</span>
                </div>


                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <Support24 />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">پشتیبانی</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">چندین راه ارتباطی مختلف مانند چت آنلاین، تیکت، تلگرام و پشتیبانی تلفنی</span>
                </div>


                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <Security />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">امنیت</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">نگهداری ارز ها در کیف پول های آفلاین و سخت افزاری</span>
                </div>


                <div className="flex flex-col px-9 py-6 rounded-xl bg-third justify-center items-center h-80  sm:w-[48%] lg:w-[32%] max-w-96 min-w-[14rem] mb-4 ">
                    <div className="h-24 w-24">
                        <EarningMoney />
                    </div>

                    <span className="text-2xl lg:text-xl font-semibold text-seventh my-5">کسب درآمد</span>
                    <span className="text-base font-normal text-sixth opacity-50 text-center ">معرفی دوستان و کسب 30 درصد از کارمزد معاملات آنها </span>
                </div>



            </div>

        </div>

    );
}
