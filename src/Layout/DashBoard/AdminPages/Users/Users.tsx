import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useUser from "../../../../Hooks/useUser";
import Spinner from "../../../../Component/Pages/Spinner/Spinner";
const Users = () => {
  const [users, loading, refreshUsers] = useUser();
  // console.log(users);
  // /users/admin
  const handleMakeAdmin = (id:number) => {
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("Make Admin  successfully");
        refreshUsers();
      });
  };

  // make instructor
  const handleMakeInstructor = (id:number) => {
    console.log(id);
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("Make Instructor successfully");
        refreshUsers();
      });
  };
  // Delete the user from  db
  const handleDelete = (id:number) => {
    // DeleteUsers
    fetch(`http://localhost:5000/users/DeleteUsers/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("User Delete successfully");
        refreshUsers();
      });
  };
  // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  return (
    <>
      {loading ? (
        <>
          <Spinner></Spinner>
        </>
      ) : (
        <>
          <div className="h-[100vh]  ">
            {/* <DHeading title={"Menage user"}></DHeading> */}
            {/* <Toaster></Toaster> */}
            <h1 className=" uppercase text-[3vw] text-center my-4">
              All <span className="text-blue-500"> Users</span>{" "}
            </h1>
            <div className="flex justify-center mx-auto mt-11">
              <div className="overflow-x-auto">
                <table className="table border shadow-xl">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>NO:</th>
                      <th>Name</th>
                      <th>Email</th>
                      <td>Promote: Instructor / admin</td>

                      <th>Role</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="font-serif">
                    {/* row 2 */}
                      {users?.map((user, index) => {
                       
                      return (
                        <tr className="hover">
                          <th>{index + 1}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            {" "}
                            <button
                              disabled={user?.InstructorDisabled}
                              onClick={() => handleMakeInstructor(user._id)}
                              className={` ${
                                user.InstructorDisabled
                                  ? "bg-slate-300"
                                  : " bg-blue-500"
                              }
                               p-1 shadow-md  rounded-md cursor-pointer text-white`}
                            >
                              {" "}
                              Make Instructor
                            </button>{" "}
                            /
                            <button
                              disabled={user?.disabled}
                              onClick={() => handleMakeAdmin(user._id)}
                              className={` ${
                                user.disabled ? "bg-slate-300" : " bg-blue-500"
                              }
                               p-1 shadow-md  rounded-md cursor-pointer text-white`}
                            >
                              {" "}
                              Make Admin
                            </button>
                          </td>
                          <td>{user?.Roll ? <p>{user.Roll}</p> : "Student"}</td>
                          <td>
                            {" "}
                            <span onClick={() => handleDelete(user._id)}>
                              <FaTrashAlt className="text-blue-500 w-6 h-6 cursor-pointer"></FaTrashAlt>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
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

export default Users;
