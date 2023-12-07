import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/';
import React from 'react';

import useBreakpoint from '../../lib/useBreakpoint';

SwiperCore.use([Navigation, Pagination]);

export default function () {
  const size = useBreakpoint();
  return (
    <Swiper
      className={`img-swiper ${size}`}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <video muted autoPlay loop playsInline>
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/img.JPEG"></img>
      </SwiperSlide>
    </Swiper>
  );
}
