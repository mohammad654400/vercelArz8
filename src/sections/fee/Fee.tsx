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

            <div className="flex flex-col w-full  h-72 bg-[#242428] rounded-xl  mt-20 justify-center items-center px-5 lg:px-[10%]">
                <h1 className="text-lg sm:text-3xl text-[#FFFFFF] font-bold">کارمزد و خدمات تسویه در ارز هشت</h1>
                <span className="text-xs sm:text-sm font-semibold text-[#FFFFFF] mt-7 text-justify md:text-center"style={{lineHeight:"2rem"}}>
                    ارز هشت به دنبال فراهم آوردن بستری امن برای انجام معاملات ارز دیجیتال کاربران است . ما در ارز هشت از ابتدای شروع فعالیت سعی کردیم امکانات درخور کاربران ارزشمند خود داشته باشیم و همواره در حال به روز رسانی و بهبود عملکرد ارز هشت هستیم.
                </span>
            </div>

            <div className="hidden lg:flex flex-col  min-w-[350px] mt-12 max-w-[500px] self-center  ">
                <h2 className="flex justify-center text-xl lg:text-3xl font-bold text-sixth">کارمزد و خدمات تسویه در ارز هشت</h2>
                <hr className="border-t-4 border-primary mt-2" />
            </div>

            <div className="bg-secondary p-3 rounded-xl w-full lg:w-1/2  lg:min-w-[446px]  max-w-[560px] h-[85px] flex self-center justify-center items-center">
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
                        className={`transition-opacity duration-700 ease-in-out transform ${
                            activeTab === tabContent.id
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

            <Accordion items={AccordionData}  />
        </div>
    );
};

export default Fee;
