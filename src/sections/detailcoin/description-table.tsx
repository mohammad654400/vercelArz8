import React from 'react'

export default function DescriptionTable() {
  return (
         <div className=" grid grid-cols-1  text-right border rounded-xl p-6">
                {[
                  { title: "نام ارز", value: "بایننس کوین" },
                  { title: "نماد", value: "BNB" },
                  { title: "قیمت جهانی (دلار)", value: "$43,120.3" },
                  { title: "آخرین قیمت (تومان)", value: "2,237,949,713" },
                  {
                    title: "تغییرات روزانه (درصد)",
                    value: "0.45%",
                    color: "text-green-400",
                  },
                  { title: "حجم معاملات روزانه (دلار)", value: "42,928,015,128" },
                  { title: "رتبه در بازار", value: "1" },
                  { title: "ارزش بازار (دلار)", value: "844,932,708,457" },
                ].map((item, index) => (
                  <div key={index} className="w-full border-b-2 last:border-b-0">
                    <div className="flex justify-between py-6">
                      <p
                        key={`title-${index}`}
                        className="text-base font-semibold  text-#666668 dark:text-white"
                      >
    
                        {item.title}
    
                      </p>
                      <p
                        key={`value-${index}`}
                        className={`text-base font-semibold  text-#666668 dark:text-white ${item.color || ""
                          }`}
                      >
    
                        {item.value}
    
                      </p>
                    </div>
                  </div>
                ))}
              </div>
  )
}
