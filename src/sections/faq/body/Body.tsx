import Accordion from "../../../components/Accordion";

interface Question {
  id: number;
  categoryId: number;
  title: string;
  content: string;
  videoLink?: string;
}

interface BodyProps {
  questions: Question[];
  selectedCategory: number | null;
  selectItem: number | null;
  itemRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}
export default function Body({
  selectedCategory,
  questions,
  selectItem,
  itemRefs,
}: BodyProps) {
  const filteredQuestions =
    selectedCategory === 0 || selectedCategory === null
      ? questions
      : questions.filter((question) => question.categoryId === selectedCategory);

  return (
    <div className="w-full flex flex-col gap-[10px] sm:gap-[20px] lg:gap-[20px]">
      {filteredQuestions.map((filteredQuestion) => (
        <div
          className="w-full flex flex-col"
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
  );
}
