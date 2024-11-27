import BannerSlider from "@/components/bannerslider/bannerSlider";
import { Span } from "next/dist/trace";
import React from "react";

export default function MainTop() {
  return (
    <div>
      <div className="flex justify-between pt-28">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">با خیال راحت معامله کنید،</h1>
          <p>
            خرید و فروش بیش از{" "}
            {<span className="text-primary text-2xl text-bold">1500</span>}{" "}
            ارزدیجیتال در صرافی ارزهشت
          </p>
          <p>در سریع ترین زمان ممکن ثبت نام کنید.</p>
          <div className="relative w-96">
            <input
              placeholder="شماره موبایل خود را وارد کنید ..."
              className="pr-4 w-96 h-16 bg-background border-2 rounded-xl outline-none "
              type="text"
            />
            <button className="absolute left-2 top-2 rounded-xl text-white  bg-primary py-3 px-4 ">
              شروع کنید
            </button>
          </div>
        </div>
        <div>
          <BannerSlider />
        </div>
      </div>
      <div className="flex mt-8 rounded-xl py-2 w-full bg-background">
        <div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4.29297V6.51297"
              stroke="#FFC107"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M7.01333 1.33398C4.55999 1.33398 2.57333 3.32065 2.57333 5.77398V7.17398C2.57333 7.62732 2.38666 8.30732 2.15333 8.69398L1.30666 10.1073C0.78666 10.9807 1.14666 11.954 2.10666 12.274C5.29333 13.334 8.73999 13.334 11.9267 12.274C12.8267 11.974 13.2133 10.9207 12.7267 10.1073L11.88 8.69398C11.6467 8.30732 11.46 7.62065 11.46 7.17398V5.77398C11.4533 3.33398 9.45333 1.33398 7.01333 1.33398Z"
              stroke="#292D32"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <span>
        ارز ترامپ بروزرسانی شد.
        </span>
        <button>
          جدید
        </button>
      </div>
    </div>
  );
}
