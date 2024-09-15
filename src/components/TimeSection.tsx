import Time from "./molecules/Time";

const TimeSection = () => {
  return (
    <div className="flex justify-evenly lg:gap-0 gap-16  relative my-8">
      <Time timeData="21" timeType="Days" />
      <Time timeData="12" timeType="Hours" />
      <Time timeData="06" timeType="Minutes" />
      <Time timeData="57" timeType="Second" />
      <div className="absolute top-8 sm:top-9">
        <span className="bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-5xl sm:text-4xl text-center font-extrabold">
          :
        </span>
      </div>
    </div>
  );
};

export default TimeSection;
