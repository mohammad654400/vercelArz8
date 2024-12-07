import WaveDivider from "@/assets/icons/waveDivider"; 
interface CollapsibleListProps { 
  activeCategory: number | null; 
  onCategory: (categoryId: number) => void; 
  categories: { id: number; title: string; icon: React.ComponentType }[];  
} 

export default function CategoryList({ 
  categories, 
  onCategory, 
  activeCategory, 
}: CollapsibleListProps) { 
  return ( 
    <div className="relative flex flex-row w-full mt-5 justify-between flex-wrap"> 
      {categories.map((category) => ( 
        <div 
          key={category.id} 
          className={`relative flex flex-col mb-14 w-44 ${activeCategory !== category.id ? "opacity-50" : ""}`} // اوپاسیتی 50% برای کارت‌های غیر فعال
          onClick={() => onCategory(category.id)} 
        > 
          <div className="relative z-0"> 
            {activeCategory === category.id && ( 
              <div 
                className="absolute inset-0 -z-10 transition-all duration-300" 
                style={{ 
                  background: 
                    "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)", 
                  borderRadius: "0.85rem", 
                  transform: "scaleX(1.03) scaleY(1.02)", 
                }} 
                aria-hidden="true" 
              ></div> 
            )} 
            <div 
              className={`relative flex flex-col items-center justify-center w-full h-44 rounded-xl cursor-pointer bg-secondary`} 
            > 
              <div className="text-4xl z-10"> 
                <category.icon /> 
              </div> 
              <span className="text-lg font-semibold  mt-2 z-10">{category.title}</span> 
            </div> 
          </div> 
          {activeCategory === category.id && ( 
            <div className="flex justify-center -mt-[2.5px] text-secondary"> 
              <WaveDivider position="absolute" strokeColor="#FFC107" /> 
            </div> 
          )} 
        </div> 
      ))} 
    </div> 
  ); 
}
