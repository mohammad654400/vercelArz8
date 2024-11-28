import Search from '@/assets/icons/search';
import WaveDivider from '@/assets/icons/waveDivider';
import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { Question } from "@/sections/GuidanceCenter/type/types";

interface HeaderProps {
  questions: Question[];
}

export default function Header({ questions }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setIsDropdownVisible(query.length > 0); 
  };

  const filteredList = questions.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-[#242428] w-full h-[362px] text-white text-center py-16">
        <div className="w-full justify-center items-center flex flex-col">
          <h1 className="text-2xl font-bold mb-4">مرکز راهنمایی و سوالات متداول</h1>
          <p className="text-white mb-8 text-base">
            سوالات خود را جستجو کنید یا از دسته بندی ها استفاده کنید.
          </p>

          <div className="relative flex items-center mt-11 justify-center border-2 h-16 sm:w-2/5 w-4/5 border-[#FFC107] rounded-3xl p-2">
            <input
              type="text"
              placeholder="سوال خود را بنویسید..."
              className="flex-1 w-[90%] bg-transparent px-4 py-3 text-white focus:outline-none"
              onChange={handleSearch}
            />
            <div className="p-3 rounded-xl bg-[#FFC107]">
              <Search />
            </div>

            {isDropdownVisible && filteredList.length > 0 && (
              <div className="absolute top-full overflow-auto  p-6 rounded-xl left-0 w-full bg-white text-black rounded-b-xl shadow-lg mt-2 max-h-60  z-10">
                <span className='text-start flex mb-3'>نتایج پیدا شده</span>
                {filteredList.map((item, index) => (
                  <div key={index} className="bg-white">
                    <AccordionItem
                      key={index}
                      title={item.title}
                      videoLink={item.videoLink}
                    >
                      {item.content}
                    </AccordionItem>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -mt-[1px] text-[#242428]">
        <WaveDivider strokeColor="#FFFFFF" />
      </div>
    </div>
  );
}
