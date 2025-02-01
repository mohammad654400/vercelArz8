import ArrowWithBorder from "@/assets/icons/arrrow/arrow-whisborder";
import React, { useEffect } from "react";

interface CategoryItem {
  price: string;
  percentage: number;
  name: string;
  Persian: string;
  icon: JSX.Element;
}

interface CategoryProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  data: CategoryItem[];
}

export default function Category({ open, setOpen,title,data }: CategoryProps) {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 842) {
        setOpen(true);
      } else if (window.innerWidth > 842) {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-[30px]">
      <div
        className={`${open
          ? "w-[250px] md:w-[364px] pt-4 md:pt-6 rounded-2xl mx-2 px-3 md:px-6 "
          : "w-[72px] h-[283px] rounded-3xl overflow-hidden px-4 flex flex-col justify-between"
          } h-[283px] bg-[#F6F6F6] dark:bg-[#242428] pb-4`}
      >
        <div
          className={`relative ${open
            ? "flex justify-between cursor-pointer"
            : "flex justify-center pt-4"
            }`}
        >
          <h1 className={`mb-2 ${open ? "block" : "hidden"}`}>
          {title}
          </h1>
          <div className="hidden sm:block absolute left-0 w-6  bg-black opacity-0  z-10">d</div>
          <span className="" onClick={() => setOpen(!open)}>
            <ArrowWithBorder />
          </span>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={` ${open ? "border-b-2 border-gray-200" : "border-none"
              } ${(index + 1) % 3 == 0
                ? "border-none"
                : "border-b-2 border-gray-200"
              }`}
          >
            <div >
              
                <div className="flex justify-between items-center gap-x-3 md:gap-x-5 my-[18px]">

                  <div className={`w-[41px] h-[41px] rounded-full bg-[#F6F6F6] dark:bg-[#242428] flex  items-center `}>
                  {item.icon}
                  </div>

                  <div className={` ${open ? "flex justify-between  w-full  " : "hidden"}`}>

                    <div className="h-full flex flex-col gap-y-3 items-center ">
                      <p className="!leading-3 text-sm font-semibold" >{item.Persian}</p>
                      <p className="leading-3 text-sm font-semibold opacity-50">{item.name}</p>
                    </div>
                    <div className={`flex flex-col gap-y-3 items-center `}>
                      <div className="flex">
                        <p className="leading-3 text-sm font-semibold ">{item.price} </p>
                        <span className="leading-3 text-sm font-semibold mr-1">تومان</span>
                      </div>
                      <div dir="ltr" className="w-full flex ">
                        <p className={`leading-3 text-sm font-semibold ${item.percentage > 0 ? " text-green-600" : "text-rose-500"}`}>%{item.percentage}</p>
                      </div>
                    </div>
                  </div>

                </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
