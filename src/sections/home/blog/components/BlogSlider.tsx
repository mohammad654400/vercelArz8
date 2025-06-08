"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import BlogCard from "./BlogCard";
import LongArrow from "@/assets/icons/arrrow/long-arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BlogSliderProps {
  blogs: Array<{ title: string; link: string; thumbnail: string }>;
}

export default function BlogSlider({ blogs }: BlogSliderProps) {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1285, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings} className="ml-14">
        {blogs.map((blog, index) => (
          <div key={index} className="w-full h-full px-2 flex items-stretch justify-center">
            <BlogCard title={blog.title} link={blog.link} imageUrl={blog.thumbnail} />
          </div>
        ))}
      </Slider>
      <button
        aria-label="مشاهده اسلاید بعدی بلاگ"
        className="absolute top-20 -left-0 md:-left-8 w-[37px] h-[37px] text-foreground cursor-pointer"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <LongArrow />
      </button>
    </div>
  );
}
