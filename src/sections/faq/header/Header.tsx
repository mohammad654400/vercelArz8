import React, { useState, useMemo } from "react"; 
import ArrowBottom from "@/assets/icons/arrow-bottom"; 
import Search from "@/assets/icons/search"; 
import WaveDivider from "@/assets/icons/waveDivider"; 

interface Question { 
  id: number;   
  categoryId: number; 
  title: string; 
  content: string; 
  videoLink?: string; 
  }
 
interface HeaderProps { 
  questions: Question[]; 
  setSelectItem: (id: number) => void; 
  setSelectedCategory: (id: number) => void; 
  scrollToItem: (id: string) => void; 
} 
 
export default function Header({ 
  questions, 
  setSelectItem, 
  setSelectedCategory, 
  scrollToItem, 
}: HeaderProps) { 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 
 
  const filteredList = useMemo(() => { 
    return questions.filter((item) => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) 
    ); 
  }, [searchQuery, questions]); 
 
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setSelectedCategory(0)
    setSearchQuery(event.target.value); 
    setIsDropdownVisible(event.target.value.length > 0); 
  }; 
 
  const handleItemClick = (id: number) => { 
    
    scrollToItem(String(id)); 
    setTimeout(() => {
      setSelectItem(id);
    }, 300);
    setIsDropdownVisible(false); 
  }; 
 
  return ( 
    <div className="flex flex-col w-full h-full"> 
      <div className="bg-[#242428] w-full h-[362px] text-white text-center py-16"> 
        <div className="w-full justify-center items-center flex flex-col"> 
          <h1 className="text-2xl font-bold mb-4"> 
            مرکز راهنمایی و سوالات متداول 
          </h1> 
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
              <div className="absolute top-full overflow-auto p-6 rounded-xl left-0 w-full bg-background text-foreground rounded-b-xl shadow-lg mt-2 max-h-60 z-10"> 
                <span className="text-start flex mb-3">نتایج پیدا شده</span> 
                {filteredList.map((item) => ( 
                  <div 
                    key={item.id} 
                    onClick={() => handleItemClick(item.id)} 
                  > 
                    <div className="rounded-xl bg-secondary p-8 mb-4"> 
                      <button className="w-full text-left font-medium flex justify-between items-center"> 
                        <span className="text-start">{item.title}</span> 
                        <span> 
                          <ArrowBottom /> 
                        </span> 
                      </button> 
                    </div> 
                  </div> 
                ))} 
              </div> 
            )} 
          </div> 
        </div> 
      </div> 
      <div className="w-full flex justify-center -mt-[1.1px] text-[#242428]"> 
        <WaveDivider strokeColor="#FFFFFF" /> 
      </div> 
    </div> 
  ); 
}