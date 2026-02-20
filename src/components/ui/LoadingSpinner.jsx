import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = ({ size = 50, color = "#07A698", message = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <ClipLoader color={color} size={size} />
      {message && (
        <p className="mt-4 text-gray-600 text-center">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;