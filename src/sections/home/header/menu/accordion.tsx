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
        className="flex justify-between items-center cursor-pointer py-3"
      >
        <span>{title}</span>
        <span>{isOpen ? <ArrowDown /> : <ArrowUp />}</span>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-start w-full gap-1 py-4 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
