import { Question } from "@/sections/GuidanceCenter/type/types";
import Accordion2 from "./sections/Accordion2";

interface BodyProps {
  questions: Question[];
  selectedCategory: number | null;
  selectItem: number | null;
  itemRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}
export default function BodyGuidanceCenter({
  selectedCategory,
  questions,
  selectItem,
  itemRefs,
}: BodyProps) {
  const filteredQuestions =
    selectedCategory === 0 || selectedCategory === null
      ? questions 
      : questions.filter((question) => question.categoryId === selectedCategory); // فیلتر بر اساس دسته‌بندی 

  return filteredQuestions.map((filteredQuestion) => (
    <div
      className="w-full sm:px-11 lg:px-28  px-5"
      ref={(el) => { itemRefs.current[filteredQuestion.id] = el; }}
      key={filteredQuestion.id}
    >
      <Accordion2 items={[filteredQuestion]} defaultOpenId={selectItem} />
    </div>
  ));
}
