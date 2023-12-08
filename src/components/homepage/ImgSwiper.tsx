/*
 * @version: 1.0
 * @author: fengziwei
 * @creatTime: 2023-12-06
 * @updateTime: 2023-12-08
 * @lastEditors: fengziwei
 * @Description :
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import React, { useEffect, useState } from 'react';

import useBreakpoint from '../../lib/useBreakpoint';

SwiperCore.use([Navigation, Pagination]);

export default function () {
  const size = useBreakpoint();
  const [iframeHeight, setIframeHeight] = useState(450);
  useEffect(() => {
    setTimeout(() => {
      const width = document.querySelector('.img-swiper')
        ? document.querySelector('.img-swiper')?.getBoundingClientRect().width
        : 0;
      setIframeHeight(width / 2);
    }, 500);
  }, []);
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
        <iframe
          width={'100%'}
          height={iframeHeight}
          src="https://www.youtube.com/embed/2kRsJYGFiEw?si=hXC1xpHi9GJHUsoX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* <video muted autoPlay loop playsInline>
          <source src="/img/video.mp4" type="video/mp4" />
        </video> */}
      </SwiperSlide>
      <SwiperSlide>
        <iframe
          width={'100%'}
          height={iframeHeight}
          src="https://www.youtube.com/embed/M7XlIe8hhPk"
          title="Introducing LAMM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/img.JPEG"></img>
      </SwiperSlide>
    </Swiper>
  );
}
