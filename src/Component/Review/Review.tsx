import React from "react";
import VideoPlayer from "./Video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Review: React.FC = () => {
  return (
    <div>
      <VideoPlayer />
      <div>
        <section className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="bg-gradient-to-r text-center mb-10 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Read trusted reviews from Our Students
            </h2>

            <Swiper
              slidesPerView={1} // Adjust slides per view based on screen size
              spaceBetween={30}
              freeMode={false} // Disable free mode for responsiveness
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000, // Delay between slides in milliseconds
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <blockquote className="rounded-lg w-[50%] bg-gray-100 pt-16 pb-8 p-8">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full overflow-hidden">
                        <img
                          src="https://i.ibb.co/19SjTjD/images-q-tbn-ANd9-Gc-QU-qe-Zbetzq-411o3q-BVJg-WVQBm-Mx-Gk3a-Wu-Q-usqp-CAU.jpg"
                          alt="User Avatar"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mt-1 text-lg font-medium text-gray-700">
                        Johnny Deep
                      </p>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {/* Rating SVGs */}
                      </div>
                    </div>
                  </div>
                  <p className="line-clamp-3 sm:line-clamp-2 mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam necessitatibus facilis praesentium est, quos
                    aspernatur accusamus similique reprehenderit quasi a tempora
                    inventore dignissimos asperiores nostrum vitae at sapiente
                    atque! Deleniti.
                  </p>
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="rounded-lg w-[50%] bg-gray-100 pt-16 pb-8 p-8">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full overflow-hidden">
                        <img
                          src="https://i.ibb.co/VYw8Sq8/images-q-tbn-ANd9-Gc-Qbl-J6n-Ix-SH3-ANvt-L3o-Mz74m-ISLyiu7-L89-LHQ-usqp-CAU.jpg"
                          alt="User Avatar"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mt-1 text-lg font-medium text-gray-700">
                        John Wick
                      </p>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {/* Rating SVGs */}
                      </div>
                    </div>
                  </div>
                  <p className="line-clamp-3 sm:line-clamp-2 mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam necessitatibus facilis praesentium est, quos
                    aspernatur accusamus similique reprehenderit quasi a tempora
                    inventore dignissimos asperiores nostrum vitae at sapiente
                    atque! Deleniti.
                  </p>
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="rounded-lg w-[50%] bg-gray-100 pt-16 pb-8 p-8">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full overflow-hidden">
                        <img
                          src="https://i.ibb.co/ScvFH4S/images-q-tbn-ANd9-Gc-SGa-OK8-Lj4b-JCLs-Ej-T8-L66h-MA1-Ahl4-Fq6-EPn-Q-usqp-CAU.jpg"
                          alt="User Avatar"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mt-1 text-lg font-medium text-gray-700">
                        Paul Walker
                      </p>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {/* Rating SVGs */}
                      </div>
                    </div>
                  </div>
                  <p className="line-clamp-3 sm:line-clamp-2 mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam necessitatibus facilis praesentium est, quos
                    aspernatur accusamus similique reprehenderit quasi a tempora
                    inventore dignissimos asperiores nostrum vitae at sapiente
                    atque! Deleniti.
                  </p>
                </blockquote>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;
