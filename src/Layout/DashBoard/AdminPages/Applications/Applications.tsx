import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../../../Component/Pages/Spinner/Spinner";
import { FaTrashAlt } from "react-icons/fa";
import dateFormat from "dateformat";
interface Application {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  bio: string;
  isRead: string;
  createAt: number;
}

const Applications:React.FC=()=> {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading,setLoading]=useState<boolean>(true)
  useEffect(() => {
    fetchApplications();
    // Polling interval in milliseconds (e.g., every 5 seconds)
    const pollingInterval = setInterval(fetchApplications, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(pollingInterval);
    };
  },[]);
//  console.log(applications);
  const fetchApplications = async () => {
    try {
      const response = await axios.get<Application[]>(
        "https://spoken-english-server-xi.vercel.app/get/applications"
      );
      setApplications(response.data);
      
      setLoading(false)
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

   const handleDelete = (id:string) => {
     // DeleteUsers
     fetch(` https://spoken-english-server-xi.vercel.app/application/${id}`,{
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         // toast.success("User Delete successfully");
         const remaining = applications.filter((app) => app._id !== id);
         setApplications(remaining);
       });
  };
  
  // handle read 
   const handleItemClick = (id: string) => {
     // Mark the clicked feedback as read by updating its isRead property
     fetch(`https://spoken-english-server-xi.vercel.app/Application/read/${id}`, {
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
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className=" min-h-screen py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-10 text-center ">
                Application Form
              </h2>
              <div className="max-h-96 md:max-h-[600px] overflow-y-auto">
                <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Bio</th>
                      <th className="py-3 px-4">PDF</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">remove</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 cursor-pointer">
                    {applications.map((application) => (
                      <tr
                        key={application._id}
                        onClick={() => handleItemClick(application._id)}
                        className={`border-t  ${
                          application?.isRead
                            ? "text-gray-500"
                            : "text-gray-900  font-semibold bg-slate-100 "
                        } `}
                      >
                        <td className="py-3 px-4">{application.fullName}</td>
                        <td className="py-3 px-4">{application.email}</td>
                        <td className="py-3 px-4">{application.phoneNumber}</td>
                        <td className="py-3 px-4">
                          {application.bio.slice(0, 50)}
                        </td>
                        <td className="py-3 px-4">
                          <a
                            href={`https://spoken-english-server-xi.vercel.app/api/pdf/${application._id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            Download PDF
                          </a>
                        </td>
                        <td>
                          <p className="py-3 px-4">
                            {dateFormat(application?.createAt)} 
                          </p>
                        </td>
                        <td className="py-3 px-4">
                          <span onClick={() => handleDelete(application._id)}>
                            <FaTrashAlt className="text-blue-500 w-6 h-6 cursor-pointer"></FaTrashAlt>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Applications;
