import React from "react";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import ArrowRight from "@/assets/icons/arrrow/arrowRight";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, setCurrentPage }: PaginationProps) {
  const getPages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];
    if (currentPage >= totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];

    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const pages = getPages();

  return (
    <div className="flex justify-center items-center gap-3  p-4">


    
      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-[7px] sm:rounded-[15px] p-2 bg-secondary ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        <div className="sm:w-5 sm:h-5 w-3 h-3">
          <ArrowRight />
        </div>
      </button>

 
      <div className="flex items-center gap-2" style={{ direction: "ltr" }}>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && setCurrentPage(page)}
            className={`w-5 h-5 sm:w-10 sm:h-10 flex justify-center items-center text-center rounded-lg sm:rounded-[15px] text-sm  font-semibold ${currentPage === page
              ? "bg-yellow-400 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>
  
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-[7px] sm:rounded-[15px] p-2 bg-secondary ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        <div className="sm:w-5 sm:h-5 w-3 h-3">
          <ArrowLeft />
        </div>
      </button>

    </div>
  );
}
