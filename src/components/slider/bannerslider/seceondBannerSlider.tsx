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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots:any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-15px',
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
    <div className="w-full px-4 md:px-0">
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {[banner1, banner2, banner3, banner1, banner2, banner3].map((banner, index) => (
            <div key={index} className="p-2">
              <div className="w-full">
                <Image 
                  alt={`banner ${index + 1}`}
                  src={banner}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}