import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent({ open, handleClose, project }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={project.img} className="m-auto w-50 h-40 mb-6" />
        <p className="text-center text-3xl text-teal-500">{project.title}</p>
        <p className="text-center my-2 text-sm mb-4 pl-10 pr-10">
          {project.deepDes}
        </p>
        <p className="text-center mb-4">
          <a
            href={project.link}
            target="_blank"
            className="text-teal-500 border-b border-teal-500"
          >
            Ir al Repositorio
          </a>
        </p>
        {project.view && (
          <p className="text-center mb-9">
            <a
              href={project.view}
              className="text-teal-500 border-b border-teal-500"
              target="_blank"
            >
              Ver Projecto desplegado
            </a>
          </p>
        )}
        <div className="flex items-center justify-center gap-2 text-sm ">
          {project.tag.map((item, index) => (
            <p className="bg-teal-400 text-white p-1 shadow-md" key={index}>
              {item}
            </p>
          ))}
        </div>
      </Box>
    </Modal>
  );
}
