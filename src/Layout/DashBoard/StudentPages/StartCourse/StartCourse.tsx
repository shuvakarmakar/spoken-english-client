import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CourseFeedback from "./CourseFeedback";

interface CourseDetails {
  courseName: string;
  courseVideos: CourseVideo[];
}

interface CourseVideo {
  courseVideoUrl: string;
  courseVideoName: string;
}

const StartCourse: React.FC = () => {
  const location = useLocation();
  const course_name = location.state?.product_name;

  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(
    null
  );
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);

  useEffect(() => {
    // Fetch course details by courseId
    fetch(
      `https://spoken-english-server-xi.vercel.app/startCourse/${course_name}`
    )
      .then((response) => response.json())
      .then((data: CourseDetails) => {
        setCourseDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [course_name]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  const handleVideoSelection = (index: number) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 changebg">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">{courseDetails.courseName}</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className="relative pb-[56.25%]">
              <iframe
                src={
                  courseDetails.courseVideos[selectedVideoIndex].courseVideoUrl
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
          <div className="col-span-3 bg-white rounded-lg shadow-xl p-4 changebg border">
            <h2 className="text-lg font-semibold mb-2">Select a Video</h2>
            <div className="space-y-2">
              {courseDetails.courseVideos.map((video, index) => (
                <button
                  key={index}
                  className={`w-full p-2 text-left rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 ${
                    index === selectedVideoIndex
                      ? "bg-gray-200 text-blue-500 font-semibold"
                      : ""
                  }`}
                  onClick={() => handleVideoSelection(index)}
                >
                  {video.courseVideoName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CourseFeedback />
    </div>
  );
};

export default StartCourse;
