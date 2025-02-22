import { useEffect, useState } from "react";
import { AccordionItem } from "./Accordion-Item";

interface AccordionProps {
  items: { id: number; title: string; content: string, videoLink?: string; }[];
  defaultOpenId?: number | null;
  titleBgColor?: string;
  contentBgColor?: string;
  highlightEnabled?:boolean;

  gap?: string;
  smGap?: string;
  lgGap?: string;
  textTitle?:string;
  smTextTitle?:string;
  lgTextTitle?:string;
  textContent?:string;
  smTextContent?:string;
  lgTextContent?:string;
  textContentLeading?:string;
  smTextContentLeading?:string;
  lgTextContentLeading?:string;

}

export default function Accordion({ 
  items, 
  defaultOpenId,
  titleBgColor,
  contentBgColor,
  highlightEnabled,
  gap = "gap-2.5", 
  smGap = "sm:gap-3.5",
  lgGap = "lg:gap-5",
  textTitle="text-sm",
  smTextTitle="text-xl",
  lgTextTitle="text-xl",
  textContent="text-xs",
  smTextContent="text-sm",
  lgTextContent="text-sm",   
  textContentLeading=" leading-[22.5px]",
  smTextContentLeading="sm:leading-[38.3px]",
  lgTextContentLeading="lg:leading-[38.3px]",

 }: AccordionProps) {


  if (!Array.isArray(items)) {
    console.error("items is not an array", items);
    return null;
  }

  const [openItemId, setOpenItemId] = useState<number | null>( defaultOpenId || null);  

  const handleToggle = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    if (defaultOpenId !== undefined) {
      setOpenItemId(defaultOpenId);
    }
  }, [defaultOpenId]);

  const gapClasses = `${gap} ${smGap} ${lgGap}`;
  const titleClasses = `${textTitle} ${smTextTitle} ${lgTextTitle}`;
  const contentClasses = `${textContent} ${smTextContent} ${lgTextContent} ${textContentLeading} ${smTextContentLeading} ${lgTextContentLeading}`;

  return (
    <div className={`accordion w-full  mx-auto flex flex-col ${gapClasses}`}>

      {items.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            videoLink={item.videoLink}
            isOpen={openItemId === item.id}
            onToggle={handleToggle}
            titleBgColor={titleBgColor} 
            contentBgColor={contentBgColor} 
            highlightEnabled={highlightEnabled}
            titleClasses={titleClasses}
            contentClasses={contentClasses}
          />
      ))}
    </div>
  );
}