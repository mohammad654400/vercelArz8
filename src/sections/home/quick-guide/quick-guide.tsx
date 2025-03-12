"use client";
import ArrowDown from "@/assets/icons/arrrow/arrow-bottom";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import ArrowUp from "@/assets/icons/arrrow/arrow-top";
import RhombusIcon from "@/assets/icons/rhombus";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  videoUrl?: string;
}

const faqs: FAQItem[] = [
  {
    question: "چگونه ارز دیجیتال بخریم؟",
    answer: "با مراجعه به بخش خرید و فروش می‌توانید اقدام به خرید کنید.",
    videoUrl: "https://www.aparat.com/v/tyuazi3",
  },
  {
    question: "چگونه ارز دیجیتال بفروشیم؟",
    answer:
      "پس از تایید کیف پول و ثبت‌نام، به بخش فروش مراجعه کنید و ارز دیجیتال خود را بفروشید.",
  },
  {
    question: "چگونه ارز دیجیتال بفروشیم؟",
    answer:
      "پس از تایید کیف پول و ثبت‌نام، به بخش فروش مراجعه کنید و ارز دیجیتال خود را بفروشید.",
  },
  {
    question: "چگونه ارز دیجیتال بفروشیم؟",
    answer:
      "پس از تایید کیف پول و ثبت‌نام، به بخش فروش مراجعه کنید و ارز دیجیتال خود را بفروشید.",
  },
  {
    question: "چگونه ارز دیجیتال بفروشیم؟",
    answer:
      "پس از تایید کیف پول و ثبت‌نام، به بخش فروش مراجعه کنید و ارز دیجیتال خود را بفروشید.",
  },
  {
    question: "چگونه در صرافی ثبت‌نام کنیم؟",
    answer: "مراحل ثبت‌نام را تکمیل کرده و اطلاعات خود را وارد کنید.",
    videoUrl: "https://www.aparat.com/v/tyuazi3",
  },
  {
    question: "چگونه در صرافی ثبت‌نام کنیم؟",
    answer: "مراحل ثبت‌نام را تکمیل کرده و اطلاعات خود را وارد کنید.",
    videoUrl: "https://www.aparat.com/v/tyuazi3",
  },
];

const QuickGuide = () => {
  const [activeRightIndex, setActiveRightIndex] = useState<number | null>(null);
  const [activeLeftIndex, setActiveLeftIndex] = useState<number | null>(0);

  const rightFAQs = faqs.filter((faq) => !faq.videoUrl);
  const leftFAQs = faqs.filter((faq) => faq.videoUrl);

  const toggleAccordion = (
    index: number,
    setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
    activeIndex: number | null
  ) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sanitizeApparatUrl = (url: string) => {
    const videoId = new URL(url).pathname.split("/").pop();
    return `https://www.aparat.com/video/video/embed/videohash/${videoId}/vt/frame`;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-lg sm:text-2xl font-bold  text-center flex">راهنمای سریع</h2>
        <Link
          href={"./faq"}
          className="group flex text-[18px] md:text-2xl font-semibold gap-2 items-center justify-center text-white bg-primary rounded-2xl px-[10px] py-2 duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)] active:shadow-none active:translate-y-0 active:bg-primary">
          همه سوالات
          <div className="w-[18px] h-[18px] sm:w-[30px] sm:h-[30px] transition-transform duration-300 group-hover:translate-x-2">
            <ArrowLeft />
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-x-11 gap-y-4 mx-auto bg-background ">
        <div className="w-full  pr-0 md:pr-4 ">

          {rightFAQs.map((faq, index) => (
            <div
              key={index}
              className="mb-2 border-[1px] border-[#ADADAD80] rounded-[9.8px] sm:rounded-2xl px-3"
            >
              <div className="flex items-center">
                <button
                  onClick={() =>
                    toggleAccordion(index, setActiveRightIndex, activeRightIndex)
                  }
                  className="w-full text-right flex justify-start gap-2 items-center py-3 font-medium"
                >
                  <RhombusIcon />
                  <span className="text-xs sm:text-base font-semibold"> {faq.question} </span>
                </button>
                <span className="transform transition-transform">
                  {activeRightIndex === index ? <p className="w-5 h-5"><ArrowUp /></p> : <p className="w-5 h-5 text-[#3C3B4180] dark:text-[#FFFFFF80]"><ArrowDown /></p>}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeRightIndex === index ? "max-h-[200px]" : "max-h-0"
                  }`}
              >
                <div className="px-4 pb-2 opacity-50">
                  <p className="text-xs sm:text-sm font-normal leading-6">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <div className="p-3 sm:p-5 border-[1px] border-[#ADADAD80] rounded-xl sm:rounded-2xl">
            <div className="flex justify-center pb-5 text-lg sm:text-2xl font-extrabold text-[#ADADAD80] ">
              فیلم‌های آموزشی
            </div>
            {leftFAQs.map((faq, index) => (
              <div
                key={index}
                className="mb-2 border-[1px] border-[#ADADAD80] rounded-[10px] sm:rounded-2xl px-3"
              >
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      toggleAccordion(index, setActiveLeftIndex, activeLeftIndex)
                    }
                    className="w-full text-right flex justify-start gap-2 items-center py-3 font-medium"
                  >
                    {activeLeftIndex !== index && <RhombusIcon />}
                    <span className="text-xs sm:text-base font-semibold">{faq.question}</span>
                  </button>
                  <span className="transform transition-transform">
                    {activeLeftIndex === index ? (
                      <span className="dark:text-white">
                        <p className="w-5 h-5">
                          <ArrowUp />
                        </p>

                      </span>
                    ) : (
                      <p className="w-5 h-5 text-[#3C3B4180] dark:text-[#FFFFFF80]">
                        <ArrowDown />
                      </p>
                    )}
                  </span>
                </div>
                {activeLeftIndex === index && faq.videoUrl && (
                  <div className="duration-500">
                    <div className="px-4  opacity-50">
                      <div className="mt-2">
                        <iframe
                          src={sanitizeApparatUrl(faq.videoUrl)}
                          title="آموزش ویدئویی"
                          className="w-full aspect-video rounded-[20px] "
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <p className="text-xs sm:text-sm font-normal leading-[18px] py-3">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default QuickGuide;
