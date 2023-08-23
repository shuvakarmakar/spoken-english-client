import React from 'react';
import useUser from '../../Hooks/useUser';
import Spinner from '../Pages/Spinner/Spinner';
import UserProfileCard from './UserProfleCard/UserProfileCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './Swiper.css'
import "swiper/css";
import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";
const PTPCommunication = () => {
  const [users, loading ]= useUser();
 
  // const Student = users.filter((user) => user.Roll=="student");

  return (
    <div className="container mx-auto p-10">
      <div className="slid my-[20px] bg-white ">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {users.map((student) => {
            return (
              <SwiperSlide>
                <div className="w-16 h-16 bg-white  rounded-full">
                  <img src={""} className="rounded-full" alt="" />
                  <h1>{student.name}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <div className="">
            
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {users.map((std) => (
                  <UserProfileCard
                    key={std._id}
                    student={std}
                  ></UserProfileCard>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default PTPCommunication;