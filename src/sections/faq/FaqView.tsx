"use client";
import React, { useState, useRef } from "react";
import Header from "./header/Header";
import CategoryList from "./categoryList/CategoryList";
import Body from "./body/Body";
import { categories, newData } from "./data/questionsData";

export default function FaqView() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(0);
  const [selectItem, setSelectItem] = useState<number | null>(null);

  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToItem = (id: string) => {
    if (itemRefs.current[id]) {
      itemRefs.current[id]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="flex w-full flex-col bg-background ">
      <Header
        questions={newData}
        setSelectItem={setSelectItem}
        setSelectedCategory={setSelectedCategory}
        scrollToItem={scrollToItem}
      />
      <div className="px-[120px] py-[30px]">
        <CategoryList
          onCategory={(categoryId) => setSelectedCategory(categoryId)}
          categories={categories}
          activeCategory={selectedCategory}
        />
        <Body
          selectedCategory={selectedCategory}
          questions={newData}
          selectItem={selectItem}
          itemRefs={itemRefs}
        />
      </div>
    </div>
  );
}