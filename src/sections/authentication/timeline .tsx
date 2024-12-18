import React from "react";
import levelsData from "./data/data";

const Timeline = () => {
    return (
        <div className="flex flex-col w-full h-auto gap-8">
            <h2 className="text-base md:text-2xl font-bold text-seventh">مراحل احراز هویت سریع در صرافی ارز هشت</h2>
            {levelsData.map((level, index) => (
                <div key={index} className="flex  lg:flex-row w-full h-auto gap-8 relative">
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="w-5 h-5 rotate-45 bg-[#FFC107] z-10"></div>
                            <span className="absolute mr-10 text-base font-semibold text-seventh">{level.level}</span>
                        </div>

                        {index !== levelsData.length - 1 && (
                            <div className="absolute top-6 right-2 w-1 bg-[#ADADAD80] opacity-50 " style={{ height: "calc(100% + 30px)" }}></div>
                        )}
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-between mt-10 items-start">
                        {[
                            { title: "اطلاعات مورد نیاز", data: level.requiredInformation, boxColor: "bg-[#FFC107]" },
                            { title: "دسترسی ها", data: level.accessibility, color: "text-[#33B028]", boxColor: "bg-[#33B028]" },
                            { title: "محدودیت ها", data: level.restrictions, color: "text-[#F00500]", boxColor: "bg-[#F00500]" },
                        ].map((section, idx) => (
                            <div
                                key={idx}
                                className="w-full mb-4 md:mt-0 md:w-[32%] bg-third rounded-xl px-4 py-4  flex flex-col"
                            >
                                <span className={`mb-4 text-sm font-semibold ${section.color}`}>{section.title}:</span>
                                <ul className="flex flex-col gap-1">
                                    {section.data.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="w-6">
                                                <div className={`w-2 h-2 rotate-45 ${section.boxColor} opacity-50 mx-2 mt-2`}></div>
                                            </div>
                                            <span className="text-sm font-normal text-seventh leading-7 text-justify">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>
            ))}
        </div>
    );
};

export default Timeline;
