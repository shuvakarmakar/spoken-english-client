import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../Home/ContactForm/ContactForm";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#eeeeee] py-5 changebg">
      <Helmet>
        <title>ELearner | Contact US</title>
      </Helmet>
      <div className="w-[96%] md:w-[90%] mx-auto">
        <p className="text-3xl font-bold"> Our Locations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7  items-center shadow-2xl p-5">
          <div className="">
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-500 font-bold text-xl" />
              <p>+0170000000-5</p>
            </div>
            <br />
            <div className="flex items-center gap-2">
              <AiFillMail className="text-green-500 font-bold text-xl" />
              <p>devgenius94@gmail.com</p>
            </div>
            <br />
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-green-500 font-bold text-xl text-justify" />
              <p className="text-justify">
                {" "}
                House # 7/B, Flat # A-1, Road # 103, Gulshan-2, Dhaka-1212,
                Bangladesh
              </p>
            </div>
            <br />
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500 font-bold text-xl" />
              <p>+880170000000</p>
            </div>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16993.444349414538!2d90.42196905540409!3d23.79520419341004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73b127fc1b1%3A0xe22df7b475b79f8d!2sEmbassy%20of%20the%20United%20States%20of%20America!5e0!3m2!1sen!2sbd!4v1692797616996!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <br />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
