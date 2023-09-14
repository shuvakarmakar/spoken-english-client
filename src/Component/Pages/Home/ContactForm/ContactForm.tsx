import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
// import contactbg from "../../../../assets/contactusbg.avif";
import { BiPhoneCall } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "./contactFormStyle.css"

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b2s0qhi",
        "template_cgffcdk",
        form.current as HTMLFormElement,
        "qcYwCAvNZ8731gFWA"
      )
      .then(
        (result) => {
          console.log(result);

          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent.",
          });

          // Clear form fields
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          // Show error alert
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while sending the message.",
          });
        }
      );
  };

  return (
    <div className="contactFormStyle border md:border-none p-7 md:p-5 bg-[#101E41] rounded-lg shadow-xl w-full md:w-[350px] ">
      <div className="flex gap-3 items-center ">
        <p>
          <BiPhoneCall className={"w-8 h-8 text-orange-500"}></BiPhoneCall>{" "}
        </p>{" "}
        <h2 className="text-2xl font-bold text-white mb-4"> {t("contactForm.title")}</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            {t("contactForm.nameLabel")}
          </label>
          <input
            className="w-full p-1 border rounded focus:outline-none focus:border-blue-500 bg-slate-200"
            type="text"
            name="user_name"
            placeholder={t("contactForm.namePlaceholder")}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            {t("contactForm.emailLabel")}
          </label>
          <input
            className="w-full p-1 border rounded focus:outline-none focus:border-blue-500 bg-slate-200"
            type="email"
            name="user_email"
            placeholder={t("contactForm.emailPlaceholder")}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            {t("contactForm.messageLabel")}
          </label>
          <textarea
            className="w-full p-1 bg-slate-200 border rounded focus:outline-none focus:border-blue-500"
            name="message"
            rows={4}
            placeholder={t("contactForm.messagePlaceholder")}
            required
          />
        </div>
        <button
          className="w-full btn btn-outline btn-primary hover:bg-white hover:text-blue-900 text-white py-2 px-4 rounded transition duration-300"
          type="submit"
        >
          {t("contactForm.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
