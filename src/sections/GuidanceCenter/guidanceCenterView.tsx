"use client"
import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { questionsByCategory } from "./data/questionsData";
import Header from "./sections/Header";
import CollapsibleList from "./sections/CollapsibleList";
import BodyGuidanceCenter from "./sections/bodyGuidanceCenter/BodyGuidanceCenter";

export default function GuidanceCenterView() {
  const [activeKey, setActiveKey] = useState<string | null>("video_tutorial");

  const safeActiveKey = activeKey ?? "video_tutorial"; 
  const questions = useMemo(() => questionsByCategory[safeActiveKey], [safeActiveKey]);

  const itemRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  useEffect(() => {
    questions.forEach((question) => {
      if (!itemRefs.current[question.id || ""]) {
        itemRefs.current[question.id || ""] = React.createRef();
      }
    });
  }, [questions]);

  const scrollToItem = useCallback((id: string) => {
    const itemRef = itemRefs.current[id];
    if (itemRef && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: "smooth" }); 
    }
  }, []);

  return (
    <div className="flex w-full flex-col bg-background">
      <Header questions={questionsByCategory["all_questions"]} setActiveKey={setActiveKey} scrollToItem={scrollToItem} />
      <CollapsibleList activeKey={activeKey} setActiveKey={setActiveKey} />
      <BodyGuidanceCenter activeKey={activeKey} questions={questions} itemRefs={itemRefs} />
    </div>
  );
}