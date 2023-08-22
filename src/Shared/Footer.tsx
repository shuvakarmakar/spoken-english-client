import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black ">
        <div className="flex  p-8 justify-between">
          <h1 className="text-5xl text-white">Speak Better English</h1>
          <button className=" btn hover:bg-black btn-secondary">
            My Online Courses
          </button>
        </div>
        <footer className="footer   grid md:grid-cols-3 grid-cols-2  p-10  text-white ">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link to={"about-us"}>About us</Link>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link to={"terms-and-Conditions"}>Terms of use</Link>
           <Link to={"privacy-policy"}>Privacy policy</Link>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
