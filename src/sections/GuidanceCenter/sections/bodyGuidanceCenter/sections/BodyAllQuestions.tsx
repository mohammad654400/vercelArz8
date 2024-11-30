import { Question } from "@/sections/GuidanceCenter/type/types";
import { AccordionItem } from "../../AccordionItem";

interface BodyAllQuestionsProps {
  questions: Question[];
  itemRefs: React.RefObject<{ [key: string]: React.RefObject<HTMLDivElement> }>;
}

export default function BodyAllQuestions({ questions, itemRefs }: BodyAllQuestionsProps) {
  return (
    <div>
      {questions.map((question) => (
        <AccordionItem
          key={question.id}
          title={question.title}
          videoLink={question.videoLink} 
          ref={question.id && itemRefs.current ? itemRefs.current[question.id]  : null} 
        >
          {question.content}
        </AccordionItem>
      ))}
    </div>
  );
}