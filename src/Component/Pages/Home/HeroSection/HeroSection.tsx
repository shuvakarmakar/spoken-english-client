import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="sm:p-8 md:p-12 lg:p-16">
        <div className="hero-container">
          <Fade>
            <div className="hero-content">
              <div className="md:flex justify-between gap-10 items-center">
                <div className="hero-image w-2/4">
                  <img
                    src="https://i.ibb.co/f9GDLWC/christina-wocintechchat-com-swi1-DGRCsh-Q-unsplash.png"
                    className="lg:p-4 md:p-8 w-full"
                    alt="Speaker"
                  />
                </div>
                <div className="hero-text w-2/4">
                  <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3 uppercase">
                    {t("hero.title")}
                  </h1>
                  <hr />
                  <p className="text-sm md:text-base lg:text-lg leading-7 font-serif mt-4 text-justify">
                    {t("hero.description")}
                  </p>
                  <button className="hero-button">
                    <Link to="/freelivelessons" className="hero-link">
                      {t("hero.buttonText")}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
