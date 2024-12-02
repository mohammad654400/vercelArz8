import BNB from "@/assets/icons/bnb";
import React from "react";
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
export default function Category() {
  return (
    <div className="py-[30px] px-8">
      <div className="w-[350px] rounded-2xl  bg-[#F6F6F6] p-6 ">
        <div>
          <h1>جدید ترین ارز های ما</h1>
        </div>
        {data.map((item, index) => (
          <div key={index} className="border-b-2 border-gray-200">
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
  );
}
