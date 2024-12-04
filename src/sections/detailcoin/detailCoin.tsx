"use client";
import BNB from "@/assets/icons/bnb";
import SendIcon from "@/assets/icons/detailcoin/send";
import Star from "@/assets/icons/star";
import { usePathname } from "next/navigation";
import React from "react";
import TransAction from "../home/transaction/transaction";
import DetailDescription from "./description";
import Category from "../coin/category";
import QuickGuide from "../home/quickguide/quickGuide";
const data = [
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
  {
    price: "43,537,353",
    percentage: "% 1.37",
    name: "AVAX",
    Persian: "آوالانچ",
    icon: <BNB />,
  },
];
const coin = {
  name: "بایننس کوین",
  symbol: "BNB",
  priceIRR: "43,537,353",
  priceUSDT: "626.25",
  change: "1.37",
  chart: "up",
  icon: <BNB />,
};

export default function DetailCoin() {
  const route = usePathname().split("/")[1];
  return (
    <div className="w-full bg-background px-[120px] py-[30px]">
      <div className="w-full flex justify-between items-center mb-6">
        <div className="flex justify-between w-[60%] bg-secondary py-4 px-4 rounded-lg">
          <div className="flex">
            {coin.icon}
            <div className="ml-4">
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="dir_ltr">
              <p>{coin.priceUSDT}</p>
              <p>{coin.priceIRR}</p>
            </div>
            <div className="px-5 py-3 bg-background rounded-lg dark:bg-[#302F34]">
              {coin.change}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 w-[40%] justify-end">
          <div className="flex items-center gap-4 bg-secondary py-3 px-3 rounded-lg">
            <SendIcon />
            <Star />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-6 mb-6">
        <div className="w-[60%] h-[300px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.tradingview-widget.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22KRAKEN%3AUSDTUSD%7C1Y%22%5D%5D%2C%22chartOnly%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22locale%22%3A%22en%22%2C%22timezone%22%3A%22Asia%2FTehran%22%2C%22colorTheme%22%3A%22dark%22%2C%22autosize%22%3Atrue%2C%22showVolume%22%3Afalse%2C%22showMA%22%3Afalse%2C%22hideDateRanges%22%3Afalse%2C%22hideMarketStatus%22%3Afalse%2C%22hideSymbolLogo%22%3Afalse%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22noTimeScale%22%3Afalse%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22chartType%22%3A%22area%22%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22lineWidth%22%3A2%2C%22lineType%22%3A0%2C%22isTransparent%22%3Atrue%2C%22dateRanges%22%3A%5B%221d%7C15%22%2C%221m%7C30%22%2C%223m%7C60%22%2C%2212m%7C1D%22%2C%2260m%7C1W%22%2C%22all%7C1M%22%5D%2C%22lineColor%22%3A%22%230072FF%22%2C%22topColor%22%3A%22rgba(0%2C%20114%2C%20255%2C%200.2)%22%2C%22bottomColor%22%3A%22rgba(0%2C%20114%2C%20255%2C%200)%22%7D"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[40%] border-2 rounded-lg p-4">
          <TransAction />
        </div>
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-[60%] bg-white dark:bg-secondary rounded-xl border-2 p-6">
          <h2 className="text-lg font-bold mb-6 dark:text-background">
            قیمت لحظه‌ای بایننس کوین
          </h2>
          <table className="w-full border-collapse text-right">
            <thead>
              <tr className="border-b dark:border-background">
                <th className="py-4 px-2 text-sm font-medium text-gray-600 dark:text-background">
                  تغییرات
                </th>
                <th className="py-4 px-2 text-sm font-medium text-gray-600 dark:text-background">
                  مقدار
                </th>
                <th className="py-4 px-2 text-sm font-medium text-gray-600 dark:text-background">
                  درصد
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  period: "یک ساعت",
                  value: "$174.4",
                  change: "%2",
                  color: "text-green-600",
                },
                {
                  period: "24 ساعت گذشته",
                  value: "$1724.4",
                  change: "%8",
                  color: "text-green-600",
                },
                {
                  period: "30 روز گذشته",
                  value: "$1824.4",
                  change: "%15",
                  color: "text-green-600",
                },
                {
                  period: "60 روز گذشته",
                  value: "$1724.4",
                  change: "%20",
                  color: "text-green-600",
                },
                {
                  period: "90 روز گذشته",
                  value: "$1824.4",
                  change: "%28",
                  color: "text-green-600",
                },
              ].map((item, index) => (
                <tr key={index} className="border-b dark:border-background">
                  <td className="py-3 px-2 text-sm text-gray-700">
                    {item.period}
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-700 ">
                    {item.value}
                  </td>
                  <td className={`py-3 px-2 text-sm ${item.color}`}>
                    {item.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-[40%] bg-white dark:bg-secondary rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-center mb-6 dark:text-background">
            بایننس کوین
          </h2>
          <div className="grid grid-cols-2 gap-4 text-right">
            {[
              { title: "نام ارز", value: "بایننس کوین" },
              { title: "نماد", value: "BNB" },
              { title: "قیمت جهانی (دلار)", value: "$43,120.3" },
              { title: "آخرین قیمت (تومان)", value: "2,237,949,713" },
              {
                title: "تغییرات روزانه (درصد)",
                value: "0.45%",
                color: "text-green-500 dark:text-green-400",
              },
              { title: "حجم معاملات روزانه (دلار)", value: "42,928,015,128" },
              { title: "رتبه در بازار", value: "1" },
              { title: "ارزش بازار (دلار)", value: "844,932,708,457" },
            ].map((item, index) => (
              <div className="w-full border-b-2">
                <div>
                  <p
                    key={`title-${index}`}
                    className="font-medium text-gray-700 dark:text-background "
                  >
                    {item.title}
                  </p>
                  <p
                    key={`value-${index}`}
                    className={`text-gray-600 dark:text-background ${
                      item.color || ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[60%]">
          <DetailDescription />
        </div>
        <div className="w-[40%]">
          <div className="py-[30px] ">
            <div className="w-full rounded-2xl  bg-[#F6F6F6] dark:bg-[#242428] p-6 ">
              <div>
                <h1>جدید ترین ارز های ما</h1>
              </div>
              {data.map((item, index) => (
                <div key={index} className="border-b-2 border-gray-200 ">
                  <div>
                    <div className="flex justify-between gap-7 mt-4">
                      <div className="flex items-center gap-2 pb-2">
                        <div>
                          <BNB />
                        </div>
                        <div className="">
                          <p>{item.Persian}</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex  gap-2 pb-2">
                          <span>تومان</span>
                          <p>{item.price} </p>
                        </div>
                        <div className="w-full flex justify-end">
                          <p>{item.percentage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[60px]"></div>
      </div>
    </div>
  );
}
