import ProjectsBar from "./projectsBar";
import Projects from "./projects";
import { useState } from "react";

const portafolio = () => {
  const [projectsFilter, setProjectsFilter] = useState("Todos");

  const handleProjectFilter = (filter) => {
    setProjectsFilter(filter);
  };

  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-[2.4rem] py-2 text-teal-600 font-medium md:text-6xl">
          Portafolio
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">Mis proyectos</h3>
        <p className="text-md py-2 leading-8 text-gray-800 mx-auto">
          A lo largo de mi formación como desarrollador me ha interesado el uso
          de diversas tecnologias de desarrollo, por lo cual he desarrollado
          proyectos en diferentes lenguajes de programación y frameworks. A
          continuación podras ver algunos de los proyectos que he desarrollado.
        </p>
      </div>
      <ProjectsBar handleProjectFilter={handleProjectFilter} />
      <Projects filterName={projectsFilter} />
    </>
  );
};

export default portafolio;
