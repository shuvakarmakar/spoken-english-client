import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

interface AdminNavProps {
  setSidebarOpen: (open: boolean) => void;
}
interface Feedback {
  _id: number;
  feedback: string;
  createdAt: string;
  email: string;
  isRead: boolean;
  // New property for marking as read
}


interface Application {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  isRead: boolean,
}



// help form data 
interface Problem {
  _id: string;
  subject: string;
  message: string;
  createdAt: string;
  isRead:boolean,
}



const AdminNav: React.FC<AdminNavProps> = ({
  setSidebarOpen,
}: AdminNavProps): ReactElement => {

  // feedback  data

  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
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

  const unreadFeedbackCount = feedbackList.filter(
    (feedback) => !feedback.isRead
  ).length;



  // fetch application feedback
  const [applications, setApplications] = useState<Application[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchApplications();
    // Polling interval in milliseconds (e.g., every 5 seconds)
    const pollingInterval = setInterval(fetchApplications, 1000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
  }, []);
  const fetchApplications = async () => {
    try {
      const response = await axios.get<Application[]>(
        "https://spoken-english-server-xi.vercel.app/get/applications"
      );
      setApplications(response.data);
     
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };
  const unReadApplication = applications.filter(
    (feedback) => !feedback.isRead
  ).length;

  // Help form data

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
 const unReadHelpFormCount = problems.filter(
   (problem) => !problem.isRead
 ).length;





  return (
    <>
      <NavLink to="/" onClick={() => setSidebarOpen(false)}>
        <li className="p-2 flex transition duration-1000 ease-in-out transform hover:bg-gray-200">
        <FaHome className={"w-5 h-5 me-2 "}></FaHome>
          Home
        </li>
      </NavLink>

      <NavLink to="/dashboard/users" onClick={() => setSidebarOpen(false)}>
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Users
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/Application"
        onClick={() => setSidebarOpen(false)}
      >
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Application{" "}
          <div className="badge bg-green-600 text-white">
            {unReadApplication}
          </div>
        </li>
      </NavLink>
      <NavLink to="/dashboard/HelpForm" onClick={() => setSidebarOpen(false)}>
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Help From{" "}
          <div className="badge bg-pink-600 text-white">
            {unReadHelpFormCount}
          </div>{" "}
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/getFeedback"
        onClick={() => setSidebarOpen(false)}
      >
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Feedback{" "}
          <div className="badge bg-blue-600 text-white">
            {unreadFeedbackCount}
          </div>
        </li>
      </NavLink>
    </>
  );
};

export default AdminNav;
