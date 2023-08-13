// Import necessary modules from Swiper
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";
import banner2 from "../../assets/banner2.jpg";
import banner1 from "../../assets/banner1.jpg";

const Banner: React.FC = () => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Pagination, Mousewheel, Keyboard]} // Add modules
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
    >
      <SwiperSlide
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner2})`,
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
        }}
      ></SwiperSlide>
      <SwiperSlide
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner1})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></SwiperSlide>
    </Swiper>
  );
};

export default Banner;
