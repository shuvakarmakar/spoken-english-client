import React from "react";
import { Link } from "react-router-dom";
import imageLession from "../../../assets/Live-Lesson-Categories.png";
import { Helmet } from "react-helmet";
import SideIcons from "../Home/Home/Side";
import { useTranslation } from "react-i18next";

const FreeLiveLessons = () => {
  const { t } = useTranslation();

  return (
    <div className="changebg pt-20">
      <Helmet>
        {" "}
        <title>ELearner | Free Classes</title>
      </Helmet>
      <SideIcons />
      <div className="flex flex-col items-center justify-center p-4 md:p-10 shadow-md banner-bg darkText">
        <h1 className="text-center text-4xl text-black font-semibold mt-6 md:mt-12 darkText">
          {t("freelivelessons.title")}
        </h1>
        <h3 className="text-center text-2xl my-4 md:my-6 text-black font-medium darkText">
          {t("freelivelessons.latestLesson")}
        </h3>
        <div className="text-center">
          <div className="mx-auto mt-2 md:mt-6 max-w-screen-md">
            <iframe
              className="lg:w-96 lg:h-80"
              src="https://www.youtube.com/embed/66bXMjs7Q2A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:p-10 changebg">
        <p className="text-lg text-center text-gray-700">
          {t("freelivelessons.lessonDescription")}
        </p>
      </div>

      <div className="bg-gray-100 p-10 changebg">
        <h3 className="text-center text-3xl text-black font-bold darkText">
          {t("freelivelessons.moreLessonsTitle")}
        </h3>
        <div className="flex justify-center mt-4">
          <img
            src={imageLession}
            alt="More Free Speaking Lessons"
            className="mx-auto my-10"
          />
        </div>
      </div>
      <div className="bg-gray-100 p-10 changebg">
        <div className="flex flex-col md:flex-row justify-center md:space-x-2 px-6 md:px-10">
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
          <div>
            <iframe
              className="w-full md:w-80 h-48 md:h-auto"
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
      <div className="bg-gray-100 lg:p-8 md:p-6 changebg darkText">
        <div className="mx-auto px-6 lg:flex md:flex m-5">
          <div className="md:w-1/2 md:pr-6 p-2">
            <h3 className="text-2xl my-6 text-black font-bold darkText">
              {t("freelivelessons.vocabularyTitle")}
            </h3>
            <p className="text-black darkText text-justify">
              {t("freelivelessons.vocabularyDescription")}
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-10 p-2">
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
