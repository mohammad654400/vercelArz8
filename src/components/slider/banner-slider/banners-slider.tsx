"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import laptop from "@/assets/images/slider/laptop.png";
import cash from "@/assets/images/slider/cash.png";
import wheel from "@/assets/images/slider/wheeel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    initialSlide: 0,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-36px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ display: "flex", gap: "6px", padding: 0, margin: 0 }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: i === currentSlide ? "#FFC107" : "#E0E0E0",
          transition: "background 0.3s ease",
        }}
      ></div>
    ),
  };

  const slides = [
    {
      image: wheel,
      title: "گردونه شانس",
      subtitle: "هر روز یک شانس برای برنده شدن",
    },
    {
      image: laptop,
      title: "کسب درآمد",
      subtitle: "با دعوت دوستانتان بخشی از کامزد",
    },
    {
      image: cash,
      title: "حفاظت از دارایی ها",
      subtitle: "هر روز یک شانس برای برنده شدن",
    },
  ];

  return (
    <div className="w-[281px] h-[337px] lg:w-80 max-w-screen-lg mx-auto relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-[290px]">
            <Image
              alt={slide.title}
              src={slide.image}
              width={290}
              height={242}
              quality={100}
              priority={index === 0}
              sizes="(max-width: 768px) 290px, 100vw"
              className="object-contain w-full h-auto"
            />
            <div className="flex flex-col text-center">
              <h4 className="mt-2 text-[23px] font-bold">{slide.title}</h4>
              <p className="text-[16px] pt-2 opacity-50">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
