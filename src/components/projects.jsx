import CardProject from "./cardProject";
import textProject from "../data/textProject";

const Projects = ({ filterName }) => {
  return (
    <div className="flex flex-wrap gap-5 my-8 justify-center">
      {textProject.map((project) => {
        if (filterName === "Todos") {
          return <CardProject key={project.id} project={project} />;
        } else {
          if (project.section.includes(filterName)) {
            return <CardProject key={project.id} project={project} />;
          }
        }
      })}
    </div>
  );
};

export default Projects;
