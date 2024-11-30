import React, { useCallback } from "react";
import VideoTutorial from "@/assets/icons/guidanceCenter/videoTutorial";
import IncomeGeneration from "@/assets/icons/guidanceCenter/incomeGeneration";
import CurrencyTransactions from "@/assets/icons/guidanceCenter/currencyTransactions";
import BuySellCurrency from "@/assets/icons/guidanceCenter/buySellCurrency";
import GeneralQuestions from "@/assets/icons/guidanceCenter/generalQuestions";
import AllQuestions from "@/assets/icons/guidanceCenter/allQuestions";
import WaveDivider from "@/assets/icons/waveDivider";

interface CollapsibleListProps {
  activeKey: string | null;
  setActiveKey: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function CollapsibleList({ activeKey, setActiveKey }: CollapsibleListProps) {
  const filterOptions = [
    { icon: <AllQuestions />, label: "همه سوالات", key: "all_questions" },
    { icon: <GeneralQuestions />, label: "سوالات عمومی", key: "general_questions" },
    { icon: <BuySellCurrency />, label: "خرید و فروش ارز", key: "buy_sell_currency" },
    { icon: <CurrencyTransactions />, label: "واریز و برداشت ارز", key: "currency_transactions" },
    { icon: <IncomeGeneration />, label: "درآمد زایی", key: "income_generation" },
    { icon: <VideoTutorial />, label: "آموزش تصویری", key: "video_tutorial" },
  ];

  const handleClick = useCallback((key: string) => {
    setActiveKey(key);
  }, [setActiveKey]);

  return (
    <div className="relative flex flex-row w-full mt-5 justify-around flex-wrap">
      {filterOptions.map(({ label, icon, key }) => (
        <div key={key} className="relative flex flex-col mb-14 w-44">
          {/* Container for stacking context */}
          <div className="relative z-0">
            {/* Gradient background */}
            {activeKey === key && (
              <div
                className="absolute inset-0 -z-10 transition-all duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
                  borderRadius: "0.85rem",
                  transform: "scaleX(1.03) scaleY(1.02)", 
                }}
                aria-hidden="true"
              ></div>
            )}

            {/* Main content of the card */}
            <div
              onClick={() => handleClick(key)}
              className={`relative flex flex-col items-center justify-center w-full h-44 rounded-xl cursor-pointer 
              bg-secondary`}
            >
              <div className="text-4xl z-10">{icon}</div>
              <span className="text-lg mt-2 z-10">{label}</span>
            </div>
          </div>

          {activeKey === key && (
            <div className="flex justify-center -mt-[2.5px] text-secondary">
              <WaveDivider position="absolute" strokeColor="#FFC107" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
