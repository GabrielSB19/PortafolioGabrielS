import { useState } from "react";

const ProjectsBar = ({ handleProjectFilter }) => {
  const [isSelected, setIsSelected] = useState("Todos");
  const styleOptions =
    "hover:text-cyan-500 hover:border-b border-solid border-cyan-500 text-gray-800 transition duration-500";

  const handleFilter = (e) => {
    handleProjectFilter(e);
    setIsSelected(e);
  };
  return (
    <>
      <div className="w-[60%] m-auto">
        <ul className="flex flex-wrap justify-around pb-3 border-b border-gray-400">
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
              onClick={() => handleFilter("React")}
            >
              React
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
                isSelected === "Node" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Node")}
            >
              Node JS
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "JavaScript" &&
                "text-teal-500 border-b border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("JavaScript")}
            >
              JavaScript
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "HTML" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("HTML")}
            >
              HTML
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "CSS" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("CSS")}
            >
              CSS
            </a>
          </li>
          <li>
            <a
              className={`${styleOptions}${
                isSelected === "Kotlin" &&
                "text-teal-500 border-b border-solid border-teal-500"
              }`}
              href="#"
              onClick={() => handleFilter("Kotlin")}
            >
              Kotlin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectsBar;
