import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import HalfCircle from "@/assets/icons/halfCircle";
import EarnMoneyIcon from "@/assets/icons/header/menu/earnMoneyIcon";
import GiftCardIcon from "@/assets/icons/header/menu/giftCardIcon";
import OfferIcon from "@/assets/icons/header/menu/offerIcon";
import WheelIcon from "@/assets/icons/header/menu/WheelIcon";
import React from "react";

export default function OtherServices() {
  return (
    <div className="absolute z-50 top-[80px] -right-10 t flex flex-wrap item gap-4 w-[620px] h-[491] bg-secondary rounded-2xl py-4 px-3 shadow-lg ">
      <div className="text-secondary absolute right-16 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <div className=" relative gap-3 w-[288px] px-4 py-2 hover:bg-[#F6F6F6] rounded-lg dark:hover:bg-[#3C3B41] ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
              <WheelIcon/>
              <p>گردونه شانس</p>
            </div>
            <div className="bg-[#F00500] rounded-full w-10 h-5 mr-10  flex justify-center text-background text-xs items-center">جدید</div>
            <ArrowLeft />
          </div>
          <p className="text-[10px]  ">
            هر روز یک شانس دارید تا ارزهای دیجیتال و جایزه نقدی برنده شوید.
          </p>
        </div>
      </div>
      <div className=" relative gap-3 w-[288px] px-4 py-2 hover:bg-[#F6F6F6] rounded-lg dark:hover:bg-[#3C3B41] ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
             <OfferIcon/>
              <p> تخفیفات</p>
            </div>
            <ArrowLeft />
          </div>
          <p className="text-[10px]">
            با تخفیف های ارزهشت دیگر کارمزد معاملات پرداخت نکنید.
          </p>
        </div>
      </div>
      <div className=" relative gap-3 w-[288px] px-4 py-2 hover:bg-[#F6F6F6] rounded-lg dark:hover:bg-[#3C3B41] ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
             <GiftCardIcon/>
              <p>کارت هدیه</p>
            </div>
            <ArrowLeft />
          </div>
          <p className="text-[10px]">
            کارت هدیه با موجودی رمز ارز ایجاد کنید و به دیگران هدیه بدهید.
          </p>
        </div>
      </div>
      <div className=" relative gap-3 w-[288px] px-4 py-2 hover:bg-[#F6F6F6] rounded-lg dark:hover:bg-[#3C3B41] ">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-2">
            <div className="flex gap-2">
             <EarnMoneyIcon/>
              <p>کسب درآمد</p>
            </div>
            <ArrowLeft />
          </div>
          <p className="text-[10px]">
            با دعوت از دوستان خود تا 30% از کارمزد معاملات انها را دریافت کنید.
          </p>
        </div>
      </div>
    </div>
  );
}
