import React, { FC } from "react";

interface Iprops {
  timeType: string;
  timeData: string;
}

const Time: FC<Iprops> = ({ timeData, timeType }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <span className="text-xs sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
        {timeType}
      </span>
      <div className="relative bg-black rounded-xl">
        <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
          <div className="flex items-center justify-center h-[72px] w-[64px] sm:h-16 sm:w-14 bg-black rounded-lg">
            <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {timeData}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="h-[2px] w-16 bg-gradient-to-r from-[#016DD000] via-[#00D1FF] to-[#016DD000]"></div>
        <div className="h-[2px] w-16 bg-gradient-to-r from-[#016DD000] via-[#00D1FF] to-[#016DD000] opacity-50"></div>
      </div>
    </div>
  );
};

export default Time;
