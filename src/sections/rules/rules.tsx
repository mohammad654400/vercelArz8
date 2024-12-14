"use client";
import React, { useState, useMemo, useCallback, useRef } from "react";
import { tabBar, tabData } from "./data/rulesData";
import Info from "@/assets/icons/rules/info";

export default function Rules() {
    const [selectedCategory, setSelectedCategory] = useState<{ id: number; title: string }>({
        id: 0,
        title: tabBar[0]?.title || "",
    });

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const tabClick = useCallback((id: number, title: string) => {
        setSelectedCategory({ id, title });
    }, []);

    const filteredQuestions = useMemo(
        () => tabData.filter((rules) => rules.categoryId === selectedCategory.id),
        [selectedCategory.id]
    );

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.style.scrollBehavior = "auto";
        const startX = e.clientX;
        const startScrollLeft = container.scrollLeft;

        const handlePointerMove = (moveEvent: PointerEvent) => {
            const diff = moveEvent.clientX - startX;
            container.scrollLeft = startScrollLeft - diff;
        };

        const handlePointerUp = () => {
            container.style.scrollBehavior = "";
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
    };

    return (
        <div className="flex flex-col bg-background px-5 py-20 lg:px-[120px] lg:py-[90px]">
           
            <div className="flex items-center py-4 px-2 bg-primary rounded-xl">
                <div className="w-6 min-w-12 items-start justify-start self-start flex ">
                    <Info />
                </div>
                <span className="text-[#242428] text-xs sm:text-base font-semibold mr-3 text-justify">
                    توجه : از تاریخ ۲۵/۱۰/۲۰۲۲ دامنه سایت از "www.arz8x.com" به "www.arz8.com" تغییر پیدا کرده است و برند
                    "Arz8x" به "Arz8" تغییر پیدا کرده است.
                </span>
            </div>

     
            <div className="flex flex-col w-full my-11 justify-center items-center text-center text-sm lg:text-base font-semibold">
                <span className="sm:w-4/5 leading-9">با تشکر از شما برای انتخاب ارز هشت، شرایط و قوانین زیر برای ارائه بهتر خدمات به کاربران ارزشمند ارز هشت اعمال میشود.</span>
                <span className="sm:w-4/5 leading-9">لطفا قوانین را با دقت مطالعه کرده تا از نحوه ارائه خدمات مطلع شوید</span>
            </div>

           
            <div
                ref={scrollContainerRef}
                className="flex justify-between bg-secondary w-full rounded-xl h-16 py-2 overflow-x-auto cursor-grab"
                onPointerDown={handlePointerDown}
            >
                {tabBar.map((item) => {
                    const isSelected = selectedCategory.id === item.id;
                    return (
                        <div
                            key={item.id}
                            onClick={() => tabClick(item.id, item.title)}
                            className={`flex px-3 rounded-xl items-center justify-center whitespace-nowrap mx-2 cursor-pointer ${
                                isSelected ? "bg-primary text-white" : "bg-fifth text-foreground"
                            }`}
                        >
                            <span className="truncate select-none">{item.title}</span>
                        </div>
                    );
                })}
            </div>

            
            <div className="hidden md:flex flex-col w-1/2 my-10 self-center">
                <h1 className="flex justify-center text-3xl font-bold text-sixth">{selectedCategory.title}</h1>
                <hr className="border-t-4 border-primary mt-2" />
            </div>

            
            <ul className="w-full space-y-5 md:mt-0 mt-10">
                {filteredQuestions.map((item) => (
                    <li key={item.categoryId + item.text} className="flex items-start">
                        <div className="w-5">
                            <span className="mr-2 mt-3 w-3.5 h-3.5 bg-primary flex justify-start items-start rotate-45" />
                        </div>
                        <span className="mr-3 text-sm md:text-lg font-normal text-foreground text-justify" style={{lineHeight:"2.3rem"}}>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
