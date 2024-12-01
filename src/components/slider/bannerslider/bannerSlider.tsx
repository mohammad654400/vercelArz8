'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import banner from '@/assets/images/banner.png';
import laptop from '@/assets/images/slider/laptop.png';
import cash from '@/assets/images/slider/cash.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BannerSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="w-72 max-w-screen-lg mx-auto relative">
      <Slider {...settings}>
        <div className="p-4 flex items-center justify-center ">
          <Image alt="banner" src={cash} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="cash" src={cash} />
        </div>
        <div className="p-4 flex items-center justify-center">
          <Image alt="laptop" src={laptop} />
        </div>
      </Slider>
    </div>
  );
}
