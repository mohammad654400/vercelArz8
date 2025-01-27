import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import HalfCircle from "@/assets/icons/halfCircle";
import EarnMoneyIcon from "@/assets/icons/header/menu/earnMoneyIcon";
import GiftCardIcon from "@/assets/icons/header/menu/giftCardIcon";
import OfferIcon from "@/assets/icons/header/menu/offerIcon";
import WheelIcon from "@/assets/icons/header/menu/WheelIcon";
import Link from "next/link";
import React from "react";

export default function OtherServices() {

  const features = [
    {
      title: "گردونه شانس",
      description: "هر روز یک شانس دارید تا ارزهای دیجیتال و جایزه نقدی برنده شوید.",
      icon: <WheelIcon />,
      link: "/wheel-luck",
      badge: "جدید",
    },
    {
      title: "تخفیفات",
      description: "با تخفیف های ارزهشت دیگر کارمزد معاملات پرداخت نکنید.",
      icon: <OfferIcon />,
      link: null,
      badge: null,
    },
    {
      title: "کارت هدیه",
      description: "کارت هدیه با موجودی رمز ارز ایجاد کنید و به دیگران هدیه بدهید.",
      icon: <GiftCardIcon />,
      link: "https://app.arz8.com/tools/gift-card",
      badge: null,
    },
    {
      title: "کسب درآمد",
      description: "با دعوت از دوستان خود تا 30% از کارمزد معاملات انها را دریافت کنید.",
      icon: <EarnMoneyIcon />,
      link: "https://app.arz8.com/referrals",
      badge: null,
    },
  ];


  return (
    <div className="absolute z-50 top-[80px] -right-10 md:-right-36 t flex flex-wrap item gap-4 w-[620px] h-[491] bg-fifth dark:bg-secondary rounded-2xl py-4 px-3 shadow-lg ">
      <div className="text-fifth dark:text-secondary absolute right-32 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      {features.map((feature, index) => (
      <div
        key={index}
        className="relative gap-3 w-[288px] px-4 py-2 hover:bg-[#F6F6F6] rounded-lg dark:hover:bg-[#3C3B41]"
      >
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-1 items-center">
            <div className="flex gap-x-3">
              <div className="w-5 h-5">{feature.icon}</div>
              
              {feature.link ? (
                <p>
                  <Link href={feature.link}><span className="text-base font-semibold">{feature.title}</span></Link>
                </p>
              ) : (
                <p>{feature.title}</p>
              )}
            </div>
            {feature.badge && (
              <div className="bg-[#F00500] rounded-full w-10 h-5 mr-10 flex justify-center text-background text-xs items-center">
                {feature.badge}
              </div>
            )}
            <div className="w-[14px] h-[14px]">
              <ArrowLeft />
            </div>
          </div>
          <p className="text-xs font-semibold !leading-6 text-sixth opacity-50">{feature.description}</p>
        </div>
      </div>
    ))}
    </div>
  );
}
