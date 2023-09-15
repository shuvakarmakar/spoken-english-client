import React from "react";
import { Link } from "react-router-dom";
import imageLession from "../../../assets/Live-Lesson-Categories.png";
import { Helmet } from "react-helmet";
import SideIcons from "../Home/Home/Side";
import { useTranslation } from "react-i18next";

const FreeLiveLessons = () => {
  const { t } = useTranslation();

  return (
    <div className="changebg pt-20 banner-bg">
      <Helmet>
        {" "}
        <title>ELearner | Free Classes</title>
      </Helmet>
      <SideIcons />
      <div className="p-4 md:pt-1 shadow-md darkText">
        <h1 className=" uppercase text-2xl text-black font-semibold mt-6 md:mt-12 darkText mb-2">
          {t("freelivelessons.title")}
        </h1>
        <hr />
        {/* <h3 className="text-center text-2xl my-4 md:my-6 text-black font-medium darkText">
          {t("freelivelessons.latestLesson")}
        </h3> */}
        <div className="md:flex gap-10  justify-between md:p-20 p-5">
          <div className="text-center md:w-[70%] w-full border  shadow-md">
            <div className="mx-auto   w-full">
              <iframe
                className="md:w-full w-full h-[300px] md:h-[350px]"
                src="https://www.youtube.com/embed/66bXMjs7Q2A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className=" changebg md:w-[50%] mt-10 md:mt-0 md:p-5 text-white  p-2 border shadow-md ">
            <p className="text-lg   leading-8">
              {t("freelivelessons.lessonDescription")}
            </p>
            <Link to={"/all-premium-courses"}>
              <button className=" btn bg-blue-500 text-white mt-10">
                {" "}
                Enroll Courses
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-20 p-10 changebg ">
        <h3 className="text-center text-3xl text-black mb-2 uppercase font-bold darkText">
          {t("freelivelessons.moreLessonsTitle")}
        </h3>
        <hr />

        <div className="md:flex gap-10 justify-center w-full mt-[50px]">
          <div className=" border shadow-md md:w-[50%] ">
            <img
              src={imageLession}
              alt="More Free Speaking Lessons"
              className="mx-auto w-full "
            />
            <div className="w-full flex justify-center md:mt-10">
              <Link to={"/all-premium-courses"}>
                <button className=" btn bg-blue-500 text-white mt-10">
                  {" "}
                  Enroll Courses
                </button>
              </Link>
            </div>
          </div>

          <div className="border mt-10 md:mt-0 shadow-md changebg  md:w-[50%] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-4 md:mb-0">
                <iframe
                  className="w-full md:w-80 h-48 md:h-auto"
                  src="https://www.youtube.com/embed/66bXMjs7Q2A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mb-4 md:mb-0">
                <iframe
                  className="w-full md:w-80 h-48 md:h-auto"
                  src="https://www.youtube.com/embed/JXqPHZ8smb8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" col-span-2 ">
                <iframe
                  className="w-full  md:h-[260px]"
                  src="https://www.youtube.com/embed/66bXMjs7Q2A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <Link
                  to="/free-videos"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  {t("freelivelessons.viewMoreVideos")}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 lg:p-8 md:p-6 changebg darkText">
        <div className="mx-auto px-6 lg:flex md:flex m-5">
          <div className="md:w-1/2 md:pr-6 p-4 border shadow-md">
            <h3 className="text-2xl my-6 text-black font-bold darkText">
              {t("freelivelessons.vocabularyTitle")}
            </h3>
            <p className="text-black darkText text-justify">
              {t("freelivelessons.vocabularyDescription")}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-10 md:mt-0 p-4 border  shadow-md">
            <div className="flex justify-center mt-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/R1AFp1QfSaM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLiveLessons;
