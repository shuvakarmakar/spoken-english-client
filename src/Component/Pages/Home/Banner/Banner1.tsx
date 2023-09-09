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
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.istockphoto.com/id/1419580307/photo/students-walking-on-the-university-campus.jpg?s=612x612&w=0&k=20&c=DPTfhcehBeiINfFiEIaldBhjqn4Isf8p1d_twUJRVkk=
"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
          </SwiperSlide>
        </Swiper>

        <div className=" absolute banner-bg w-full top-1/2 -translate-y-1/2 z-10 h-full">
          <div className="md:flex top-1/2 -translate-y-1/2 absolute justify-center items-center  h-full md:px-[5%]">
            {/* Left side with text */}
            <div className="w-full text-white md:py-16 py-5 p-2">
              <h1 className="text-2xl md:text-7xl font-bold mb-0 md:mb-6 md:leading-snug leading-8 md:text-center md:mt-[-50px] font-serif  ">
                {t('banner1.title')}
              </h1>
              <h3 className="mb-4 md:mb-6 text-center  font-mono md:font-bold leading-7 md:mt-5 hidden md:flex  justify-center">
                {t('banner1.description')}
              </h3>
              <div className="md:flex justify-center mt-7 items-center md:mt-20">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <Link
                    to="/freelivelessons"
                    className="relative md:px-20 px-4 py-2.5 transition-all ease-in duration-75 uppercase text-white rounded-md group-hover:bg-opacity-0"
                  >
                    {t('banner1.buttonText')}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Banner1;
