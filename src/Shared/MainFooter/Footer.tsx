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
        <footer className="md:flex justify-between  text-white p-5">
          {/* <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Speak Better English</h1>
            
          </div> */}
          <div className="right-content bg-[#101E41] w-full border-r-2">
            <div className=" border-b w-full  grid grid-cols-1 md:grid-cols-3  p-10 ">
              <div className="mb-6 h-full border-t md:mb-0 text-center md:text-left  px-8 py-2 border-r-[1px] border-l ">
                <span className="font-bold text-lg mb-2 block">
                  {t("footer.services")}
                </span>
                <ul className="footer-list">
                  <li className="link link-hover block mb-1">
                    {t("footer.branding")}
                  </li>
                  <li className="link link-hover block mb-1">
                    {t("footer.design")}
                  </li>
                  <li className="link link-hover block mb-1">
                    {t("footer.marketing")}
                  </li>
                  <li className="link link-hover block mb-1">
                    {t("footer.advertisement")}
                  </li>
                </ul>
              </div>

              <div className="mb-6 md:mb-0 border-b text-center  px-8 py-2 border-r-[1px] ">
                <span className="font-bold text-lg mb-2 block">
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
              <div className="text-center border-t md:text-left border-r-[1px] px-8 py-2">
                <span className="font-bold text-lg mb-2 block">
                  {t("footer.legal")}
                </span>
                <ul className="footer-list">
                  <li>
                    {" "}
                    <Link to={"terms-and-Conditions"} className="block mb-1">
                      {t("footer.termsOfUse")}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"privacy-policy"} className="block mb-1">
                      {t("footer.privacyPolicy")}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"cookie-policy"} className="block mb-1">
                      {t("footer.cookiePolicy")}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"#"} className="block mb-1">
                      {t("footer.siteMap")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex justify-center mt-10 md:mt-[20]">
                <div className="social  flex gap-10 md:gap-[100px] justify-center items-center md:w-[100%] ">
                  <div className="fac">
                    <BiLogoFacebookCircle
                      className={"w-10 h-10 text-blue-500 "}
                    ></BiLogoFacebookCircle>
                  </div>
                  <div className="instagram">
                    <FaLinkedinIn
                      className={"w-10 h-10 text-blue-600"}
                    ></FaLinkedinIn>
                  </div>
                  <div className="twitter">
                    <BsTwitter
                      className={"w-10 h-10 text-blue-400"}
                    ></BsTwitter>
                  </div>
                  <div className="Linkedin">
                    <BsInstagram
                      className={"w-10 h-10 text-pink-500"}
                    ></BsInstagram>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 p-5 mt-10 border-t">
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-2xl lg:text-2xl font-mono font-bold text-slate-200">
                    {t("footer.eLearner")}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="font-bold text-base md:text-xl lg:text-xl text-slate-200">
                    {t("footer.copyright")}
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="font-bold text-base md:text-xl lg:text-xl text-slate-200 mr-1">
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
