// import { log } from "console"; 
// import { useState, useEffect, forwardRef } from "react"; 

// interface AccordionItemProps { 
//   id: number; 
//   title: string; 
//   content: string; 
//   isOpen: boolean; 
//   onToggle: (id: number) => void; 
// } 

// export  const AccordionItem = ({ 
//   id, 
//   title, 
//   content, 
//   isOpen, 
//   onToggle, 
// }: AccordionItemProps) => ( 
//   <div className="accordion-item border-b border-red-200"> 
//     <div 
//       className="accordion-header p-4 bg-gray-100 cursor-pointer flex justify-between items-center" 
//       onClick={() => onToggle(id)} 
//       aria-expanded={isOpen} 
//       aria-controls={`accordion-content-${id}`} 
//     > 
//       <h3 className="text-lg font-semibold">{title}</h3> 
//       <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}> 
//         ▼ 
//       </span> 
//     </div> 
//     {isOpen && ( 
//       <div 
//         id={`accordion-content-${id}`} 
//         className="accordion-content p-4 bg-gray-50" 
//       > 
//         <p>{content}</p> 
//       </div> 
//     )} 
//   </div> 
// );
import ArrowBottom from "@/assets/icons/arrow-bottom";
import ArrowTop from "@/assets/icons/arrow-top";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  videoLink: string | null | undefined;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

export const AccordionItem = ({
  id,
  title,
  content,
  videoLink,
  isOpen,
  onToggle,
}: AccordionItemProps) => (
  <div ref={undefined} className="relative rounded-xl p-8 mb-4 flex  w-full">
    {isOpen && (
      <div
        className="absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
        }}
        aria-hidden="true"
      ></div>
    )}

    <div className="absolute inset-0 bg-secondary px-8 py-6 rounded-xl" aria-hidden="true"></div>


    <div className="relative w-full z-10">
      <button
        onClick={() => onToggle(id)}
        className="w-full text-left font-medium flex justify-between items-center"
      >
        <span className=" text-start text-base sm:text-xl font-semibold">
          {title}
        </span>
        <span>{isOpen ? <ArrowBottom /> : <ArrowTop />}</span>
      </button>

      {isOpen && (
        <div
          className={`mt-6 justify-between text-sm ${videoLink ? "flex flex-col sm:flex-row items-start gap-4" : ""
            }`}
        >
          {videoLink && (
            <div className="flex-shrink-0 sm:w-2/5 w-full">
              <video controls className="w-full rounded-md border" src={videoLink} />
            </div>
          )}
          {content && (
            <div className={`flex-1 font-normal text-sm ${videoLink ? "sm:w-2/5 w-full" : ""}`}>
              {content}
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
