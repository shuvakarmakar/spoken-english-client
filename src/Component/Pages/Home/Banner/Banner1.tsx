import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flip, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';

const Banner1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className="mySwiper md:h-[650px] "
        >
          <SwiperSlide>
            <img src="https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
              <div className="text-white text-center space-y-7">
                <Slide direction='left'>
                  <h2 className="text-2xl md:text-7xl font-bold mb-0 md:mb-6 md:leading-snug leading-8 md:text-center md:mt-[-50px] font-serif text-white">{t('banner1.title')}</h2>
                </Slide>
                <Slide direction='right'>
                  <p>{t('banner1.description')}</p>
                </Slide>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
              <div className="text-white text-center space-y-7">
                <Flip direction='horizontal'>
                  <h2 className="text-2xl md:text-7xl font-bold mb-0 md:mb-6 md:leading-snug leading-8 md:text-center md:mt-[-50px] font-serif text-white">{t('banner2.title')}</h2>
                </Flip>
                <Flip direction='horizontal'>
                  <p>{t('banner2.description')}</p>
                </Flip>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-transparent">
              <div className="text-white text-center space-y-7">
                <Zoom direction='up'>
                  <h2 className="text-2xl md:text-7xl font-bold mb-0 md:mb-6 md:leading-snug leading-8 md:text-center md:mt-[-50px] font-serif text-white">{t('banner3.title')}</h2>
                </Zoom>
                <Zoom direction='left'>
                  <p>{t('banner3.description')}</p>
                </Zoom>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};


export default Banner1;
