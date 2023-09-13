import React, { useContext, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const GiveFeedbackPage: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [feedback, setFeedback] = useState("");
  const timestamp = new Date();
  console.log(timestamp);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can send the feedback to your server or perform any other action
    console.log("Feedback submitted:");
    const feedbacks = {
      email: user?.email,
      feedback,
      createdAt: timestamp,
      isRead: false,
    };
    // Optionally, you can show a success message to the user

    fetch(" https://spoken-english-server-xi.vercel.app/Feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbacks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Yaa", " Successfully submitted ", "success");
        }
      });
    setFeedback("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Feedbacks</title>
      </Helmet>
      <div className="bg-white p-6 rounded-lg shadow-md md:w-[50%] w-96 ">
        <h2 className="text-2xl font-bold mb-4">Give Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={feedback}
              onChange={handleInputChange}
              rows={6}
              className="w-full border rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiveFeedbackPage;
