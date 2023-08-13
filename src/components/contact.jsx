import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import InfoContact from "./infoContact";
import FormContact from "./formContact";
import Map from "./map";

const contact = () => {
  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-[2.4rem] py-2 text-teal-600 font-medium md:text-6xl">
          ¿Quieres contactarme?
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Ya lo puedes hacer</h3>
      </div>
      <div className="flex justify-around md:flex-row flex-col items-center">
        <InfoContact />
        <FormContact />
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 my-10">
        <a href="https://github.com/GabrielSB19" target="_blank">
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-suarez-baron-75835524a/"
          target="_blank"
        >
          <AiFillLinkedin className="cursor-pointer" />
        </a>
      </div>
      <div>
        <Map />
      </div>
    </>
  );
};

export default contact;
