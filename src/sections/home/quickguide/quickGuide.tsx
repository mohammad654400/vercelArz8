"use client";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import RhombusIcon from "@/assets/icons/rhombus";
import { useState } from "react";

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
  const [activeLeftIndex, setActiveLeftIndex] = useState<number | null>(null);

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
    <div className="w-full flex flex-col md:flex-row gap-4 mx-auto bg-background rounded-2xl">
      <div className="w-full md:w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-8">راهنمای سریع</h2>
        {rightFAQs.map((faq, index) => (
          <div key={index} className="mb-2 border-2 rounded-2xl px-3">
            <div className="flex items-center">

            <button
              onClick={() =>
                toggleAccordion(index, setActiveRightIndex, activeRightIndex)
              }
              className="w-full text-right flex justify-start gap-2 items-center py-3 font-medium"
            >
             <RhombusIcon/> {faq.question}
            </button>
              <span className="transform transition-transform">
                {activeRightIndex === index ? <ArrowUp /> : <ArrowDown />}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                activeRightIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex justify-end mb-1">
          <button className="flex gap-2 items-center px-6 bg-primary mb-4 py-2 rounded-2xl">
            همه سوالات <ArrowLeft />
          </button>
        </div>
        <div className="p-5 border rounded-2xl">
          <div className="flex justify-center py-4 text-lg ">
            فیلم‌های آموزشی
          </div>
          {leftFAQs.map((faq, index) => (
            <div key={index} className="mb-2 border-2 rounded-2xl px-3">
              <div className="flex items-center">

              <button
                onClick={() =>
                  toggleAccordion(index, setActiveLeftIndex, activeLeftIndex)
                }
                className="w-full text-right flex justify-start gap-2 items-center py-3 font-medium"
              >
               <RhombusIcon/> {faq.question}
              </button>
                <span className="transform transition-transform">
                  {activeLeftIndex === index ? (
                    <span className="dark:text-white">
                      <ArrowUp />
                    </span>
                  ) : (
                    <ArrowDown />
                  )}
                </span>
              </div>
              {activeLeftIndex === index && faq.videoUrl && (
                <div className="duration-500">
                  <div className="px-4 py-2">
                    <p>{faq.answer}</p>
                    <div className="mt-4">
                      <iframe
                        src={sanitizeApparatUrl(faq.videoUrl)}
                        title="آموزش ویدئویی"
                        className="w-full aspect-video rounded-md shadow-md"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickGuide;
