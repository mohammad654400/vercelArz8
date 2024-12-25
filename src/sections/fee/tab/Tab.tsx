import React from "react";

interface TabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  transformOrigin: string;
  transitionDelay: string;
}

const Tab = React.memo(({ name, isActive, onClick, transformOrigin, transitionDelay }: TabProps) => {
  return (    
    <button
      onClick={onClick}
      className="relative w-1/2 h-full "
      
    >
      <span
        className={`absolute top-0 left-0 w-full h-full bg-fifth rounded-[14px] sm:rounded-[20px]  transform transition-all duration-500 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          transformOrigin: transformOrigin,
          transitionDelay: transitionDelay,
        }}
      ></span>

      <span
        className={`relative z-10 transition-all duration-300 text-base sm:text-[25px]  font-semibold focus:outline-none overflow-hidden" ${
          isActive ? "text-sixth" : "text-sixth opacity-50  hover:opacity-90"
        }`}
      >
        {name}
      </span>
    </button>
  );
});

export default Tab;
