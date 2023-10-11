import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Spinner from "../../Spinner/Spinner";

const HeroSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading by using a setTimeout
    setTimeout(() => {
      setLoading(false); // Set isLoading to false when loading is complete
    }, 100); // Adjust the timeout duration as needed
  }, []);

  return (
    <>
      {
        loading ? (<Spinner />) : (
          <>
            <div className="sm:p-8 md:p-12 lg:p-16">
              <div className="hero-container">
                <Fade>
                  <div className="hero-content">
                    <div className="md:flex justify-between gap-10 items-center">
                      <div className="hero-image md:w-2/4">
                        <img
                          src="https://i.ibb.co/f9GDLWC/christina-wocintechchat-com-swi1-DGRCsh-Q-unsplash.png"
                          className="lg:p-4 md:p-8 w-full"
                          alt="Speaker"
                        />
                      </div>
                      <div className="hero-text md:w-2/4">
                        <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3 uppercase">
                          {t("hero.title")}
                        </h1>
                        <hr />
                        <p className="text-sm md:text-base lg:text-lg leading-7 font-serif mt-4 text-justify">
                          {t("hero.description")}
                        </p>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-10">
                          <Link
                            to="/freelivelessons"
                            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                          >
                            {t('hero.buttonText')}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default HeroSection;
