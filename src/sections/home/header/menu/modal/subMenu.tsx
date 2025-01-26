import BitCoin from "@/assets/icons/bitcoin";
import HalfCircle from "@/assets/icons/halfCircle";
import Search from "@/assets/icons/search";
import React from "react";
import CryptoTable from "./cryptoTable";
import Link from "next/link";

export default function SubMenu() {
  return (
    <div className="z-50 relative flex w-auto h-[480px] bg-fifth dark:bg-secondary  rounded-2xl shadow-lg">
      <div className="text-fifth dark:text-secondary  absolute right-16 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <div className="w-[250px] flex flex-col border-l border-[#ADADAD80] pt-5 pb-5 px-5 ">
        <div className="mb-5 px-10 py-2 text-white bg-[#242428] rounded-[5px] dark:bg-[#3C3B4180] text-sm font-semibold text-center">
          جدید ترین ارزها
        </div>

        {[
          { title: "خرید بیتکوین",symbol:"BTN", icon: <BitCoin /> },
          { title: "خرید شیبا",symbol:"SHIB", icon: <BitCoin /> },
          { title: "خرید بایننس کوین",symbol:"BTN", icon: <BitCoin /> },
          { title: "خرید اتریوم",symbol:"ETH", icon: <BitCoin /> },
          { title: "خرید آوالانچ",symbol:"AVAX", icon: <BitCoin /> },
          { title: "خرید ترون",symbol:"TRX", icon: <BitCoin /> },
          { title: "خرید بیتکوین",symbol:"BTN", icon: <BitCoin /> },
        ].map((item, index) => (
          <Link href={`/coins/${item.symbol}`} key={`coin-${index}`}>
          <div
          
            className="flex justify-start gap-x-3 mb-4 px-4 py-1 rounded-[5px] hover:bg-[#F6F6F6] dark:hover:bg-gray-600"
          >
            <div className="w-5 h-5">{item.icon}</div>
            <span className="text-sm font-semibold"> {item.title}</span>
          </div>
          </Link>
        ))}
        <Link href='/coins'>
          <div className="flex justify-center px-4 rounded-[10px] bg-[#D2D2D240] dark:bg-[#3C3B4180] text-sm font-bold py-2">
            همه ارز ها
          </div>
        </Link>
        <div className="mt-[10px] flex justify-center  px-4 rounded-[10px] text text-foreground bg-primary text-sm font-bold py-2">
          خرید و فروش سریع
        </div>
      </div>
      <div className="relative px-4 py-5 w-[400px]">
        <div className="flex justify-center items-center bg-primary absolute left-5 top-[25px] rounded-lg w-8 h-8 ">
          <div className="w-5 h-8 text-white">
            <Search />
          </div>
        </div>
        <CryptoTable />
      </div>
    </div>
  );
}
