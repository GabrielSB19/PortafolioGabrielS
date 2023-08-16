import ModalProject from "./modalProject";
import { useState } from "react";

const cardProject = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="text-center shadow-lg p-10 pb-0 rounded-xl my-10 md:w-[45%] hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out cursor-pointer"
        onClick={handleOpenModal}
      >
        <div className="w-[80%] h-[40%] m-auto">
          <img src={project.img} className="object-cover w-full h-full" />
        </div>
        <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
          {project.title}
        </h3>
        <div className="py-1 text-sm mb-4">{project.des}</div>
        <div className="flex items-center gap-2 justify-center text-xs">
          {project.tag.map((item, index) => (
            <p className="bg-teal-400 text-white p-1 shadow-md" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <ModalProject
        open={modalOpen}
        handleClose={handleClose}
        project={project}
      />
    </>
  );
};

export default cardProject;
