import ArrowWithBorder from "@/assets/icons/arrrow/arrow-whisborder";
import BNB from "@/assets/icons/bnb";
import React, { useState, useEffect } from "react";

const data = [
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
];

export default function Category() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 842) {
        setOpen(false);
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
        className={`${
          open
            ? "w-[280px] md:w-[364px] pt-4 md:pt-6 rounded-2xl mx-2 px-3 md:px-6 "
            : "w-[72px] h-[279px] rounded-3xl overflow-hidden px-3"
        } h-auto bg-[#F6F6F6] dark:bg-[#242428] pb-4`}
      >
        <div
          className={`relative ${
            open
              ? "flex justify-between cursor-pointer"
              : "flex justify-center pt-4"
          }`}
        >
          <h1 className={`${open ? "block" : "hidden"}`}>
            جدید ترین ارز های ما
          </h1>
          <div className="hidden sm:block absolute left-0 w-6  bg-black opacity-0  z-10">
            d
          </div>
            <span className="" onClick={() => setOpen(!open)}>
              <ArrowWithBorder />
            </span>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={` ${
              open ? "border-b-2 border-gray-200" : "border-none"
            } ${
              (index + 1) % 3 == 0
                ? "border-none"
                : "border-b-2 border-gray-200"
            }`}
          >
            <div>
              <div className="flex justify-between mt-4 ">
                <div className="flex items-center gap-2 pb-2">
                  <div>
                    <div className="w-[46px] h-[46px] rounded-full bg-[#F6F6F6] dark:bg-[#242428] flex justify-center items-center">
                      <BNB />
                    </div>
                  </div>
                  <div className={`${open ? "block" : "hidden"}`}>
                    <p>{item.Persian}</p>
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className={`${open ? "block" : "hidden"}`}>
                  <div className="flex gap-2 pb-2">
                    <span>تومان</span>
                    <p>{item.price} </p>
                  </div>
                  <div className="w-full flex justify-end">
                    <p>{item.percentage}</p>
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
