import React, { useState, useEffect } from "react";

interface Problem {
  id: number;
  subject: string;
  message: string;
  createdAt: string;
}

const HelpSupportAdminPage: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    fetch(" https://spoken-english-server-xi.vercel.app/get/helpForm")
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Help & Support Admin</h2>
        <hr />
        {problems.length === 0 ? (
          <p>No problems submitted yet.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {problems.map((problem) => (
              <li key={problem.id} className="py-4">
                <h3 className="text-lg font-semibold mb-2">
                  {problem.subject}
                </h3>
                <p className="text-gray-600 mb-1">{problem.message}</p>
                <p className="text-gray-500">{problem.createdAt}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HelpSupportAdminPage;
