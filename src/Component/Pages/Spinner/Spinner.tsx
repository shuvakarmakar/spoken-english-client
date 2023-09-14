import React from 'react';
const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-white z-50">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
  </div>
  );
};

export default Spinner;
