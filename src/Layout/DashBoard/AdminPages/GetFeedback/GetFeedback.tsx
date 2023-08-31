import React, { useState, useEffect } from "react";
import Spinner from "../../../../Component/Pages/Spinner/Spinner";
import dateFormat from "dateformat";
interface Feedback {
  _id: number;
  feedback: string;
  createdAt: string;
  email: string;
  isRead: boolean;
  // New property for marking as read
}

const FeedbackReviewPage: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  // const [isRead, setisRead] = useState<boolean>(false);
  useEffect(() => {
    const fetchFeedback = () => {
      fetch("https://spoken-english-server-xi.vercel.app/get/Feedback")
        .then((res) => res.json())
        .then((data) => {
          setFeedbackList(data);
        });
    };
    // Fetch feedback initially
    fetchFeedback();
    // Set up polling interval to fetch feedback
    const pollingInterval = setInterval(fetchFeedback, 2000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);
  // https://spoken-english-server-xi.vercel.app
  const handleDeleteFeedback = (id: number) => {
    fetch(`https://spoken-english-server-xi.vercel.app/delete/Feedback/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setFeedbackList((prevList) =>
          prevList.filter((feedback) => feedback._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting feedback:", error);
      });
  };

  const handleItemClick = (id: number) => {
    // Mark the clicked feedback as read by updating its isRead property
    fetch(`https://spoken-english-server-xi.vercel.app/getFeedback/read/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifidcount > 0) {
          console.log("success", data.modifidcount);
        }
      });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Feedback Review</h2>
        <hr />
        <div className="overflow-y-auto max-h-96 md:max-h-[600px]">
          {feedbackList.length === 0 ? (
            <>
              <p>No feedback submitted yet.</p>
              <Spinner></Spinner>
            </>
          ) : (
            <ul className="divide-y divide-gray-300 cursor-pointer">
              {feedbackList.map((feedback) => (
                <li
                  key={feedback._id}
                  className={`py-4 px-2 ${
                    feedback?.isRead
                      ? "text-gray-500"
                      : "text-gray-900  font-semibold bg-slate-100 rounded-md "
                  }`}
                  onClick={() => handleItemClick(feedback._id)}
                >
                  <h1 className={`font-bold mb-2`}>{feedback.email}</h1>
                  <p className={`text-gray-600 mb-1 `}>{feedback.feedback}</p>
                  <p className={`text-gray-700 `}>
                    {dateFormat(feedback.createdAt)}
                   
                  </p>
                  <button
                    className="text-red-600 mt-2"
                    onClick={() => handleDeleteFeedback(feedback._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackReviewPage;
