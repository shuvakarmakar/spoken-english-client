import React, { useState, useEffect } from "react";

interface Feedback {
  id: number;
  feedback: string;
  createdAt: string;
  email: string;
}

const FeedbackReviewPage: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

  useEffect(() => {
   fetch("https://spoken-english-server-xi.vercel.app/get/Feedback")
     .then((res) => res.json())
     .then((data) => {
       setFeedbackList(data);
       console.log(data);
     });
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Feedback Review</h2>
        <hr />
        {feedbackList.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {feedbackList.map((feedback) => (
              <li key={feedback.id} className="py-4">
                <h1 className="font-bold mb-2">{ feedback.email}</h1>
                <p className="text-gray-600 mb-1">{feedback.feedback}</p>
                <p className="text-gray-500">{feedback.createdAt}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeedbackReviewPage;
