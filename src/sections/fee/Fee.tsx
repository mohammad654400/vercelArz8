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
        0: { transformOrigin: "left", transitionDelay: "0.35s" },
        1: { transformOrigin: "right", transitionDelay: "0s" }
    };

    return (
        <div className="bg-background flex flex-col px-5 lg:px-[120px] lg:py-[30px]">

            <div className="flex flex-col w-full h-72 bg-[#242428] rounded-xl px-7 lg:px-[15%]  justify-center items-center">
                <h1 className="text-3xl text-[#FFFFFF] font-bold">کارمزد و خدمات تسویه در ارز هشت</h1>
                <span className="text-sm font-semibold text-[#FFFFFF] mt-7 leading-9 text-center">
                    ارز هشت به دنبال فراهم آوردن بستری امن برای انجام معاملات ارز دیجیتال کاربران است . ما در ارز هشت از ابتدای شروع فعالیت سعی کردیم امکانات درخور کاربران ارزشمند خود داشته باشیم و همواره در حال به روز رسانی و بهبود عملکرد ارز هشت هستیم.
                </span>
            </div>

            <div className="flex flex-col w-[70%] lg:w-1/2 min-w-[350px] self-center mt-24  mb-20">
                <h2 className="flex justify-center text-3xl font-bold text-sixth">کارمزد و خدمات تسویه در ارز هشت</h2>
                <hr className="border-t-4 border-primary mt-2" />
            </div>

            <div className="bg-fourth p-3 rounded-xl w-[70%] lg:w-1/2 min-w-[350px] h-[90px] flex self-center justify-center items-center">
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
            {activeTab === 0 ? (
                <TabContent
                    tableHeaders={TransactionFeesTableHeaders}
                    tableData={TransactionFeesTableBody}
                    listData={TransactionFeeListText}
                />
            ) : (
                <TabContent
                    tableHeaders={ScheduleWithdrawTableHeaders}
                    tableData={ScheduleWithdrawTableBody}
                    listData={ScheduleWithdrawListText}
                />
            )}

            <Accordion items={AccordionData} />
        </div>
    );
};

export default Fee;
