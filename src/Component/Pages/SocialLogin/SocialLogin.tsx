import React from 'react';

const SocialLogin = () => {
  return (
    <>
      <div className="mt-4">
        <p className="text-gray-600">Or sign up with:</p>
        <div className="flex space-x-2 mt-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded flex items-center">
            Facebook
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center">
            Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;