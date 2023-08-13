const cardSkills = ({ image, name, text }) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 md:w-[30%]">
      <img src={image} className="m-auto w-30 h-20" />
      <h3 className="text-lg font-medium pt-8 pb-2">{name}</h3>
      <p className="py-2">{text}</p>
    </div>
  );
};

export default cardSkills;
