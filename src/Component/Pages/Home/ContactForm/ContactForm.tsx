import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
// import contactbg from "../../../../assets/contactusbg.avif";
import { BiPhoneCall } from "react-icons/bi";
const ContactForm: React.FC = () => {
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
    <div className=" p-5 bg-[#101E41] rounded-lg shadow-lg w-full md:w-[350px] ">
      <div className="flex gap-3 items-center ">
        <p>
          <BiPhoneCall className={"w-8 h-8 text-orange-500"}></BiPhoneCall>{" "}
        </p>{" "}
        <h2 className="text-2xl font-bold text-white mb-4"> Lets Talk</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="w-full p-1 border rounded focus:outline-none focus:border-blue-500 bg-slate-200"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full p-1 border rounded focus:outline-none focus:border-blue-500 bg-slate-200"
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className="w-full p-1 bg-slate-200 border rounded focus:outline-none focus:border-blue-500"
            name="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <button
          className="w-full btn btn-outline btn-primary hover:bg-white hover:text-blue-900 text-white py-2 px-4 rounded transition duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
