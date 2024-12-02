import React, { useState } from "react";
export default function CryptoModal({ toggle, setCurrency,currencies }: any) {
    const [search, setSearch] = useState("");
  
    const filteredCurrencies = currencies.filter(
      (currency:any) =>
        currency.name.includes(search) ||
        currency.symbol.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleBackgroundClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (e.target === e.currentTarget) {
        toggle();
      }
    };
  
    const handleCurrencySelect = (currency: any) => {
      setCurrency(currency); 
      toggle(); 
    };
  
    return (
      <div
        onClick={handleBackgroundClick}
        className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      >
        <div className="w-[388px] bg-background rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">انتخاب ارز</h2>
            <button onClick={toggle} className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  
          {/* Search */}
          <div className="relative flex items-center px-4 my-2 mx-2   rounded-2xl">
            <input
              type="text"
              placeholder="نام، نماد، ارز..."
              className="w-full h-10 rounded-xl bg-[#F6F6F6] pr-3 dark:bg-[#302F34]   outline-none text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
  
          <div className="h-[400px] overflow-y-auto px-2">
            {filteredCurrencies.map((currency:any, index:any) => (
              <div
                key={index}
                onClick={() => handleCurrencySelect(currency)} 
                className="flex items-center rounded-2xl justify-between px-4 py-3  hover:bg-[#FFF6DD] dark:hover:bg-[#3C3B41] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                {currency.icon}
                  <div>
                    <p className="text-sm font-semibold">{currency.name}</p>
                    <p className="text-xs text-gray-500">{currency.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">{currency.price} تومان</p>
                  <p className="text-xs text-green-500">+{currency.change}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  