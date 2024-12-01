"use client";
import BigArrow from "@/assets/icons/bigarrow";
import MobileIcon from "@/assets/icons/mobile";
import React, { useState } from "react";

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full mx-auto ">
      <h1 className="my-8 text-lg ">
        <span className="text-primary">خرید و فروش سریع</span> ارزهای دیجیتال با
        ارز هشت{" "}
      </h1>
      <div
        className={`relative overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-full" : "max-h-20"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent dark: bg-gradient-to-t from-gray-600 to-transparent pointer-events-none"></div>
        )}
      </div>
      <button
        onClick={toggleExpand}
        className="w-full mt-2 hover:text-primary focus:outline-none"
      >
        {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
      </button>
      <div className="w-full mt-8 bg-foreground dark:bg-[#242428] h-[266] text-background rounded-2xl">
        <div className="flex flex-col gap-8 justify-center items-center py-8">
          <div>بدون معطلی ثبت نام و احراز هویت کن!</div>
          <div className="flex items-center gap-4 text-primary">
            ثبت نام <BigArrow />
            احراز هویت
            <BigArrow />
            ارز دلخواه خودتون رو بخرید{" "}
          </div>
          <div className="relative">
            <span className="absolute right-2 top-2">
              <MobileIcon />
            </span>
            <input
              placeholder="شماره موبایل خود را وارد کنید"
              className="w-[400px] h-12 bg-foreground rounded-xl outline-none text-white pr-10 border-2 border-gray-400 placeholder:text-sm placeholder:text-gray-500"
              type="text"
            />
            <div>
              <button className="absolute left-1 top-1 px-4 cursor-pointer rounded-lg bg-primary py-2">
                شروع کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
