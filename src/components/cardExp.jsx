const cardExp = ({ year, place, name, des }) => {
  return (
    <div className="w-[100%] flex flex-row mb-4">
      <div className="w-[25%] my-5">
        <p className="text-right md:font-medium text-[12px] md:text-[15px]">
          {year}
        </p>
        <p className="text-right text-gray-500 font-normal text-[12px] md:text-[15px]">
          {place}
        </p>
      </div>
      <div className="relative w-[1%] border-l border-gray-400 my-5 mb-[-5px] ml-3">
        <div
          className="absolute border-2 border-solid border-teal-600 rounded-full w-2 h-2 my-[8px] shadow-lg bg-white left-[-4.375px]"
          style={{ boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.5)" }}
        ></div>
      </div>
      <div className="w-[70%] my-5 ml-3">
        <p className="font-medium">{name}</p>
        <p className="text-gray-700 font-normal leading-5">{des}</p>
      </div>
    </div>
  );
};
export default cardExp;
