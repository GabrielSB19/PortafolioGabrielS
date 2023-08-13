const ProjectsBar = ({ handleProjectFilter }) => {
  const styleOptions =
    "hover:text-cyan-500 hover:border-b border-solid border-cyan-500 text-gray-800 transition duration-500";

  const handleFilter = (e) => {
    handleProjectFilter(e);
  };
  return (
    <>
      <div className="w-[60%] m-auto">
        <ul className="flex flex-wrap justify-around pb-3 border-b border-gray-400">
          <li>
            <a
              className={styleOptions}
              href="#"
              onClick={() => handleFilter("Todos")}
            >
              Todos
            </a>
          </li>
          <li>
            <a
              className={styleOptions}
              href="#"
              onClick={() => handleFilter("Java")}
            >
              Java
            </a>
          </li>
          <li>
            <a
              className={styleOptions}
              href="#"
              onClick={() => handleFilter("React")}
            >
              React
            </a>
          </li>
          <li>
            <a
              className={styleOptions}
              href="#"
              onClick={() => handleFilter("Python")}
            >
              Python
            </a>
          </li>
          <li>
            <a
              className={styleOptions}
              href="#"
              onClick={() => handleFilter("Node")}
            >
              Node JS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectsBar;
