import React, { useState } from "react";
import ArrowBottom from "@/assets/icons/arrow-bottom";
import ArrowTop from "@/assets/icons/arrow-top";

interface AccordionItemProps {
  title: string;
  children?: React.ReactNode;
  videoLink?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, videoLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative rounded-xl p-8 mb-4">
 
      {isOpen && (
        <div
          className="absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
          }}
          aria-hidden="true"
        ></div>
      )}

  
      <div className="absolute inset-0 bg-[#F6F6F6] px-8 py-6 rounded-xl" aria-hidden="true"></div>

  
      <div className="relative z-10">
        <button
          onClick={toggleAccordion}
          className="w-full text-left font-medium flex justify-between items-center"
        >
          <span className="text-[#000000] text-start  text-base sm:text-xl font-semibold">{title}</span>
          <span>{isOpen ? <ArrowBottom /> : <ArrowTop />}</span>
        </button>

        {isOpen && (
          <div
            className={`mt-6 justify-between text-[#000000] text-sm ${
              videoLink ? "flex flex-col sm:flex-row items-start gap-4" : ""
            }`}
          >
            {videoLink && (
              <div className="flex-shrink-0 sm:w-2/5  w-full ">
                <video controls className="w-full rounded-md border" src={videoLink} />
              </div>
            )}
            {children && (
              <div className={`flex-1 font-normal text-sm   ${videoLink ? "sm:w-2/5 w-full" : ""}`}>
                {children}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { AccordionItem };
