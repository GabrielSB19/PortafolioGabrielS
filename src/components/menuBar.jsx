import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import pdf from "../assets/GabrielSuarezResume.pdf";

const MenuBar = ({ handleView }) => {
  const [menu, setMenu] = useState(false);
  const [isSelected, setIsSelected] = useState("Home");

  const onToggleMenu = () => {
    setMenu(!menu);
  };

  const onView = (view) => {
    handleView(view);
    setMenu(!menu);
    setIsSelected(view);
  };

  const styleOptions =
    "hover:text-cyan-500 hover:border-b border-solid border-cyan-500 text-gray-800 transition duration-500";

  return (
    <nav className="py-10 md:mb-12 flex justify-around md:h-10 mb-1 ">
      <h1 className="text-xl mr-10 w-full">Gabriel Suarez</h1>
      <div
        className={`py-1 md:static absolute min-h-[35vh] left-0 top-[13%] w-full px-10 bg-white border-b shadow-md md:shadow-none md:border-none ${
          menu ? "" : "hidden md:flex"
        }`}
      >
        <ul className={`flex md:flex-row md:gap-[2vw] flex-col gap-4`}>
          <li>
            <a
              className={`${styleOptions}
              ${
                isSelected === "Home" &&
                "text-cyan-500 border-b border-solid border-cyan-500"
              }`}
              href="#"
              onClick={() => onView("Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions} 
              ${
                isSelected === "Skills" &&
                "text-cyan-500 border-b border-solid border-cyan-500"
              }`}
              href="#"
              onClick={() => onView("Skills")}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions} ${
                isSelected === "Experience" &&
                "text-cyan-500 border-b border-solid border-cyan-500"
              }`}
              href="#"
              onClick={() => onView("Experience")}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions} ${
                isSelected === "Portafolio" &&
                "text-cyan-500 border-b border-solid border-cyan-500"
              }`}
              href="#"
              onClick={() => onView("Portafolio")}
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions} ${
                isSelected === "Contact" &&
                "text-cyan-500 border-b border-solid border-cyan-500"
              }`}
              href="#"
              onClick={() => onView("Contact")}
            >
              Contacto
            </a>
          </li>
          <li className="py-1">
            <BsFillMoonStarsFill />
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6 md:h-5 md:py-4">
        <a
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:scale-110 hover:shadow-md"
          href={pdf}
          download={true}
        >
          Resume
        </a>
        <FiMenu
          className="cursor-pointer md:hidden hover:scale-125 hover:shadow-md"
          name="menu"
          onClick={onToggleMenu}
        />
      </div>
    </nav>
  );
};

export default MenuBar;
