import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  
  const Navigate: NavigateFunction = useNavigate()
  
  const { loginWithGoogle, FacebookSingIn } = useContext(AuthContext);

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(res => {
        // console.log(res);
         Swal.fire("Good job!", "Login Success", "success");
         Navigate("/");
      }).catch(err => { 
        // console.log(err);
      })
    

   }
  const handleLoginWithFacebook = () => {
    FacebookSingIn()
      .then((res) => {
        // console.log(res);
        Swal.fire("Good job!", "Login Success", "success");
        Navigate('/')
      })
      .catch((err) => {
        // console.log(err);
      });
    

   }

  return (
    <>
      <div className="mt-4 ">
        <p className="text-gray-600 uppercase text-center text-sm">Or sign up with:</p>
        <div className="flex space-x-4 my-3 justify-center">
          <p
            onClick={handleLoginWithFacebook}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center"
          >
            Facebook
          </p>
          <p
            onClick={handleLoginWithGoogle}
            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center"
          >
            Google
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;