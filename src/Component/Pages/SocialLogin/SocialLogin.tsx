import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {

  const { loginWithGoogle } = useContext(AuthContext);

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(res => {
        console.log(res);
        alert('Login successful')
      }).catch(err => { 
        console.log(err);
      })
    

   }

  return (
    <>
      <div className="mt-4 ">
        <p className="text-gray-600 uppercase">Or sign up with:</p>
        <div className="flex space-x-4 my-3 justify-center">
          <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer flex items-center">
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