import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="duration-500">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer py-3 ${
          isOpen ? "text-primary" : "text-eighth"
        }`}
      >
        <span>{title}</span>
        <span
          className={`w-5 h-5 ${
            isOpen ? "text-primary" : "text-eighth"
          }`}
        >
          {isOpen ? (
            <span className="w-[10px] h-[10px]">
              <ArrowUp />
            </span>
          ) : (
            <span className="w-[10px] h-[10px]">
              <ArrowDown />
            </span>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-start w-full gap-1 py-2 text-xs">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
