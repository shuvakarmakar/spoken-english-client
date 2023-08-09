// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
// Import Swiper styles
import "swiper/css";
import "./Banner.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
