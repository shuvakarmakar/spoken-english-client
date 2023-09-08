import React from "react";

const LoadingCard = () => {
  return (
    <div className="w-64 h-40 bg-gray-200 rounded-lg p-4 animate-pulse">
      <div className="w-full h-2 bg-gray-300 mb-2"></div>
      <div className="w-2/3 h-2 bg-gray-300 mb-2"></div>
      <div className="w-1/3 h-2 bg-gray-300 mb-2"></div>
    </div>
  );
};

export default LoadingCard;
