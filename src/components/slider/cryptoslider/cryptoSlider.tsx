// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AvalancheIcon from "@/assets/icons/avalancheIcon";

// export default function BannerSlider() {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     vertical: true,
//     verticalSwiping: true,
//     appendDots: (dots: any) => (
//       <div
//         style={{
//           position: "absolute",
//           bottom: "5px",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <ul style={{ display: "flex", margin: "0" }}>{dots}</ul>
//       </div>
//     ),
//   };

//   return (
//     <div className="w-full  ">
//       <Slider {...settings}>
//         {/* page 1 */}
//         <div>
//           <div className="flex justify-between items-center ">
//             <div className="flex gap-7 mt-4 ">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="flex justify-between items-center  ">
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="flex justify-between items-center  ">
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                 <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-7 mt-4 pr-12 border-r-[3px] border-[#ADADAD80]">
//               <div>
//                 <div className="flex gap-2 pb-2">
//                   <span>تومان</span>
//                   <p>43,537,353 </p>
//                 </div>
//                 <p>% 1.37</p>
//               </div>
//               <div className="flex items-center gap-2 pb-2">
//                 <div className="">
//                   <p>آوالانچ</p>
//                   <p>AVAX</p>
//                 </div>
//                 <div>
//                   <AvalancheIcon/>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }
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

  const cards = [
    {
      id: 1,
      price: "43,537,353",
      percentage: "-1.37",
      name: "آوالانچ",
      symbol: "AVAX",
      Icon: AvalancheIcon,
    },
    {
      id: 2,
      price: "43,537,353",
      percentage: "1.37",
      name: "آوالانچ",
      symbol: "AVAX",
      Icon: AvalancheIcon,
    },
    {
      id: 3,
      price: "43,537,353",
      percentage: "1.37",
      name: "آوالانچ",
      symbol: "AVAX",
      Icon: AvalancheIcon,
    },
    {
      id: 4,
      price: "43,537,353",
      percentage: "1.37",
      name: "آوالانچ",
      symbol: "sui",
      Icon: AvalancheIcon,
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {[1, 2, 3].map((page) => (
          <div className="w-full" key={page}>
            <div className="flex justify-between flex-wrap text-[10px] lg:text-sm w-full ">
              {cards.map((card, index) => (
                <div key={index} className="flex justify-center gap-24 mt-4">
                  <div>
                    <div className="flex pb-2 gap-1 ">
                      <span>تومان</span>
                      <p>{card.price}</p>
                    </div>
                    <p
                      className={`${
                        parseFloat(card.percentage) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      % {card.percentage}
                    </p>
                  </div>
                  <div
                    className={`flex items-center dark:border- ${
                      (index + 1) % 4 !== 0
                        ? "border-r-[3px] border-[#ADADAD80] md:pr-5"
                        : "pr-0"
                    }`}
                  >
                    <div className="flex flex-col justify-center items-center ">
                      <p className="px-1 text-[12px]">{card.name}</p>
                      <p className="text-[12px]">{card.symbol}</p>
                    </div>
                    <div className="pl-1">
                      <card.Icon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
