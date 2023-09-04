import { FaDesktop, FaBookReader, FaFacebookMessenger } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#f3f5fc",
            width: "353%",
            height: 122,
            transform: "scaleX(-1)",
          }}
        >
          <path d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div>

      <div className="">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <h1
              className="text-3xl md:text-4xl text-center mt-20 mb-[100px]  uppercase font-bold"
              data-aos="fade-up"
            >
              {t('process.howItWorks')}
            </h1>
          </div>

          <div
            data-aos="fade-up"
            className="grid gap-5 md:gap-8 md:grid-cols-3"
          >
            {/* Icon 1 */}
            <div className="changebg text-blue-700 text-center shadow-xl border rounded-lg bg-slate-100 p-4 md:p-8 transition duration-300 hover:bg-blue-100">
              <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
                <FaDesktop />
              </div>
              <h3 className="text-base md:text-xl mt-2 md:mt-3  uppercase">
                {t('process.joinCourse')}
              </h3>
            </div>

            {/* Icon 2 */}
            <div className="changebg text-blue-700 text-center shadow-xl rounded-lg bg-slate-100  p-4 md:p-8 transition duration-300 hover:bg-blue-100 border">
              <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
                <FaBookReader />
              </div>
              <h3 className="text-base md:text-xl mt-2 md:mt-3 text-blue-700 uppercase">
                {t('process.studyPracticeReview')}
              </h3>
            </div>

            {/* Icon 3 */}
            <div className=" changebg text-blue-700 text-center shadow-xl border rounded-lg bg-slate-100  p-4 md:p-8 transition duration-300 hover:bg-blue-100">
              <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
                <FaFacebookMessenger />
              </div>
              <h3 className="text-base md:text-xl mt-2 md:mt-3 text-blue-700 uppercase">
                {t('process.speakConfidently')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
