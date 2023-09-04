import React from "react";
import { Link } from "react-router-dom";
import footerbg from "../assets/footr.bg.jpg";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat flex border-b-2 justify-center items-center h-96" 
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <footer className="footer   grid md:grid-cols-3   p-10  text-white changebg">
          <div className="mb-6 md:mb-0">
            <div>
              <h1 className="text-3xl md:text-5xl text-white">
                Speak Better English
              </h1>
              <button className="btn hover:bg-black btn-secondary text-white">
                My Online Courses
              </button>
            </div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="mb-6 md:mb-0">
            <span className="footer-title">Company</span>
            <Link to={"about-us"}>About us</Link>
            <Link to={"contact-us"}>Contact</Link>
            <a className="link link-hover">Jobs</a>
            <Link to={"faqs"}>FAQs</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to={"terms-and-Conditions"}>Terms of use</Link>
            <Link to={"privacy-policy"}>Privacy policy</Link>
            <Link to={"cookie-policy"}>Cookie policy</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
