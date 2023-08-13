const infoContact = () => {
  return (
    <div className="md:w-[30%] p-3 text-[15px] w-[70%] md:text-left sm:w-[100%]">
      <h4 className="text-center text-xl font-medium mb-4">
        Información sobre mi
      </h4>
      <p className="text-gray-500">
        <span className="text-teal-500 leading-7 font-medium">Nombre: </span>
        Gabriel Suarez
      </p>
      <p className="text-gray-500">
        <span className="text-teal-500 leading-7 font-medium">Edad:</span> 20
        (19/09/2002)
      </p>
      <p className="text-gray-500">
        <span className="text-teal-500 leading-7 font-medium">Pais:</span>{" "}
        Colombia
      </p>
      <p className="text-gray-500">
        <span className="text-teal-500 leading-7 font-medium">Correo:</span>{" "}
        gasuarez2002@gmail.com
      </p>
      <p className="text-gray-500">
        <span className="text-teal-500 leading-7 font-medium">Telefono:</span>{" "}
        +57 322 622 7443
      </p>
    </div>
  );
};

export default infoContact;
