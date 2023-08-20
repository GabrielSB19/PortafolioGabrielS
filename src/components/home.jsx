import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import myUser from "../../src/assets/User.png";
import photoMe from "../../src/assets/PhotoMe.png";

const home = () => {
  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Gabriel Suarez
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Ingeníero en Sistemas</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
          ¡Bienvenido! Soy estudiante de Ingeniería en Sistemas de la
          Universidad ICESI, actualmente en 8avo semestre. Poseo habilidades
          blandas para liderar equipos con empatía, flexibilidad y motivación.
          Cuento con conocimientos técnicos en Java, UML, SQL, JavaScript, CSS,
          NodeJS, React y SpringBoot.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
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
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <img src={photoMe} alt="User" />
      </div>
    </>
  );
};

export default home;
