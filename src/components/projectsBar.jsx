import { useState } from "react";

const ProjectsBar = ({ handleProjectFilter }) => {
  const [isSelected, setIsSelected] = useState("Todos");
  const styleOptions = "text-lg hover:text-cyan-500 transition duration-500";

  const handleFilter = (e) => {
    handleProjectFilter(e);
    setIsSelected(e);
  };
  return (
    <>
      <div className="md:w-[70%] md:m-auto">
        <ul className="flex flex-col md:flex-row md:justify-around pb-3 pt-3 gap-1 text-center md:w-[100%] w-[50%] m-auto">
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "Todos" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Todos")}
            >
              Todos
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "Java" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Java")}
            >
              Java
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "React" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Web")}
            >
              Desarrollo web
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "IA (Python)" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("IA (Python)")}
            >
              IA (Python)
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "Kotlin" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Mobile")}
            >
              Mobile
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectsBar;
