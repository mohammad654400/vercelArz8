"use client";
import React, { useState } from "react";
import Image from "next/image";
import BNB from "@/assets/icons/bnb";
import ChartUP from "@/assets/images/chartup.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import ArrowRight from "@/assets/icons/arrrow/arrowRight";
import Star from "@/assets/icons/star";
import Link from "next/link";
import { usePathname } from "next/navigation";

const currencies = [
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BNB",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
  },
];

const filterOptions = [
  { label: "محبوب‌ترین‌ها", key: "popular" },
  { label: "گران ترین", key: "mostExpensive" },
  { label: "ارزان ترین", key: "cheapest" },
  { label: "بیشترین رشد", key: "mostGrowth" },
  { label: "بیشترین ضرر", key: "mostLoss" },
  { label: "جدیدترین", key: "newest" },
];

export default function LivePriceTable() {
  // state
  const [activeFilter, setActiveFilter] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCurrencies, setDisplayedCurrencies] = useState(
    currencies.filter((currency) => currency.popular)
  );
  const [favorites, setFavorites] = useState<string[]>([]);
  // handler
  const toggleFavorite = (symbol: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(symbol)
        ? prevFavorites.filter((fav) => fav !== symbol)
        : [...prevFavorites, symbol]
    );
  };
  const handleFilterChange = (filterKey: any) => {
    setActiveFilter(filterKey);

    switch (filterKey) {
      case "popular":
        setDisplayedCurrencies(
          currencies.filter((currency) => currency.popular)
        );
        break;
      case "mostExpensive":
        setDisplayedCurrencies(
          [...currencies].sort(
            (a, b) =>
              parseFloat(b.priceUSDT.replace(/,/g, "")) -
              parseFloat(a.priceUSDT.replace(/,/g, ""))
          )
        );
        break;
      case "cheapest":
        setDisplayedCurrencies(
          [...currencies].sort(
            (a, b) =>
              parseFloat(a.priceUSDT.replace(/,/g, "")) -
              parseFloat(b.priceUSDT.replace(/,/g, ""))
          )
        );
        break;
      case "mostGrowth":
        setDisplayedCurrencies(
          [...currencies]
            .filter((c) => !c.change.startsWith("-"))
            .sort((a, b) => parseFloat(b.change) - parseFloat(a.change))
        );
        break;
      case "mostLoss":
        setDisplayedCurrencies(
          [...currencies]
            .filter((c) => c.change.startsWith("-"))
            .sort((a, b) => parseFloat(a.change) - parseFloat(b.change))
        );
        break;
      case "newest":
        setDisplayedCurrencies(currencies);
        break;
      default:
        setDisplayedCurrencies(currencies);
    }
    setCurrentPage(1);
  };
  const filteredCurrencies = displayedCurrencies.filter(
    (currency) =>
      currency.name.includes(searchTerm) || currency.symbol.includes(searchTerm)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCurrencies = filteredCurrencies.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredCurrencies.length / itemsPerPage);

  return (
    <div className="bg-background dark:bg-[#3C3B41] shadow-lg rounded-xl overflow-hidden">
      {/* search */}
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#242428] px-4 py-3 text-[#FFFFFF80]">
        <div className="flex gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleFilterChange(option.key)}
              className={`px-3 py-1 rounded-lg text-sm ${
                activeFilter === option.key
                  ? "bg-yellow-400 text-white"
                  : "text-black dark:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="جستجو..."
            className="border border-gray-300 rounded-lg px-3 py-1 text-black dark:bg-[#3C3B41] dark:text-[#FFFFFF80]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border text-black bg-background rounded-lg px-2 py-1 dark:bg-[#3C3B41] dark:text-[#FFFFFF80]"
            >
              {[5, 10, 20, 50].map((size) => (
                <option
                  className="rounded-lg font-bold"
                  key={size}
                  value={size}
                >
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* table*/}
      <div className="p-4">
        <div className="grid grid-cols-6 rounded-2xl bg-[#F6F6F6] dark:bg-[#242428] text-center py-3 font-semibold border-gray-300">
          <div>تعداد</div>
          <div>قیمت به USDT</div>
          <div>قیمت به تومان</div>
          <div>تغییرات 24h</div>
          <div>نمودار 24h</div>
          <div>عملیات</div>
        </div>

        <div className="divide-y divide-gray-200">
          {paginatedCurrencies.map((currency, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center text-center py-4"
            >
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => toggleFavorite(currency.symbol)}
                  className={`text-2xl ${
                    favorites.includes(currency.symbol)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                >
                  <Star />
                </button>
                <span>{currency.icon}</span>
                <span>{currency.name}</span>
              </div>
              <div>{currency.priceUSDT} USDT</div>
              <div>{currency.priceIRR} تومان</div>
              <div
                className={`${
                  currency.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {currency.change.startsWith("-") ? "▼" : "▲"} {currency.change}%
              </div>
              <div className="flex justify-center">
                <Image src={ChartUP} alt="chart" width={64} height={31} />
              </div>
              <div>
                <Link href={`/coins/${currency.symbol}`}>
                  <button className="border-2 border-primary text-primary px-4 py-2 rounded-lg">
                    جزئیات بیشتر
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination*/}
      <div className="flex justify-center items-center gap-6 p-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`rounded-full p-2 ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-yellow-400 hover:bg-gray-100"
          }`}
        >
          <span className="material-icons">
            <ArrowRight />
          </span>
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm ${
                currentPage === page
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`rounded-full p-2 ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-yellow-400 hover:bg-gray-100"
          }`}
        >
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}
