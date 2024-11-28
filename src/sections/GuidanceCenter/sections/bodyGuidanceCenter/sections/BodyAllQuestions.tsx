import { Question } from "@/sections/GuidanceCenter/type/types";
import { AccordionItem } from "../../AccordionItem";

interface BodyProps {
  questions: Question[];
}

export default function BodyVideoTutorial({ questions }: BodyProps) {

  return (
    <div>
      {questions.map((question, index) => (
        <AccordionItem
          key={index}
          title={question.title}
          videoLink={question.videoLink}
        >
          {question.content}
        </AccordionItem>
      ))}
    </div>
  )
}
