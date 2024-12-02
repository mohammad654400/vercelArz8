import Accordion from "./Accordion";

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
  return filteredQuestions.map((filteredQuestion) => (
    <div
      className="w-full "
      ref={(el) => { itemRefs.current[filteredQuestion.id] = el; }}
      key={filteredQuestion.id}
    >
      <Accordion items={[filteredQuestion]} defaultOpenId={selectItem} />
    </div>
  ));
}
