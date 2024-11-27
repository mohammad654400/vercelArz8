'use client';
import Image from 'next/image';
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import banner from '@/assets/images/banner.png';
import styles from './banner.module.css';

export default function BannerSlider() {
  return (
    <div className="w-72 max-w-screen-lg mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletElement: 'button',
          bulletClass: `${styles.customBullet}`,
          bulletActiveClass: `${styles.customBulletActive}`,
          renderBullet: (index, className) => {
            return `<button class="${className}">
              <span class="${styles.bulletNumber}"></span>
            </button>`;
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        direction={'horizontal'}
      >
        <SwiperSlide>
          <div className="p-4 flex items-center justify-center ">
            <Image alt="banner" src={banner}  />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 flex items-center justify-center">
            <Image alt="banner" src={banner} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 flex items-center justify-center">
            <Image alt="banner" src={banner} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
