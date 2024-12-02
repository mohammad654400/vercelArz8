"use client"; 
import React, { useState, useRef, useEffect } from "react"; 
import { newData, categories } from "./data/questionsData"; 
import Header from "./sections/Header"; 
import CollapsibleList from "./sections/CollapsibleList"; 
import BodyGuidanceCenter from "./sections/bodyGuidanceCenter/BodyGuidanceCenter"; 
 
export default function GuidanceCenterView() { 
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0); 
  const [selectItem, setSelectItem] = useState<number  | null>(null); 
   
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}); 
 
  const scrollToItem = (id: string) => { 
    if (itemRefs.current[id]) { 
      itemRefs.current[id]?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 
 
  return ( 
    <div className="flex w-full flex-col bg-background"> 
      <Header 
        questions={newData} 
        setSelectItem={setSelectItem} 
        setSelectedCategory={setSelectedCategory} 
        scrollToItem={scrollToItem} 
      /> 
      <CollapsibleList 
        onCategory={(categoryId) => setSelectedCategory(categoryId)} 
        categories={categories} 
        activeCategory={selectedCategory} 
      /> 
      <BodyGuidanceCenter 
        selectedCategory={selectedCategory} 
        questions={newData} 
        selectItem={selectItem} 
        itemRefs={itemRefs} 
      /> 
    </div> 
  ); 
}