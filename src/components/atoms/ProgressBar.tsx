import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex flex-col lg:w-[370px] w-[600px] sm:w-[320px] mx-auto">
      <div className="flex justify-end">
        <span className="bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] bg-clip-text text-transparent text-right font-extrabold">
          %100
        </span>
      </div>
      <div className="flex justify-center relative bg-black">
        <div className="flex justify-start p-1 rounded-xl w-full bg-gradient-to-r from-[#AB00FF] to-[#FFAC00]">
          <div className="flex items-center justify-center h-5 w-full bg-black rounded-lg"></div>
        </div>
        <div className="absolute left-0 p-[14px] justify-center h-5 sm:w-[90px] lg:w-[100px] w-[150px] bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] rounded-xl"></div>
        <div className="absolute left-[160px] lg:left-[110px] sm:left-[100px] top-[2px]">
          <span className="bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] bg-clip-text text-transparent text-center font-bold">
            %25
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
