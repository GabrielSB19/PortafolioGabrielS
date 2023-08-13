import CardExp from "./cardExp";
import TextExp from "../data/textExp";

const experience = () => {
  return (
    <section>
      <div className="text-center p-5">
        <h3 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Mi experiencia
        </h3>
        <h4 className="text-2xl py-2 md:text-3xl">Estudiante y Developer</h4>
        <p className="text-md py-2 leading-8 text-gray-800 mx-auto">
          Como estudiante de la Universidad ICESI, he adquirido experiencia
          laboral en diferentes campos, incluido el desarrollo de software.
          Estas experiencias me han permitido desarrollar habilidades valiosas y
          crecer tanto personal como profesionalmente. Estoy comprometido a
          seguir creciendo y contribuyendo al mundo de la tecnología con pasión
          y dedicación.
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-2 md:flex-row-reverse flex-col items-center">
        <div className="md:w-[45%] p-5 w-[100%]">
          <h4 className="font-medium text-xl text-center">Formacion</h4>
          {TextExp.textExpF.map((item, index) => (
            <CardExp
              key={index}
              year={item.year}
              place={item.place}
              name={item.name}
              des={item.des}
            />
          ))}
        </div>
        <div className="md:w-[45%] w-[100%] p-5">
          <h4 className="font-medium text-xl text-center">Experiencia</h4>
          {TextExp.textExpE.map((item, index) => (
            <CardExp
              key={index}
              year={item.year}
              place={item.place}
              name={item.name}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default experience;
