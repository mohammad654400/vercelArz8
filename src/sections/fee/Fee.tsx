"use client";

import React, { useState, useCallback } from "react";
import Tab from "./tab/Tab";
import Accordion from "@/components/Accordion";
import { TabContent } from "./tab/TabContent";
import {
    TransactionFeeListText, TransactionFeesTableBody, TransactionFeesTableHeaders, AccordionData,
    ScheduleWithdrawListText, ScheduleWithdrawTableHeaders, ScheduleWithdrawTableBody
} from "./data/feeData";

interface TabProps {
    [key: number]: {
        transformOrigin: string;
        transitionDelay: string;
    };
}

interface Tab {
    id: number;
    name: string;
}

let allTabs: Tab[] = [
    { id: 0, name: "کارمز معاملات" },
    { id: 1, name: "زمانبندی برداشت ریالی" },
];

const Fee: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = useCallback((id: number) => {
        setActiveTab(id);
    }, []);

    const tabProps: TabProps = {
        0: { transformOrigin: "left", transitionDelay: "0.05s" },
        1: { transformOrigin: "right", transitionDelay: "0s" }
    };

    const tabContentData = [
        {
            id: 0,
            tableHeaders: TransactionFeesTableHeaders,
            tableData: TransactionFeesTableBody,
            listData: TransactionFeeListText,
        },
        {
            id: 1,
            tableHeaders: ScheduleWithdrawTableHeaders,
            tableData: ScheduleWithdrawTableBody,
            listData: ScheduleWithdrawListText,
        },
    ];

    return (
        <div className="base-style bg-background">

            <div className="flex flex-col gap-10 sm:gap-[60px] xl:gap-[100px] mt-[76px] sm:mt-[122px] lg:mt-32 mb-16 md:mb-36">

                <div className="flex flex-col w-full h-[200px] min-[380px]:h-[174px] sm:h-[296px] gap-[15px] sm:gap-[35px] lg:gap-[29px]  bg-[#242428] rounded-[17.6px] sm:rounded-[30px] justify-center items-center px-[9.5px] py-[15px] sm:px-[19px] lg:px-[157px] ">
                    <h2 className="w-full text-center text-[20px] sm:text-[30px]  lg:text-[35px]  text-[#FFFFFF] font-bold">کارمزد و خدمات تسویه در ارز هشت</h2>
                    <span className="w-full text-xs sm:text-sm lg:text-base font-semibold text-[#FFFFFF] text-center leading-[28px] sm:leading-[40px] lg:leading-[40px]" >
                        ارز هشت به دنبال فراهم آوردن بستری امن برای انجام معاملات ارز دیجیتال کاربران است . ما در ارز هشت از ابتدای شروع فعالیت سعی کردیم امکانات درخور کاربران ارزشمند خود داشته باشیم و همواره در حال به روز رسانی و بهبود عملکرد ارز هشت هستیم.
                    </span>
                </div>

                <div className="flex flex-col gap-10 sm:gap-[50px] lg:gap-[80px]">

                    <div className="flex flex-col  self-center ">
                        <h1 className="text-lg sm:text-[35px] font-bold border-b-4 border-primary pb-1 sm:pb-3 w-auto text-center">
                            کارمزد و خدمات تسویه در ارز هشت
                        </h1>
                    </div>

                    <div className="bg-secondary p-2 rounded-[20px] sm:rounded-[30px] w-full  max-w-[388px] sm:max-w-[566px]  sm:w-[566px]  h-[62px] sm:h-[90px] flex self-center justify-center items-center">
                        <div className="flex w-full h-full gap-4">
                            {allTabs.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    name={tab.name}
                                    isActive={tab.id === activeTab}
                                    onClick={() => handleTabClick(tab.id)}
                                    transformOrigin={tabProps[tab.id].transformOrigin}
                                    transitionDelay={tabProps[tab.id].transitionDelay}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        {tabContentData.map((tabContent) => (
                            <div
                                key={tabContent.id}
                                className={`transition-opacity duration-700 ease-in-out transform ${activeTab === tabContent.id
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-10"
                                    }`}
                            >
                                {activeTab === tabContent.id && (
                                    <TabContent
                                        tableHeaders={tabContent.tableHeaders}
                                        tableData={tabContent.tableData}
                                        listData={tabContent.listData}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <Accordion
                    items={AccordionData}
                    gap="gap-[10px]"
                    smGap="sm:gap-[15px]"
                    lgGap="lg:gap-[15px]"

                    textTitle="text-sm"
                    smTextTitle="sm:text-xl"
                    lgTextTitle="lg:text-xl"

                    textContent="text-xs"
                    smTextContent="sm:text-sm"
                    lgTextContent="lg:text-sm"

                    textContentLeading="leading-[22.5px]"
                    smTextContentLeading="sm:leading-[38.3px]"
                    lgTextContentLeading="lg:leading-[38.3px]"
                />

            </div>


        </div>
    );
};

export default Fee;
