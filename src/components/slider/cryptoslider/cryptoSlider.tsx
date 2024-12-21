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
    { price: "43,537,353", percentage: "1.37", name: "آوالانچ", symbol: "AVAX", Icon: AvalancheIcon },
    { price: "43,537,353", percentage: "1.37", name: "آوالانچ", symbol: "AVAX", Icon: AvalancheIcon },
    { price: "43,537,353", percentage: "1.37", name: "آوالانچ", symbol: "AVAX", Icon: AvalancheIcon },
    { price: "43,537,353", percentage: "1.37", name: "آوالانچ", symbol: "AVAX", Icon: AvalancheIcon },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {[1, 2, 3].map((page) => (
          <div key={page}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[10px] lg:text-sm">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className='flex justify-center mt-4'
                >
                  <div>
                    <div className="flex gap-4 pb-2 ">
                      <span>تومان</span>  
                      <p>{card.price}</p>
                    </div>
                    <p>% {card.percentage}</p>
                  </div>
                  <div className="flex items-center gap-2 pb-2">
                    <div className="flex flex-col justify-center items-center gap-2 ">
                      <p className="px-1">{card.name}</p>
                      <p>{card.symbol}</p>
                    </div>
                    <div>
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
