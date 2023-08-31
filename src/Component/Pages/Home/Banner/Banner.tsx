// Import necessary modules from Swiper
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import AOS from "aos";
import "./Banner.css";
// import banner2 from "../../../../assets/banner2.jpg";
// import banner1 from "../../../../assets/banner1.jpg";
// import banner3 from "../../../../assets/banner3.jpg";
import { Autoplay } from "swiper/modules";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";

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
        <SwiperSlide>
          {" "}
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner1 />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
