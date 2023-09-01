import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import { NavLink } from "react-router-dom";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  pdfFile: File | null;
  isRead: boolean; // Add isRead field
  createAt: string; // Add createAt field
}

const InstructorApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    bio: "",
    pdfFile: null,
    isRead: false, // Initialize isRead as false
    createAt: new Date().toISOString(),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
   const file = e.target.files?.[0];
   console.log(file);
   setFormData((prevData) => ({
     ...prevData,
     pdfFile: file ? (file as File) : null,
   }));
 };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("bio", formData.bio);
    if (formData.pdfFile) {
      formDataToSend.append("pdfFile", formData.pdfFile);
    }

    formDataToSend.append("createAt", formData.createAt);

    console.log(formDataToSend);

    try {
      // Send form data including the PDF file to the server
      await axios.post(
        "https://spoken-english-server-xi.vercel.app/BecomeInstructor",
        formDataToSend
      );
      console.log("Form submitted:", formData);
      // You can add your submission success logic here
      Swal.fire("Yaa", " Successfully submitted ", "success");
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add your submission error logic here
    }
  };
  return (
    <>
      <div className=" mx-auto py-8 mb-[50px] md:flex  justify-between items-center px-[10%] bg-slate-100 gap-20  md:h-[400px]">
        <div className=" md:w-[50%] w-full">
          <h2 className="md:text-4xl text-2xl font-bold mb-4 ">
            Become an Instructor
          </h2>
          <p className="text-gray-600 mb-4 text-sm leading-7">
            Would you like to expand your experience in English sector? Do you
            want to share your knowledge with Student and working professionals?
            If so, we would love to hire you as an instructor
          </p>

          <a href="#form">
            <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Apply Now
            </button>
          </a>
        </div>

        <div className="right-img md:w-[50%] w-full mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/fN7s1vW/become-a-teacher-hero-image-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="rules container mx-auto px-5 mb-20">
        <h1 className="text-3xl md:text-5xl font-bold font-serif mb-5 ">
          Best industries Experts are English's Trainers
        </h1>
        <hr />
        <div className="px-4">
          <h2 className=" font-bold font-serif mb-4 mt-5">
            E-Learner has the most experienced English Training website on the
            World.
          </h2>
          <p className=" mb-8 leading-7">
            In our training program, we pride ourselves on providing the most
            comprehensive training in industry with highly qualified instructors
            who have practical knowledge of the subjects they are teaching.
            Hence, you will be satisfied by the training that we offer.
          </p>
          <h2 className="font-bold font-serif">
            The process for hiring trainers is as follows:
          </h2>
          <p className="my-4 leading-7">
            Our criteria for selecting trainers is based solely on their
            experience in the specific technologies. A policy of ours prohibits
            us from hiring trainers with little or no practical experience.
          </p>
          <ol className="list-disc px-5 leading-7">
            <li>
              The Internal Quality Team evaluates the skills of selected
              trainers for a specific technology on a theoretical and practical
              level
            </li>
            <li>
              We conduct a demonstration class for a group of students and
              collect their feedback.
            </li>
            <li>
              The trainer will deliver classes only after receiving approval
              from the Internal Team and the demo students.
            </li>
          </ol>
          <h2 className="font-bold font-serif mt-6 mb-3">Who Can Register?</h2>
          <p className=" leading-7">
            Anyone who has the ability to create and instruct lessons that
            simplify complex concepts so that students understand them in a
            simplified manner and who has a working knowledge of a particular
            domain may apply. We would like to bring on board experts who have
            training experience in relevant technologies and are passionate
            about teaching students and professionals.
          </p>
          <h2 className=" font-bold font-serif mt-6 mb-3">
            The Qualities we seek in a trainer are:
          </h2>
          <ol className=" list-disc leading-7 px-5">
            <li>A brilliant speaker and an empathetic listener</li>
            <li>
              Ability to provide students with an active learning environment
            </li>
            <li>Adaptability to group needs and flexibility</li>
            <li>An openness to trying out different ideas</li>
            <li>Having the ability to learn fast and from your mistakes</li>
            <li>Willingness to assist others in learning</li>
            <li>Having the ability to give clear instructions</li>
            <li>Capable of creating an atmosphere of trust and openness</li>
          </ol>
        </div>
      </div>
      {/* form */}
      <h1 className="text-3xl md:text-5xl font-bold font-serif mb-3 text-center">
        Become an Instructor Today
      </h1>
      <h4 className="font-bold font-serif text-center">
        Join the world's largest online learning marketplace.
      </h4>
      <div
        id="form"
        className="w-[70%] mx-auto p-4 bg-blue-400 rounded shadow-md my-[100px] border "
      >
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4 ">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Cv/resume
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Other form fields (e.g., phoneNumber, bio) */}
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default InstructorApplicationForm;
