import React, { useEffect, useState } from "react";
import ArrowBottom from "@/assets/icons/arrrow/arrow-bottom";
import ArrowTop from "@/assets/icons/arrrow/arrow-top";

export default function DetailDescription({ coinDescription }: { coinDescription: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);



  return (
    <div>
      <div
        className={`relative overflow-hidden transition-all duration-100 ${isExpanded ? "max-h-full" : "max-h-[900px]"
          }`}
      >
        <div className="text-[13px] leading-10 text-justify" dangerouslySetInnerHTML={{ __html: coinDescription }}></div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-white dark:from-[#3C3B41] to-transparent  pointer-events-none"></div>
        )}
      </div>

      <button
        onClick={toggleExpand}
        className="w-full mt-2 text-primary focus:outline-none text-2xl font-semibold"
      >
        <div className="flex justify-center items-center gap-x-3 text-xl">
          {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
          {isExpanded ? <span className=" w-[25px] h-[25px]"><ArrowTop /> </span> : <span className=" w-[25px] h-[25px]"><ArrowBottom /></span>}
        </div>

      </button>
    </div>
  );
}
