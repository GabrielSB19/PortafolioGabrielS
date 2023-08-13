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
        className="text-center shadow-lg p-10 rounded-xl my-10 md:w-[45%] hover:transform hover:translate-y-[-10px] transition-transform duration-300 ease-in-out cursor-pointer"
        onClick={handleOpenModal}
      >
        <img src={project.img} className="m-auto w-30 h-20" />
        <h3 className="text-lg font-medium pt-8 pb-2 text-teal-500">
          {project.title}
        </h3>
        <div className="py-1 text-sm h-[40%]">{project.des}</div>
        <div className="flex items-center gap-2 justify-center text-xs mb-10">
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
