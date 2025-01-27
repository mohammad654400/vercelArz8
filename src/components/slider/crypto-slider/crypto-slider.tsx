
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
                <div
                  key={index}
                  className="flex justify-center gap-8 md:gap-24 mt-4"
                >
                   <div className="flex flex-col justify-center ">
                    <div className="flex pb-1 gap-1 text-[10] md:text-[13.5px] font-semibold ">
                      <span>تومان</span>
                      <p>{card.price}</p>
                    </div>
                    <p
                      className={`${
                        parseFloat(card.percentage) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      } text-[10px]  md:text-[11px] font-semibold `}
                    >
                      % {card.percentage}
                    </p>
                  </div>
                  <div
                    className={`flex items-center dark:border-10 ${
                      (index + 1) % 4 !== 0
                        ? "md:border-r-[3px] md:border-[#ADADAD80] md:pr-5"
                        : "pr-0"
                    }
                      ${
                        (index + 1) % 2 !== 0
                          ? "border-r-[3px] border-[#ADADAD80] pr-4"
                          : "pr-0"
                      }
                    `}
                  >
                    <div className="flex flex-col justify-center items-end mr-1 md:mr-2">
                      <p className="text-[10px] md:text-[12px] pb-1">{card.name}</p>
                      <p className="text-[10px] md:text-[12px] opacity-50">{card.symbol}</p>
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] object-cover">
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
