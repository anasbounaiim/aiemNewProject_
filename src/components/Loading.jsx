import React from 'react';
import logo from "../../public/logo_aiemB.png";
import logo1 from "../../public/aiem_assets/Balcom1.png"

const LoadingSpinner = () => {
  return (
    <div className="bg-white w-screen flex items-center justify-center h-screen">
        <img src={logo} className='w-64 animate-bounce' alt="logo" />
        <div className='m-3'></div>
        <img src={logo1} className='w-64 animate-bounce' alt="logo" />
    </div>
  );
};

export default LoadingSpinner;