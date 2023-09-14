import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../Component/Pages/Home/ContactForm/ContactForm";
// import footerbg from "../assets/footr.bg.jpg";
import './Footer.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram, BsTwitter, } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import LanguageDropdown from "../../Component/LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const changeLanguage = (language: string) => {
    // Implement your logic to change the language using i18n or your preferred method
    console.log(`Changing language to ${language}`);
  };
  return (
    <div className="">
      <div className="bg-[#101E41]">
        <footer className="md:flex justify-between text-white sm:p-2 md:2 lg:p-5">
          {/* <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Speak Better English</h1>
            
          </div> */}
          <div className="right-content bg-[#101E41] w-full border-r-2">
            <div className=" border-b w-full grid grid-cols-1 md:grid-cols-3 md:p-4 lg:p-10 ">
              <div className="mb-6 h-full border-t md:mb-0 text-center md:text-left sm:px-8 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 border-r-[1px] border-l ">
                <span className="font-bold text-lg mb-2 block flex justify-center">
                  {t("footer.services")}
                </span>
                <ul className="footer-list">
                  <li className="link link-hover block mb-1 md:flex justify-center">
                    {t("footer.branding")}
                  </li>
                  <li className="link link-hover block mb-1 md:flex justify-center">
                    {t("footer.design")}
                  </li>
                  <li className="link link-hover block mb-1 md:flex justify-center">
                    {t("footer.marketing")}
                  </li>
                </ul>
              </div>

              <div className="mb-6 md:mb-0 border-b text-center sm:px-8 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 border-r-[1px] ">
                <span className="font-bold text-lg mb-2 block md:flex justify-center">
                  {t("footer.company")}
                </span>
                <ul className="footer-list">
                  <li>
                    {" "}
                    <Link to={"about-us"} className="block mb-1">
                      {t("footer.aboutUs")}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"contact-us"} className="block mb-1">
                      {t("footer.contactUs")}
                    </Link>
                  </li>
                  <li className="link link-hover block mb-1">
                    {t("footer.jobs")}
                  </li>
                  <li>
                    {" "}
                    <Link to={"faqs"} className="block mb-1">
                      {t("footer.faqs")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center border-t md:text-left sm:px-8 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 border-r-[1px] px-8 py-2">
                <span className="font-bold text-lg mb-2 block md:flex justify-center">
                  {t("footer.legal")}
                </span>
                <ul className="footer-list">
                  <li className="text-center">
                    {" "}
                    <Link to={"terms-and-Conditions"} className="block mb-1 md:flex justify-center">
                      {t("footer.termsOfUse")}
                    </Link>
                  </li>
                  <li className="text-center">
                    {" "}
                    <Link to={"privacy-policy"} className="block mb-1 md:flex justify-center">
                      {t("footer.privacyPolicy")}
                    </Link>
                  </li>
                  <li className="text-center">
                    {" "}
                    <Link to={"cookie-policy"} className="block mb-1">
                      {t("footer.cookiePolicy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center mt-10 md:mt-[20]">
                <div className="social  flex gap-10 md:gap-[100px] justify-center items-center md:w-[100%] md:p-3">
                  <div className="fac">
                    <BiLogoFacebookCircle
                      className={"lg:w-10 lg:h-10  w-8 h-8 text-blue-500 "}
                    ></BiLogoFacebookCircle>
                  </div>
                  <div className="instagram">
                    <FaLinkedinIn
                      className={"lg:w-10 lg:h-10 w-8 h-8 text-blue-600"}
                    ></FaLinkedinIn>
                  </div>
                  <div className="twitter">
                    <BsTwitter
                      className={"lg:w-10 lg:h-10 w-8 h-8 text-blue-400"}
                    ></BsTwitter>
                  </div>
                  <div className="Linkedin">
                    <BsInstagram
                      className={"lg:w-10 lg:h-10 w-8 h-8 text-pink-500"}
                    ></BsInstagram>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 p-5 mt-10 border-t">
                <div className="text-center md:text-left">
                  <p className="font-bold text-base lg:text-xl text-slate-200 mr-1">
                    {t("footer.eLearner")}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-bold text-base lg:text-xl text-slate-200 mr-1">
                    {t("footer.copyright")}
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="font-bold text-base lg:text-xl text-slate-200 mr-1">
                    {t("footer.language")}
                  </span>
                  <LanguageDropdown changeLanguage={changeLanguage} />
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form hidden md:flex ">
            <ContactForm />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
