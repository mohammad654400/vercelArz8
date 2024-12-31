import React, { useState, useMemo } from "react";
import ArrowBottom from "@/assets/icons/arrrow/arrow-bottom";
import Search from "@/assets/icons/search";
import WaveDivider from "@/assets/icons/waveDivider";

interface Question {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  videoLink?: string;
}

interface HeaderProps {
  questions: Question[];
  setSelectItem: (id: number) => void;
  setSelectedCategory: (id: number) => void;
  scrollToItem: (id: string) => void;
}

export default function Header({
  questions,
  setSelectItem,
  setSelectedCategory,
  scrollToItem,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const filteredList = useMemo(() => {
    return questions.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, questions]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(0);
    setSearchQuery(event.target.value);
    setIsDropdownVisible(event.target.value.length > 0);
  };

  const handleItemClick = (id: number) => {
    scrollToItem(String(id));
    setTimeout(() => {
      setSelectItem(id);
    }, 300);
    setIsDropdownVisible(false);
  };

  return (
    <div className="w-full bg-[#242428] h-[221px] sm:h-[362px]">
      <div className="flex flex-col base-style h-full z-10" style={{ gap: "0px" }}>

        <div className="maxw-[342.2px] sm:w-[560px] lg:w-[639px] h-full flex flex-col justify-center items-center  gap-[28.79px] sm:gap-[46.35px] lg:gap-[54px] mx-auto ">
          <div className="flex flex-col gap-[15.26px] sm:gap-[20px] lg:gap-[25px]">
            <h1 className="text-white text-xl sm:text-[32px] lg:text-[37px] font-extrabold text-center">
              مرکز راهنمایی و سوالات متداول
            </h1>
            <p className="text-white text-xs sm:text-sm lg:text-base font-normal text-center">
              سوالات خود را جستجو کنید یا از دسته بندی ها استفاده کنید.
            </p>
          </div>


          <div className="relative flex items-center  justify-center border-2 border-[#FFC107]  rounded-[16px] p-2 h-[43px] w-full sm:h-[70px]  lg:h-[79px]">
            <input
              type="text"
              placeholder="سوال خود را بنویسید..."
              className="flex-1 w-[90%]  bg-transparent px-4 py-3 text-white focus:outline-none"
              onChange={handleSearch}
            />
            <div className="w-8 h-8 p-[6px] sm:w-[54px] sm:h-[54px] sm:p-[10px] lg:w-[61px] lg:h-[61px] lg:p-[12px] rounded-[11px] sm:rounded-[17px] lg:rounded-xl bg-[#FFC107]">
              <div className="text-white">
                <Search />
              </div>

            </div>

            {isDropdownVisible && filteredList.length > 0 && (
              <div className="absolute top-full overflow-auto p-6 rounded-xl left-0 w-full bg-background text-foreground rounded-b-xl shadow-lg mt-2 max-h-72 z-10">
                <span className="text-start text-base font-bold flex mb-3">:نتایج پیدا شده</span>
                {filteredList.map((item) => (
                  <div key={item.id} onClick={() => handleItemClick(item.id)}>
                    <div className="rounded-xl bg-secondary h-[70px] mb-[10px]">
                      <button className="w-full h-full px-4 text-left font-medium flex justify-between items-center">
                        <span className="text-start text-sm font-semibold">{item.title}</span>
                        <span >
                          <ArrowBottom />
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


      </div>
      <div className="w-full flex justify-center text-[#242428] -mt-1">
        <WaveDivider strokeColor="#FFFFFF" />
      </div>
    </div>

  );
}
