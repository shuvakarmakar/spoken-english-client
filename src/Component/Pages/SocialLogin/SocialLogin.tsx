import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = ({ handleButtonClick }) => {
  const Navigate: NavigateFunction = useNavigate();

  const { loginWithGoogle, FacebookSingIn } = useContext(AuthContext);

  // handle google login
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        // console.log(res);
        const user = result.user;
        // Save user to database
        const saveUser = {
          name: user.displayName,
          email: user.email,
          Roll:"student",
        };
        fetch("http://localhost:5000/AddUsers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.InsertedId) {
              alert("User created successfully");
            }
          });
        Swal.fire("Good job!", "Login Success", "success");
        Navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  // handle facebook login
  const handleLoginWithFacebook = () => {
    FacebookSingIn()
      .then((result) => {
        // console.log(res);

        // save user to database
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          Roll: "student",
        };
        fetch("http://localhost:5000/AddUsers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.InsertedId) {
              alert("User created successfully");
            }
          });

        Swal.fire("Good job!", "Login Success", "success");
        Navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <>
      <div className="mt-4 ">
        <p className="text-gray-600 uppercase text-center text-sm">
          Or sign up with:
        </p>
        <div className="flex space-x-4 my-3 justify-center">
          <span onClick={handleButtonClick}>
            {" "}
            <p
              onClick={handleLoginWithFacebook}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center"
            >
              Facebook
            </p>
          </span>
          <span onClick={handleButtonClick}>
            <p
              onClick={handleLoginWithGoogle}
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center"
            >
              Google
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
