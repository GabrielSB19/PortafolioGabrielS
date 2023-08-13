import CardSkills from "./cardSkills";
import textSkills from "../data/textSkills";

const skills = () => {
  return (
    <section>
      <div className="text-center p-5">
        <h3 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Mis habilidades
        </h3>
        <h4 className="text-2xl py-2 md:text-3xl">Full-Stack</h4>
        <p className="text-md py-2 leading-8 text-gray-800 mx-auto">
          He decidido explorar múltiples facetas del mundo de la tecnología
          desde el inicio de mi interés en este campo. Esta decisión me ha
          permitido obtener una comprensión más amplia y profunda, además de
          desarrollar diversas habilidades en distintas áreas.
        </p>
      </div>
      <div className="text-center">
        <h4 className="text-3xl py-2 md:text-4xl text-teal-500">
          Habilidades tecnicas
        </h4>
      </div>
      <div className="flex justify-around flex-wrap gap-2">
        {textSkills.map((skill) => (
          <CardSkills
            key={skill.Title}
            image={skill.Img}
            name={skill.Title}
            text={skill.Des}
          />
        ))}
      </div>
    </section>
  );
};

export default skills;
