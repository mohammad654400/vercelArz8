'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import banner1 from "@/assets/images/secondbanner/1.png"
import banner2 from "@/assets/images/secondbanner/2.png"
import banner3 from "@/assets/images/secondbanner/3.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SecondBannerSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    appendDots: (dots:any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '3px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ display: 'flex', margin: '0' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto relative">
      <Slider {...settings}>
        <div className="p-4 flex items-center justify-center ">
          <Image alt="banner" src={banner1} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="banner" src={banner2} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="banner" src={banner3} />
        </div>
        <div className="p-4 flex items-center justify-center ">
          <Image alt="banner" src={banner1} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="banner" src={banner2} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="banner" src={banner3} />
        </div>
      </Slider>
    </div>
  );
}
