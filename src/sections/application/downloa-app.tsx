"use client";
import React, { useEffect, useRef } from "react";

import BannerDownload from "./bannerd-download";
import { cardData } from "./data/data";
import Info from "@/assets/icons/rules/info";

export default function DownloadApp() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <main className="bg-background pt-[127px]">
      <header>
        <BannerDownload showWaveDivider={true} />
      </header>
      <section
        className="base-style my-[65px] lg:my-[113px] !gap-0"
        ref={titleRef}
      >
        <div className="flex bg-primary w-full rounded-[20px] p-[13px] items-center  lg:mb-[69px] mb-[40px]">
          <div className="lg:w-[49px] lg:h-[49px] w-[20px] h-[20px]" aria-label="Info Icon">
            <Info />
          </div>
          <span className="text-[13px] lg:text-base font-normal lg:font-semibold mr-[10px] text-[#242428]">
            برای استفاده از صرافی ارز هشت در گوشی های ios میتوانید از طریق سایت
            اقدام کنید.
          </span>
        </div>
        <div className="hidden lg:flex flex-col  self-center">
          <h2 className="text-sm lg:text-[35px] font-bold border-b-4 border-primary pb-[10px] lg:pb-5 w-auto text-center">
            برخی امکانات اپلیکیشن صرافی ارز هشت{" "}
          </h2>
        </div>

        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  w-full grid-flow-row-dense mt-10 lg:mt-[82px]">
          {cardData.map((card) => (
            <article
              key={card.title}
              className="flex flex-col  rounded-[20px] bg-third justify-center items-center py-5 lg:py-0  w-full mx-auto h-[338px] max-w-[390px]"
            >
              <div className="h-[102px] w-[102px] mb-6">
                <card.icon />
              </div>
              <h3 className="text-[27px] font-semibold text-seventh mb-2">
                {card.title}
              </h3>
              <p
                className="text-base font-normal text-sixth opacity-50 text-center px-8"
                style={{ lineHeight: "35px" }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
