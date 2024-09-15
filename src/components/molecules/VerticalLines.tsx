const VerticalLines = () => {
  return (
    <div className="flex gap-[1px] h-screen">
      <div className="h-full w-1 sm:w-[2px] bg-gradient-to-b from-[#016DD000] via-[#AB00FF] to-[#016DD000]"></div>
      <div className="h-full w-1 sm:w-[2px] bg-gradient-to-b from-[#016DD000] via-[#AB00FF] to-[#016DD000] opacity-50"></div>
      <div className="h-full w-1 sm:w-[2px] bg-gradient-to-b from-[#016DD000] via-[#AB00FF] to-[#016DD000]"></div>
    </div>
  );
};

export default VerticalLines;
