import React from 'react'
// import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../Firebase/firebase';

interface SocialLoginProps {
  handleButtonClick: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({ handleButtonClick }) => {
  const Navigate: NavigateFunction = useNavigate();
  // const { FacebookSingIn } = useContext(AuthContext);

  // handle google login
 const auth = getAuth(app);
 const googleAuthProvide = new GoogleAuthProvider();
   const loginWithGoogle = () => {
    //  setLoading(true);
     return signInWithPopup(auth, googleAuthProvide);
   };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;

        // Save user to database
        const saveUser = {
          name: user.displayName,
          email: user.email,
          Roll: "student",
          uid:user.uid,
        };
  console.log(user ,"login social");
        if (user) {
          
           fetch("https://spoken-english-server-xi.vercel.app/AddUsers", {
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
        }
        

        Swal.fire("Good job!", "Login Success", "success");
        Navigate("/");
      })
      .catch(() => {
        // Handle error if needed
      });
  };

  // handle facebook login
 

  const facebookAuthProvide = new FacebookAuthProvider();
 const FacebookSingIn = () => {
   return signInWithPopup(auth, facebookAuthProvide);
 };
  const handleLoginWithFacebook = () => {
    FacebookSingIn()
      .then((result) => {
        const user = result.user;

        // Save user to database
         const saveUser = {
           name: user.displayName,
           email: user.email,
           Roll: "student",
           uid: user.uid,
         };
        if (user) {
          fetch("https://spoken-english-server.vercel.app/AddUsers", {
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
        }
       

        

        Swal.fire("Good job!", "Login Success", "success");
        Navigate("/");
      })
      .catch(() => {
        // Handle error if needed
      });
  };

  return (
    <>
      <div className="mt-4">
        <p className="text-gray-600 uppercase text-center text-sm">
          Or sign up with:
        </p>
        <div className="flex space-x-4 my-3 justify-center">
          <span onClick={handleButtonClick}>
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
