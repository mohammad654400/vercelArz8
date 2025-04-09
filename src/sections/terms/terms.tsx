
"use client";
import React, { useState, useMemo, useCallback, useRef } from "react";
import { tabBar, tabData } from "./data/terms-data";
import Info from "@/assets/icons/rules/info";
import ArrowBottom from "@/assets/icons/arrrow/arrow-bottom";

export default function Terms() {
    const [selectedCategory, setSelectedCategory] = useState<{ id: number; title: string }>({
        id: 0,
        title: tabBar[0]?.title || "شرایط و قوانین کلی",
    });
    const [selectedActionCategory, setSelectedActionCategory] = useState<{ id: number; title: string }>({
        id: 0,
        title: tabBar[0]?.title || "شرایط و قوانین کلی",
    });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0)



    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
        scrollLeft.current = containerRef.current?.scrollLeft || 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - (containerRef.current?.offsetLeft || 0);
        const walk = x - startX.current;
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    const handleMouseUpOrLeave = () => {
        isDragging.current = false;
    };

    const Action = () => {

        setSelectedCategory({
            id: selectedActionCategory.id,
            title: selectedActionCategory.title
        });
        setIsDrawerOpen(false);
    }

    const tabClick = useCallback((id: number, title: string) => {
        setSelectedCategory({ id, title });
    }, []);

    const filteredQuestions = useMemo(
        () => tabData.filter((rules) => rules.categoryId === selectedCategory.id),
        [selectedCategory.id]
    );

    return (
        <main className="base-style bg-background !gap-0">
            <section className="flex bg-primary w-full rounded-[20px] p-[13px] items-center mt-[76px] sm:mt-[146px] lg:mt-[164px] lg:mb-[43px] mb-[40px]">

                <div className=" lg:min-w-[49px] lg:h-[49px] min-w-[28px] h-[28px]"> <Info /></div>

                <span className="text-xs lg:text-base text-[#242428] font-semibold mr-[10px] leading-[23px] lg:leading-[40px] text-justify">توجه : از تاریخ ۲۵/۱۰/۲۰۲۲ دامنه سایت از "www.arz8x.com" به "www.arz8.com" تغییر پیدا کرده است و برند "Arz8x" به "Arz8" تغییر پیدا کرده است.</span>
            </section>

            <section className="flex flex-col w-full  justify-center items-center text-center sm:px-[58px] lg:px-0 mb-10">
                <span className="w-full flex justify-center lg:px-[198px] text-[13px] lg:text-base font-semibold  text-justify sm:text-center leading-[35px] lg:leading-[40px]">با تشکر از شما برای انتخاب ارز هشت، شرایط و قوانین زیر برای ارائه بهتر خدمات به کاربران ارزشمند ارز هشت اعمال میشود.</span>
                <span className="w-full flex justify-center lg:px-[198px] text-[13px] lg:text-base font-semibold  text-justify sm:text-center leading-[35px] lg:leading-[40px]">لطفا قوانین را با دقت مطالعه کرده تا از نحوه ارائه خدمات مطلع شوید</span>
            </section>
            {isDrawerOpen ? (
                <div
                    className="fixed bottom-0 left-0 w-full bg-background shadow-[#9C9C9C40] shadow-[0px_0px_20.02px_0px_rgba(156,156,156,0.25)] rounded-t-[40px] h-[426px] z-20 "
                >
                    <div className="flex flex-col h-full p-4">
                        {/* لیست کشویی */}
                        <div className="overflow-y-auto flex-grow">
                            {tabBar.map((item) => {
                                const isSelected = selectedActionCategory.id === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelectedActionCategory({ id: item.id, title: item.title })}
                                        className={`mb-[10px] flex h-[54px] px-3 rounded-[20px]  items-center  whitespace-nowrap text-base font-semibold mx-[11px] cursor-pointer ${isSelected ? "bg-[#FFF6DD] text-[#FFC107]" : "bg-secondary text-sixth"
                                            }`}
                                    >
                                        <span className={`truncate select-none ${isSelected ? "text-[15px] lg:text-base" : "text-[14.78px] lg:text-[15.78px] "}  font-semibold`}>
                                            {item.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        {/* دکمه اعمال */}
                        <button
                            onClick={() => Action()}
                            className="bg-primary text-white rounded-[19px] mt-1 px-5 w-full  h-[44px] text-xl font-bold py-2 justify-center items-center"
                        >
                            اعمال
                        </button>
                    </div>
                </div>
            ) : (
                <div className=" sm:flex hidden  justify-between bg-secondary w-full rounded-[30px] h-[70px] py-2  "

                >
                    <div
                        ref={containerRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUpOrLeave}
                        onMouseLeave={handleMouseUpOrLeave}
                        className="w-full flex ml-[27px] mr-2.5 overflow-x-auto scrollbar-hidden">
                        {tabBar.map((item) => {
                            const isSelected = selectedCategory.id === item.id;
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => tabClick(item.id, item.title)}
                                    className={`flex h-[54px] px-3 rounded-[20px] items-center justify-center whitespace-nowrap text-base font-semibold mx-[5px] cursor-pointer ${isSelected ? "bg-primary text-white" : "bg-fifth text-sixth"
                                        }`}>
                                    <span className="truncate select-none text-sm lg:text-base font-semibold">
                                        {item.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                </div>
            )}

            <div className="hidden lg:flex flex-col  self-center mt-10">
                <h1 className="text-[35px] font-bold border-b-4 border-primary pb-3 w-auto text-center">
                    {selectedCategory.title}
                </h1>
            </div>

            <div className="sm:hidden flex w-full ">
                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="flex w-full h-[41px] justify-between px-[14px] bg-secondary rounded-[17.6px] items-center"
                >
                    <h2 className="text-sm font-semibold">{selectedCategory.title}</h2>
                    <span className="w-4 h-4">   <ArrowBottom /> </span>
                </button>
            </div>

            <ul className="w-full space-y-2 sm:space-y-4 mt-10 mb-20">
                {filteredQuestions.map((item) => (
                    <li key={item.categoryId + item.text} className="flex items-start gap-2">
                        <div className="w-5">
                            <span className="mt-[6px] lg:mt-[14px] w-[15px] h-[15px] rounded bg-primary flex justify-start items-start rotate-45" />
                        </div>
                        <p
                            className="text-xs sm:text-base lg:text-[19px] font-normal text-foreground text-justify leading-[28px] sm:leading-[47px]"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
