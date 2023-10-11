// src/components/HelpSupportPage.tsx
import React, { useContext, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaBugSlash } from "react-icons/fa6";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const HelpSupportPage: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const timestamp = new Date();
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: user?.email,
    createdAt: timestamp,
    isRead: false,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here, you can access the form data from the state (formData)
    console.log("Form Data:", formData);
    fetch("https://spoken-english-server-xi.vercel.app/helpSupport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Yaa", " Successfully submitted ", "success");
          setFormData({
            subject: "",
            message: "",
            email: "",
            isRead: false,
            createdAt: timestamp,
          });
        }
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className=" bg-gray-100 w-full min-h-screen">
      <Helmet>
        <title>Help & Support</title>
      </Helmet>
      <div className="bg-white p-1 rounded-lg shadow-md">
        <div className="header w-ful shadow-md border flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4 px-10 py-2">Help & Support</h2>
          <Link to={"/"}>
            {" "}
            <p className="btn btn-sm bg-blue-500 mr-10">Home</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10   my-[140px] w-auto">
            {/* card */}
            <a href="#cards">
              <div
                className="card h-[300px] w-[300px]
            bg-base-200 shadow-md"
              >
                <figure className="px-10 pt-10">
                  <SiGoogleclassroom
                    className={"w-20 h-20 text-blue-500"}
                  ></SiGoogleclassroom>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Course Related ?</h2>
                  <p>
                    Need course-related help? We've got you covered. Reach out
                    anytime for quick assistance with course content,
                    assignments.
                  </p>
                </div>
              </div>
            </a>
            {/* card */}
            <a href="#cards">
              <div className="card  h-[300px]  w-[300px] bg-base-100 shadow-md border">
                <figure className="px-10 pt-10">
                  <BiSolidUserAccount
                    className={"w-20 h-20 text-blue-500"}
                  ></BiSolidUserAccount>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Account Related ?</h2>
                  <p>
                    "Account hiccup? We've got your back. Let us know if you
                    need help updating your account or have any questions about
                    your profile."
                  </p>
                </div>
              </div>
            </a>

            {/* card */}
            <a href="#cards">
              <div className="card  h-[300px]  w-[300px] bg-base-200 shadow-md ">
                <figure className="px-10 pt-10">
                  <FaBugSlash
                    className={"w-20 h-20 text-blue-500"}
                  ></FaBugSlash>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Bugs Related ?</h2>
                  <p>
                    Bug bothering you? We're on it! Report any technical hiccups
                    you encounter, and we'll fix them swiftly to keep your
                    experience smooth.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" w-[70%] flex flex-col justify-center">
            <h3 className=" md:text-[2vw] font-bold mb-4">
              Frequently Asked Questions
            </h3>
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    <span className="font-semibold">
                      How do I reset my password?
                    </span>
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      You can reset your password by clicking on the "Forgot
                      Password" link on the login page.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    <span className="font-semibold">
                      How do I enroll in a course?
                    </span>
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      - To enroll in a course, navigate to the course page and
                      click the "Enroll" button.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    <span className="font-semibold">
                      How can I update my account settings?
                    </span>
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      - You can update your account settings by going to the
                      "Settings" section in your profile.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    <span className="font-semibold">
                      How can I Become instructor in this platform?
                    </span>
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      -You can apply for becoming an instructor from home page
                      apply for a instructor section and then filup the form
                      upload your cv or resume
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="cards" className="my-20">
      
          <div className=" md:flex gap-10  h-full ">
            
            <div className="w-full shadow-md p-10 border mb-10 h-[330px]">
              <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
              <p className="text-gray-600 mb-7">
                If you can't find the information you need, feel free to contact
                our support team. We're here to help you! or directly message to
                contact form.
              </p>
              <a
                href="mailto:devgeniuse94@gmail.com"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Contact Support
              </a>
            </div>

            <div className="direct-message w-full shadow-md p-5 border h-full">
              {/* Support Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border rounded-md p-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
