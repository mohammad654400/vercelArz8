import { useState, useRef, useEffect } from "react";
import ArrowBottom from "@/assets/icons/arrrow/arrow-bottom";
import ArrowTop from "@/assets/icons/arrrow/arrow-top";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  videoLink: string | null | undefined;
  isOpen: boolean;
  onToggle: (id: number) => void;
  titleBgColor?: string;
  contentBgColor?: string; 
  highlightEnabled?: boolean;
}

// تابع تبدیل لینک آپارات به لینک embed
const sanitizeApparatUrl = (url: string) => {
  const videoId = new URL(url).pathname.split("/").pop();
  return `https://www.aparat.com/video/video/embed/videohash/${videoId}/vt/frame`;
};

export const AccordionItem = ({
  id,
  title,
  content,
  videoLink,
  isOpen,
  onToggle,
  titleBgColor  = "bg-secondary", 
  contentBgColor  = "bg-secondary",
  highlightEnabled = true,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null); // برای اندازه‌گیری محتوای درونی

  return (
    <div ref={undefined} className="relative rounded-xl sm:rounded-[20px]  flex w-full">
      {isOpen && highlightEnabled && (
        <div
          className="absolute -inset-px rounded-xl sm:rounded-[20px] transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
          }}
          aria-hidden="true"
        ></div>
      )}

      <div
        className="absolute inset-0 bg-secondary rounded-xl sm:rounded-[20px]"
        aria-hidden="true"
      ></div>

      <div className={`relative w-full z-10 flex flex-col rounded-xl sm:rounded-[20px] ${contentBgColor} `}>
        <button
          onClick={() => onToggle(id)}
          className={`w-full text-left font-medium flex justify-between items-center px-8 py-6 rounded-xl sm:rounded-[20px] ${titleBgColor} `}
        >
          <span className="text-start text-sm sm:text-xl font-semibold">
            {title}
          </span>
          <span>{isOpen ? <ArrowBottom /> : <ArrowTop />}</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 px-8  `}
          style={{
            maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          }}
          ref={contentRef}
        >
          <div
            className={`justify-between text-sm ${
              videoLink ? "flex flex-col sm:flex-row items-start gap-4" : ""
            }`}
          >
            {videoLink && (
              <div className="flex-shrink-0 sm:w-2/5 w-full">
                <iframe
                  src={sanitizeApparatUrl(videoLink)}
                  title="آموزش ویدئویی"
                  className="w-full aspect-video rounded-xl mt-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {content && (
              <div
                className={`flex-1  font-normal text-xs sm:text-sm leading-[22.5px] sm:leading-[38px] py-[6px] sm:py-[10px] lg:py-[22px]  ${
                  videoLink ? "sm:w-2/5 w-full" : ""
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
