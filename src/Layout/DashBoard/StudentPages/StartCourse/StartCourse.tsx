import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StartCourse = () => {
    const location = useLocation();
    const course_name = location.state.product_name;

    const [courseDetails, setCourseDetails] = useState(null);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    useEffect(() => {
        // Fetch course details by courseId
        fetch(`http://localhost:5000/startCourse/${course_name}`)
            .then((response) => response.json())
            .then((data) => {
                setCourseDetails(data);
            })
            .catch((error) => {
                console.error('Error fetching course details:', error);
            });
    }, [course_name]);

    if (!courseDetails) {
        return <div>Loading...</div>;
    }

    const handleVideoSelection = (index) => {
        setSelectedVideoIndex(index);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">{courseDetails.courseName}</h1>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-9">
                        <div className="relative pb-[56.25%]">
                            <iframe
                                src={courseDetails.courseVideos[selectedVideoIndex].courseVideoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-span-3 bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">Select a Video</h2>
                        <div className="space-y-2">
                            {courseDetails.courseVideos.map((video, index) => (
                                <button
                                    key={index}
                                    className={`w-full p-2 text-left rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 ${index === selectedVideoIndex ? 'bg-gray-200 text-blue-500 font-semibold' : ''
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
        </div>
    );
};

export default StartCourse;
