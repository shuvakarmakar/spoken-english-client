import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../../../Component/Pages/Spinner/Spinner";

interface Application {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  bio: string;
}

const Applications:React.FC=()=> {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading,setLoading]=useState<boolean>(true)
  useEffect(() => {
    fetchApplications();
  },[]);

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

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <div className=" min-h-screen py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-10 text-center ">Application Form</h2>
              <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Bio</th>
                    <th className="py-3 px-4">PDF</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {applications.map((application) => (
                    <tr key={application._id} className="border-t">
                      <td className="py-3 px-4">{application.fullName}</td>
                      <td className="py-3 px-4">{application.email}</td>
                      <td className="py-3 px-4">{application.phoneNumber}</td>
                      <td className="py-3 px-4">{application.bio.slice(0,50)}</td>
                      <td className="py-3 px-4">
                        <a
                          href={`http://localhost:5000/api/pdf/${application._id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Download PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Applications;
