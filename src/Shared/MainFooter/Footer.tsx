import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../../Component/Pages/Home/ContactForm/ContactForm";
// import footerbg from "../assets/footr.bg.jpg";
import './Footer.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram, BsTwitter, } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
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
                <span className="font-bold text-lg mb-2 block">Services</span>
                <ul className="footer-list">
                  <li className="link link-hover block mb-1">Branding</li>
                  <li className="link link-hover block mb-1">Design</li>
                  <li className="link link-hover block mb-1">Marketing</li>
                  <li className="link link-hover block mb-1">Advertisement</li>
                </ul>
              </div>

              <div className="mb-6 md:mb-0 border-b text-center  px-8 py-2 border-r-[1px] ">
                <span className="font-bold text-lg mb-2 block">Company</span>
                <ul className="footer-list">
                  <li>
                    {" "}
                    <Link to={"about-us"} className="block mb-1">
                      About us
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"contact-us"} className="block mb-1">
                      Contact
                    </Link>
                  </li>
                  <li className="link link-hover block mb-1">Jobs</li>
                  <li>
                    {" "}
                    <Link to={"faqs"} className="block mb-1">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center border-t md:text-left border-r-[1px] px-8 py-2">
                <span className="font-bold text-lg mb-2 block">Legal</span>
                <ul className="footer-list">
                  <li>
                    {" "}
                    <Link to={"terms-and-Conditions"} className="block mb-1">
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"privacy-policy"} className="block mb-1">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"cookie-policy"} className="block mb-1">
                      Cookie policy
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"#"} className="block mb-1">
                      Site map
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
                    <FaLinkedinIn className={"w-10 h-10 text-blue-600"}></FaLinkedinIn>
                  </div>
                  <div className="twitter">
                    <BsTwitter className={"w-10 h-10 text-blue-400"}></BsTwitter>
                  </div>
                  <div className="Linkedin">
                    <BsInstagram className={"w-10 h-10 text-pink-500"}></BsInstagram>
                  </div>
                </div>
              </div>

              <div className="flex  justify-around items-center gap-5 p-5 mt-10 border-t">
                <div className=" hidden md:flex">
                  <p className="text-2xl font-mono font-bold md:text-2xl text-slate-200">
                    E-Learner
                  </p>
                </div>
                <div className=" flex items-center gap-4">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current"
                  >
                    <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                  </svg>
                  <p className="font-bold md:text-xl text-slate-200 ">Copyright © 2023</p>
                </div>

                <div className=" hidden md:flex">
                  <button className="btn hover:bg-orange-500  btn-sm px-10 text-slate-200 bg-blue-500 ">
                    Enrol
                  </button>
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
