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
    <div className="bg-background pt-[76px]"> 
      <Header
        questions={newData}
        setSelectItem={setSelectItem}
        setSelectedCategory={setSelectedCategory}
        scrollToItem={scrollToItem}
      />
      <div className="bg-background">
        <div className="base-style" style={{ gap: "0" }}>
          <h2 className="hidden xl:flex text-[30px] font-bold mt-[60px] mb-[40px]">مرکز راهنمایی و سوالات متداول</h2>
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
    </div>
  );
}