"use client";
import React, { useEffect, useState } from "react";
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
  const [numberItem, setNumberItem] = useState(false)
  const [filterKey, setFilterKey] = useState("")
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
      <div className="flex justify-between items-center bg-[#F6F6F6] dark:bg-[#242428] px-2 py-3 text-[#FFFFFF80]">
        <div className="relative block md:hidden">

          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center px-2 py-2 bg-primary text-white rounded-xl"
          >
            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">مورد علاقه</span>
            <span className="w-[9.4px] h-[9.4px] sm:w-4 sm:h-4 text-white mr-1"><ArrowDown /></span>
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
                  className={`flex w-[250px] justify-end flex-col mr-5 gap-4  px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold  mt-3 text-foreground focus:bg-[#FFF6DD] focus:text-black`}
                >
                  {option.label}
                </button>
              ))}
              <button onClick={() => (handleFilterChange(filterKey), setOpen(false))} className=" flex py-2 mt-7 px-24 rounded-lg bg-primary mx-auto text-white">
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
              className={`px-3 py-1 rounded-lg text-sm ${activeFilter === option.key
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
            className=" outline-none rounded-lg w-[165px] md:w-[250px] px-3 py-1 text-black dark:bg-[#3C3B41] dark:text-[#FFFFFF80] placeholder:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />


          <div className="relative cursor-pointer  text-black bg-background rounded-lg   py-1 dark:bg-[#3C3B41] dark:text-[#FFFFFF80] w-9 md:w-[54px]">
            <div onClick={() => (setNumberItem(!numberItem))} className="flex gap-1 items-center justify-center h-full">
              <span className="flex w-[9.4px] h-[9.4px] sm:w-[14px] sm:h-[14px] text-black self-center"><ArrowDown /></span> <span className="flex text-[10px] sm:text-lg">{itemsPerPage}</span>
            </div>
            {numberItem ?
              <div className="flex flex-col gap-1 md:gap-2 top-[35px] cursor-pointer -right-[9px] md::-right-[1px] py-2 border w-10 md:w-[57px] bg-background rounded-xl absolute ">
                {[5, 10, 20, 50].map((item) => (
                  <p
                    onClick={() => (setItemsPerPage(item), setNumberItem(false))}
                    className="mx-auto rounded-lg font-normal  "
                  >
                    {item}
                  </p>
                ))}
              </div>
              : ""
            }
          </div>
        </div>
      </div>

      {/* table*/}
      {displayedCurrencies ? (
        <div className="p-4">
          <div className="grid grid-cols-6 text-[10px] rounded-2xl bg-[#F6F6F6] dark:bg-[#242428] text-center justify-center py-3 font-semibold border-gray-300 items-center">
            <span className="text-[7.3px] font-semibold md:text-xs col-span-2 md:col-span-1">نماد</span>
            <span className="hidden md:block">قیمت به USDT</span>
            <div className="flex text-center items-center justify-center text-[7.3px] font-semibold md:text-xs  whitespace-nowrap col-span-2 md:col-span-1">
              قیمت به تومان <span className="block md:hidden text-[7.3px] font-semibold md:text-xs  ">/USDT</span>
            </div>
            <span className="text-[7.3px] font-semibold md:text-xs">تغییرات 24h</span>
            <span className="hidden md:block text-[7.3px] font-semibold md:text-xs ">نمودار 24h</span>
            <span className="text-[7.3px] font-semibold md:text-xs">عملیات</span>
          </div>

          <div className="divide-y divide-gray-200 text-[10px] md:text-sm">
            {paginatedCurrencies.map((currency, index) => (
              <div
                key={index}
                className={`grid ${currency.priceUSDT && currency.priceIRR ? "grid-cols-6 md:grid-cols-6" : "grid-cols-6 md:grid-cols-4"
                  } items-center text-center py-4`}
              >
                {/* ستون 1: اطلاعات اصلی (ستاره، آیکون، نام) */}
                <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
                  <button
                    onClick={() => toggleFavorite(currency.symbol)}
                    className="text-2xl" 
                  >
                    <div className="sm:w-6 sm:h-6 w-[10px] h-[10px]">
                      <Star
                        borderColor={favorites.includes(currency.symbol) ? "none" : "currentColor"}
                        backgroundColor={favorites.includes(currency.symbol) ? "#FFC107" : "none"}
                      />
                    </div>

                  </button>
                  <div className="min-h-6 min-w-6 w-6 h-6 md:h-11 md:w-11">{currency.icon}</div>
                  <div className="flex flex-col gap-y-[2px]">
                    <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold">{currency.name}</span>
                    <span className="text-start whitespace-nowrap sm:text-base text-[10px] sm:font-semibold opacity-50">{currency.symbol}</span>
                  </div>

                </div>

                {/* ستون 2: قیمت برای نمایشگر کوچک */}
                <div className="md:col-span-0 md:hidden w-full col-span-2 md:col-span-1 flex flex-col items-end pl-3 ">
                  <div className="text-end sm:text-center">{currency.priceUSDT} $</div>
                  <div className="text-end sm:text-center">{currency.priceIRR} تومان</div>
                </div>

                {/* ستون 3: قیمت برای نمایشگر متوسط و بزرگ */}
                {currency.priceUSDT && (
                  <div className="col-span-0 hidden md:block md:col-span-1 text-center">{currency.priceUSDT} USDT</div>
                )}
                {currency.priceIRR && (
                  <div className="col-span-0 hidden md:block md:col-span-1 text-center">{currency.priceIRR} تومان</div>
                )}

                {/* ستون 4: تغییر قیمت */}
                <div
                  className={`text-center  ${currency.change.startsWith("-") ? "text-red-500" : "text-green-500"
                    }`}
                >
                  {currency.change}%
                </div>

                {/* ستون 5: نمودار (فقط برای نمایشگر متوسط و بزرگ) */}
                <div className="hidden md:flex justify-center">
                  <Image src={ChartUP} alt="chart" width={64} height={31} />
                </div>

                {/* ستون 6: جزئیات بیشتر */}
                <div>
                  <Link href={`/coins/${currency.symbol}`}>
                    <button className="border border-primary text-primary px-1 md:px-4 md:text-sm py-2 text-[7px] min-[461px]:text-[10px] rounded-[5.22px] md:rounded-lg  ">
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
      <div className="flex justify-center items-center gap-3 sm:gap-6 p-4">
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}

          className={`w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center sm:rounded-[15px] rounded-[7px] p-2 bg-secondary `}
        >
          <div className="sm:w-6 sm:h-6 w-3 h-3">
            <ArrowRight />
          </div>
        </button>

        <div className="flex items-center gap-2 " style={{ direction: "ltr" }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-6 h-6 sm:w-12 sm:h-12 flex justify-center items-center text-center rounded-lg sm:rounded-[15px]  text-base sm:text-[27px] font-semibold ${currentPage === page
                ? "bg-yellow-400 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center sm:rounded-[15px] rounded-[7px] p-2 bg-secondary`}
        >
          <div className="sm:w-6 sm:h-6 w-3 h-3">
            <ArrowLeft />
          </div>
        </button>
      </div>
    </div>
  );
}
