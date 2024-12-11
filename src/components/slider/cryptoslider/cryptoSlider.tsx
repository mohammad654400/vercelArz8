"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvalancheIcon from "@/assets/icons/avalancheIcon";

export default function BannerSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ display: "flex", margin: "0" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full  ">
      <Slider {...settings}>
        {/* page 1 */}
        <div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center  ">
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center  ">
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                <AvalancheIcon/>
                </div>
              </div>
            </div>
            <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
              <div>
                <div className="flex gap-2 pb-2">
                  <span>تومان</span>
                  <p>43,537,353 </p>
                </div>
                <p>% 1.37</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <div className="">
                  <p>آوالانچ</p>
                  <p>AVAX</p>
                </div>
                <div>
                  <AvalancheIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AvalancheIcon from "@/assets/icons/avalancheIcon";

// export default function BannerSlider() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // شبیه‌سازی درخواست به یک API
//     const fetchData = async () => {
//       const response = [
//         {
//           price: "43,537,353",
//           percentage: "1.37",
//           name: "آوالانچ",
//           symbol: "AVAX",
//         },
//         {
//           price: "12,537,100",
//           percentage: "0.98",
//           name: "بیت‌کوین",
//           symbol: "BTC",
//         },
//         {
//           price: "9,237,453",
//           percentage: "2.45",
//           name: "اتریوم",
//           symbol: "ETH",
//         },
//         { price: "5,237,000", percentage: "0.67", name: "ریپل", symbol: "XRP" },
//         {
//           price: "3,987,200",
//           percentage: "1.75",
//           name: "کاردانو",
//           symbol: "ADA",
//         },
//         {
//           price: "7,123,900",
//           percentage: "1.25",
//           name: "دوج‌کوین",
//           symbol: "DOGE",
//         },
//       ];
//       setData(response);
//     };

//     fetchData();
//   }, []);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 4,
//     arrows: false,
//     vertical: true,
//     verticalSwiping: true,
//     responsive: [
//       {
//         breakpoint: 768, 
//         settings: {
//           slidesToShow: 2, 
//           slidesPerRow: 2, 
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8">
//       {data.length > 0 ? (
//         <Slider {...settings}>
//           {data.map((item, index) => (
//             <div key={index} className="p-2">
//               <div className="p-4 bg-white shadow-md rounded text-center border">
//                 <h3 className="text-lg font-bold">{item.name}</h3>
//                 <p className="text-sm text-gray-500">{item.symbol}</p>
//                 <p className="text-green-500">{item.price} تومان</p>
//                 <p className="text-xs text-gray-400">% {item.percentage}</p>
//                 <div className="flex justify-center items-center mt-2">
//                   <AvalancheIcon />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <p>در حال بارگذاری...</p>
//       )}
//     </div>
//   );
// }
