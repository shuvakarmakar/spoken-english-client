import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import {
  AuthContext,
  AuthContextType,
} from "../../../../../Provider/AuthProvider/AuthProvider";

interface CourseVideo {
  courseVideoName: string;
  courseVideoUrl: string;
}

interface UpdateClassProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const img_hosting_token: string = import.meta.env.VITE_Image_Upload_Token;
console.log(img_hosting_token);

const UpdateClass: React.FC<UpdateClassProps> = ({ isOpen, onClose, id }) => {
  if (!isOpen) return null;

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  const [courseVideos, setCourseVideos] = useState<CourseVideo[]>([
    { courseVideoName: "", courseVideoUrl: "" },
  ]);
 console.log(courseVideos);
  const { user } = useContext(AuthContext) as AuthContextType;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const [selectedImage, setSelectedImage] = useState<File | null>(null);

const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files && event.target.files[0];
  if (file) {
    setSelectedImage(file);
  }
};

  console.log(courseVideos);

  const onSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
  const from = e.target;
    const price = parseInt(from.price.value);
    const numberOfStudents = parseInt(from.numberOfStudents.value);
    const availableSeats = parseInt(from.availableSeats.value);
    const instructorName = from.instructorName.value;
    const courseName = from.courseName.value;
    const courseDetails = from.courseDetails.value;

    if (selectedImage) {
       const formData = new FormData();
      formData.append("image", selectedImage);
        try {
          const response = await fetch(img_hosting_url, {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const responseData = await response.json();
            const data = {
              price,
              numberOfStudents,
              availableSeats,
              instructorName,
              courseName,
              courseDetails,
              imageURL: responseData.data.url,
              courseVideos,
            };
            console.log(data);
            // data.imageURL = responseData.data.url;
            // data.courseVideos = courseVideos;

            const backendResponse = await fetch(
              `https://spoken-english-server-xi.vercel.app/updateCourse/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            if (backendResponse.ok) {
              console.log("Course added successfully");
              Swal.fire({
                icon: "success",
                title: "Course Added",
                text: "Your course has been successfully added.",
              });
            } else {
              console.error("Failed to add course");
            }
          } else {
            console.error("Image upload failed");
          }
        } catch (error) {
          console.error("Error:", error);
        }

    }
   
  

    
    // console.log(data);
  };

  //      console.log("data", data);
    // data.price = parseInt(data.price);
    // data.numberOfStudents = parseInt(data.numberOfStudents);
    // data.availableSeats = parseInt(data.availableSeats);
    //  console.log(data.availableSeats);

 // try {
    //   const response = await fetch(img_hosting_url, {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     const responseData = await response.json();
    //     data.imageURL = responseData.data.url;
    //     data.courseVideos = courseVideos;

    //     const backendResponse = await fetch(
    //       "https://spoken-english-server-xi.vercel.app/addCoursess",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       }
    //     );

    //     if (backendResponse.ok) {
    //       console.log("Course added successfully");
    //       Swal.fire({
    //         icon: "success",
    //         title: "Course Added",
    //         text: "Your course has been successfully added.",
    //       });
    //       reset();
    //     } else {
    //       console.error("Failed to add course");
    //     }
    //   } else {
    //     console.error("Image upload failed");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  const handleCourseVideoNameChange = (index: number, value: string) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoName = value;
    setCourseVideos(updatedVideos);
  };

  const handleCourseVideoUrlChange = (index: number, value: string) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoUrl = value;
    setCourseVideos(updatedVideos);
  };

  // get single course
  const [courses, setCourses] = useState<any>();

  useEffect(() => {
    if (id) {
      fetch(`https://spoken-english-server-xi.vercel.app/getCourse/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        });
    }
  }, [id]);

  // console.log(courses);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto  ">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={onClose}
      />
      <div className="modal-container bg-white w-11/12 md:w-[50%] mx-auto rounded shadow-lg z-50 overflow-y-auto ">
        <div className="modal-content py-20 text-left px-6">
          {/* Modal Content */}
          <h2 className="text-2xl font-semibold">Modal Title</h2>
          <div className="min-h-screen flex items-center justify-center w-full">
            <div className="shadow-md rounded px-8  pb-8 mb-4 max-w-md w-full pt-[550px]">
              <h1 className="text-3xl font-semibold text-center mb-4">
                Update Class
              </h1>
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Course Name */}
                <div>
                  <label className="block font-semibold mb-1">
                    Course Name
                  </label>
                  <input
                    defaultValue={courses?.courseName}
                    type="text"
                    name="courseName"
                    className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Image */}
                <div>
                  <label className="block font-semibold mb-1">
                    Class Image
                  </label>
                  <input
                    defaultValue={courses?.imageURL}
                    type="file"
                    onChange={handleImageChange}
                    name="imageURL"
                    className="file-input file-input-bordered text-black w-full"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block font-semibold mb-1">Price</label>
                  <input
                    defaultValue={courses?.price}
                    type="number"
                    name="price"
                    className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Instructor Name */}
                <div>
                  <label className="block font-semibold mb-1">
                    Instructor Name
                  </label>
                  <input
                    defaultValue={courses?.instructorName}
                    type="text"
                    name="instructorName"
                    className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Instructor Email */}
                <div>
                  <label className="block font-semibold mb-1">
                    Instructor Email
                  </label>
                  <input
                    type="email"
                    disabled
                    defaultValue={user?.email || ""}
                    className="w-full px-4 text-black py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Number of Students */}
                <div>
                  <label className="block font-semibold mb-1">
                    Number of Students
                  </label>
                  <input
                    type="number"
                    defaultValue={courses?.numberOfStudents}
                    name="numberOfStudents"
                    className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Available Seats */}
                <div>
                  <label className="block font-semibold mb-1">
                    Available Seats
                  </label>
                  <input
                    defaultValue={courses?.availableSeats}
                    type="number"
                    name="availableSeats"
                    className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Course Details */}
                <div>
                  <label className="block font-semibold mb-1">
                    Course Details
                  </label>
                  <textarea
                    defaultValue={courses?.courseDetails}
                    name="courseDetails"
                    className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Course Videos */}
                {courses?.courseVideos.map(
                  (video: CourseVideo, index: number) => (
                    <div key={index}>
                      <label className="block font-semibold mb-1">
                        Add Course Video {index + 1} Name
                      </label>
                      <p className="hidden">{video?.courseVideoName}</p>
                      <input
                        type="text"
                        defaultValue={video?.courseVideoName}
                        onChange={(e) =>
                          handleCourseVideoNameChange(index, e.target.value)
                        }
                        className="w-full  text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                      />
                      <label className="block font-semibold mb-1">
                        Add YouTube Video Link {index + 1}
                      </label>
                      <div className="flex space-x-2">
                        <input
                          defaultValue={video?.courseVideoUrl}
                          type="text"
                          onChange={(e) =>
                            handleCourseVideoUrlChange(index, e.target.value)
                          }
                          className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  )
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </form>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default UpdateClass;
