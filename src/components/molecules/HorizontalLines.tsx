import React from "react";

const HorizontalLines = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] opacity-50"></div>
      <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00]"></div>
      <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] opacity-50"></div>
    </div>
  );
};

export default HorizontalLines;
