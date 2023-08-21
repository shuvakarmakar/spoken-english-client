// Import necessary modules from Swiper
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import banner2 from "../../assets/banner2.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner3 from "../../assets/banner3.jpg";
import { Autoplay } from "swiper/modules";

const Banner: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]} // Add modules
        cssMode={true}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Set to true to stop autoplay when user interacts with slider
        }}
        keyboard={true}
        data-aos="zoom-in-up"
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
        <SwiperSlide
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${banner3})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
