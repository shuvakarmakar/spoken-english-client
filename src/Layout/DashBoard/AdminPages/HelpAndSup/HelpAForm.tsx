import React, { useState, useEffect } from "react";
import Spinner from "../../../../Component/Pages/Spinner/Spinner";
import dateFormat from "dateformat";
interface Problem {
  _id: string;
  subject: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

const HelpSupportAdminPage: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
   
    const pollingInterval = setInterval(() => {
        fetch("https://spoken-english-server-xi.vercel.app/get/helpForm")
          .then((res) => res.json())
          .then((data) => {
            setProblems(data);
          });
     }, 2000);

     // Clean up the interval when the component unmounts
     return () => {
       clearInterval(pollingInterval);
     };
  }, []);

 const handleDeleteProblem = (_id: string) => {
   // Change parameter name to _id
   fetch(`https://spoken-english-server-xi.vercel.app/helpForm/delete/${_id}`, {
     method: "DELETE",
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data.deletedCount > 0);
       setProblems(
         (prevProblems) => prevProblems.filter((problem) => problem._id !== _id) // Use _id here
       );
     })
     .catch((error) => {
       console.error("Error deleting problem:", error);
     });
 };

  
  // is read function

  const handleItemClick = (id: string) => {
    // Mark the clicked feedback as read by updating its isRead property
    fetch(`https://spoken-english-server-xi.vercel.app/HelpForm/read/${id}`, {
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
    <div className="min-h-screen py-8 my-20">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Help & Support Admin</h2>
        <hr />
        <div className="max-h-96 md:max-h-[600px] overflow-y-auto">
          {problems.length === 0 ? (
            <>
              <p>No problems submitted yet.</p>
              <Spinner></Spinner>
            </>
          ) : (
            <ul className="divide-y divide-gray-300 cursor-pointer">
              {problems.map((problem) => (
                <li key={problem._id} onClick={()=>{handleItemClick(problem._id);}} className={`py-4 ${
                    problem?.isRead
                      ? "text-gray-500"
                      : "text-gray-900 bg-slate-100 p-4 rounded-md shadow-md"
                  }`}>
                  <h3 className="text-lg font-semibold mb-2">
                    {problem.subject}
                  </h3>
                  <p className="text-gray-600 mb-1">{problem.message}</p>
                  <p className="text-gray-500">
                    {dateFormat(problem.createdAt)}
                   
                  </p>
                  <button
                    className="text-red-600 mt-2"
                    onClick={() => handleDeleteProblem(problem._id)}
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

export default HelpSupportAdminPage;
