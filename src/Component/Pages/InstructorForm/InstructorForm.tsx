import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
    <div className="w-[70%] mx-auto p-4 bg-white rounded shadow-md my-[100px]">
      <h2 className="text-2xl font-semibold mb-4">Apply as an Instructor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstructorApplicationForm;
