"use client";
import React, { useState, useRef, useMemo } from "react";
import Search from "@/assets/icons/search";
import WaveDivider from "@/assets/icons/waveDivider";
import Accordion from "@/components/Accordion";
import { categories, newData } from "./data/questions-data";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";

export default function FaqView() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
  const [selectItem, setSelectItem] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToItem = (id: string) => {
    if (itemRefs.current[id]) {
      itemRefs.current[id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const filteredList = useMemo(() => {
    return newData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, newData]);


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

  const filteredQuestions =
    selectedCategory === 0 || selectedCategory === null
      ? newData
      : newData.filter((newData) => newData.categoryId === selectedCategory);


  return (
    <div className="bg-background pt-20">
 <div className="w-full bg-[#242428] h-[221px] sm:h-[362px]">
        <div className="flex flex-col base-style h-full z-10" style={{ gap: "0px" }}>

          <div className="w-full h-full flex flex-col  justify-center items-center self-center ">
            <h1 className="text-white text-xl sm:text-[32px] lg:text-[37px] font-extrabold mt-[53px] sm:mt-[91px] lg:mt-[78px]">
              مرکز راهنمایی و سوالات متداول
            </h1>
            <p className="text-white text-xs sm:text-sm lg:text-base font-normal mt-[15px] mb-[28px] sm:mt-[20px] sm:mb-[46px] lg:mt-[25px] lg:mb-[54px]">
              سوالات خود را جستجو کنید یا از دسته بندی ها استفاده کنید.
            </p>

            <div className="relative flex items-center  justify-center border-2 border-[#FFC107]  rounded-[16px] p-2 h-[43px] w-[90%] sm:h-[70px] sm:w-[560px] lg:h-[79px] lg:w-[693px]">
              <input
                type="text"
                placeholder="سوال خود را بنویسید..."
                className="flex-1 w-full  bg-transparent px-4 py-3 text-white focus:outline-none"
                onChange={handleSearch}
              />
              <div className="w-8 h-8 p-[6px] sm:w-[54px] sm:h-[54px] sm:p-[10px] lg:w-[61px] lg:h-[61px] lg:p-[12px] rounded-[11px] sm:rounded-[17px] lg:rounded-xl bg-[#FFC107]">
                <div className="text-white">
                  <Search />
                </div>

              </div>

              {isDropdownVisible && filteredList.length > 0 && (
                <div className="absolute top-full overflow-auto p-6 rounded-xl left-0 w-full bg-background text-foreground rounded-b-xl shadow-lg mt-2 max-h-60 lg:max-h-96 z-10">
                  <span className="text-start text-xs lg:text-base font-bold flex mb-4">نتایج پیدا شده :</span>
                  {filteredList.map((item) => (
                    <div key={item.id} onClick={() => handleItemClick(item.id)}>
                      <div className="rounded-xl bg-secondary  mb-[10px]">
                        <button className="w-full h-full px-4 text-left font-medium flex justify-between py-[9px] lg:py-[26px] ">
                          <span className="text-start text-[10px] lg:text-sm font-semibold ml-2  leading-5">{item.title}</span>
                          <span  >
                            <ArrowLeft />
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex justify-center text-[#242428] mt-[37px] sm:mt-[86px] lg:mt-[73px]  ">
            <WaveDivider strokeColor="#FFFFFF" />
          </div>
        </div>
      </div>


      <div className="base-style" style={{ gap: "0" }}>
        <h2 className="hidden xl:flex text-[30px] font-bold mt-[60px] mb-[40px]">مرکز راهنمایی و سوالات متداول</h2>

        <div className="relative mb-10 mt-[105px] xl:mt-0  grid min-[390px]:grid-cols-2  sm:grid-cols-3  min-[1150px]:grid-cols-6 w-full h-full gap-4 grid-flow-row-dense ">

          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative mx-auto flex flex-col mb-14 w-44 ${selectedCategory !== category.id ? "opacity-50" : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="relative z-0">
                {selectedCategory === category.id && (
                  <div
                    className="absolute inset-0 -z-10 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
                      borderRadius: "0.85rem",
                      transform: "scaleX(1.03) scaleY(1.02)",
                    }}
                    aria-hidden="true"
                  ></div>
                )}
                <div
                  className={`relative flex flex-col items-center justify-center w-full h-44 rounded-xl cursor-pointer bg-secondary`}
                >
                  <div className="text-4xl z-10 w-14 h-14">
                    <category.icon />
                  </div>
                  <span className="text-lg font-semibold  mt-2 z-10">{category.title}</span>
                </div>
              </div>
              {selectedCategory === category.id && (
                <div className="flex justify-center -mt-[2.5px] text-secondary">
                  <WaveDivider position="absolute" strokeColor="#FFC107" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-[10px] sm:gap-[20px] lg:gap-[20px]">
          {filteredQuestions.map((filteredQuestion) => (
            <div
              className="w-full"
              ref={(el) => {
                itemRefs.current[filteredQuestion.id] = el;
              }}
              key={filteredQuestion.id}
            >
              <Accordion
                items={[filteredQuestion]}
                defaultOpenId={selectItem}
                textTitle="text-xs"
                smTextTitle="sm:text-base"
                lgTextTitle="lg:text-base"
                textContent="text-[10px]"
                smTextContent="sm:text-sm"
                lgTextContent="lg:text-sm"
                textContentLeading="leading-[25px]"
                smTextContentLeading="sm:leading-[38.3px]"
                lgTextContentLeading="lg:leading-[38.3px]"

              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}