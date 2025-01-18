"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import BNB from "@/assets/icons/bnb";
import ChartUP from "@/assets/images/chartup.png";
import ArrowLeft from "@/assets/icons/arrrow/arrowLeft";
import ArrowRight from "@/assets/icons/arrrow/arrowRight";
import Star from "@/assets/icons/star";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import HalfCircle from "@/assets/icons/halfCircle";

const currencies = [
  {
    name: "بایننس کوین",
    symbol: "FTM",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "LINK",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "FLOKI",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "BIT",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "SUI",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
  {
    name: "بایننس کوین",
    symbol: "TRX",
    priceIRR: "43,537,353",
    priceUSDT: "626.25",
    change: "1.37",
    chart: "up",
    icon: <BNB />,
    popular: true,
  },
];

const filterOptions = [
  { label: "مورد علاقه ", key: "favorites" },
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
  const [open, setOpen] = useState(false);
  const [numberItem,setNumberItem] = useState(false)
  const [filterKey,setFilterKey] = useState("")
  // handler
  const toggleFavorite = (symbol: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(symbol)
        ? prevFavorites.filter((fav) => fav !== symbol)
        : [...prevFavorites, symbol];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    setFavorites(favorites ? JSON.parse(favorites) : []);
  }, []);

  const handleFilterChange = (filterKey: any) => {
    setActiveFilter(filterKey);

    switch (filterKey) {
      case "favorites":
        const favorites = localStorage.getItem("favorites");
        setDisplayedCurrencies(
          favorites
            ? currencies.filter((currency) =>
                favorites.includes(currency.symbol)
              )
            : []
        );
        break;
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
    <div className=" bg-background dark:bg-[#3C3B41] shadow-lg rounded-xl overflow-hidden">
      {/* search */}
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#242428] px-4 py-3 text-[#FFFFFF80]">
        <div className="relative block md:hidden">
         
          <button
            onClick={() => setOpen(!open)}
            className="flex  text-sm justify-center items-center w-[110px] h-9 bg-primary text-white rounded-xl"
          >
            مورد علاقه{" "}
            <span className="w-[20px] text-white mr-2"><ArrowDown/></span>
          </button>
          {open && (
            
            <div className="fixed top-48 w-[300px] h-[439px] bg-background shadow-md border rounded-2xl pt-2 z-20 ">
               <div className="absolute -top-[11px] right-12 md:right-8 lg:right-8 text-background dark:text-background">
                  <HalfCircle />
               </div>
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilterKey(option.key)}
                  className={`flex w-[250px] justify-end flex-col mr-5 gap-4  px-3 py-2 rounded-lg text-sm  mt-3 text-foreground focus:bg-[#FFF6DD] focus:text-black`}
                >
                  {option.label}
                </button>
              ))}
              <button onClick={() => (handleFilterChange(filterKey),setOpen(false)) } className=" flex py-3 mt-7 px-20 rounded-lg bg-primary mx-auto text-white">
                اعمال فیلتر
              </button>
            </div>
          )}
          <div className="absolute bg-black "></div>
        </div>
        <div className="hidden md:flex gap-3">
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
            className="border border-gray-300 outline-none rounded-lg w-[165px] md:w-[250px] px-3 py-1 text-black dark:bg-[#3C3B41] dark:text-[#FFFFFF80] placeholder:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />


          <div className="relative cursor-pointer border text-black bg-background rounded-lg px-2 py-1 dark:bg-[#3C3B41] dark:text-[#FFFFFF80] w-14">
            <div onClick={()=>(setNumberItem(!numberItem))} className="flex gap-1 items-center">
             <span className="w-[14px] text-black"><ArrowDown/></span> {itemsPerPage} 
            </div>
             {numberItem?
            <div className="flex flex-col gap-2 top-[35px] cursor-pointer -right-[1px] py-2 border w-[57px] bg-background rounded-xl absolute">
              {[5, 10, 20, 50].map((item) => (
                <p
                  onClick={() =>( setItemsPerPage(item) ,setNumberItem(false))}
                  className="mx-auto rounded-lg font-bold "
                >
                  {item}
                </p>
              ))}
            </div>
            :""
            }
          </div>
        </div>
      </div>

      {/* table*/}
      {displayedCurrencies ? (
        <div className="p-4">
          <div className="grid grid-cols-4 md:grid-cols-6 text-[10px] rounded-2xl bg-[#F6F6F6] dark:bg-[#242428] text-center py-3 font-semibold border-gray-300">
            <div>نماد</div>
            <div className="hidden md:block">قیمت به USDT</div>
            <div className="">
              قیمت به تومان <span className="block md:hidden">/USDT</span>
            </div>
            <div>تغییرات 24h</div>
            <div className="hidden md:block">نمودار 24h</div>
            <div>عملیات</div>
          </div>

          <div className="divide-y divide-gray-200 text-[10px] md:text-sm">
            {paginatedCurrencies.map((currency, index) => (
              <div
                key={index}
                className="grid grid-cols-5 md:grid-cols-6 items-center text-center py-4"
              >
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => toggleFavorite(currency.symbol)}
                    className={`text-2xl ${
                      favorites.includes(currency.symbol)
                        ? "text-yellow-400"
                        : "text-secondary"
                    }`}
                  >
                    <Star />
                  </button>
                  <div className="w-11 h-11">
                    <span>{currency.icon}</span>
                  </div>
                  <span>{currency.name}</span>
                </div>

                <div className="md:col-span-0 md:hidden w-full mr-10 md:mr-0">
                  <div className="">{currency.priceUSDT} $</div>
                  <div className="">{currency.priceIRR} تومان</div>
                </div>

                <div className="col-span-0 hidden md:block md:col-span-1">{currency.priceUSDT} USDT</div>
                <div className="col-span-0 hidden md:block md:col-span-1">{currency.priceIRR} تومان</div>

                <div className=" md:col-span-0 md:hidden"></div>

                <div
                  className={`ml-12 md:ml-0 ${
                    currency.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {currency.change}%
                </div>

                <div className="hidden md:flex justify-center">
                  <Image src={ChartUP} alt="chart" width={64} height={31} />
                </div>

                <div>
                  <Link href={`/coins/${currency.symbol}`}>
                    <button className="border-2 border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[10px] rounded-lg">
                      جزئیات بیشتر
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "هیچ اطلاعاتی یافت نشد"
      )}

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
