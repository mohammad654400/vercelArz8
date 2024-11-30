import BodyAllQuestions from './sections/BodyAllQuestions';
import BodyGeneralQuestions from './sections/BodyGeneralQuestions';
import BodyBuySellCurrency from './sections/BodyBuySellCurrency';
import BodyCurrencyTransactions from './sections/BodyCurrencyTransactions';
import BodyIncomeGeneration from './sections/BodyIncomeGeneration';
import BodyVideoTutorial from './sections/BodyVideoTutorial';
import { Question } from "@/sections/GuidanceCenter/type/types";

interface BodyProps {
  activeKey: string | null;
  questions: Question[];
  itemRefs: React.RefObject<{ [key: string]: React.RefObject<HTMLDivElement> }> ;
}

export default function BodyGuidanceCenter({ activeKey, questions, itemRefs }: BodyProps) {
  const componentMap: { [key: string]: React.ReactNode } = {
    all_questions: ( <BodyAllQuestions questions={questions} itemRefs={itemRefs}/>),
    general_questions: <BodyGeneralQuestions />,
    buy_sell_currency: <BodyBuySellCurrency />,
    currency_transactions: <BodyCurrencyTransactions />,
    income_generation: <BodyIncomeGeneration />,
    video_tutorial: <BodyVideoTutorial questions={questions} />,
  };

  return <div className="mt-5 px-4">{componentMap[activeKey || '']}</div>;
}